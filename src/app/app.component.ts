import { Component } from '@angular/core';
import { FlightOperationsService } from './services/flight-operations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Flight Tracking & Operations Dashboard';
  selectedFlight$ = this.flightService.selectedFlight$;

  constructor(public flightService: FlightOperationsService) {}
}
