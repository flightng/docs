---
title: Features
description: Core features and technical highlights of Fidelity X
---

Every feature is carefully crafted. Every detail serves a better flight.

---

## Real-Time Architecture

Not optimization — a redesign.

Traditional firmware runs every task in a single loop, where any single delay drags down overall performance. Fidelity X is built on the **RT-Thread** real-time operating system, splitting critical work into independent, prioritized threads that run in parallel:

- **Gyro sampling and filtering** run on their own thread
- **Attitude estimation and mixing** get a dedicated priority
- **Motor output (IMU/DShot)** is always on time
- **RC reception** and **safety monitoring (Failsafe)** each run independently

**Result**: deterministic response times, regardless of system load.

---

## Filtering System

Signal processing defines flight quality.

### Gyro and D-Term Filtering

Consumer-grade MEMS gyros are imperfect — motor vibration, frame resonance and sensor noise all pollute the raw data. The Fidelity X filtering chain isolates these disturbances while preserving the real attitude changes.

The PID derivative term is inherently noise-sensitive, so the D-term has a dedicated low-pass filter (`dterm_lpf_cutoff`, default 90Hz) that suppresses high-frequency noise while keeping phase distortion to a minimum.

**Effect**: motors stay cool, response stays sharp.

### RPM Filtering

Using real-time RPM telemetry from **bidirectional DShot**, the firmware pinpoints motor harmonics and removes them. Filter strength is tuned via `rpm_filter_strength` (one value each for Roll/Pitch/Yaw).

:::note[How tunable are the filters?]
Most filter parameters are already tuned for you. In day-to-day use you typically only touch `dterm_lpf_cutoff` and `rpm_filter_strength` — there's no need to dig into the lower-level filter internals.
:::

---

## Safety System

**Always running.**

### RC Signal Loss Protection

A two-stage intelligent response:

| Stage | Trigger | Response |
|-------|---------|----------|
| Stage 1 | Signal loss detected | Hold the last valid control input, giving the link a chance to recover |
| Stage 2 | Loss persists | Force disarm (stop motors) to prevent a fly-away |

### Battery Voltage Monitoring

Battery voltage is monitored in real time and a warning is shown on the OSD.

:::caution[Battery monitoring only warns]
Battery voltage monitoring **only displays a warning on the OSD** — it will not cut motors or auto-land. Plan your return based on your own flying habits.
:::

### Arming Checks

Before takeoff, the system verifies sensor health, throttle position and RC signal validity. If the conditions aren't met, arming is refused.

---

## Control System

### Dual-Loop PID

- **Outer loop (Angle)**: angle control for self-leveling modes — `angle_pid_small` / `angle_pid_big`
- **Inner loop (Rate)**: angular-rate control, the core of responsiveness — `rate_pid_roll` / `rate_pid_pitch` / `rate_pid_yaw`

### Rate Curves

Three styles, one choice — yours.

| Curve | Best for |
|-------|----------|
| Betaflight Rate | Pilots migrating from Betaflight |
| Actual Rate | Pilots who prefer intuitive setup |
| FlightOne Rate | Pilots migrating from FalcoX / FlightOne |

Each axis (Roll / Pitch / Yaw) can independently choose its curve type. Mix and match — your call.

---

## Display and Recording

### OSD

Driven over the **MSP DisplayPort** protocol for digital VTX; some boards also carry an onboard **MAX7456 / AT7456E** analog OSD chip. On screen you get exactly the info you need:

🔋 Battery voltage　⏱️ Flight time　📶 Signal strength　✈️ Flight mode

### Blackbox

Flight data, fully preserved.

It uses a **Gorilla-based** time-series compression format (XOR encoding for floats + delta encoding for integers) to record longer flights in limited space. Logs are stored on **onboard SPI flash (NOR / NAND)** or an **SD card**, and can be exported directly to a computer via **USB Mass Storage (MSC)** mode for deep post-flight analysis.

---

## Protocol Support

### RC Protocols

| Protocol | Notes |
|----------|-------|
| CRSF | Recommended — lowest latency, telemetry support |
| SBUS | Widely compatible |
| SBUS_FAST | High-speed SBUS (200k) |

### Motor Protocol

**DShot150 / DShot300 / DShot600, with bidirectional DShot.**

Command transmission and RPM feedback both complete in microseconds. The closed-loop design makes RPM filtering possible — precisely tracking and removing motor harmonics in real time.
