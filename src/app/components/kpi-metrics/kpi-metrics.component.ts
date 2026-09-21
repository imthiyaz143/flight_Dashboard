import { Component } from '@angular/core';
import { FlightOperationsService } from '../../services/flight-operations.service';

@Component({
  selector: 'app-kpi-metrics',
  template: `
    <div class="kpi-toolbar" *ngIf="flightService.kpiMetrics$ | async as kpi">
      <div class="kpi-card" (click)="filterByStatus('ALL')">
        <span class="label">TOTAL FLEET</span>
        <span class="value">{{ kpi.totalFlights }}</span>
      </div>

      <div class="kpi-card text-active" (click)="filterByStatus('ACTIVE')">
        <span class="label">ACTIVE AIRBORNE</span>
        <span class="value">{{ kpi.activeFlights }}</span>
      </div>

      <div class="kpi-card text-delayed" (click)="filterByStatus('DELAYED')">
        <span class="label">DELAYED FLIGHTS</span>
        <span class="value">{{ kpi.delayedFlights }}</span>
      </div>

      <div class="kpi-card text-arrived" (click)="filterByStatus('ARRIVED')">
        <span class="label">ARRIVED / DOCKED</span>
        <span class="value">{{ kpi.arrivedFlights }}</span>
      </div>

      <div class="kpi-card text-ontime">
        <span class="label">ON-TIME PERFORMANCE</span>
        <span class="value">{{ kpi.onTimePercentage }}%</span>
      </div>
    </div>
  `,
  styles: [`
    .kpi-toolbar {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 8px;
      padding: 10px 20px;
      background: #090f1f;
      border-bottom: 1px solid #1e293b;
    }
    .kpi-card {
      background: #020617;
      border: 1px solid #1e293b;
      padding: 8px 14px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.15s ease;
      display: flex;
      flex-direction: column;
    }
    .kpi-card:hover {
      border-color: #38bdf8;
      background: #0f172a;
    }
    .label {
      font-size: 9px;
      font-weight: 700;
      color: #64748b;
      letter-spacing: 0.05em;
    }
    .value {
      font-size: 20px;
      font-family: monospace;
      font-weight: 800;
      color: #f8fafc;
      margin-top: 2px;
    }
    .text-active .value { color: #38bdf8; }
    .text-delayed .value { color: #f59e0b; }
    .text-arrived .value { color: #34d399; }
    .text-ontime .value { color: #10b981; }
  `]
})
export class KpiMetricsComponent {
  constructor(public flightService: FlightOperationsService) {}

  filterByStatus(status: any): void {
    this.flightService.updateFilters({ status });
  }
}
