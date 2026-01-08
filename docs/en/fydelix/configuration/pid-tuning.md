# PID Tuning

!!! warning "Page Incomplete"
    This page is not yet complete and is for reference only.

This guide explains how to tune PID parameters for optimal flight performance.

---

## PID Basics

A PID controller consists of three parts:

| Term | Function |
|------|----------|
| **P** (Proportional) | Responds to current error, higher = faster response |
| **I** (Integral) | Eliminates steady-state error, maintains attitude |
| **D** (Derivative) | Predicts and dampens oscillation |

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

### Step 1: Tune P

1. Start from defaults
2. Gradually increase P
3. When high-frequency oscillation appears, reduce by 10-20%

### Step 2: Tune D

1. D is used to dampen P-induced oscillation
2. Gradually increase D
3. If motors heat up or noise appears, reduce D

!!! warning "Symptoms of Too High D"
    - Motor heating
    - High-frequency noise
    - Propeller flutter

### Step 3: Tune I

1. I is used to maintain attitude
2. Default value usually works
3. Too low causes drift, too high causes low-frequency wobble

---

## Common Issues

### High-Frequency Vibration

**Symptoms**: Propellers blurry at hover, motors heating

**Solution**: Reduce D gain or filter cutoff frequency

### Low-Frequency Wobble

**Symptoms**: Aircraft swaying side to side

**Solution**: Reduce P or I gain

### Sluggish Response

**Symptoms**: Delayed response after stick input

**Solution**: Increase P and D gain

---

## Recommended Settings

### 5-inch Freestyle

| Parameter | Value |
|-----------|-------|
| P (Roll/Pitch) | 45 |
| I (Roll/Pitch) | 80 |
| D (Roll/Pitch) | 35 |

### 5-inch Racing

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

```
param save
```

