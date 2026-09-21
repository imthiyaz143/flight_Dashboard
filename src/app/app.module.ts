import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightMapComponent } from './components/flight-map/flight-map.component';
import { FlightFiltersComponent } from './components/flight-filters/flight-filters.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { KpiMetricsComponent } from './components/kpi-metrics/kpi-metrics.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightMapComponent,
    FlightFiltersComponent,
    FlightListComponent,
    FlightDetailsComponent,
    KpiMetricsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
