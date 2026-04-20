import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2025',
    title: 'Amity University',
    subtitle: 'B.Tech Computer Science',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2025',
    title: 'IEEE CS',
    subtitle: 'Volunteer',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2025',
    title: 'eDC IIT Delhi',
    subtitle: 'Campus Ambassador',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2026',
    title: 'IIT Kharagpur',
    subtitle: 'Campus Ambassador',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: 'FUTURE',
    title: 'Cloud & DevOps',
    subtitle: 'Building the future',
    position: 'right',
  }
]