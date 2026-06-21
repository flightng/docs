---
title: Rate Profiles
description: Configure stick response curves
---

Rate curves define the relationship between stick position and the aircraft's rotation speed. Set them in the [configurator](https://app.flightng.com) under **Configuration → Rates**.

---

## Three Curve Types

Fidelity X supports three rate curve algorithms, and **each axis (Roll / Pitch / Yaw) can independently use a different type**:

| Type | Best for |
|------|----------|
| Betaflight Rate | Pilots migrating from Betaflight — identical feel |
| Actual Rate | Pilots who prefer intuitive setup and a direct max-rate value |
| FlightOne Rate | Pilots migrating from FalcoX / FlightOne |

Each axis's curve type is stored in `rate_curve_type` (an array for Roll / Pitch / Yaw).

---

## Curve Parameters

Whatever the type, each axis's curve parameters are stored in its array parameter:

| Parameter | Axis |
|-----------|------|
| `rate_curve_roll` | Roll |
| `rate_curve_pitch` | Pitch |
| `rate_curve_yaw` | Yaw |

In the **Rates** section, each axis exposes three adjustable fields (using Betaflight Rate as an example):

| Field | Role |
|-------|------|
| RC Rate | Base rate, affects overall response |
| Super Rate | End-of-throw gain, affects max rotation speed |
| Expo | Center-region curve, reduces center sensitivity |

:::tip[Where to edit]
Rate curves hold several values, so it's strongly recommended to adjust them in the configurator's **Configuration → Rates** UI — you can see the curve shape in real time, far more intuitive than the CLI.
:::

---

## Tuning Tips

### Center too sensitive

Increase **Expo** to soften the center region.

### Not enough roll speed

Increase **Super Rate** to raise the max rate at the end of stick throw.

### Yaw too sensitive / twitchy

Lower the Yaw axis's **RC Rate** or **Super Rate** alone — thanks to per-axis curves, tuning Yaw won't affect Roll / Pitch.

---

## Migrating from Betaflight

If you're coming from Betaflight:

1. Set the axis's curve type to **Betaflight Rate**
2. Enter your Betaflight RC Rate, Super Rate and Expo values
3. Click **Save**

Your feel carries over seamlessly.

:::note[Saving settings]
Remember to click **Save** after editing (or `config save` from the CLI).
:::
