export type FlightStatus = 'ACTIVE' | 'DELAYED' | 'ARRIVED' | 'SCHEDULED';

export interface Airport {
  iata: string;
  name: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  timezone: string;
}

export interface AircraftTelemetry {
  lat: number;
  lng: number;
  altitudeFt: number;
  groundSpeedKts: number;
  headingDeg: number;
  verticalSpeedFpm: number;
  squawk: string;
  progressPercent: number;
}

export interface AircraftInfo {
  model: string;
  registration: string;
  airline: string;
  airlineCode: string;
}

export interface FlightTimes {
  scheduledDepartureUtc: string;
  estimatedDepartureUtc: string;
  actualDepartureUtc?: string;
  scheduledArrivalUtc: string;
  estimatedArrivalUtc: string;
  actualArrivalUtc?: string;
}

export interface Flight {
  id: string;
  flightNumber: string;
  callsign: string;
  status: FlightStatus;
  statusText: string;
  origin: Airport;
  destination: Airport;
  aircraft: AircraftInfo;
  times: FlightTimes;
  telemetry: AircraftTelemetry;
  routeWaypoints: [number, number][];
  gateDeparture?: string;
  terminalDeparture?: string;
  gateArrival?: string;
  terminalArrival?: string;
  delayMinutes: number;
}

export interface FlightFilterCriteria {
  searchQuery: string;
  status: FlightStatus | 'ALL';
  originIata: string;
  destinationIata: string;
}

export interface KpiMetrics {
  totalFlights: number;
  activeFlights: number;
  delayedFlights: number;
  arrivedFlights: number;
  scheduledFlights: number;
  onTimePercentage: number;
  avgDelayMinutes?: number;
}
