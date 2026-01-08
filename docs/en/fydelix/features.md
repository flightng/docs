# Features

Fidelity X provides rich features for an excellent flight experience.

---

## Real-Time Operating System

Fidelity X is built on a mature real-time operating system architecture, providing:

- **Deterministic scheduling**: Ensures critical tasks execute on time
- **Multi-task processing**: Gyro sampling, attitude calculation, and motor output run in parallel
- **Efficient resource management**: Fully utilizes chip performance

---

## Advanced Filtering System

Noise is the enemy of flight controller performance. Fidelity X employs a meticulously designed filtering architecture that achieves the optimal balance between noise suppression and system responsiveness.

### Gyro Filtering

Based on deep understanding of consumer-grade MEMS gyroscope characteristics, we have carefully tuned filter parameters to precisely capture attitude changes while effectively suppressing motor vibration, frame resonance, and sensor white noise—providing clean, reliable data for attitude estimation.

### D-Term Filtering

Purpose-built low phase-shift filter for the PID derivative term, minimizing phase distortion to maintain ultra-high system responsiveness while effectively suppressing motor heating caused by D-term amplification of high-frequency noise.

---

## Safety Protection System

Fidelity X has built-in comprehensive safety protection, **always enabled, cannot be disabled**.

### RC Loss Protection

Uses intelligent two-stage protection strategy:

| Stage | Trigger | Default Action |
|-------|---------|----------------|
| Stage 1 | Signal loss detected | Stabilize flight attitude |
| Stage 2 | Stage 1 timeout | Safe disarm |

### Arming Condition Detection

Automatically checks before arming:

- Sensor status normal
- Throttle at lowest position
- RC signal valid
- No other anomalies

### Battery Monitoring

Real-time battery voltage monitoring with OSD warning display to help you return in time.

---

## Control System

### Dual-Loop PID Control

- **Outer loop (angle)**: For self-level mode
- **Inner loop (rate)**: Core controller, responsive

### Multiple Rate Curves

Choose based on your flight style:

| Rate Curve | Characteristics |
|------------|-----------------|
| Betaflight Rate | Compatible with Betaflight, easy migration |
| Actual Rate | More intuitive, directly set max angular velocity |
| FlightOne Rate | Compatible with FalcoX, easy migration |

---

## OSD Display

OSD display support via MSP protocol, compatible with mainstream VTX.

Display includes:

- :material-battery: Battery voltage
- :material-timer: Flight time
- :material-signal: Signal strength
- :material-airplane-alert: Flight mode

---

## Blackbox Logging

Supports recording flight data to onboard Flash for post-flight analysis and tuning.

Features a brand-new Flash storage format based on the Gorilla time-series compression algorithm, achieving efficient compression while ensuring data integrity. This guarantees lossless blackbox recording and delivers exceptionally high-fidelity flight data for playback and analysis.

---

## RC Protocol Support

| Protocol | Update Rate | Notes |
|----------|-------------|-------|
| CRSF | 150-500Hz | Recommended, low latency |
| SBUS | 100Hz | Wide compatibility |

---

## Motor Protocol

Exclusively uses **Bidirectional DShot600** digital protocol. With its ultra-short transmission time, commands are delivered to ESCs promptly while motor RPM feedback is retrieved rapidly.

This closed-loop design enables the flight controller to precisely monitor motor operating status, implementing RPM-based dynamic filtering for more accurate suppression of motor harmonic noise—significantly enhancing flight quality.

