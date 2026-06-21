---
title: PID Tuning
description: Adjust PID parameters for optimal flight performance
---

This guide covers tuning PID parameters for the best flight feel. Set them in the [configurator](https://app.flightng.com) under **Configuration → PIDs**.

---

## PID Basics

A PID controller has three terms:

| Term | Role |
|------|------|
| **P** (Proportional) | Responds to the current error — higher means faster response |
| **I** (Integral) | Eliminates steady-state error, holds attitude |
| **D** (Derivative) | Predicts and damps oscillation |

---

## Rate PID (Inner Loop)

The inner loop is the core of flight feel and applies to Acro / manual mode. Each axis stores P, I, D in a single array parameter:

| Parameter | Axis | Default (P, I, D) |
|-----------|------|--------------------|
| `rate_pid_roll` | Roll | 34, 54, 26 |
| `rate_pid_pitch` | Pitch | 36, 52, 28 |
| `rate_pid_yaw` | Yaw | 30, 110, 0 |

:::tip[Where to edit]
Edit each axis's P/I/D in separate input fields under **Configuration → PIDs** — far easier than the command line. A default Yaw D of 0 is normal.
:::

---

## Angle PID (Outer Loop)

The outer loop is used in self-leveling (Angle) mode, mapping stick position to a target angle:

| Parameter | Meaning | Default |
|-----------|---------|---------|
| `angle_pid_small` | Small-angle-error gain | 10, 3 |
| `angle_pid_big` | Large-angle-error gain | 5, 0 |

Most pilots get stable self-leveling with the defaults.

---

## D-Term Filter

The PID derivative term is noise-sensitive, so it has a dedicated low-pass filter:

| Parameter | Default | Description |
|-----------|---------|-------------|
| `dterm_lpf_cutoff` | 90 | D-term low-pass cutoff frequency (Hz) |

A lower cutoff keeps motors cooler but adds slight lag; a higher cutoff sharpens response but may heat motors.

---

## Tuning Method

The core idea: **find a good P/D ratio first, tune I last**. Do this alongside the **step response** analysis on the configurator's **Blackbox** page.

:::tip[Lower I first on large craft]
On large frames the integral term (I) masks the true P/D behavior. Drop I to a low value (around **10**) first, then add it back once the P/D ratio is dialed in.
:::

### Step 1: Lower I

Reduce each axis's I to around 10 (especially recommended for large craft) so the P/D response is fully exposed and easy to observe.

### Step 2: Find a good P/D ratio

This is the heart of tuning.

1. Increase P gradually until high-frequency vibration appears, then back off 10–20%
2. Add D to damp the oscillation caused by P (reduce D if motors get hot or noisy)
3. Iterate until P and D are balanced — that's your **P/D ratio**
4. After each change, check the **step response** on the Blackbox page: an ideal trace tracks quickly, overshoots slightly, with no sustained oscillation

:::caution[Symptoms of too much D]
- Hot motors
- High-frequency noise
- Propeller flutter
:::

### Step 3: Add I back

Once the P/D ratio is set, gradually restore I to the target value:

1. Increase I from the lowered value in Step 1
2. Too little I causes drift; too much causes low-frequency wobble
3. Again, use the Blackbox step response to confirm there's no low-frequency wobble

---

## Common Problems

### High-frequency vibration

**Symptom**: blurry props at hover, hot motors
**Fix**: lower the D gain, or reduce `dterm_lpf_cutoff` under **Configuration → Filters**

### Low-frequency wobble

**Symptom**: the aircraft rocks side to side
**Fix**: lower P or I gain

### Sluggish response

**Symptom**: delayed reaction to stick inputs
**Fix**: increase P and D gain

---

## Saving Settings

Always save after tuning:

- **Configurator**: click **Save**
- **CLI**: run `config save`

:::note[Array parameter tip]
`rate_pid_*` is an array parameter holding the three P/I/D values — easiest to edit in the configurator UI. From the CLI, `config get rate_pid_roll` shows the current values.
:::
