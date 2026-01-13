---
title: Safety System (Failsafe)
description: Fidelity X built-in safety protection configuration
---

:::caution[Page Incomplete]
This page is not yet complete and is for reference only.
:::

Fidelity X has comprehensive built-in safety protection mechanisms to ensure flight safety.

:::note[Always Enabled]
The safety system is always enabled and cannot be disabled.
:::

---

## Protection Features

| Feature | Description |
|---------|-------------|
| RC Signal Loss Protection | Detects RC signal loss and executes protection actions |
| Battery Voltage Monitoring | Real-time monitoring with OSD warnings |
| Arming Condition Check | Checks conditions before allowing arm |

---

## RC Signal Loss Protection

### Two-Stage Protection Strategy

| Stage | Trigger | Default Action |
|-------|---------|----------------|
| Stage 1 | Signal loss detected | Stabilize flight attitude |
| Stage 2 | Stage 1 timeout | Safe shutdown |

### Stage 1

After signal loss, the flight controller will:

- Set Roll/Pitch/Yaw to center
- Maintain throttle
- Maintain stable flight attitude

**Purpose**: Give RC signal a chance to recover

### Stage 2

If Stage 1 times out, the flight controller will:

- Stop all motors
- Prevent loss of control from causing greater damage

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
| 0 | No action |
| 1 | Channel override (stabilize flight) |
| 2 | Auto land |
| 3 | Shutdown |

### Battery Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `FS_BAT_WARN_V` | 14.4 | Warning voltage (V) |
| `FS_BAT_CRIT_V` | 13.2 | Critical voltage (V) |

:::note
Battery monitoring only shows warnings on OSD, it won't trigger shutdown.
:::

---

## Arming Conditions

Before arming, the system checks:

- [x] Sensors functioning normally
- [x] Throttle at minimum
- [x] RC signal valid
- [x] Accelerometer calibrated

All conditions must be met before arming is allowed.

---

## View Status

```bash
failsafe status
```

Shows current safety system status.

---

## Testing

:::danger[Warning]
Remove propellers before testing!
:::

```bash
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

```bash
param set FS_RC_LOSS_STAGE_1_TIME 100
param save
```

### Long Range Configuration

Give signal more time to recover:

```bash
param set FS_RC_LOSS_STAGE_1_TIME 500
param save
```

---

## Pre-Flight Check

1. Confirm Failsafe status is normal
2. Test RC loss response (turn off transmitter)
3. Verify you can regain control after signal recovery
