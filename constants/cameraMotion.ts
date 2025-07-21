export interface CameraMotion {
  value: string
  label: string
  description: string
  category: string
}

// Category display names with emojis
export const CAMERA_MOTION_CATEGORY_DISPLAY_NAMES: Record<string, string> = {
  'Linear Camera Movement': '🚶‍♂️ Linear Camera Movement (Physical Motion)',
  'Rotational Camera Movement': '🔁 Rotational Camera Movement (Camera Rotates in Place)',
  'Combined or Complex Movements': '🌀 Combined or Complex Movements',
  'Camera + Subject Coordination': '🧍‍♂️ Camera + Subject Coordination',
  'Stabilized or Floating Movements': '🧯 Stabilized or Floating Movements',
  'Aerial & Remote Movements': '🚁 Aerial & Remote Movements',
  'Specialty Movements': '🧪 Specialty Movements'
}

export const CAMERA_MOTIONS: CameraMotion[] = [
  // 🚶‍♂️ LINEAR CAMERA MOVEMENT (PHYSICAL MOTION)
  {
    value: 'dolly-in',
    label: 'Dolly In',
    description: 'Camera moves forward smoothly, usually on tracks or a motorized dolly. Used to draw the viewer in for intimacy or tension.',
    category: 'Linear Camera Movement'
  },
  {
    value: 'dolly-out',
    label: 'Dolly Out',
    description: 'Camera moves backward smoothly, usually on tracks or a motorized dolly. Used to pull back for reveals or to disengage emotionally.',
    category: 'Linear Camera Movement'
  },
  {
    value: 'tracking-left',
    label: 'Tracking Left',
    description: 'Camera moves left, parallel to the subject. Common in walking scenes or following action. Gives lateral movement and perspective.',
    category: 'Linear Camera Movement'
  },
  {
    value: 'tracking-right',
    label: 'Tracking Right',
    description: 'Camera moves right, parallel to the subject. Common in walking scenes or following action. Gives lateral movement and perspective.',
    category: 'Linear Camera Movement'
  },
  {
    value: 'crane-up',
    label: 'Crane Up',
    description: 'Camera moves vertically upward using a crane or jib arm. Used for dramatic entrances, exits, or scene reveals.',
    category: 'Linear Camera Movement'
  },
  {
    value: 'crane-down',
    label: 'Crane Down',
    description: 'Camera moves vertically downward using a crane or jib arm. Used for dramatic entrances, exits, or scene reveals.',
    category: 'Linear Camera Movement'
  },
  {
    value: 'pedestal-up',
    label: 'Pedestal Up',
    description: 'Camera raises vertically without tilting (on a lift or vertical slider). Used for elevation changes while keeping angle consistent.',
    category: 'Linear Camera Movement'
  },
  {
    value: 'pedestal-down',
    label: 'Pedestal Down',
    description: 'Camera lowers vertically without tilting (on a lift or vertical slider). Used for elevation changes while keeping angle consistent.',
    category: 'Linear Camera Movement'
  },
  {
    value: 'push-in',
    label: 'Push-In',
    description: 'Slow, smooth movement towards a character\'s face or object, often without changing focal length. Builds tension or reveals inner emotion.',
    category: 'Linear Camera Movement'
  },
  {
    value: 'pull-out',
    label: 'Pull-Out',
    description: 'Opposite of push-in; backs away to reveal the broader context or create emotional distance.',
    category: 'Linear Camera Movement'
  },

  // 🔁 ROTATIONAL CAMERA MOVEMENT (CAMERA ROTATES IN PLACE)
  {
    value: 'pan-left',
    label: 'Pan Left',
    description: 'Horizontal rotation to the left on a tripod base. Used to reveal information, follow a moving subject, or transition across space.',
    category: 'Rotational Camera Movement'
  },
  {
    value: 'pan-right',
    label: 'Pan Right',
    description: 'Horizontal rotation to the right on a tripod base. Used to reveal information, follow a moving subject, or transition across space.',
    category: 'Rotational Camera Movement'
  },
  {
    value: 'tilt-up',
    label: 'Tilt Up',
    description: 'Vertical rotation upward on a tripod. Often used to reveal height, create awe, or show vertical motion.',
    category: 'Rotational Camera Movement'
  },
  {
    value: 'tilt-down',
    label: 'Tilt Down',
    description: 'Vertical rotation downward on a tripod. Often used to reveal depth, create intimacy, or show vertical motion.',
    category: 'Rotational Camera Movement'
  },
  {
    value: 'swish-pan-left',
    label: 'Swish Pan Left',
    description: 'Very fast pan to the left creating blur and motion streaks. Used for action, urgency, or transitions.',
    category: 'Rotational Camera Movement'
  },
  {
    value: 'swish-pan-right',
    label: 'Swish Pan Right',
    description: 'Very fast pan to the right creating blur and motion streaks. Used for action, urgency, or transitions.',
    category: 'Rotational Camera Movement'
  },
  {
    value: 'dutch-tilt-left',
    label: 'Dutch Tilt Left',
    description: 'Camera is tilted counterclockwise on the z-axis. Creates unease, instability, or tension.',
    category: 'Rotational Camera Movement'
  },
  {
    value: 'dutch-tilt-right',
    label: 'Dutch Tilt Right',
    description: 'Camera is tilted clockwise on the z-axis. Creates unease, instability, or tension.',
    category: 'Rotational Camera Movement'
  },
  {
    value: 'roll-left',
    label: 'Roll Left',
    description: 'Camera rotates counterclockwise along the lens axis. Rare; used for disorientation or stylized shots.',
    category: 'Rotational Camera Movement'
  },
  {
    value: 'roll-right',
    label: 'Roll Right',
    description: 'Camera rotates clockwise along the lens axis. Rare; used for disorientation or stylized shots.',
    category: 'Rotational Camera Movement'
  },

  // 🌀 COMBINED OR COMPLEX MOVEMENTS
  {
    value: 'arc-shot-left',
    label: 'Arc Shot Left',
    description: 'Camera moves in a semi-circle to the left around the subject, often combined with pan. Adds elegance or dynamic energy.',
    category: 'Combined or Complex Movements'
  },
  {
    value: 'arc-shot-right',
    label: 'Arc Shot Right',
    description: 'Camera moves in a semi-circle to the right around the subject, often combined with pan. Adds elegance or dynamic energy.',
    category: 'Combined or Complex Movements'
  },
  {
    value: '360-shot-clockwise',
    label: '360° Shot Clockwise',
    description: 'Full circular movement clockwise around a subject. Common in epic or introspective scenes.',
    category: 'Combined or Complex Movements'
  },
  {
    value: '360-shot-counterclockwise',
    label: '360° Shot Counterclockwise',
    description: 'Full circular movement counterclockwise around a subject. Common in epic or introspective scenes.',
    category: 'Combined or Complex Movements'
  },
  {
    value: 'dolly-zoom-in',
    label: 'Dolly Zoom In (Zolly)',
    description: 'Zoom lens zooms in while dolly moves backward. Keeps subject size the same but warps background. Creates a disorienting, surreal effect.',
    category: 'Combined or Complex Movements'
  },
  {
    value: 'dolly-zoom-out',
    label: 'Dolly Zoom Out (Vertigo Shot)',
    description: 'Zoom lens zooms out while dolly moves forward. Keeps subject size the same but warps background. Creates a disorienting, surreal effect.',
    category: 'Combined or Complex Movements'
  },
  {
    value: 'parallax-left',
    label: 'Parallax Movement Left',
    description: 'Camera moves sideways to the left at a different speed than foreground/background. Highlights spatial depth.',
    category: 'Combined or Complex Movements'
  },
  {
    value: 'parallax-right',
    label: 'Parallax Movement Right',
    description: 'Camera moves sideways to the right at a different speed than foreground/background. Highlights spatial depth.',
    category: 'Combined or Complex Movements'
  },

  // 🧍‍♂️ CAMERA + SUBJECT COORDINATION
  {
    value: 'follow-shot',
    label: 'Follow Shot',
    description: 'Camera follows behind or beside the subject, maintaining distance. Used to immerse viewer in the character\'s POV.',
    category: 'Camera + Subject Coordination'
  },
  {
    value: 'lead-shot',
    label: 'Lead Shot',
    description: 'Camera moves ahead of the subject, leading them into the frame. Builds anticipation or creates dramatic tension.',
    category: 'Camera + Subject Coordination'
  },
  {
    value: 'tracking-behind',
    label: 'Tracking Behind',
    description: 'Follows directly from behind (e.g. walking down a hallway). Often used in thrillers or introspective scenes.',
    category: 'Camera + Subject Coordination'
  },
  {
    value: 'over-shoulder-follow',
    label: 'Over-the-Shoulder Follow',
    description: 'Combines tracking and OTS composition. Maintains a personal, human perspective.',
    category: 'Camera + Subject Coordination'
  },

  // 🧯 STABILIZED OR FLOATING MOVEMENTS
  {
    value: 'steadicam',
    label: 'Steadicam',
    description: 'Handheld but stabilized for smooth movement. Great for following action or navigating tight spaces fluidly.',
    category: 'Stabilized or Floating Movements'
  },
  {
    value: 'handheld',
    label: 'Handheld',
    description: 'Shot without stabilizer. Raw, shaky look. Creates realism, tension, or intimacy.',
    category: 'Stabilized or Floating Movements'
  },
  {
    value: 'gimbal-shot',
    label: 'Gimbal Shot',
    description: 'Smooth electronic stabilization. Often drone-like or action-oriented.',
    category: 'Stabilized or Floating Movements'
  },
  {
    value: 'shoulder-rig',
    label: 'Shoulder Rig',
    description: 'More stable than handheld, but not fully smooth. Gives controlled shake.',
    category: 'Stabilized or Floating Movements'
  },

  // 🚁 AERIAL & REMOTE MOVEMENTS
  {
    value: 'drone-shot',
    label: 'Drone Shot',
    description: 'Flying camera capturing overhead or sweeping aerial views. Establishes scale or geography.',
    category: 'Aerial & Remote Movements'
  },
  {
    value: 'overhead-tracking',
    label: 'Overhead Tracking',
    description: 'Drone or crane follows subject from directly above. Abstract, video-game-like perspective.',
    category: 'Aerial & Remote Movements'
  },
  {
    value: 'cable-cam',
    label: 'Cable Cam',
    description: 'Camera glides along pre-strung cables, often in sports or concerts. High-speed, linear, and smooth.',
    category: 'Aerial & Remote Movements'
  },

  // 🧪 SPECIALTY MOVEMENTS
  {
    value: 'snorricam',
    label: 'Snorricam',
    description: 'Camera rigged directly to actor\'s body. Keeps face stable while background moves chaotically. Disorienting.',
    category: 'Specialty Movements'
  },
  {
    value: 'hyperlapse',
    label: 'Time-Lapse with Movement (Hyperlapse)',
    description: 'Time-lapse with camera movement. Condenses time and motion into a surreal visual.',
    category: 'Specialty Movements'
  },
  {
    value: 'zoom-in',
    label: 'Zoom In',
    description: 'Optical zoom changes focal length to zoom in (not physical movement). Isolated subject emphasis.',
    category: 'Specialty Movements'
  },
  {
    value: 'zoom-out',
    label: 'Zoom Out',
    description: 'Optical zoom changes focal length to zoom out (not physical movement). Reveals broader context.',
    category: 'Specialty Movements'
  },
  {
    value: 'rack-focus-motion',
    label: 'Rack Focus with Motion',
    description: 'Focus changes during a camera move—directs attention across space.',
    category: 'Specialty Movements'
  },
  {
    value: 'virtual-dolly',
    label: 'Virtual Dolly / Digital Push',
    description: 'Done in post-production by scaling footage (common in AI & digital). Simulates movement without real camera motion.',
    category: 'Specialty Movements'
  },
  {
    value: 'locked-off',
    label: 'Locked-Off / Static',
    description: 'Camera remains completely stationary on tripod. No movement. Used for stable, controlled shots.',
    category: 'Stabilized or Floating Movements'
  }
]

// Group camera motions by category for easier organization
export const CAMERA_MOTIONS_BY_CATEGORY = CAMERA_MOTIONS.reduce((acc, motion) => {
  if (!acc[motion.category]) {
    acc[motion.category] = []
  }
  acc[motion.category].push(motion)
  return acc
}, {} as Record<string, CameraMotion[]>)

// Get all camera motion values for the select options
export const CAMERA_MOTION_OPTIONS = CAMERA_MOTIONS.map(motion => motion.value)

// Helper function to find camera motion by value
export const findCameraMotion = (value: string): CameraMotion | undefined => {
  return CAMERA_MOTIONS.find(motion => motion.value === value)
}
