---
title: atbetaflight
description: AT32 port of Betaflight
---

atbetaflight is an AT32 port of Betaflight, maintained by the FlightNG team.

<div style="margin: 1.5rem 0;">
  <a href="https://github.com/flightng/atbetaflight" style="background: var(--sl-color-accent); color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; display: inline-block;">View Source Code</a>
</div>

---

## Introduction

atbetaflight adds AT32 chip support to Betaflight, suitable for users familiar with Betaflight for seamless migration.

---

## Features

Based on Betaflight 4.3.1, with the following additions:

- AT32F435/F437 chip support
- BMI270 driver optimization
- LSM6DSO driver optimization
- Added LSM6DSL/LSM6DS3TR-C/LSM6DS3 support
- Smith predictor

---

## Differences from Fidelity X

| Item | atbetaflight | Fidelity X |
|------|--------------|------------|
| Base | Betaflight port | Built from scratch |
| Config Tool | Betaflight Configurator | CLI |
| Learning Curve | Low (for BF users) | Medium |
| Feature Updates | Follows Betaflight | Independent |

---

## Target Users

- Users familiar with Betaflight
- Users who prefer graphical configuration tools
- Users needing specific Betaflight features

---

## Next Steps

[View Tutorial](/en/atbetaflight/tutorial/)
