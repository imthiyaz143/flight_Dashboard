import { Flight } from '../models/flight.model';

export const MOCK_FLIGHTS: Flight[] = [
  {
    id: 'fl-ba178',
    flightNumber: 'BA178',
    callsign: 'BAW178',
    status: 'ACTIVE',
    statusText: 'En Route / On Time',
    origin: {
      iata: 'JFK',
      name: 'John F. Kennedy Intl',
      city: 'New York',
      country: 'USA',
      lat: 40.6413,
      lng: -73.7781,
      timezone: 'America/New_York'
    },
    destination: {
      iata: 'LHR',
      name: 'London Heathrow',
      city: 'London',
      country: 'United Kingdom',
      lat: 51.47,
      lng: -0.4543,
      timezone: 'Europe/London'
    },
    aircraft: {
      model: 'Boeing 777-300ER',
      registration: 'G-STBA',
      airline: 'British Airways',
      airlineCode: 'BA'
    },
    times: {
      scheduledDepartureUtc: '08:15 UTC',
      estimatedDepartureUtc: '08:15 UTC',
      scheduledArrivalUtc: '15:45 UTC',
      estimatedArrivalUtc: '15:40 UTC'
    },
    telemetry: {
      lat: 53.4,
      lng: -30.5,
      altitudeFt: 37000,
      groundSpeedKts: 490,
      headingDeg: 78,
      verticalSpeedFpm: 0,
      squawk: '4217',
      progressPercent: 58
    },
    routeWaypoints: [
      [40.6413, -73.7781],
      [44.2, -60.1],
      [48.6, -45.0],
      [53.4, -30.5],
      [54.8, -15.0],
      [51.47, -0.4543]
    ],
    gateDeparture: 'T7 / 04',
    gateArrival: 'T5 / A10',
    delayMinutes: 0
  },
  {
    id: 'fl-ek201',
    flightNumber: 'EK201',
    callsign: 'UAE201',
    status: 'ACTIVE',
    statusText: 'Cruising FL390',
    origin: {
      iata: 'DXB',
      name: 'Dubai International',
      city: 'Dubai',
      country: 'United Arab Emirates',
      lat: 25.2532,
      lng: 55.3657,
      timezone: 'Asia/Dubai'
    },
    destination: {
      iata: 'JFK',
      name: 'John F. Kennedy Intl',
      city: 'New York',
      country: 'USA',
      lat: 40.6413,
      lng: -73.7781,
      timezone: 'America/New_York'
    },
    aircraft: {
      model: 'Airbus A380-800',
      registration: 'A6-EVC',
      airline: 'Emirates',
      airlineCode: 'EK'
    },
    times: {
      scheduledDepartureUtc: '04:30 UTC',
      estimatedDepartureUtc: '04:30 UTC',
      scheduledArrivalUtc: '18:50 UTC',
      estimatedArrivalUtc: '18:42 UTC'
    },
    telemetry: {
      lat: 61.2,
      lng: -18.4,
      altitudeFt: 39000,
      groundSpeedKts: 512,
      headingDeg: 285,
      verticalSpeedFpm: 0,
      squawk: '7104',
      progressPercent: 64
    },
    routeWaypoints: [
      [25.2532, 55.3657],
      [36.1, 44.5],
      [48.2, 35.1],
      [58.4, 10.2],
      [61.2, -18.4],
      [55.1, -50.2],
      [40.6413, -73.7781]
    ],
    gateDeparture: 'T3 / B14',
    gateArrival: 'T4 / A4',
    delayMinutes: 0
  },
  {
    id: 'fl-af022',
    flightNumber: 'AF022',
    callsign: 'AFR022',
    status: 'DELAYED',
    statusText: 'Delayed +45m (Airspace Congestion)',
    origin: {
      iata: 'CDG',
      name: 'Paris Charles de Gaulle',
      city: 'Paris',
      country: 'France',
      lat: 49.0097,
      lng: 2.5479,
      timezone: 'Europe/Paris'
    },
    destination: {
      iata: 'JFK',
      name: 'John F. Kennedy Intl',
      city: 'New York',
      country: 'USA',
      lat: 40.6413,
      lng: -73.7781,
      timezone: 'America/New_York'
    },
    aircraft: {
      model: 'Airbus A350-900',
      registration: 'F-HTYB',
      airline: 'Air France',
      airlineCode: 'AF'
    },
    times: {
      scheduledDepartureUtc: '10:00 UTC',
      estimatedDepartureUtc: '10:45 UTC',
      scheduledArrivalUtc: '18:15 UTC',
      estimatedArrivalUtc: '19:00 UTC'
    },
    telemetry: {
      lat: 51.5,
      lng: -25.8,
      altitudeFt: 38000,
      groundSpeedKts: 475,
      headingDeg: 260,
      verticalSpeedFpm: 0,
      squawk: '2351',
      progressPercent: 42
    },
    routeWaypoints: [
      [49.0097, 2.5479],
      [51.5, -25.8],
      [40.6413, -73.7781]
    ],
    gateDeparture: '2E / K32',
    gateArrival: 'T1 / 06',
    delayMinutes: 45
  },
  {
    id: 'fl-lh400',
    flightNumber: 'LH400',
    callsign: 'DLH400',
    status: 'ACTIVE',
    statusText: 'Cruising FL350',
    origin: {
      iata: 'FRA',
      name: 'Frankfurt Airport',
      city: 'Frankfurt',
      country: 'Germany',
      lat: 50.0379,
      lng: 8.5622,
      timezone: 'Europe/Berlin'
    },
    destination: {
      iata: 'JFK',
      name: 'John F. Kennedy Intl',
      city: 'New York',
      country: 'USA',
      lat: 40.6413,
      lng: -73.7781,
      timezone: 'America/New_York'
    },
    aircraft: {
      model: 'Boeing 747-8i',
      registration: 'D-ABYM',
      airline: 'Lufthansa',
      airlineCode: 'LH'
    },
    times: {
      scheduledDepartureUtc: '11:05 UTC',
      estimatedDepartureUtc: '11:05 UTC',
      scheduledArrivalUtc: '19:40 UTC',
      estimatedArrivalUtc: '19:35 UTC'
    },
    telemetry: {
      lat: 54.1,
      lng: -20.2,
      altitudeFt: 35000,
      groundSpeedKts: 488,
      headingDeg: 275,
      verticalSpeedFpm: 0,
      squawk: '5120',
      progressPercent: 48
    },
    routeWaypoints: [
      [50.0379, 8.5622],
      [54.1, -20.2],
      [40.6413, -73.7781]
    ],
    gateDeparture: 'Z / 25',
    gateArrival: 'T1 / 03',
    delayMinutes: 0
  },
  {
    id: 'fl-sq25',
    flightNumber: 'SQ25',
    callsign: 'SIA25',
    status: 'ARRIVED',
    statusText: 'Landed / Docked at Gate',
    origin: {
      iata: 'FRA',
      name: 'Frankfurt Airport',
      city: 'Frankfurt',
      country: 'Germany',
      lat: 50.0379,
      lng: 8.5622,
      timezone: 'Europe/Berlin'
    },
    destination: {
      iata: 'SIN',
      name: 'Singapore Changi',
      city: 'Singapore',
      country: 'Singapore',
      lat: 1.3644,
      lng: 103.9915,
      timezone: 'Asia/Singapore'
    },
    aircraft: {
      model: 'Airbus A380-800',
      registration: '9V-SKU',
      airline: 'Singapore Airlines',
      airlineCode: 'SQ'
    },
    times: {
      scheduledDepartureUtc: '10:30 UTC',
      estimatedDepartureUtc: '10:30 UTC',
      scheduledArrivalUtc: '06:15 UTC',
      estimatedArrivalUtc: '06:05 UTC'
    },
    telemetry: {
      lat: 1.3644,
      lng: 103.9915,
      altitudeFt: 0,
      groundSpeedKts: 0,
      headingDeg: 42,
      verticalSpeedFpm: 0,
      squawk: '1000',
      progressPercent: 100
    },
    routeWaypoints: [
      [50.0379, 8.5622],
      [35.0, 48.0],
      [15.0, 75.0],
      [1.3644, 103.9915]
    ],
    gateDeparture: 'B / 46',
    gateArrival: 'T3 / B2',
    delayMinutes: 0
  },
  {
    id: 'fl-nh11',
    flightNumber: 'NH11',
    callsign: 'ANA11',
    status: 'SCHEDULED',
    statusText: 'Boarding Gate 52',
    origin: {
      iata: 'NRT',
      name: 'Narita International',
      city: 'Tokyo',
      country: 'Japan',
      lat: 35.772,
      lng: 140.3929,
      timezone: 'Asia/Tokyo'
    },
    destination: {
      iata: 'ORD',
      name: "Chicago O'Hare",
      city: 'Chicago',
      country: 'USA',
      lat: 41.9742,
      lng: -87.9073,
      timezone: 'America/Chicago'
    },
    aircraft: {
      model: 'Boeing 777-300ER',
      registration: 'JA795A',
      airline: 'All Nippon Airways',
      airlineCode: 'NH'
    },
    times: {
      scheduledDepartureUtc: '17:00 UTC',
      estimatedDepartureUtc: '17:00 UTC',
      scheduledArrivalUtc: '14:50 UTC',
      estimatedArrivalUtc: '14:50 UTC'
    },
    telemetry: {
      lat: 35.772,
      lng: 140.3929,
      altitudeFt: 0,
      groundSpeedKts: 0,
      headingDeg: 55,
      verticalSpeedFpm: 0,
      squawk: '3021',
      progressPercent: 0
    },
    routeWaypoints: [
      [35.772, 140.3929],
      [50.0, 175.0],
      [55.0, -150.0],
      [41.9742, -87.9073]
    ],
    gateDeparture: 'T1 / 52',
    gateArrival: 'T5 / M12',
    delayMinutes: 0
  }
];
