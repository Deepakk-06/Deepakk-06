<p align="center">
  <img src="./assets/hero.gif" width="380" alt="Deepak banner" />
</p>

<h1 align="center">deepAk</h1>

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

Final-year EEE student working across SLAM-based mobile robots, legged robots, and manipulator arms. My focus is the part that breaks first in the real world: noisy sensors, drift, latency, and hardware that refuses to behave.

I don't treat simulation as the finish line. A system isn't done until it runs on a bench full of loose wires.

## Research

**Does domain randomization improve generalization in Vision-Language-Action models?**
Studying this with OpenVLA in Isaac Sim.

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

SENTINEL (quadruped AMR, LiDAR SLAM) · Hexapod on STS3215 servos · SO-101 follower arm · STM32-based embedded control

## Stack

**Languages** Python, C, Embedded C
**Compute** Raspberry Pi, Jetson
**Microcontrollers** STM32, Arduino, ESP32
**Tools** ROS 2, OpenCV, PyTorch, Gazebo, Isaac Sim, Linux

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

