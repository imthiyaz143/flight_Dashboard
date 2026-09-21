import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FlightOperationsService } from '../../services/flight-operations.service';

@Component({
  selector: 'app-flight-filters',
  template: `
    <div class="filters-toolbar" [formGroup]="filterForm">
      <div class="search-box">
        <input 
          type="text" 
          formControlName="searchQuery" 
          placeholder="Search flight number, callsign, or airline..."
          class="filter-input"
        />
      </div>

      <div class="filter-controls">
        <select formControlName="status" class="filter-select">
          <option value="ALL">All Statuses</option>
          <option value="ACTIVE">En Route (Active)</option>
          <option value="DELAYED">Delayed</option>
          <option value="ARRIVED">Arrived</option>
          <option value="SCHEDULED">Scheduled</option>
        </select>

        <select formControlName="originIata" class="filter-select">
          <option value="ALL">All Origins</option>
          <option value="JFK">JFK (New York)</option>
          <option value="LHR">LHR (London)</option>
          <option value="DXB">DXB (Dubai)</option>
          <option value="FRA">FRA (Frankfurt)</option>
          <option value="CDG">CDG (Paris)</option>
          <option value="NRT">NRT (Tokyo)</option>
          <option value="SIN">SIN (Singapore)</option>
        </select>

        <select formControlName="destinationIata" class="filter-select">
          <option value="ALL">All Destinations</option>
          <option value="JFK">JFK (New York)</option>
          <option value="LHR">LHR (London)</option>
          <option value="DXB">DXB (Dubai)</option>
          <option value="SIN">SIN (Singapore)</option>
          <option value="ORD">ORD (Chicago)</option>
        </select>

        <button type="button" (click)="onReset()" class="reset-btn">Reset</button>
      </div>
    </div>
  `,
  styles: [`
    .filters-toolbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 10px 20px;
      background: #0f172a;
      border-bottom: 1px solid #1e293b;
    }
    .search-box {
      flex: 1;
      min-width: 260px;
    }
    .filter-input {
      width: 100%;
      background: #020617;
      border: 1px solid #334155;
      color: #f8fafc;
      padding: 7px 12px;
      border-radius: 6px;
      font-size: 13px;
      outline: none;
    }
    .filter-input:focus {
      border-color: #38bdf8;
    }
    .filter-controls {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .filter-select {
      background: #020617;
      border: 1px solid #334155;
      color: #e2e8f0;
      padding: 7px 10px;
      border-radius: 6px;
      font-size: 12px;
      outline: none;
    }
    .reset-btn {
      background: #1e293b;
      border: 1px solid #475569;
      color: #94a3b8;
      padding: 7px 14px;
      border-radius: 6px;
      font-size: 12px;
      cursor: pointer;
    }
    .reset-btn:hover {
      background: #334155;
      color: #f8fafc;
    }
  `]
})
export class FlightFiltersComponent implements OnInit, OnDestroy {
  filterForm!: FormGroup;
  private sub = new Subscription();

  constructor(
    private fb: FormBuilder,
    private flightService: FlightOperationsService
  ) {}

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      searchQuery: [''],
      status: ['ALL'],
      originIata: ['ALL'],
      destinationIata: ['ALL']
    });

    this.sub.add(
      this.filterForm.valueChanges
        .pipe(debounceTime(150), distinctUntilChanged())
        .subscribe(values => {
          this.flightService.updateFilters(values);
        })
    );
  }

  onReset(): void {
    this.filterForm.reset({
      searchQuery: '',
      status: 'ALL',
      originIata: 'ALL',
      destinationIata: 'ALL'
    });
    this.flightService.resetFilters();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
