# Flight Tracking & Operations Dashboard

A responsive aviation operations dashboard built with Angular, RxJS, and Leaflet. The app presents live flight status, route visualization, and operational KPIs in a tactical command-center layout.

## Tech stack

- Angular 16
- TypeScript
- RxJS
- Leaflet map library
- SCSS
- Node.js 18/20 LTS

## Prerequisites

Before running the project, make sure you have:

- Node.js 18 or 20
- npm 9+
- Angular CLI 16.x

## Setup instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Start the app locally

```bash
npm start
```

Or run directly:

```bash
ng serve
```

Then open:

```text
http://localhost:4200
```

### 3. Build for production

```bash
ng build
```

Production output is generated in the `dist/` folder.

## Project structure

```text
src/
  app/
    components/
      flight-details/
      flight-filters/
      flight-list/
      flight-map/
      kpi-metrics/
    data/
    models/
    services/
    app.component.html
    app.component.scss
    app.component.ts
    app.module.ts
  assets/
  index.html
```

## Features

- Flight list with status filtering
- KPI metric cards for operational overview
- Reactive search and filter logic
- Interactive map with routes and markers
- Flight detail panel for selected aircraft
- Responsive dashboard layout for desktop and smaller screens

## Brief design explanation

This dashboard follows a command-and-control visual model inspired by aircraft operations centers. The interface uses a dark, high-contrast palette with cyan-blue highlights to suggest live radar and telemetry monitoring. The goal is to present dense operational information without overwhelming the user.

The layout is intentionally split into three zones: a left-side flight queue, a central map canvas, and a right-side detail panel. This creates a clear cognitive flow from overview to context to selected flight detail. By placing the map at the center, the user always keeps situational awareness while using the left list for quick triage and the right panel for drill-down analysis.

Visual hierarchy is driven by spacing, color, and typography. KPI cards use strong numerical emphasis, route and flight elements are highlighted with signal-like accent colors, and status labels communicate state quickly. Micro-interactions, such as hover states and pulse effects, help the interface feel active and responsive without becoming noisy.

The design also prioritizes readability and operational clarity. Text blocks are compact, labels are consistent, and panels are separated by subtle borders and shadowing to preserve depth. The result is a dashboard that feels technical and mission-focused while remaining usable on different screen sizes.

For a longer design narrative, see [DESIGN.md](DESIGN.md).
