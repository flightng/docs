# Safety System (Failsafe)

Fydelix has built-in comprehensive safety protection to ensure flight safety.

!!! info "Always Enabled"
    The safety system is always enabled and cannot be disabled.

---

## Protection Features

| Feature | Description |
|---------|-------------|
| RC Loss Protection | Detects RC signal loss and executes protection action |
| Battery Voltage Monitoring | Real-time monitoring with OSD warning display |
| Arming Condition Detection | Checks conditions before allowing arm |

---

## RC Loss Protection

### Two-Stage Protection Strategy

| Stage | Trigger | Default Action |
|-------|---------|----------------|
| Stage 1 | Signal loss detected | Stabilize flight attitude |
| Stage 2 | Stage 1 timeout | Safe disarm |

### Stage 1

After signal loss, the flight controller will:

- Set Roll/Pitch/Yaw to center
- Maintain some throttle
- Stabilize flight attitude

**Purpose**: Give RC signal a chance to recover

### Stage 2

If Stage 1 times out, the flight controller will:

- Stop all motors
- Prevent further damage from loss of control

---

## Parameter Configuration

### RC Loss Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `FS_RC_LOSS_STAGE_1_TIME` | 150 | Stage 1 duration (ms) |
| `FS_RC_STAGE1_ACTION` | 1 | Stage 1 action |
| `FS_RC_STAGE2_ACTION` | 3 | Stage 2 action |
| `FS_LAND_THROTTLE` | 0.3 | Throttle value during RC loss |

### Action Types

| Code | Action |
|------|--------|
| 0 | None |
| 1 | Channel override (stabilize) |
| 2 | Auto land |
| 3 | Disarm |

### Battery Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `FS_BAT_WARN_V` | 14.4 | Warning voltage (V) |
| `FS_BAT_CRIT_V` | 13.2 | Critical voltage (V) |

!!! note "Note"
    Battery monitoring only shows OSD warnings, it does not trigger disarm.

---

## Arming Conditions

Before arming, the system checks:

- [x] Sensor status normal
- [x] Throttle at lowest position
- [x] RC signal valid
- [x] Accelerometer calibrated

All conditions must be met before arming is allowed.

---

## Check Status

```
failsafe status
```

Shows current safety system status.

---

## Testing

!!! danger "Warning"
    Remove propellers before testing!

```
# Test RC loss response
failsafe test rc

# Test arming conditions
failsafe test arming

# Reset state
failsafe reset
```

---

## Configuration Examples

### Racing Configuration

Faster response:

```
param set FS_RC_LOSS_STAGE_1_TIME 100
param save
```

### Long Range Configuration

More time for signal recovery:

```
param set FS_RC_LOSS_STAGE_1_TIME 500
param save
```

---

## Pre-Flight Check

1. Confirm Failsafe status is normal
2. Test RC loss response (turn off transmitter)
3. Verify control recovers after signal returns

