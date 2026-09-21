# Flight Tracking & Operations Dashboard

A responsive, high-performance Aviation Operations Dashboard built with **Angular (16+)**, **Leaflet Maps**, **TypeScript**, **RxJS**, and **Reactive Forms**, configured for **Angular CLI: 22.1.8**.

---

## 🛠️ Environment & Version Specifications

- **Angular CLI**: `22.1.8`
- **Node.js**: `v18.x` or `v20.x` LTS
- **Package Manager**: `npm` (v9+) or `yarn` / `pnpm`
- **TypeScript**: `~5.1.6` (ES2022 target)
- **Leaflet**: `^1.9.4`
- **RxJS**: `~7.8.1`

---

## 🚀 Quick Start with Angular CLI 22.1.8

### 1. Check your Angular CLI version
```bash
ng version
# Verify Angular CLI: 22.1.8
```

If you need to install or update to Angular CLI 22.1.8:
```bash
npm install -g @angular/cli@22.1.8
```

### 2. Clone repository & install dependencies
```bash
git clone https://github.com/<your-username>/flight-tracking-dashboard.git
cd flight-tracking-dashboard
npm install
```

### 3. Launch Development Server
```bash
ng serve --port 4200 --open
```
Navigate to `http://localhost:4200/`. The dashboard will automatically reload if you change any source files.

### 4. Build for Production
```bash
ng build --configuration production
```
Production build artifacts will be stored in the `dist/` directory with ahead-of-time (AOT) compilation and tree-shaking optimizations.

---

## 📋 Evaluation Requirements Fulfilled

| Requirement | Implementation Details |
|---|---|
| **1. Interactive Flight Map (Leaflet)** | Custom SVG airplane markers with dynamically calculated CSS `transform: rotate(deg)` matching the true heading. Interactive popups with Flight Number, Callsign, Origin, Destination, and Flight Level. |
| **2. Geodesic Route Visualization** | Selecting any flight renders great-circle polyline trajectory, origin and destination airport pulsing pins, and smoothly animates camera centering (`map.flyTo`). |
| **3. Operations KPI Metrics** | Real-time fleet overview: Total Flights, Active Airborne, Delayed, Arrived, and On-Time %. Click-to-filter reactivity. |
| **4. Flight Details Inspection Panel** | Slide-over drawer with Flight Number, Callsign, Aircraft Type, Hub terminals & gates, STD/ETD, STA/ETA, Altitude, Speed, Compass Heading, and Squawk transponder codes. |
| **5. Search & Reactive Multi-Filters** | Debounced search (`debounceTime(150)`, `distinctUntilChanged`), status pills, origin & destination airport selectors powered by Reactive Forms and RxJS `combineLatest`. |
| **6. Bonus Capabilities** | Live flight playback movement, variable speed simulation, multi-tile radar styles, airport hub pins, and precipitation weather radar overlays. |

---

## 🏗️ Architecture & Component Hierarchy

```
src/app/
├── models/
│   └── flight.model.ts               # Interfaces for Flight, Airport, Telemetry, KPIs
├── data/
│   └── mock-flights.ts               # Realistic dataset of international commercial flights
├── services/
│   └── flight-operations.service.ts  # Unidirectional RxJS state management & reactive streams
├── components/
│   ├── flight-map/                   # Leaflet map container & marker/route layer groups
│   ├── flight-filters/               # Reactive Forms search & multi-dropdown toolbar
│   ├── flight-list/                  # Scrollable fleet queue with status pills & telemetry
│   ├── flight-details/               # Slide-over flight inspection avionics panel
│   └── kpi-metrics/                  # Operations KPI metric counters with click-to-filter
├── app.component.ts                  # Root layout orchestration
├── app.component.html                # Responsive layout template
├── app.component.scss                # High-contrast tactical aviation dark radar theme
└── app.module.ts                     # Angular NgModule configuration
```

---

## 📬 Evaluation Submission Details

- **Recipient**: `thambi.karanam@ramphaltech.com`
- **Mandatory Subject Line**: `Flight Tracking & Operations Dashboard`
- **Included Assets**: GitHub repository link, Live deployment preview, Design explanation document.
