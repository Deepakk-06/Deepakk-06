<p align="center">
  <img src="./assets/hero.gif" width="380" alt="Deepak banner" />
</p>

<h1 align="center">Deepak</h1>

<p align="center">
  Robotics and embedded systems engineer.<br/>
  I build robots that survive contact with real hardware.
</p>

<p align="center">
  <a href="https://deepxk.vercel.app">Portfolio</a> ·
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

<table>
  <tr>
    <td width="170" valign="top"><b>Robotics &amp; control</b></td>
    <td>
      <img src="https://img.shields.io/badge/ROS_2-24242b?style=flat-square&logo=ros&logoColor=white" alt="ROS 2" />
      <img src="https://img.shields.io/badge/Nav2-24242b?style=flat-square" alt="Nav2" />
      <img src="https://img.shields.io/badge/SLAM_Toolbox-24242b?style=flat-square" alt="SLAM Toolbox" />
      <img src="https://img.shields.io/badge/Model_Predictive_Control-24242b?style=flat-square" alt="Model Predictive Control" />
      <img src="https://img.shields.io/badge/Inverse_Kinematics-24242b?style=flat-square" alt="Inverse Kinematics" />
      <img src="https://img.shields.io/badge/Gait_Generation-24242b?style=flat-square" alt="Gait Generation" />
      <img src="https://img.shields.io/badge/LiDAR_SLAM-24242b?style=flat-square" alt="LiDAR SLAM" />
    </td>
  </tr>
  <tr>
    <td width="170" valign="top"><b>Perception &amp; ML</b></td>
    <td>
      <img src="https://img.shields.io/badge/PyTorch-24242b?style=flat-square&logo=pytorch&logoColor=white" alt="PyTorch" />
      <img src="https://img.shields.io/badge/OpenCV-24242b?style=flat-square&logo=opencv&logoColor=white" alt="OpenCV" />
      <img src="https://img.shields.io/badge/YOLO-24242b?style=flat-square" alt="YOLO" />
      <img src="https://img.shields.io/badge/Depth_Anything_V2-24242b?style=flat-square" alt="Depth Anything V2" />
      <img src="https://img.shields.io/badge/OpenVLA-24242b?style=flat-square" alt="OpenVLA" />
    </td>
  </tr>
  <tr>
    <td width="170" valign="top"><b>Simulation</b></td>
    <td>
      <img src="https://img.shields.io/badge/MuJoCo-24242b?style=flat-square" alt="MuJoCo" />
      <img src="https://img.shields.io/badge/Gazebo-24242b?style=flat-square" alt="Gazebo" />
      <img src="https://img.shields.io/badge/RViz-24242b?style=flat-square" alt="RViz" />
    </td>
  </tr>
  <tr>
    <td width="170" valign="top"><b>Embedded &amp; hardware</b></td>
    <td>
      <img src="https://img.shields.io/badge/STM32-24242b?style=flat-square&logo=stmicroelectronics&logoColor=white" alt="STM32" />
      <img src="https://img.shields.io/badge/ESP32-24242b?style=flat-square&logo=espressif&logoColor=white" alt="ESP32" />
      <img src="https://img.shields.io/badge/Arduino-24242b?style=flat-square&logo=arduino&logoColor=white" alt="Arduino" />
      <img src="https://img.shields.io/badge/Jetson-24242b?style=flat-square&logo=nvidia&logoColor=white" alt="Jetson" />
      <img src="https://img.shields.io/badge/Raspberry_Pi-24242b?style=flat-square&logo=raspberrypi&logoColor=white" alt="Raspberry Pi" />
      <img src="https://img.shields.io/badge/Serial_Bus_Servos-24242b?style=flat-square" alt="Serial Bus Servos" />
      <img src="https://img.shields.io/badge/LiDAR-24242b?style=flat-square" alt="LiDAR" />
    </td>
  </tr>
  <tr>
    <td width="170" valign="top"><b>Languages &amp; tools</b></td>
    <td>
      <img src="https://img.shields.io/badge/Python-24242b?style=flat-square&logo=python&logoColor=white" alt="Python" />
      <img src="https://img.shields.io/badge/C-24242b?style=flat-square&logo=c&logoColor=white" alt="C" />
      <img src="https://img.shields.io/badge/Embedded_C-24242b?style=flat-square" alt="Embedded C" />
      <img src="https://img.shields.io/badge/Linux-24242b?style=flat-square&logo=linux&logoColor=white" alt="Linux" />
      <img src="https://img.shields.io/badge/Git-24242b?style=flat-square&logo=git&logoColor=white" alt="Git" />
      <img src="https://img.shields.io/badge/LeRobot-24242b?style=flat-square" alt="LeRobot" />
    </td>
  </tr>
</table>

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
