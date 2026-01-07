# Configuration Guide

This section covers how to configure Fydelix firmware.

---

## Parameter System

Fydelix uses a parameter system for configuration. All configuration is done via CLI commands.

### Basic Operations

| Command | Function |
|---------|----------|
| `param list` | List all parameters |
| `param get <name>` | Get parameter value |
| `param set <name> <value>` | Set parameter |
| `param save` | Save to Flash |
| `param load` | Load from Flash |
| `param reset` | Reset to defaults |

!!! important "Save Parameters"
    You must run `param save` after modifying parameters to persist changes!

---

## Configuration Categories

<div class="grid cards" markdown>

-   :material-tune:{ .lg .middle } **PID Tuning**

    ---

    Adjust flight response and feel

    [:octicons-arrow-right-24: Go](pid-tuning.md)

-   :material-filter:{ .lg .middle } **Filters**

    ---

    Optimize signal quality, reduce noise

    [:octicons-arrow-right-24: Go](filters.md)

-   :material-gauge:{ .lg .middle } **Rate Profiles**

    ---

    Adjust control sensitivity

    [:octicons-arrow-right-24: Go](rate-profiles.md)

-   :material-shield:{ .lg .middle } **Safety System**

    ---

    Configure Failsafe protection

    [:octicons-arrow-right-24: Go](failsafe.md)

</div>

---

## Quick Configuration Examples

### 5-inch Freestyle

```
param set PID_ROLL_P 45
param set PID_ROLL_I 80
param set PID_ROLL_D 35
param set GYRO_LPF_CUTOFF 100
param save
```

### Tiny Whoop

```
param set PID_ROLL_P 35
param set PID_ROLL_D 25
param set GYRO_LPF_CUTOFF 80
param save
```

---

## Reset to Defaults

```
param reset
param save
```

!!! warning "Warning"
    This will erase all custom configuration!

