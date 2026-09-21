import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Flight, FlightFilterCriteria, KpiMetrics } from '../models/flight.model';
import { MOCK_FLIGHTS } from '../data/mock-flights';

@Injectable({
  providedIn: 'root'
})
export class FlightOperationsService {
  private flightsSubject = new BehaviorSubject<Flight[]>(MOCK_FLIGHTS);
  public flights$ = this.flightsSubject.asObservable();

  private selectedFlightSubject = new BehaviorSubject<Flight | null>(MOCK_FLIGHTS[0]);
  public selectedFlight$ = this.selectedFlightSubject.asObservable();

  private filtersSubject = new BehaviorSubject<FlightFilterCriteria>({
    searchQuery: '',
    status: 'ALL',
    originIata: 'ALL',
    destinationIata: 'ALL'
  });
  public filters$ = this.filtersSubject.asObservable();

  // Reactive Pipeline using RxJS combineLatest for pure non-mutating filtering
  public filteredFlights$: Observable<Flight[]> = combineLatest([
    this.flights$,
    this.filters$
  ]).pipe(
    map(([flights, filters]) => {
      return flights.filter(flight => {
        const q = filters.searchQuery.trim().toLowerCase();
        if (q) {
          const matchFlightNum = flight.flightNumber.toLowerCase().includes(q);
          const matchCallsign = flight.callsign.toLowerCase().includes(q);
          const matchAirline = flight.aircraft.airline.toLowerCase().includes(q);
          if (!matchFlightNum && !matchCallsign && !matchAirline) return false;
        }

        if (filters.status !== 'ALL' && flight.status !== filters.status) {
          return false;
        }

        if (filters.originIata !== 'ALL' && flight.origin.iata !== filters.originIata) {
          return false;
        }

        if (filters.destinationIata !== 'ALL' && flight.destination.iata !== filters.destinationIata) {
          return false;
        }

        return true;
      });
    })
  );

  // Operations KPI Metrics Stream
  public kpiMetrics$: Observable<KpiMetrics> = this.flights$.pipe(
    map(flights => {
      const active = flights.filter(f => f.status === 'ACTIVE').length;
      const delayed = flights.filter(f => f.status === 'DELAYED');
      const arrived = flights.filter(f => f.status === 'ARRIVED').length;
      const scheduled = flights.filter(f => f.status === 'SCHEDULED').length;
      const totalDelay = delayed.reduce((acc, f) => acc + f.delayMinutes, 0);

      return {
        totalFlights: flights.length,
        activeFlights: active,
        delayedFlights: delayed.length,
        arrivedFlights: arrived,
        scheduledFlights: scheduled,
        onTimePercentage: Math.round(((flights.length - delayed.length) / flights.length) * 100),
        avgDelayMinutes: delayed.length > 0 ? Math.round(totalDelay / delayed.length) : 0
      };
    })
  );

  public selectFlight(flight: Flight): void {
    this.selectedFlightSubject.next(flight);
  }

  public clearSelection(): void {
    this.selectedFlightSubject.next(null);
  }

  public updateFilters(newFilters: Partial<FlightFilterCriteria>): void {
    this.filtersSubject.next({
      ...this.filtersSubject.value,
      ...newFilters
    });
  }

  public resetFilters(): void {
    this.filtersSubject.next({
      searchQuery: '',
      status: 'ALL',
      originIata: 'ALL',
      destinationIata: 'ALL'
    });
  }
}
