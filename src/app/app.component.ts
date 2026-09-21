import { Component } from '@angular/core';
import { FlightOperationsService } from './services/flight-operations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Flight Tracking & Operations Dashboard';

  constructor(public flightService: FlightOperationsService) {}
}
