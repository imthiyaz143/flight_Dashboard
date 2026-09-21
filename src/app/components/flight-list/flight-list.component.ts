import { Component } from '@angular/core';
import { FlightOperationsService } from '../../services/flight-operations.service';
import { Flight } from '../../models/flight.model';

@Component({
  selector: 'app-flight-list',
  template: `
    <div class="flight-list">
      <div class="list-header">
        <span class="title">Active Queue</span>
        <span class="count" *ngIf="flightService.filteredFlights$ | async as list">
          {{ list.length }} flights
        </span>
      </div>

      <div class="list-body" *ngIf="flightService.filteredFlights$ | async as flights">
        <div 
          *ngFor="let flight of flights"
          (click)="onSelect(flight)"
          [class.selected]="(flightService.selectedFlight$ | async)?.id === flight.id"
          class="flight-card"
        >
          <div class="card-row">
            <span class="callsign">{{ flight.flightNumber }}</span>
            <span [class]="'badge badge-' + flight.status.toLowerCase()">
              {{ flight.status }}
            </span>
          </div>

          <div class="card-route">
            <span class="iata">{{ flight.origin.iata }}</span>
            <span class="arrow">→</span>
            <span class="iata">{{ flight.destination.iata }}</span>
            <span class="airline-text">{{ flight.aircraft.airline }}</span>
          </div>

          <div class="card-telemetry">
            <span>FL{{ flight.telemetry.altitudeFt / 100 }}</span>
            <span>{{ flight.telemetry.groundSpeedKts }} kts</span>
            <span>Prog {{ flight.telemetry.progressPercent }}%</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .flight-list {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .list-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      background: #0b1329;
      border-bottom: 1px solid #1e293b;
      font-size: 13px;
      font-weight: 600;
    }
    .count {
      font-size: 11px;
      color: #38bdf8;
      background: rgba(56, 189, 248, 0.1);
      padding: 2px 8px;
      border-radius: 4px;
    }
    .list-body {
      flex: 1;
      overflow-y: auto;
      padding: 8px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .flight-card {
      padding: 10px 12px;
      background: #020617;
      border: 1px solid #1e293b;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .flight-card:hover {
      border-color: #38bdf8;
      background: #0b1329;
    }
    .flight-card.selected {
      border-color: #38bdf8;
      background: rgba(56, 189, 248, 0.08);
    }
    .card-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
    }
    .callsign {
      font-weight: 700;
      color: #f8fafc;
      font-size: 14px;
    }
    .badge {
      font-size: 9px;
      font-weight: 700;
      padding: 2px 6px;
      border-radius: 4px;
      text-transform: uppercase;
    }
    .badge-active { background: rgba(56, 189, 248, 0.2); color: #38bdf8; }
    .badge-delayed { background: rgba(245, 158, 11, 0.2); color: #f59e0b; }
    .badge-arrived { background: rgba(16, 185, 129, 0.2); color: #34d399; }
    .badge-scheduled { background: rgba(148, 163, 184, 0.2); color: #94a3b8; }
    .card-route {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: #cbd5e1;
      margin-bottom: 6px;
    }
    .iata { font-weight: 600; color: #ffffff; }
    .airline-text { margin-left: auto; font-size: 11px; color: #64748b; }
    .card-telemetry {
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      font-family: monospace;
      color: #94a3b8;
    }
  `]
})
export class FlightListComponent {
  constructor(public flightService: FlightOperationsService) {}

  onSelect(flight: Flight): void {
    this.flightService.selectFlight(flight);
  }
}
