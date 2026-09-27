<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:020604,50:071C11,100:0B2A19&height=105&text=DEEPAK%20K%20%2F%2F%20ROBOTICS%20DIVISION&fontSize=28&fontColor=8CFFAA&fontAlignY=54&stroke=39FF72&strokeWidth=1" width="100%" />

<br/>

# THE HARDWARE WARRIOR

### EEE Student | Robotics | Control Systems | Real Hardware

<img src="warrior.jpg" width="100%" alt="Robotics warrior system interface" />

<br/>

`SENSE` `->` `DECIDE` `->` `MOVE`

<a href="https://deepxk.vercel.app">
  <img src="https://img.shields.io/badge/PORTFOLIO-00D26A?style=for-the-badge&logo=vercel&logoColor=black" />
</a>
<a href="mailto:deeeps06@gmail.com">
  <img src="https://img.shields.io/badge/CONTACT-EA4335?style=for-the-badge&logo=gmail&logoColor=white" />
</a>
<a href="https://github.com/Deepakk-06">
  <img src="https://img.shields.io/badge/CODEBASE-161B22?style=for-the-badge&logo=github&logoColor=white" />
</a>

</div>

---

```text
IDENTITY       DEEPAK K
ROLE           EEE STUDENT / ROBOTICS ENGINEER
MODE           BUILDING FOR THE REAL WORLD
CORE BELIEF    SIMULATION IS THE STARTING POINT.
```

> I build robots that deal with the messy parts: noisy sensors, friction, latency,
> calibration drift, servo lag, and hardware that refuses to behave perfectly.

## SYSTEM STATUS

```text
$ ros2 launch deepak_bringup system_check.launch.py

[BOOT]         Robotics stack initializing...
[SENSORS]      RPLiDAR A1 ..................... ONLINE
[SENSORS]      6-axis IMU ..................... STABLE
[SENSORS]      Camera + YOLOv8 ................ TRACKING

[LOCALIZATION] SLAM Toolbox + AMCL ............ LOCKED
[NAVIGATION]   Nav2 costmap ................... ACTIVE
[CONTROL]      MPC trajectory solver .......... CONVERGED

[ACTUATION]    18x STS3215 servos ............. SYNCHRONIZED
[ACTUATION]    PID line following loop ........ TUNED
[DEPLOYMENT]   Gazebo -> physical robot ....... VERIFIED

[MISSION]      Build machines that work beyond RViz.
```

## FEATURED BUILDS

<table>
<tr>
<td width="50%" valign="top">

### HEXAPOD-6
#### 18-DOF walking robot

Custom inverse kinematics and gait generation drive 18 STS3215 servos across six legs on a Jetson Orin Nano.

The challenge is keeping a gait stable when calibration shifts and a servo arrives late.

`ROS 2` `Python` `IK` `Gait Generation` `Jetson`

[VIEW PROJECT ->](https://github.com/Deepakk-06/hexapod-6)

</td>
<td width="50%" valign="top">

### SENTINEL
#### SLAM robot: sim to real

Built in Gazebo, then deployed to a Raspberry Pi 4 with LiDAR and IMU.

Mapping, localization, and Nav2 navigation tested where the floor has friction and sensors have opinions.

`ROS 2` `Nav2` `SLAM Toolbox` `AMCL` `Gazebo`

[VIEW PROJECT ->](https://github.com/Deepakk-06/lidar-powered-autonomous-mapping-and-navigation)

</td>
</tr>

<tr>
<td width="50%" valign="top">

### MPC NAVIGATION
#### Obstacle-aware motion

A Model Predictive Control framework for trajectory tracking on paths where plain PID cannot plan far enough ahead.

`Python` `ROS 2` `MPC` `Optimization`

[VIEW PROJECT ->](https://github.com/Deepakk-06/ROS2-Model-Predictive-Control-)

</td>
<td width="50%" valign="top">

### PID LINE FOLLOWER
#### Fast feedback loops

An embedded robot using IR sensing and a tuned PID loop for stable, high-speed line tracking.

`C++` `PID` `Embedded Systems` `Motor Control`

[VIEW PROJECT ->](https://github.com/Deepakk-06/PID-Line-Following-Robot)

</td>
</tr>
</table>

## LOADOUT

```text
ROBOT SOFTWARE    ROS 2 / Nav2 / TF2 / RViz / Gazebo
AUTONOMY          SLAM Toolbox / AMCL / Costmaps / RPLiDAR
CONTROL           MPC / PID / Kinematics / Trajectory Tracking
HARDWARE          Jetson Orin Nano / Raspberry Pi 4 / ESP32 / IMU / LiDAR
PERCEPTION        YOLOv8 / OpenCV / Sensor Fusion
LANGUAGES         Python / C++ / TypeScript
```

## CURRENT MISSION

```text
[01] Tune Nav2 for better physical-world navigation
[02] Refine MPC around obstacle-heavy trajectories
[03] Document every robot so it can be rebuilt
[04] Turn "it works in simulation" into "it works here"
```

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=Deepakk-06&show_icons=true&hide_border=true&bg_color=020604&title_color=8CFFAA&icon_color=39FF72&text_color=D1FADF" height="165" />

<br/>

### BUILD THE MACHINE. TEST REALITY. REPEAT.

</div>
