# Features

<div class="page-intro" markdown>

Every feature, refined to perfection.
Every detail, in service of better flight.

</div>

---

## Real-Time Architecture

Not optimization. Redesign.

Traditional firmware processes tasks sequentially in a single loop—any delay cascades through the system. Fidelity X employs a real-time operating system where critical tasks truly run in parallel:

- Gyro sampling independent of main loop
- Attitude computation with dedicated priority
- Motor output always on time

The result: deterministic response time, regardless of system load.

---

## Filtering System

Signal processing defines flight quality.

### Gyro Filtering

Consumer MEMS gyroscopes aren't perfect—motor vibration, frame resonance, sensor noise all contaminate raw data.

Our filtering system precisely identifies these disturbances while preserving genuine attitude changes. What you feel is the precise response from clean flight data.

### D-Term Filtering

The PID derivative is inherently noise-sensitive. We designed a dedicated low phase-shift filter that suppresses high-frequency noise while minimizing phase distortion.

The effect: motors stay cool, response stays sharp.

---

## Safety System

Always running. Cannot be disabled.

This isn't an optional feature—it's our design philosophy.

### Signal Loss Protection

Two-stage intelligent response:

| Stage | Trigger | Response |
|-------|---------|----------|
| Stage 1 | Signal lost | Attitude stabilization |
| Stage 2 | Sustained loss | Controlled disarm |

### Arming Checks

Before takeoff, the system automatically verifies:

- Sensors functioning normally
- Throttle at minimum
- RC signal valid
- System health confirmed

Only when everything checks out is arming permitted.

---

## Control System

### Dual-Loop PID

- **Outer loop**: Angle control for self-level mode
- **Inner loop**: Angular rate control, the source of responsiveness

### Rate Curves

Three styles. One choice—yours.

| Curve | Best For |
|-------|----------|
| Betaflight Rate | Pilots migrating from Betaflight |
| Actual Rate | Pilots who prefer intuitive setup |
| FlightOne Rate | Pilots migrating from FalcoX |

Each axis can use a different curve type. Mix and match as you like.

---

## Display & Recording

### OSD

MSP protocol driven, compatible with popular VTX. What appears on screen is what you need:

:material-battery: Battery voltage　:material-timer: Flight time　:material-signal: Signal strength　:material-airplane-alert: Flight mode

### Blackbox

Flight data, fully preserved.

Using a time-series compression format based on the Gorilla algorithm, more flight time is recorded in limited Flash space. Every frame saved losslessly, ready for deep post-flight analysis.

---

## Protocol Support

### RC Protocols

| Protocol | Rate | Notes |
|----------|------|-------|
| CRSF | 150-500Hz | Recommended, lowest latency |
| SBUS | 100Hz | Widely compatible |

### Motor Protocol

Bidirectional DShot600.

Command transmission and RPM feedback both complete in microseconds. Closed-loop design enables dynamic RPM filtering—precisely tracking motor harmonics, eliminating them in real time.

