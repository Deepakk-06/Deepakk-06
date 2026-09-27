<div align="center">

# Deepak K

### EEE Student | Robotics Engineer | Building machines that leave simulation

[![Portfolio](https://img.shields.io/badge/Portfolio-deepxk.vercel.app-00C7B7?style=for-the-badge&logo=vercel&logoColor=white)](https://deepxk.vercel.app)
[![Email](https://img.shields.io/badge/Email-deeeps06%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:deeeps06@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-Deepakk--06-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Deepakk-06)

```text
SENSE  -->  DECIDE  -->  MOVE
```

</div>

> I build robots for the messy part: real sensors, real friction, real servo lag.  
> If it only works in simulation, it is not finished.

## System Check

```text
$ ros2 launch deepak_bringup system_check.launch.py

[boot] EEE undergrad, robotics stack initializing...
[sensors]      RPLiDAR A1 ................... OK   (12 m range, 360 deg)
[sensors]      IMU (6-axis) ................. OK   (drift-compensated)
[sensors]      camera + YOLOv8 .............. OK   (real-time inference)
[localization] SLAM Toolbox + AMCL .......... LOCKED
[planning]     Nav2 costmap ................. LOADED
[planning]     MPC trajectory solver ........ CONVERGED   (obstacle-aware)
[actuation]    18x STS3215 servos ........... SYNCED      (6 legs, 3 joints/leg)
[actuation]    PID line-follow loop ......... TUNED       (Kp/Ki/Kd optimized)
[deploy]       Gazebo sim -> real hardware .. CONFIRMED

[status] 4/5 systems are running on physical hardware, not just RViz
```

## The Mission

I work across ROS 2 navigation, SLAM/localization, Model Predictive Control, embedded systems, and computer vision. The goal is not a flashy demo: it is a robot that can reliably sense its world, make a decision, and move through it.

## Featured Builds

### [Hexapod-6](https://github.com/Deepakk-06/hexapod-6) | 18-DOF Hexapod

Hand-written inverse kinematics and gait generation drive 18 STS3215 servos across six legs on a Jetson Orin Nano. The real challenge is calibration drift across 18 joints and a gait that remains stable when one servo lags.

`ROS 2` `Python` `Inverse Kinematics` `Gait Generation` `STS3215` `Jetson Orin Nano`

### [Sentinel SLAM Robot](https://github.com/Deepakk-06/lidar-powered-autonomous-mapping-and-navigation) | Sim to Real Navigation

Built and tuned in Gazebo, then deployed to a Raspberry Pi 4 with LiDAR and IMU. Mapping, localization, and Nav2 navigation had to survive the jump from a clean simulator to a real room.

`ROS 2` `Gazebo` `Nav2` `SLAM Toolbox` `AMCL` `Raspberry Pi 4`

### [ROS 2 Model Predictive Control](https://github.com/Deepakk-06/ROS2-Model-Predictive-Control-) | Obstacle-Aware Motion

An MPC framework for trajectory tracking and obstacle-heavy paths, designed to out-corner a plain PID loop where path shape and actuator limits matter.

`Python` `ROS 2` `MPC` `Trajectory Optimization` `Control`

### [PID Line Following Robot](https://github.com/Deepakk-06/PID-Line-Following-Robot) | Fast Feedback Loops

An embedded line follower using IR sensing and a tuned PID loop for predictable, high-speed correction.

`C++` `PID` `Embedded Systems` `Motor Control` `IR Sensors`

## Robotics Stack

| Domain | Tools I use |
| :-- | :-- |
| Robot software | ROS 2, TF2, RViz, Gazebo, Colcon, CMake |
| Autonomy | Nav2, SLAM Toolbox, AMCL, RPLiDAR, costmaps |
| Control | MPC, PID, kinematics, trajectory tracking, gait generation |
| Embedded | Jetson Orin Nano, Raspberry Pi 4, ESP32, micro-ROS, serial comms |
| Perception | YOLOv8, OpenCV, camera pipelines, IMU fusion |
| Languages | Python, C++, TypeScript |

## Build Philosophy

```text
simulation    ->    hardware    ->    failure mode    ->    tune    ->    repeat
```

- Calibrate before claiming a control algorithm is broken.
- Treat sensor noise, latency, friction, and battery sag as design inputs.
- Write documentation detailed enough for another engineer to rebuild the robot.

## Current Focus

Tuning Nav2, refining MPC behavior around obstacles, and documenting hardware work with the detail needed to make each build reproducible.

<div align="center">

### Build. Break. Tune. Repeat.

[![View Portfolio](https://img.shields.io/badge/Explore_the_portfolio-00C7B7?style=for-the-badge&logo=vercel&logoColor=white)](https://deepxk.vercel.app)

</div>
