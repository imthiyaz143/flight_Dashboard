# Flight Tracking & Operations Dashboard
## Angular CLI 22.1.8 Migration & Compatibility Guide

This project repository includes complete, ready-to-run configurations for **Angular CLI: 22.1.8** with **Node.js 18.x/20.x**.

---

### 1. Environment Verification

Check your active Angular CLI version:
```bash
ng version
```
Target output:
```text
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/

Angular CLI: 22.1.8
Node: 20.x or 18.x
Package Manager: npm / pnpm / yarn
OS: linux / darwin / win32
```

To install or pin Angular CLI 22.1.8 globally:
```bash
npm install -g @angular/cli@22.1.8
```

---

### 2. Scaffold a Fresh Project with Angular CLI 22.1.8

If generating from scratch using the CLI:
```bash
ng new flight-tracking-operations-dashboard \
  --style=scss \
  --routing=false \
  --strict=true \
  --standalone=false \
  --skip-git=false
```

---

### 3. Add Leaflet & RxJS Dependencies

```bash
npm install leaflet@^1.9.4 rxjs@~7.8.1
npm install --save-dev @types/leaflet@^1.9.4
```

Add Leaflet stylesheet into `angular.json` styles array or `src/styles.scss`:
```scss
/* src/styles.scss */
@import 'leaflet/dist/leaflet.css';
```

---

### 4. Running the Dashboard

```bash
# Start local development server
ng serve --port 4200 --open

# Build optimized production bundle
ng build --configuration production
```
Your compiled production bundle will output cleanly to `dist/flight-tracking-operations-dashboard`.
