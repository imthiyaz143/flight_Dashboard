import { Component, Input } from '@angular/core';
import { Flight } from '../../models/flight.model';
import { FlightOperationsService } from '../../services/flight-operations.service';

@Component({
  selector: 'app-flight-details',
  template: `
    <div class="flight-details" *ngIf="flight">
      <div class="panel-header">
        <div>
          <span class="callsign">{{ flight.flightNumber }}</span>
          <span class="registration">({{ flight.aircraft.registration }})</span>
        </div>
        <button (click)="onClose()" class="close-btn">✕</button>
      </div>

      <div class="panel-body">
        <div class="status-banner" [class]="'banner-' + flight.status.toLowerCase()">
          {{ flight.statusText }}
        </div>

        <div class="section">
          <div class="section-title">ROUTE HUBS</div>
          <div class="hubs-grid">
            <div class="hub-box">
              <span class="hub-label">ORIGIN</span>
              <span class="hub-iata">{{ flight.origin.iata }}</span>
              <span class="hub-name">{{ flight.origin.name }}</span>
              <span class="hub-gate" *ngIf="flight.gateDeparture">Gate {{ flight.gateDeparture }}</span>
            </div>
            <div class="hub-arrow">✈</div>
            <div class="hub-box">
              <span class="hub-label">DESTINATION</span>
              <span class="hub-iata">{{ flight.destination.iata }}</span>
              <span class="hub-name">{{ flight.destination.name }}</span>
              <span class="hub-gate" *ngIf="flight.gateArrival">Gate {{ flight.gateArrival }}</span>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">SCHEDULE & TIMES (UTC)</div>
          <div class="times-grid">
            <div class="time-item">
              <span class="time-label">STD</span>
              <span class="time-val">{{ flight.times.scheduledDepartureUtc }}</span>
            </div>
            <div class="time-item">
              <span class="time-label">ETD</span>
              <span class="time-val">{{ flight.times.estimatedDepartureUtc }}</span>
            </div>
            <div class="time-item">
              <span class="time-label">STA</span>
              <span class="time-val">{{ flight.times.scheduledArrivalUtc }}</span>
            </div>
            <div class="time-item">
              <span class="time-label">ETA</span>
              <span class="time-val">{{ flight.times.estimatedArrivalUtc }}</span>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">AVIONICS TELEMETRY</div>
          <div class="telemetry-grid">
            <div class="telemetry-card">
              <span class="tel-label">ALTITUDE</span>
              <span class="tel-val">{{ flight.telemetry.altitudeFt.toLocaleString() }} FT</span>
            </div>
            <div class="telemetry-card">
              <span class="tel-label">GROUND SPEED</span>
              <span class="tel-val">{{ flight.telemetry.groundSpeedKts }} KTS</span>
            </div>
            <div class="telemetry-card">
              <span class="tel-label">HEADING</span>
              <span class="tel-val">{{ flight.telemetry.headingDeg }}°</span>
            </div>
            <div class="telemetry-card">
              <span class="tel-label">SQUAWK</span>
              <span class="tel-val">{{ flight.telemetry.squawk }}</span>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">AIRCRAFT</div>
          <div class="aircraft-box">
            <span class="airline">{{ flight.aircraft.airline }}</span>
            <span class="model">{{ flight.aircraft.model }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .flight-details {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: #090f1f;
      color: #f8fafc;
    }
    .panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      border-bottom: 1px solid #1e293b;
      background: #0b1329;
    }
    .callsign {
      font-size: 18px;
      font-weight: 700;
      color: #38bdf8;
      margin-right: 8px;
    }
    .registration {
      font-size: 12px;
      color: #94a3b8;
      font-family: monospace;
    }
    .close-btn {
      background: none;
      border: none;
      color: #94a3b8;
      font-size: 16px;
      cursor: pointer;
    }
    .panel-body {
      padding: 16px 20px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .status-banner {
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
      text-align: center;
    }
    .banner-active { background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); }
    .banner-delayed { background: rgba(245, 158, 11, 0.15); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3); }
    .banner-arrived { background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
    .banner-scheduled { background: rgba(148, 163, 184, 0.15); color: #94a3b8; border: 1px solid rgba(148, 163, 184, 0.3); }
    .section-title {
      font-size: 10px;
      font-weight: 700;
      color: #64748b;
      letter-spacing: 0.05em;
      margin-bottom: 8px;
    }
    .hubs-grid {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #020617;
      border: 1px solid #1e293b;
      border-radius: 8px;
      padding: 12px;
    }
    .hub-box {
      display: flex;
      flex-direction: column;
    }
    .hub-label { font-size: 9px; color: #64748b; font-weight: 700; }
    .hub-iata { font-size: 20px; font-weight: 800; color: #ffffff; }
    .hub-name { font-size: 11px; color: #94a3b8; }
    .hub-gate { font-size: 10px; color: #38bdf8; margin-top: 2px; }
    .hub-arrow { font-size: 18px; color: #38bdf8; }
    .times-grid, .telemetry-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }
    .time-item, .telemetry-card {
      background: #020617;
      border: 1px solid #1e293b;
      padding: 8px 12px;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
    }
    .time-label, .tel-label { font-size: 9px; color: #64748b; font-weight: 600; }
    .time-val, .tel-val { font-size: 13px; font-family: monospace; font-weight: 700; color: #f8fafc; }
    .aircraft-box {
      background: #020617;
      border: 1px solid #1e293b;
      padding: 10px 12px;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
    }
    .airline { font-size: 13px; font-weight: 700; color: #ffffff; }
    .model { font-size: 11px; color: #94a3b8; }
  `]
})
export class FlightDetailsComponent {
  @Input() flight!: Flight;

  constructor(private flightService: FlightOperationsService) {}

  onClose(): void {
    this.flightService.clearSelection();
  }
}
