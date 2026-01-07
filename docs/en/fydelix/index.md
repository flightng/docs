# Fydelix Firmware

**Next-generation flight controller firmware designed for FPV**

[Download Firmware](https://github.com/flightng/fydelix/releases){ .md-button .md-button--primary }

---

## Introduction

Fydelix is a next-generation flight controller firmware crafted by the FlightNG team, built on a real-time operating system architecture and designed specifically for acrobatic flight.

Whether you're a freestyle pilot or a racer, Fydelix delivers a smooth and precise flight experience.

---

## Key Features

### :material-chip: High-Performance Architecture

Built on a real-time operating system with multi-task parallel processing, ensuring precise timing for gyro sampling, attitude calculation, and motor output.

### :material-shield-check: Reliable Safety Assurance

Thanks to RTOS preemptive scheduling, all tasks receive timely responses without starvation. An independent Failsafe thread ensures that even in unexpected situations, the aircraft will only perform a controlled landing or disarm, rather than crash in unpredictable ways.

### :material-filter: Advanced Filtering System

Based on a deep understanding of consumer-grade MEMS gyroscope characteristics, we have carefully tuned the filter parameters to effectively suppress various noise while providing optimal performance, delivering a silky-smooth experience with responsive handling.

### :material-gauge: Flexible Tuning Options

- **Multiple rate curves**: Supports FlightOne, KISS, Betaflight, and Actual — four curve types that can coexist, allowing Yaw, Pitch, and Roll to use different curves simultaneously
- **PID parameters compatible with Betaflight**: Easily migrate your familiar tuning settings
- **Integrated tuning experience**: Deep integration with blackbox analysis for more efficient tuning

### :material-monitor-dashboard: Complete Feature Support

- **MSP-OSD**: Standard OSD display support
- **Blackbox**: Full flight logging
- **RC protocols**: CRSF, SBUS support
- **Motor protocol**: Bidirectional DShot600 support
- **Passive buzzer**: Built-in beeper support

---

## Supported Sensors

| Sensor | Type | Status |
|--------|------|--------|
| BMI270 | Gyro/Accelerometer | ✅ Supported |
| ICM-42688-P | Gyro/Accelerometer | ⚠️ Limited support, not recommended for new designs |
| QMI8658C | Gyro/Accelerometer | ✅ Supported |

---

## Current Version

**v0.1.3**

Check the [Changelog](https://github.com/flightng/fydelix/releases) for latest updates.

---

## Next Steps

<div class="grid cards" markdown>

-   :material-play-circle:{ .lg .middle } **Getting Started**

    ---

    Complete guide from download to first flight

    [:octicons-arrow-right-24: Start](getting-started.md)

-   :material-cog:{ .lg .middle } **Configuration**

    ---

    Adjust parameters to optimize flight experience

    [:octicons-arrow-right-24: Configure](configuration/index.md)

-   :material-chip:{ .lg .middle } **Supported Hardware**

    ---

    View compatible flight controller list

    [:octicons-arrow-right-24: Hardware](supported-boards.md)

</div>

