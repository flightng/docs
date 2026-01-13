---
title: Features
description: Core features and technical specifications of Fidelity X
---

Every feature has been carefully refined. Every detail serves better flight.

---

## Real-Time Architecture

Not optimization, but redesign.

Traditional firmware processes tasks sequentially in a single loop, where any delay affects overall performance. Fidelity X uses a real-time operating system, allowing critical tasks to truly run in parallel:

- Gyro sampling independent from main loop
- Attitude calculation has dedicated priority
- Motor output is always on time

**Result**: Deterministic response time, regardless of system load.

---

## Filtering System

Signal processing determines flight quality.

### Gyro Filtering

Consumer MEMS gyros aren't perfect—motor vibration, frame resonance, sensor noise all contaminate raw data.

Our filtering system precisely identifies these disturbances while preserving true attitude changes. What you feel is the precise response from clean flight data.

### D-Term Filtering

The derivative term in PID is inherently sensitive to noise. We designed a dedicated low phase-shift filter that suppresses high-frequency noise while minimizing phase distortion.

**Effect**: Motors stay cool, response stays sharp.

---

## Safety System

**Always running. Cannot be disabled.**

This isn't an optional feature—it's our design philosophy.

### Signal Loss Protection

Two-stage intelligent response:

| Stage | Trigger | Response |
|-------|---------|----------|
| Stage 1 | Signal loss | Attitude stabilization |
| Stage 2 | Continued loss | Controlled shutdown |

### Arming Detection

Before takeoff, the system automatically verifies:

- Sensors functioning normally
- Throttle at minimum
- RC signal valid
- System health OK

Only when everything is ready can you arm.

---

## Control System

### Dual-Loop PID

- **Outer loop**: Angle control, for self-level mode
- **Inner loop**: Angular rate control, core response source

### Rate Curves

Three styles, one choice—yours.

| Curve | Best For |
|-------|----------|
| Betaflight Rate | Pilots migrating from Betaflight |
| Actual Rate | Pilots who prefer intuitive settings |
| FlightOne Rate | Pilots migrating from FalcoX |

Each axis can independently choose curve type. Mix and match, your call.

---

## Display & Recording

### OSD

Driven by MSP protocol, compatible with mainstream VTX. What's on screen is the information you need:

🔋 Battery voltage　⏱️ Flight time　📶 Signal strength　✈️ Flight mode

### Blackbox

Flight data, completely preserved.

Using a time-series compression format based on the Gorilla algorithm, record longer flight data within limited Flash space. Every frame is losslessly saved, supporting deep post-analysis.

---

## Protocol Support

### RC Protocols

| Protocol | Frequency | Notes |
|----------|-----------|-------|
| CRSF | 150-500Hz | Recommended, lowest latency |
| SBUS | 100Hz | Widely compatible |

### Motor Protocol

**Bidirectional DShot600**

Command transmission and RPM feedback both complete in microseconds. Closed-loop design enables dynamic RPM filtering—precisely tracking motor harmonics, eliminating them in real-time.
