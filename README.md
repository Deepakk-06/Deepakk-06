# Deepak K

EEE student building robots that sense, decide, and move — on real hardware, not just in simulation.

Portfolio: https://deepxk.vercel.app
Email: deeeps06@gmail.com
GitHub: https://github.com/Deepakk-06

---

## About

I work across ROS 2 navigation, SLAM/localization, Model Predictive Control, embedded systems, and computer vision. My flagship build is an 18-DOF hexapod with hand-written inverse kinematics and gait generation, alongside a SLAM robot that made the actual jump from Gazebo to a Raspberry Pi 4 in the real world, and an MPC framework built to out-corner plain PID on obstacle-heavy paths.

Most student robotics projects stop at "it works in simulation." Mine don't get to stop there — if it doesn't survive real sensors, real friction, and real servo lag, it's not done.

Right now: tuning Nav2, refining MPC, and writing documentation good enough that someone else could actually rebuild what I built.

---

## System check

```
$ ros2 launch deepak_bringup system_check.launch.py

[boot] EEE undergrad, robotics stack initializing...
[sensors]      RPLiDAR A1 ................... OK   (12m range, 360°)
[sensors]      IMU (6-axis) .................. OK   (drift-compensated)
[sensors]      camera + YOLOv8 ............... OK   (real-time inference)
[localization] SLAM Toolbox + AMCL ........... LOCKED
[planning]     Nav2 costmap .................. LOADED
[planning]     MPC trajectory solver ......... CONVERGED   (obstacle-aware)
[actuation]    18x STS3215 servos ............ SYNCED   (6 legs, 3 joints/leg)
[actuation]    PID line-follow loop .......... TUNED   (Kp/Ki/Kd optimized)
[deploy]       Gazebo sim -> real hardware ... CONFIRMED
[status]       4/5 systems running on physical hardware, not just rviz

> mission: turn "it works in sim" into "it works on the table in front of you"
```

---

## Featured builds

**Hexapod-6** — 18-DOF hexapod
Custom inverse kinematics and gait generation driving 18 STS3215 servos across 6 legs, running on a Jetson Orin Nano. The hard part wasn't the math — it was calibration drift across 18 joints and keeping the gait stable when one leg's servo lags.
Stack: ROS 2, Python, IK, STS3215, Jetson Orin Nano
https://github.com/Deepakk-06/hexapod-6

**Sentinel SLAM Robot** — SLAM, sim to real
Built and tuned in Gazebo, then actually deployed onto a Raspberry Pi 4 with LiDAR + IMU — the step most student projects skip. Covers mapping, localization, and Nav2-based navigation on real hardware, not just a rosbag replay.
Stack: ROS 2, Gazebo, Nav2, SLAM Toolbox, Raspberry Pi 4
https://github.com/Deepakk-06/SENTINEL-SLAM

**ROS2 Model Predictive Control** — smoother-than-PID navigation
An MPC framework for trajectory tracking that plans around obstacles instead of just reacting to them, benchmarked directly against a standard PID/pure-pursuit baseline.
Stack: Python, ROS 2, Control Theory
https://github.com/Deepakk-06/ROS2-Model-Predictive-Control-

**Soil Grain Detection Mapping** — YOLO outside the usual domains
A YOLO + OpenCV pipeline repurposed for granular particle detection, with spatial analysis and visualization.
Stack: Python, YOLO, OpenCV
https://github.com/Deepakk-06/Soil-Grain-Detection-Mapping

**PID Line Following Robot** — where the control-theory habit started
IR-sensor line following with a tuned PID loop, optimized for speed on tight turns rather than just staying on the line.
Stack: Arduino, C, Embedded C
https://github.com/Deepakk-06/PID-Line-Following-Robot

---

## By the numbers

18 servos synchronized on one hexapod gait cycle
6 legs, 3 joints each, custom IK solved for every step
1 SLAM stack taken all the way from Gazebo to a Raspberry Pi 4 in the field
2 control strategies compared head-to-head — PID vs. MPC, same nav problem
0 of these projects stopped at "runs in simulation"

---

## Stack

Robotics: ROS 2, Gazebo, RViz, Nav2, SLAM Toolbox, AMCL, TF2
Control: PID, Model Predictive Control, trajectory tracking, kinematics
Embedded: ESP32, micro-ROS, serial comms, sensors, motor control
Vision: OpenCV, YOLO, image processing, detection pipelines
Languages: Python, C, Embedded C, Arduino
Tools: Git/GitHub, Linux, CAD, KiCad, EasyEDA

---

## Boards & chips

Single-board computer — Raspberry Pi 4 — running the SLAM/Nav2 stack on real hardware (Sentinel SLAM Robot)
Single-board computer — Jetson Orin Nano — on-board compute for the hexapod, servo control + IK in real time
Microcontroller — ESP32 — micro-ROS bridge, serial comms, sensor + motor control
Microcontroller — Arduino — PID line-following, IR sensing, low-level embedded control

---

deepxk.vercel.app · deeeps06@gmail.com
