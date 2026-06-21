---
title: Safety System (Failsafe)
description: Fidelity X built-in safety protection
---

Fidelity X has a comprehensive built-in safety system to keep flights safe.

:::note[Always enabled]
RC signal loss protection and arming checks are enforced by the firmware and cannot be turned off.
:::

---

## Protection Features

| Feature | Description |
|---------|-------------|
| RC signal loss protection | Detects RC loss and runs a two-stage response |
| Battery voltage monitoring | Monitors in real time and warns on the OSD |
| Arming checks | Arming is allowed only when conditions are met |
| Throttle-low protection | Guards against high throttle after an accidental arm |

---

## RC Signal Loss Protection

The firmware uses a fixed two-stage strategy (the actions are built in and not customizable):

| Stage | Trigger | Action |
|-------|---------|--------|
| Stage 1 | Signal loss detected | **Hold the last valid control input**, giving the link a chance to recover |
| Stage 2 | Loss persists | **Force disarm** (stop motors) to prevent a fly-away |

:::caution[No auto-land]
The second stage of Fidelity X failsafe cuts the motors (disarm) — there is **no "auto-land / controlled descent"**. Fly in open, safe areas and set up VTX/RC link-loss alerts.
:::

---

## Battery Voltage Monitoring

The firmware monitors the battery **per cell**, with hardcoded thresholds scaled by the automatically detected cell count:

| State | Threshold (per cell) | 4S equivalent |
|-------|----------------------|---------------|
| Warning | 3.5V / cell | 14.0V |
| Critical | 3.3V / cell | 13.2V |

:::caution[Battery monitoring only warns]
Battery voltage monitoring **only shows a warning on the OSD** — it will not cut motors or auto-land. Plan your return based on your flying habits.
:::

---

## Arming Conditions

Before arming, the system checks:

- [x] Sensor health OK
- [x] Accelerometer calibrated
- [x] Throttle at minimum
- [x] RC signal valid

Arming is allowed only when all conditions are met.

---

## Adjustable Parameter

The failsafe system exposes a single adjustable parameter:

| Parameter | Default | Description |
|-----------|---------|-------------|
| `fs_throttle_low_time` | 2000 | Throttle-low protection timer (ms) |

The stage actions (Stage 1 holds the signal, Stage 2 disarms) and the battery thresholds are built into the firmware and cannot be customized.

```bash
config get fs_throttle_low_time
config set fs_throttle_low_time 2000
config save
```

---

## Pre-Flight Checks

1. Confirm RC channels are working on the configurator's **Receiver** page
2. Test the failsafe response: turn off the transmitter before arming and confirm the FC detects signal loss
3. Confirm you regain control once the signal returns
4. Check that the OSD voltage readout is correct
