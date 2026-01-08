---
hide:
  - navigation
  - toc
---

# 欢迎使用 FlightNG

<div class="hero" markdown>

## :material-rocket-launch: Fidelity X 飞控固件

**下一代穿越机飞控固件，专为性能而生**

Fidelity X 是 FlightNG 团队精心打造的下一代飞控固件，基于实时操作系统架构，专为空中特技飞行而设计。

[开始使用 :material-arrow-right:](fydelix/index.md){ .md-button .md-button--primary }
[下载固件](https://github.com/flightng/firmware/releases){ .md-button }

</div>

---

## 为什么选择 Fidelity X？

<div class="grid cards" markdown>

-   :material-chip:{ .lg .middle } **高性能架构**

    ---

    基于实时操作系统构建，多任务并行处理，确保陀螺仪采样、姿态计算和电机输出的精确时序

-   :material-shield-check:{ .lg .middle } **安全可靠**

    ---

    得益于 RTOS 抢占式调度，独立的 Failsafe 线程确保飞机只会受控降落或停机，而不会以不可预期的方式坠毁

-   :material-filter:{ .lg .middle } **先进滤波**

    ---

    基于对消费级 MEMS 陀螺仪特性的深入理解，精心调教的滤波器参数带来丝滑体验与灵敏响应

-   :material-gauge:{ .lg .middle } **灵活调参**

    ---

    多种速率曲线支持共存，PID 参数兼容 Betaflight，轻松迁移你熟悉的调参设置

</div>

---

## 支持的硬件

Fidelity X 支持多款主流飞控板：

| 飞控板 | MCU | 封装 |
|--------|-----|------|
| NeutronRC F435 SE | AT32F435RGT7 | LQFP64 |
| NeutronRC F435 MINI | AT32F435CGU7 | QFN48 |
| Hummingbird 200RS | AT32F435 | 20x20mm |
| Hummingbird 255 V1 | AT32F435 | 25.5x25.5mm |
| StingerBee | AT32F435 | Whoop |

[查看完整硬件列表 :material-arrow-right:](fydelix/supported-boards.md)

---

## 其他项目

除了 Fidelity X，FlightNG 团队还维护以下开源项目：

<div class="grid cards" markdown>

-   :material-airplane:{ .lg .middle } **atbetaflight**

    ---

    Betaflight 的 AT32 移植版本，适合熟悉 Betaflight 的用户

    [:octicons-arrow-right-24: 了解更多](atbetaflight/index.md)

</div>

---

## 快速链接

- :fontawesome-brands-github: [GitHub](https://github.com/flightng)
- :material-heart: [赞助我们](sponsor.md)

