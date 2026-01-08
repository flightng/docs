# Fidelity X 固件

[访问 Configurator](https://flightng.github.io/test-configurator){ .md-button .md-button--primary }
[下载固件](https://github.com/flightng/firmware/releases){ .md-button }

---

## 简介

Fidelity X 是 FlightNG 团队精心打造的下一代飞控固件，基于实时操作系统架构，专为空中特技飞行而设计。

无论你是自由式飞手还是竞速选手，Fidelity X 都能为你提供流畅、精准的飞行体验。

---

## 核心特性

### :material-chip: 高性能架构

基于实时操作系统构建，多任务并行处理，确保陀螺仪采样、姿态计算和电机输出的精确时序。

### :material-shield-check: 可靠的安全保障

得益于 RTOS 的抢占式调度，所有任务都能得到及时响应，不存在任务被饿死的情况。独立的 Failsafe 线程确保即便出现意外，飞机也只会受控降落或停机，而不会以不可预期的方式坠毁。

### :material-filter: 先进滤波系统

基于对消费级 MEMS 陀螺仪特性的深入理解，我们精心调教了滤波器参数，有效抑制各种噪声的同时提供最佳性能，为你带来丝滑体验与灵敏响应。

### :material-gauge: 灵活的调参选项

- **多种速率曲线**：支持 FlightOne、Betaflight、Actual 三种曲线，且支持共存——Yaw、Pitch、Roll 可同时使用不同曲线，互不影响
- **PID 参数兼容 Betaflight**：轻松迁移你熟悉的调参设置
- **一体化调参体验**：与黑盒分析深度结合，让调参更高效

### :material-monitor-dashboard: 完善的功能支持

- **MSP-OSD**：标准 OSD 显示支持
- **Blackbox**：完整的飞行日志记录
- **遥控协议**：支持 CRSF、SBUS
- **电机协议**：支持双向 DShot600
- **无源蜂鸣器**：内置 BB 响支持

---

## 支持的传感器

| 传感器 | 类型 | 状态 |
|--------|------|------|
| BMI270 | 陀螺仪/加速度计 | ✅ 支持 |
| ICM-42688-P | 陀螺仪/加速度计 | ⚠️ 有限支持，不推荐用于新设计 |
| QMI8658C | 陀螺仪/加速度计 | ✅ 支持 |

---

## 当前版本

**v0.1.3**

查看 [更新日志](https://github.com/flightng/firmware/releases) 了解最新更新。

---

## 下一步

<div class="grid cards" markdown>

-   :material-play-circle:{ .lg .middle } **快速开始**

    ---

    从下载到首飞的完整指南

    [:octicons-arrow-right-24: 开始](getting-started.md)

-   :material-cog:{ .lg .middle } **配置指南**

    ---

    调整参数，优化飞行体验

    [:octicons-arrow-right-24: 配置](configuration/index.md)

-   :material-chip:{ .lg .middle } **支持的硬件**

    ---

    查看兼容的飞控板列表

    [:octicons-arrow-right-24: 硬件](supported-boards.md)

</div>

