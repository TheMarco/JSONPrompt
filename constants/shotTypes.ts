export interface ShotType {
  value: string
  label: string
  description: string
  category: string
}

// Category display names with emojis
export const CATEGORY_DISPLAY_NAMES: Record<string, string> = {
  'Framing Based on Subject Size': '🧍‍♂️ Framing Based on Subject Size',
  'Camera Movement Shots': '🔁 Camera Movement Shots',
  'Subject-Angle Based Shots': '👁️ Subject-Angle Based Shots',
  'Composition Based on Subject Relationship': '👯‍♂️ Composition Based on Subject Relationship',
  'Stylistic / Genre Shots': '🌀 Stylistic / Genre Shots',
  'Other Specialized Shots': '🎥 Other Specialized Shots'
}

export const SHOT_TYPES: ShotType[] = [
  // 🧍‍♂️ Framing Based on Subject Size
  {
    value: 'extreme-wide-shot',
    label: 'Extreme Wide Shot (EWS)',
    description: 'Subject is barely visible or not visible at all; establishes environment or scale. Often used as establishing shots.',
    category: 'Framing Based on Subject Size'
  },
  {
    value: 'wide-shot',
    label: 'Wide Shot (WS) / Long Shot (LS)',
    description: 'Full body of the subject is visible, head to toe. Places the subject in their environment.',
    category: 'Framing Based on Subject Size'
  },
  {
    value: 'medium-wide-shot',
    label: 'Medium Wide Shot (MWS)',
    description: 'Shows subject from roughly knees up. Balances subject and setting.',
    category: 'Framing Based on Subject Size'
  },
  {
    value: 'medium-shot',
    label: 'Medium Shot (MS)',
    description: 'Frames subject from waist up. Most common conversational shot.',
    category: 'Framing Based on Subject Size'
  },
  {
    value: 'medium-close-up',
    label: 'Medium Close-Up (MCU)',
    description: 'Frames from chest or shoulders up. Ideal for dialogue or emotional moments.',
    category: 'Framing Based on Subject Size'
  },
  {
    value: 'close-up',
    label: 'Close-Up (CU)',
    description: 'Focuses on the subject\'s face or detail. Shows emotion or significance.',
    category: 'Framing Based on Subject Size'
  },
  {
    value: 'extreme-close-up',
    label: 'Extreme Close-Up (ECU)',
    description: 'Frames a very small detail (eye, finger, object). Used for emphasis or tension.',
    category: 'Framing Based on Subject Size'
  },

  // 🔁 Camera Movement Shots
  {
    value: 'pan',
    label: 'Pan',
    description: 'Horizontal rotation of the camera from a fixed point.',
    category: 'Camera Movement Shots'
  },
  {
    value: 'tilt',
    label: 'Tilt',
    description: 'Vertical rotation from a fixed point.',
    category: 'Camera Movement Shots'
  },
  {
    value: 'zoom-in-out',
    label: 'Zoom In/Out',
    description: 'Lens zooms in or out; camera does not move. Creates artificial motion.',
    category: 'Camera Movement Shots'
  },
  {
    value: 'dolly-shot',
    label: 'Dolly Shot',
    description: 'Camera physically moves forward/backward on tracks or wheels.',
    category: 'Camera Movement Shots'
  },
  {
    value: 'tracking-shot',
    label: 'Tracking Shot / Trucking',
    description: 'Camera moves alongside the subject (left/right or forward).',
    category: 'Camera Movement Shots'
  },
  {
    value: 'crane-shot',
    label: 'Crane Shot',
    description: 'Camera moves vertically, often on a crane arm or jib.',
    category: 'Camera Movement Shots'
  },
  {
    value: 'steadicam-shot',
    label: 'Steadicam Shot',
    description: 'Smooth handheld movement using a stabilizer; allows mobility with stability.',
    category: 'Camera Movement Shots'
  },
  {
    value: 'handheld-shot',
    label: 'Handheld Shot',
    description: 'Camera is held by hand. Shaky, intimate, documentary feel.',
    category: 'Camera Movement Shots'
  },
  {
    value: 'push-in-pull-out',
    label: 'Push-In / Pull-Out',
    description: 'Camera physically moves in toward or away from the subject (dolly in/out).',
    category: 'Camera Movement Shots'
  },
  {
    value: 'whip-pan',
    label: 'Whip Pan / Swish Pan',
    description: 'Fast pan that creates blur, used for transitions or action.',
    category: 'Camera Movement Shots'
  },
  {
    value: 'arc-shot',
    label: 'Arc Shot',
    description: 'Camera moves in a semi-circle or full circle around the subject. Adds dynamism.',
    category: 'Camera Movement Shots'
  },
  {
    value: 'zolly',
    label: 'Zolly / Dolly Zoom',
    description: 'Dolly in while zooming out (or vice versa). Distorts perspective for dramatic effect.',
    category: 'Camera Movement Shots'
  },
  {
    value: '360-shot',
    label: '360° Shot',
    description: 'Full circle around subject or environment. Often immersive or stylistic.',
    category: 'Camera Movement Shots'
  },

  // 👁️ Subject-Angle Based Shots
  {
    value: 'eye-level',
    label: 'Eye-Level',
    description: 'Neutral, natural perspective.',
    category: 'Subject-Angle Based Shots'
  },
  {
    value: 'high-angle',
    label: 'High Angle',
    description: 'Looks down on the subject. Makes them look weak, vulnerable.',
    category: 'Subject-Angle Based Shots'
  },
  {
    value: 'low-angle',
    label: 'Low Angle',
    description: 'Looks up at subject. Makes them look powerful, dominant.',
    category: 'Subject-Angle Based Shots'
  },
  {
    value: 'birds-eye-view',
    label: 'Bird\'s Eye View / Overhead',
    description: 'Shot from directly above. Abstracts space.',
    category: 'Subject-Angle Based Shots'
  },
  {
    value: 'worms-eye-view',
    label: 'Worm\'s Eye View',
    description: 'Shot from directly below. Emphasizes height or grandeur.',
    category: 'Subject-Angle Based Shots'
  },
  {
    value: 'dutch-angle',
    label: 'Dutch Angle / Tilted Angle',
    description: 'Camera is slanted. Used to create unease or tension.',
    category: 'Subject-Angle Based Shots'
  },
  {
    value: 'over-the-shoulder',
    label: 'Over-the-Shoulder (OTS)',
    description: 'Shot from behind a character\'s shoulder. Common in conversations.',
    category: 'Subject-Angle Based Shots'
  },
  {
    value: 'point-of-view',
    label: 'Point-of-View (POV)',
    description: 'Shows what the character sees. Immersive.',
    category: 'Subject-Angle Based Shots'
  },
  {
    value: 'overhead-tracking',
    label: 'Overhead Tracking',
    description: 'Follows subject from above (e.g., drone style).',
    category: 'Subject-Angle Based Shots'
  },

  // 👯‍♂️ Composition Based on Subject Relationship
  {
    value: 'two-shot',
    label: 'Two-Shot',
    description: 'Two subjects in one frame, often during a dialogue.',
    category: 'Composition Based on Subject Relationship'
  },
  {
    value: 'group-shot',
    label: 'Group Shot',
    description: 'More than two people framed together.',
    category: 'Composition Based on Subject Relationship'
  },
  {
    value: 'insert-shot',
    label: 'Insert Shot',
    description: 'Close-up of a specific object or detail.',
    category: 'Composition Based on Subject Relationship'
  },
  {
    value: 'cut-in-cutaway',
    label: 'Cut-In / Cutaway',
    description: 'Close-up of something already in the scene (cut-in) or something outside the main action (cutaway).',
    category: 'Composition Based on Subject Relationship'
  },
  {
    value: 'reaction-shot',
    label: 'Reaction Shot',
    description: 'Shows a character\'s reaction to something off-screen.',
    category: 'Composition Based on Subject Relationship'
  },
  {
    value: 'reverse-shot',
    label: 'Reverse Shot',
    description: 'Opposite of the previous shot, often used in dialogue (e.g. shot/reverse shot).',
    category: 'Composition Based on Subject Relationship'
  },
  {
    value: 'establishing-shot',
    label: 'Establishing Shot',
    description: 'Wide or EWS used to set the scene\'s geography.',
    category: 'Composition Based on Subject Relationship'
  },
  {
    value: 'master-shot',
    label: 'Master Shot',
    description: 'Captures the entire scene from start to finish. Can cut back to this throughout.',
    category: 'Composition Based on Subject Relationship'
  },

  // 🌀 Stylistic / Genre Shots
  {
    value: 'mirror-shot',
    label: 'Mirror Shot',
    description: 'Subject seen in a mirror—used for reflection or duality.',
    category: 'Stylistic / Genre Shots'
  },
  {
    value: 'over-the-weapon',
    label: 'Over-the-Weapon / Gunsight Shot',
    description: 'POV through a weapon or scope. Common in action or thrillers.',
    category: 'Stylistic / Genre Shots'
  },
  {
    value: 'silhouette-shot',
    label: 'Silhouette Shot',
    description: 'Subject backlit and darkened. Creates mood or mystery.',
    category: 'Stylistic / Genre Shots'
  },
  {
    value: 'reflected-shot',
    label: 'Reflected Shot',
    description: 'Subject captured through glass, water, or mirrors. Often abstract or metaphorical.',
    category: 'Stylistic / Genre Shots'
  },
  {
    value: 'split-diopter',
    label: 'Split Diopter Shot',
    description: 'Both foreground and background are in sharp focus.',
    category: 'Stylistic / Genre Shots'
  },
  {
    value: 'rack-focus',
    label: 'Rack Focus / Focus Pull',
    description: 'Switches focus from one subject to another in the same shot.',
    category: 'Stylistic / Genre Shots'
  },
  {
    value: 'slow-motion',
    label: 'Slow Motion / Speed Ramp',
    description: 'Time is manipulated for emphasis or drama.',
    category: 'Stylistic / Genre Shots'
  },
  {
    value: 'drone-shot',
    label: 'Drone Shot / Aerial',
    description: 'High-altitude wide shots. Often used for establishing or epic scale.',
    category: 'Stylistic / Genre Shots'
  },

  // 🎥 Other Specialized Shots
  {
    value: 'time-lapse',
    label: 'Time-lapse',
    description: 'Captures change over time by speeding up footage.',
    category: 'Other Specialized Shots'
  },
  {
    value: 'long-take',
    label: 'Long Take / One-Take',
    description: 'No cuts; scene plays in real-time. Technically complex.',
    category: 'Other Specialized Shots'
  },
  {
    value: 'match-cut',
    label: 'Match Cut',
    description: 'Visual similarity links two shots across time or space.',
    category: 'Other Specialized Shots'
  },
  {
    value: 'jump-cut',
    label: 'Jump Cut',
    description: 'Abrupt cut forward in time. Often disorienting or stylized.',
    category: 'Other Specialized Shots'
  },
  {
    value: 'montage',
    label: 'Montage',
    description: 'Series of shots edited together to show passage of time or thematic progression.',
    category: 'Other Specialized Shots'
  },
  {
    value: 'tableau-shot',
    label: 'Tableau Shot',
    description: 'Composed like a painting. Stillness and framing are key.',
    category: 'Other Specialized Shots'
  },
  {
    value: 'overcranked-undercranked',
    label: 'Overcranked / Undercranked',
    description: 'Filmed faster/slower than normal for stylized effects.',
    category: 'Other Specialized Shots'
  },
  {
    value: 'reverse-motion',
    label: 'Reverse Motion',
    description: 'Action is played backward. Dreamlike or disorienting.',
    category: 'Other Specialized Shots'
  }
]

// Group shot types by category for easier organization
export const SHOT_TYPES_BY_CATEGORY = SHOT_TYPES.reduce((acc, shotType) => {
  if (!acc[shotType.category]) {
    acc[shotType.category] = []
  }
  acc[shotType.category].push(shotType)
  return acc
}, {} as Record<string, ShotType[]>)

// Get all shot type values for the select options
export const SHOT_TYPE_OPTIONS = SHOT_TYPES.map(shot => shot.value)

// Helper function to find shot type by value
export const findShotType = (value: string): ShotType | undefined => {
  return SHOT_TYPES.find(shot => shot.value === value)
}
