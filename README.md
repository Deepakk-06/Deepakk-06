<p align="center">
  <img src="./assets/hero.gif" width="380" alt="Deepak banner" />
</p>

<h2 align="center">D E E P A K</h2>

<p align="center"><sub><b>ROBOTICS &nbsp;·&nbsp; EMBEDDED SYSTEMS &nbsp;·&nbsp; VLA RESEARCH</b></sub></p>

<p align="center">
  Robotics and embedded systems engineer.<br/>
  I build robots that survive contact with real hardware.
</p>

<p align="center">
  <a href="https://deepxk.vercel.app">Arcade portfolio</a> ·
  <a href="https://www.linkedin.com/in/deepk6/">LinkedIn</a> ·
  <a href="mailto:deepakk.hq@gmail.com">Email</a> ·
  <a href="https://youtu.be/SKQvO-AB9XY?t=2">Soundtrack</a>
</p>

<br/>

## About

Final-year EEE student at New Horizon College of Engineering, Bengaluru, working across SLAM-based mobile robots, legged robots, and manipulator arms. My focus is the part that breaks first in the real world: noisy sensors, drift, latency, and hardware that refuses to behave.

I don't treat simulation as the finish line. A system isn't done until it runs on a bench full of loose wires.

**Focus areas:** legged locomotion · SLAM and navigation · model predictive control · embedded control · vision-language-action models

## Research

**Locomotion-aware VLA control: how does OpenVLA hold up when its camera sits on a walking base?**

Team research project (EEE, New Horizon College of Engineering). Vision-language-action models are evaluated on fixed or wheeled bases, never on a base that is walking. We're building a low-cost testbed to measure what gait-induced camera motion does to a pretrained policy.

- **Testbed:** hexapod re-actuated with 18 Feetech STS3215 servos, carrying a LeRobot SO-101 arm. Modeled in MuJoCo, with arm reach checked against the legs across standing and walking postures.
- **Protocol:** zero-shot OpenVLA vs LoRA fine-tuned OpenVLA vs a gait-phase-gated variant, across static, just-stopped and mid-gait conditions, on pick-and-place, push and stack tasks.
- **Status:** design and protocol done, simulation model built. Hardware build and trials are next. No results yet.

## Selected work

### [hexapod-6](https://github.com/Deepakk-06/hexapod-6)
*ROS 2 Humble · Jetson Orin Nano · 18× STS3215 servos · RPLidar A1M8*

A from-scratch walking stack for a six-legged robot. The stock gait and IK code shipped as a closed-source binary, so I rebuilt it: servo protocol driver, 3-DOF leg inverse kinematics, gait engines, calibration tooling, and SLAM + Nav2 navigation.

- IK/FK round-trip error **under 0.001 mm**, verified numerically before touching hardware
- Tripod and wave gaits with smootherstep foot trajectories to cut impact and jerk
- Nav2 parameters re-derived from the robot's measured geometry and speed, not tutorial defaults
- Root-caused a disabled I2C controller by reading the Jetson device tree directly

### [SENTINEL-SLAM](https://github.com/Deepakk-06/SENTINEL-SLAM)
*ROS 2 · SLAM Toolbox · Nav2 · Gazebo*

A differential-drive rover that maps, localizes, navigates, and explores indoor spaces with a 2D LiDAR and IMU.

- Frontier-based exploration node that sends Nav2 goals into unknown space
- Safety supervisor that filters unsafe velocity commands using live LiDAR ranges
- Map-quality monitor reporting explored, free, occupied and unknown ratios
- Monocular depth estimation with Depth Anything V2

### [ROS 2 MPC Navigation](https://github.com/Deepakk-06/ROS2-Model-Predictive-Control-)
*ROS 2 Jazzy · Gazebo Sim · Python · SciPy*

Nonlinear Model Predictive Control for path tracking on a TurtleBot3. Waypoints from CSV are smoothed into a cubic spline, then tracked by an MPC solving a 25-step horizon at 10 Hz.

- SLSQP solver with warm starting
- LaserScan-based soft-barrier cost for obstacle avoidance
- Demo video and RViz screenshots in the repo

### Also

[**Soil Grain Detection**](https://github.com/Deepakk-06/Soil-Grain-Detection-Mapping) (YOLO, edge deployment) · [**skill-match**](https://github.com/Deepakk-06/skill-match) (skills-first hiring platform) · [**quantum_research**](https://github.com/Deepakk-06/quantum_research) (QUBO / QAOA path planning)

## In progress

- **Hexapod + SO-101 testbed** for the research above: STS3215 servo stack, arm integration through LeRobot, data collection for LoRA fine-tuning
- **SENTINEL:** quadruped AMR with LiDAR SLAM
- **STM32-based embedded control**

## Skills

<p align="center">
  <sub><b>ROBOTICS · CONTROL</b></sub><br/>
  <img src="https://img.shields.io/badge/ROS_2-CE1C18?style=for-the-badge&logo=ros&logoColor=white" alt="ROS 2" />
  <img src="https://img.shields.io/badge/NAV2-CE1C18?style=for-the-badge" alt="Nav2" />
  <img src="https://img.shields.io/badge/SLAM_TOOLBOX-CE1C18?style=for-the-badge" alt="SLAM Toolbox" />
  <img src="https://img.shields.io/badge/MPC-CE1C18?style=for-the-badge" alt="MPC" />
  <img src="https://img.shields.io/badge/INVERSE_KINEMATICS-CE1C18?style=for-the-badge" alt="Inverse Kinematics" />
  <img src="https://img.shields.io/badge/GAIT_GENERATION-CE1C18?style=for-the-badge" alt="Gait Generation" />
  <img src="https://img.shields.io/badge/LIDAR_SLAM-CE1C18?style=for-the-badge" alt="LiDAR SLAM" />
</p>

<p align="center">
  <sub><b>PERCEPTION · ML</b></sub><br/>
  <img src="https://img.shields.io/badge/PYTORCH-CE1C18?style=for-the-badge&logo=pytorch&logoColor=white" alt="PyTorch" />
  <img src="https://img.shields.io/badge/OPENCV-CE1C18?style=for-the-badge&logo=opencv&logoColor=white" alt="OpenCV" />
  <img src="https://img.shields.io/badge/YOLO-CE1C18?style=for-the-badge" alt="YOLO" />
  <img src="https://img.shields.io/badge/DEPTH_ANYTHING_V2-CE1C18?style=for-the-badge" alt="Depth Anything V2" />
  <img src="https://img.shields.io/badge/OPENVLA-CE1C18?style=for-the-badge" alt="OpenVLA" />
</p>

<p align="center">
  <sub><b>SIMULATION</b></sub><br/>
  <img src="https://img.shields.io/badge/MUJOCO-CE1C18?style=for-the-badge" alt="MuJoCo" />
  <img src="https://img.shields.io/badge/GAZEBO-CE1C18?style=for-the-badge" alt="Gazebo" />
  <img src="https://img.shields.io/badge/RVIZ-CE1C18?style=for-the-badge" alt="RViz" />
</p>

<p align="center">
  <sub><b>EMBEDDED · HARDWARE</b></sub><br/>
  <img src="https://img.shields.io/badge/STM32-CE1C18?style=for-the-badge&logo=stmicroelectronics&logoColor=white" alt="STM32" />
  <img src="https://img.shields.io/badge/ESP32-CE1C18?style=for-the-badge&logo=espressif&logoColor=white" alt="ESP32" />
  <img src="https://img.shields.io/badge/ARDUINO-CE1C18?style=for-the-badge&logo=arduino&logoColor=white" alt="Arduino" />
  <img src="https://img.shields.io/badge/JETSON-CE1C18?style=for-the-badge&logo=nvidia&logoColor=white" alt="Jetson" />
  <img src="https://img.shields.io/badge/RASPBERRY_PI-CE1C18?style=for-the-badge&logo=raspberrypi&logoColor=white" alt="Raspberry Pi" />
  <img src="https://img.shields.io/badge/SERIAL_BUS_SERVOS-CE1C18?style=for-the-badge" alt="Serial Bus Servos" />
</p>

<p align="center">
  <sub><b>LANGUAGES · TOOLS</b></sub><br/>
  <img src="https://img.shields.io/badge/PYTHON-CE1C18?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/C-CE1C18?style=for-the-badge&logo=c&logoColor=white" alt="C" />
  <img src="https://img.shields.io/badge/EMBEDDED_C-CE1C18?style=for-the-badge" alt="Embedded C" />
  <img src="https://img.shields.io/badge/LINUX-CE1C18?style=for-the-badge&logo=linux&logoColor=white" alt="Linux" />
  <img src="https://img.shields.io/badge/GIT-CE1C18?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
  <img src="https://img.shields.io/badge/LEROBOT-CE1C18?style=for-the-badge" alt="LeRobot" />
</p>

## Activity

<picture>
  <source media="(prefers-color-scheme: dark)"
    srcset="https://raw.githubusercontent.com/Deepakk-06/Deepakk-06/output/pacman-contribution-graph-dark.svg">
  <source media="(prefers-color-scheme: light)"
    srcset="https://raw.githubusercontent.com/Deepakk-06/Deepakk-06/output/pacman-contribution-graph.svg">
  <p align="center">
    <img src="https://raw.githubusercontent.com/Deepakk-06/Deepakk-06/output/pacman-contribution-graph-dark.svg" alt="Pacman contribution graph">
  </p>
</picture>
