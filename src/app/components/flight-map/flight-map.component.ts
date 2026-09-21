import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as L from 'leaflet';
import { FlightOperationsService } from '../../services/flight-operations.service';
import { Flight } from '../../models/flight.model';

@Component({
  selector: 'app-flight-map',
  template: `<div #mapContainer class="leaflet-map-element"></div>`,
  styles: [`
    .leaflet-map-element {
      width: 100%;
      height: 100%;
      background: #020617;
    }
    ::ng-deep .custom-plane-icon {
      background: none;
      border: none;
    }
    ::ng-deep .plane-svg-wrapper {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.6));
      cursor: pointer;
    }
  `]
})
export class FlightMapComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;

  private map!: L.Map;
  private markersLayer = L.layerGroup();
  private routeLayer = L.layerGroup();
  private airportLayer = L.layerGroup();
  private subs = new Subscription();

  constructor(public flightService: FlightOperationsService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initMap();
    this.subscribeToFlightData();
  }

  private initMap(): void {
    this.map = L.map(this.mapContainer.nativeElement, {
      center: [25, 10],
      zoom: 3,
      minZoom: 2,
      maxZoom: 18,
      worldCopyJump: true
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; CARTO &copy; OpenStreetMap contributors'
    }).addTo(this.map);

    this.markersLayer.addTo(this.map);
    this.routeLayer.addTo(this.map);
    this.airportLayer.addTo(this.map);
  }

  private subscribeToFlightData(): void {
    this.subs.add(
      this.flightService.filteredFlights$.subscribe(flights => {
        this.renderFlightMarkers(flights);
      })
    );

    this.subs.add(
      this.flightService.selectedFlight$.subscribe(flight => {
        this.renderSelectedRoute(flight);
      })
    );
  }

  private renderFlightMarkers(flights: Flight[]): void {
    this.markersLayer.clearLayers();
    flights.forEach(flight => {
      const isDelayed = flight.status === 'DELAYED';
      const color = isDelayed ? '#f59e0b' : '#38bdf8';

      const icon = L.divIcon({
        className: 'custom-plane-icon',
        html: `
          <div class="plane-svg-wrapper" style="transform: rotate(${flight.telemetry.headingDeg}deg);">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="${color}" stroke="#0f172a" stroke-width="1.5">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      const marker = L.marker([flight.telemetry.lat, flight.telemetry.lng], { icon })
        .on('click', () => this.flightService.selectFlight(flight));

      marker.bindPopup(`
        <div style="font-family: sans-serif; font-size: 12px; color: #0f172a; padding: 4px;">
          <strong style="color: #0284c7;">${flight.flightNumber}</strong> (${flight.callsign})<br/>
          <span>${flight.origin.iata} → ${flight.destination.iata}</span><br/>
          <span>FL${Math.round(flight.telemetry.altitudeFt / 100)} | ${flight.telemetry.groundSpeedKts} kts</span>
        </div>
      `);

      this.markersLayer.addLayer(marker);
    });
  }

  private renderSelectedRoute(flight: Flight | null): void {
    this.routeLayer.clearLayers();
    this.airportLayer.clearLayers();
    if (!flight) return;

    // Draw geodesic route polyline
    const polyline = L.polyline(flight.routeWaypoints, {
      color: '#38bdf8',
      weight: 3,
      opacity: 0.85,
      dashArray: '6, 8'
    });
    this.routeLayer.addLayer(polyline);

    // Draw Origin & Destination circles
    const originPin = L.circleMarker([flight.origin.lat, flight.origin.lng], {
      radius: 6,
      color: '#38bdf8',
      fillColor: '#0284c7',
      fillOpacity: 1,
      weight: 2
    }).bindTooltip(`${flight.origin.iata} (Origin)`, { permanent: false, direction: 'top' });

    const destPin = L.circleMarker([flight.destination.lat, flight.destination.lng], {
      radius: 6,
      color: '#10b981',
      fillColor: '#059669',
      fillOpacity: 1,
      weight: 2
    }).bindTooltip(`${flight.destination.iata} (Dest)`, { permanent: false, direction: 'top' });

    this.airportLayer.addLayer(originPin);
    this.airportLayer.addLayer(destPin);

    // Pan map to aircraft
    this.map.flyTo([flight.telemetry.lat, flight.telemetry.lng], 5, { duration: 1.2 });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    if (this.map) {
      this.map.remove();
    }
  }
}
