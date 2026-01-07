# Features

Fydelix provides rich features for an excellent flight experience.

---

## Real-Time Operating System

Fydelix is built on a mature real-time operating system architecture, providing:

- **Deterministic scheduling**: Ensures critical tasks execute on time
- **Multi-task processing**: Gyro sampling, attitude calculation, and motor output run in parallel
- **Efficient resource management**: Fully utilizes AT32 chip performance

---

## Advanced Filtering System

Noise is the enemy of flight controller performance. Fydelix offers multiple filter options:

### Gyro Filtering

Effectively suppresses noise from motor vibration and frame resonance for cleaner attitude data.

### D-Term Filtering

Specifically filters PID D-term to prevent D-term from amplifying high-frequency noise causing motor heating.

### Filter Types

| Type | Characteristics | Use Case |
|------|-----------------|----------|
| PT1/PT2/PT3 | High efficiency | General use |
| Biquad | Flexible | Most scenarios |
| Butterworth | Flat passband | Smooth response needed |
| Chebyshev | Steep cutoff | High noise environment |

---

## Safety Protection System

Fydelix has built-in comprehensive safety protection, **always enabled, cannot be disabled**.

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

Records:

- Gyro data
- RC input
- Motor output
- PID output

---

## RC Protocol Support

| Protocol | Update Rate | Notes |
|----------|-------------|-------|
| CRSF | 150-500Hz | Recommended, low latency |
| SBUS | 100Hz | Wide compatibility |

---

## Motor Protocol

Supports DShot digital motor protocol:

- DShot300
- DShot600

Digital protocols offer higher precision and lower latency compared to PWM.

