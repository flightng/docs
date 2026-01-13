---
title: PID Tuning
description: Adjust PID parameters for optimal flight performance
---

:::caution[Page Incomplete]
This page is not yet complete and is for reference only.
:::

This guide explains how to adjust PID parameters for optimal flight performance.

---

## PID Basics

A PID controller consists of three parts:

| Term | Function |
|------|----------|
| **P** (Proportional) | Responds to current error, higher = faster response |
| **I** (Integral) | Eliminates steady-state error, maintains attitude |
| **D** (Derivative) | Predicts and suppresses oscillation |

---

## PID Parameters

### Roll/Pitch

| Parameter | Description | Default |
|-----------|-------------|---------|
| `PID_ROLL_P` | Roll P gain | 45 |
| `PID_ROLL_I` | Roll I gain | 80 |
| `PID_ROLL_D` | Roll D gain | 35 |
| `PID_PITCH_P` | Pitch P gain | 45 |
| `PID_PITCH_I` | Pitch I gain | 80 |
| `PID_PITCH_D` | Pitch D gain | 35 |

### Yaw

| Parameter | Description | Default |
|-----------|-------------|---------|
| `PID_YAW_P` | Yaw P gain | 45 |
| `PID_YAW_I` | Yaw I gain | 80 |
| `PID_YAW_D` | Yaw D gain | 0 |

---

## Tuning Method

### Step 1: Adjust P

1. Start from default values
2. Gradually increase P
3. When high-frequency vibration appears, reduce by 10-20%

### Step 2: Adjust D

1. D is used to suppress oscillation caused by P
2. Gradually increase D
3. When motors get hot or noise appears, reduce D

:::caution[Symptoms of D Too High]
- Motors getting hot
- High-frequency noise
- Propeller shaking
:::

### Step 3: Adjust I

1. I is used to maintain attitude
2. Usually default values work fine
3. I too low causes drift, too high causes low-frequency wobble

---

## Common Issues

### High-Frequency Vibration

**Symptoms**: Blurry propellers while hovering, hot motors

**Solution**: Reduce D gain or filter cutoff frequency

### Low-Frequency Wobble

**Symptoms**: Aircraft swaying side to side

**Solution**: Reduce P or I gain

### Sluggish Response

**Symptoms**: Delayed response after stick input

**Solution**: Increase P and D gains

---

## Recommended Settings

### 5" Freestyle

| Parameter | Value |
|-----------|-------|
| P (Roll/Pitch) | 45 |
| I (Roll/Pitch) | 80 |
| D (Roll/Pitch) | 35 |

### 5" Racing

| Parameter | Value |
|-----------|-------|
| P (Roll/Pitch) | 55 |
| I (Roll/Pitch) | 90 |
| D (Roll/Pitch) | 40 |

### Tiny Whoop

| Parameter | Value |
|-----------|-------|
| P (Roll/Pitch) | 35 |
| I (Roll/Pitch) | 70 |
| D (Roll/Pitch) | 25 |

---

## Tuning Checklist

- [ ] Calibrate accelerometer
- [ ] Check motor direction
- [ ] Start from default PID
- [ ] Tune P first, then D
- [ ] Fine-tune I last
- [ ] Save settings

```bash
param save
```
