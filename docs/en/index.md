---
hide:
  - navigation
  - toc
---

# Welcome to FlightNG

<div class="hero" markdown>

## :material-rocket-launch: Fidelity X Flight Controller Firmware

**Next-generation FPV flight controller firmware, built for performance**

Fidelity X is a next-generation flight controller firmware crafted by the FlightNG team, built on a real-time operating system architecture and designed specifically for acrobatic flight.

[Get Started :material-arrow-right:](fydelix/index.md){ .md-button .md-button--primary }
[Download Firmware](https://github.com/flightng/fydelix/releases){ .md-button }

</div>

---

## Why Choose Fidelity X?

<div class="grid cards" markdown>

-   :material-chip:{ .lg .middle } **High-Performance Architecture**

    ---

    Built on a real-time operating system with multi-task parallel processing, ensuring precise timing for gyro sampling, attitude calculation, and motor output

-   :material-shield-check:{ .lg .middle } **Safe & Reliable**

    ---

    Thanks to RTOS preemptive scheduling, an independent Failsafe thread ensures the aircraft will only perform a controlled landing or disarm, rather than crash unpredictably

-   :material-filter:{ .lg .middle } **Advanced Filtering**

    ---

    Based on deep understanding of consumer-grade MEMS gyroscope characteristics, carefully tuned filter parameters deliver a silky-smooth experience with responsive handling

-   :material-gauge:{ .lg .middle } **Flexible Tuning**

    ---

    Multiple rate curves that can coexist, PID parameters compatible with Betaflight, easily migrate your familiar tuning settings

</div>

---

## Supported Hardware

Fidelity X supports multiple mainstream flight controllers:

| Flight Controller | MCU | Package |
|-------------------|-----|---------|
| NeutronRC F435 SE | AT32F435RGT7 | LQFP64 |
| NeutronRC F435 MINI | AT32F435CGU7 | QFN48 |
| Hummingbird 200RS | AT32F435 | 20x20mm |
| Hummingbird 255 V1 | AT32F435 | 25.5x25.5mm |
| StingerBee | AT32F435 | Whoop |

[View Full Hardware List :material-arrow-right:](fydelix/supported-boards.md)

---

## Other Projects

Besides Fidelity X, the FlightNG team also maintains:

<div class="grid cards" markdown>

-   :material-airplane:{ .lg .middle } **atbetaflight**

    ---

    AT32 port of Betaflight, suitable for users familiar with Betaflight

    [:octicons-arrow-right-24: Learn More](atbetaflight/index.md)

</div>

---

## Quick Links

- :fontawesome-brands-github: [GitHub](https://github.com/flightng)
- :material-heart: [Sponsor Us](sponsor.md)

