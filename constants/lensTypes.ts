export interface LensType {
  value: string
  label: string
  description: string
  category: string
  focalLength?: string
}

// Category display names with emojis
export const LENS_CATEGORY_DISPLAY_NAMES: Record<string, string> = {
  'By Focal Length': '🔢 By Focal Length',
  'By Optical Behavior': '🌀 By Optical Behavior / Special Purpose',
  'By Subjective Use': '👁️ By Subjective Use / Narrative Effect',
  'Lens-Driven Techniques': '💡 Lens-Driven Storytelling Techniques'
}

export const LENS_TYPES: LensType[] = [
  // 🔢 BY FOCAL LENGTH
  {
    value: 'ultra-wide-8mm',
    label: 'Ultra Wide Lens (8mm)',
    description: 'Extremely wide FOV. Exaggerates depth and perspective. Often used for surrealism, dream sequences, or spatial distortion.',
    category: 'By Focal Length',
    focalLength: '8mm'
  },
  {
    value: 'ultra-wide-10mm',
    label: 'Ultra Wide Lens (10mm)',
    description: 'Extremely wide FOV. Exaggerates depth and perspective. Often used for surrealism, dream sequences, or spatial distortion.',
    category: 'By Focal Length',
    focalLength: '10mm'
  },
  {
    value: 'ultra-wide-14mm',
    label: 'Ultra Wide Lens (14mm)',
    description: 'Extremely wide FOV. Exaggerates depth and perspective. Often used for surrealism, dream sequences, or spatial distortion.',
    category: 'By Focal Length',
    focalLength: '14mm'
  },
  {
    value: 'wide-angle-14mm',
    label: 'Wide-Angle Lens (14mm)',
    description: 'Broad FOV. Emphasizes foreground, exaggerates spatial relationships. Used for establishing shots, landscapes, or dynamic interiors.',
    category: 'By Focal Length',
    focalLength: '14mm'
  },
  {
    value: 'wide-angle-18mm',
    label: 'Wide-Angle Lens (18mm)',
    description: 'Broad FOV. Emphasizes foreground, exaggerates spatial relationships. Used for establishing shots, landscapes, or dynamic interiors.',
    category: 'By Focal Length',
    focalLength: '18mm'
  },
  {
    value: 'wide-angle-24mm',
    label: 'Wide-Angle Lens (24mm)',
    description: 'Broad FOV. Emphasizes foreground, exaggerates spatial relationships. Used for establishing shots, landscapes, or dynamic interiors.',
    category: 'By Focal Length',
    focalLength: '24mm'
  },
  {
    value: 'wide-angle-28mm',
    label: 'Wide-Angle Lens (28mm)',
    description: 'Broad FOV. Emphasizes foreground, exaggerates spatial relationships. Used for establishing shots, landscapes, or dynamic interiors.',
    category: 'By Focal Length',
    focalLength: '28mm'
  },
  {
    value: 'wide-angle-35mm',
    label: 'Wide-Angle Lens (35mm)',
    description: 'Broad FOV. Emphasizes foreground, exaggerates spatial relationships. Used for establishing shots, landscapes, or dynamic interiors.',
    category: 'By Focal Length',
    focalLength: '35mm'
  },
  {
    value: 'standard-lens-35mm',
    label: 'Standard Lens (35mm)',
    description: 'Natural perspective (closest to human eye). Neutral depth and proportions. Go-to lens for handheld scenes, dialogue, and realism.',
    category: 'By Focal Length',
    focalLength: '35mm'
  },
  {
    value: 'standard-lens-40mm',
    label: 'Standard Lens (40mm)',
    description: 'Natural perspective (closest to human eye). Neutral depth and proportions. Go-to lens for handheld scenes, dialogue, and realism.',
    category: 'By Focal Length',
    focalLength: '40mm'
  },
  {
    value: 'standard-lens-50mm',
    label: 'Standard Lens (50mm)',
    description: 'Natural perspective (closest to human eye). Neutral depth and proportions. Go-to lens for handheld scenes, dialogue, and realism.',
    category: 'By Focal Length',
    focalLength: '50mm'
  },
  {
    value: 'portrait-lens-50mm',
    label: 'Portrait Lens (50mm)',
    description: 'Slight compression, flattering subject rendering. Used for close-ups and medium shots with soft backgrounds.',
    category: 'By Focal Length',
    focalLength: '50mm'
  },
  {
    value: 'portrait-lens-65mm',
    label: 'Portrait Lens (65mm)',
    description: 'Slight compression, flattering subject rendering. Used for close-ups and medium shots with soft backgrounds.',
    category: 'By Focal Length',
    focalLength: '65mm'
  },
  {
    value: 'portrait-lens-85mm',
    label: 'Portrait Lens (85mm)',
    description: 'Slight compression, flattering subject rendering. Used for close-ups and medium shots with soft backgrounds.',
    category: 'By Focal Length',
    focalLength: '85mm'
  },
  {
    value: 'telephoto-85mm',
    label: 'Telephoto Lens (85mm)',
    description: 'Narrow FOV. Compresses depth—background appears closer. Isolates subject. Great for emotional close-ups, action, surveillance.',
    category: 'By Focal Length',
    focalLength: '85mm'
  },
  {
    value: 'telephoto-100mm',
    label: 'Telephoto Lens (100mm)',
    description: 'Narrow FOV. Compresses depth—background appears closer. Isolates subject. Great for emotional close-ups, action, surveillance.',
    category: 'By Focal Length',
    focalLength: '100mm'
  },
  {
    value: 'telephoto-135mm',
    label: 'Telephoto Lens (135mm)',
    description: 'Narrow FOV. Compresses depth—background appears closer. Isolates subject. Great for emotional close-ups, action, surveillance.',
    category: 'By Focal Length',
    focalLength: '135mm'
  },
  {
    value: 'telephoto-200mm',
    label: 'Telephoto Lens (200mm)',
    description: 'Narrow FOV. Compresses depth—background appears closer. Isolates subject. Great for emotional close-ups, action, surveillance.',
    category: 'By Focal Length',
    focalLength: '200mm'
  },
  {
    value: 'super-telephoto-200mm',
    label: 'Super Telephoto Lens (200mm)',
    description: 'Extreme compression. Used for nature shots, spy-like surveillance, or distant object focus.',
    category: 'By Focal Length',
    focalLength: '200mm'
  },
  {
    value: 'super-telephoto-300mm',
    label: 'Super Telephoto Lens (300mm)',
    description: 'Extreme compression. Used for nature shots, spy-like surveillance, or distant object focus.',
    category: 'By Focal Length',
    focalLength: '300mm'
  },
  {
    value: 'super-telephoto-400mm',
    label: 'Super Telephoto Lens (400mm)',
    description: 'Extreme compression. Used for nature shots, spy-like surveillance, or distant object focus.',
    category: 'By Focal Length',
    focalLength: '400mm'
  },
  {
    value: 'super-telephoto-600mm',
    label: 'Super Telephoto Lens (600mm)',
    description: 'Extreme compression. Used for nature shots, spy-like surveillance, or distant object focus.',
    category: 'By Focal Length',
    focalLength: '600mm'
  },

  // 🌀 BY OPTICAL BEHAVIOR / SPECIAL PURPOSE
  {
    value: 'zoom-lens-24-70mm',
    label: 'Zoom Lens (24-70mm)',
    description: 'Variable focal length. Allows in-shot zooming. Flexible, but can be heavier and less optically pure than primes.',
    category: 'By Optical Behavior',
    focalLength: '24-70mm'
  },
  {
    value: 'zoom-lens-70-200mm',
    label: 'Zoom Lens (70-200mm)',
    description: 'Variable focal length. Allows in-shot zooming. Flexible, but can be heavier and less optically pure than primes.',
    category: 'By Optical Behavior',
    focalLength: '70-200mm'
  },
  {
    value: 'zoom-lens-18-55mm',
    label: 'Zoom Lens (18-55mm)',
    description: 'Variable focal length. Allows in-shot zooming. Flexible, but can be heavier and less optically pure than primes.',
    category: 'By Optical Behavior',
    focalLength: '18-55mm'
  },
  {
    value: 'prime-lens-35mm',
    label: 'Prime Lens (35mm)',
    description: 'Fixed focal length. Superior sharpness and bokeh. Encourages deliberate framing and movement.',
    category: 'By Optical Behavior',
    focalLength: '35mm'
  },
  {
    value: 'prime-lens-50mm',
    label: 'Prime Lens (50mm)',
    description: 'Fixed focal length. Superior sharpness and bokeh. Encourages deliberate framing and movement.',
    category: 'By Optical Behavior',
    focalLength: '50mm'
  },
  {
    value: 'prime-lens-85mm',
    label: 'Prime Lens (85mm)',
    description: 'Fixed focal length. Superior sharpness and bokeh. Encourages deliberate framing and movement.',
    category: 'By Optical Behavior',
    focalLength: '85mm'
  },
  {
    value: 'anamorphic-lens',
    label: 'Anamorphic Lens',
    description: 'Squeezes image horizontally for widescreen aspect ratios (e.g. 2.35:1). Characterized by horizontal lens flares, oval bokeh, and cinematic distortion.',
    category: 'By Optical Behavior'
  },
  {
    value: 'fisheye-lens-8mm',
    label: 'Fisheye Lens (8mm)',
    description: 'Extreme ultra-wide lens. Produces circular, curved distortion. Stylized, rarely used in narrative—great for dream, drug, or surreal POV.',
    category: 'By Optical Behavior',
    focalLength: '8mm'
  },
  {
    value: 'fisheye-lens-16mm',
    label: 'Fisheye Lens (16mm)',
    description: 'Extreme ultra-wide lens. Produces circular, curved distortion. Stylized, rarely used in narrative—great for dream, drug, or surreal POV.',
    category: 'By Optical Behavior',
    focalLength: '16mm'
  },
  {
    value: 'tilt-shift-lens',
    label: 'Tilt-Shift Lens',
    description: 'Allows for selective plane of focus. Used for miniaturization effects, architectural shots, or artistic focus manipulation.',
    category: 'By Optical Behavior'
  },
  {
    value: 'macro-lens-60mm',
    label: 'Macro Lens (60mm)',
    description: 'Designed for extreme close-ups with high detail and minimal distortion. Insects, textures, eyeballs, etc.',
    category: 'By Optical Behavior',
    focalLength: '60mm'
  },
  {
    value: 'macro-lens-100mm',
    label: 'Macro Lens (100mm)',
    description: 'Designed for extreme close-ups with high detail and minimal distortion. Insects, textures, eyeballs, etc.',
    category: 'By Optical Behavior',
    focalLength: '100mm'
  },
  {
    value: 'split-diopter-lens',
    label: 'Split Diopter Lens',
    description: 'Allows two planes (foreground and background) to be in sharp focus at once. Used in psychological thrillers or dramatic splits (e.g., Jaws, Mission: Impossible).',
    category: 'By Optical Behavior'
  },

  // 👁️ BY SUBJECTIVE USE / NARRATIVE EFFECT
  {
    value: 'character-pov-lens-35mm',
    label: 'Character POV Lens (35mm)',
    description: 'Typically 35–50mm with shallow DOF. Matches human field of view for immersive shots.',
    category: 'By Subjective Use',
    focalLength: '35mm'
  },
  {
    value: 'character-pov-lens-50mm',
    label: 'Character POV Lens (50mm)',
    description: 'Typically 35–50mm with shallow DOF. Matches human field of view for immersive shots.',
    category: 'By Subjective Use',
    focalLength: '50mm'
  },
  {
    value: 'surveillance-lens',
    label: 'Surveillance Lens',
    description: 'Long telephoto lens with handheld or stabilized look. Creates voyeurism or tension.',
    category: 'By Subjective Use'
  },
  {
    value: 'dream-lens',
    label: 'Dream Lens',
    description: 'Often wide with bloom, soft focus, or color filters. Used to create ethereal, non-reality feel.',
    category: 'By Subjective Use'
  },
  {
    value: 'action-lens-18mm',
    label: 'Action Lens (18mm)',
    description: 'Wide (18–35mm), fast aperture, lightweight. Keeps the audience close to chaos without distortion.',
    category: 'By Subjective Use',
    focalLength: '18mm'
  },
  {
    value: 'action-lens-24mm',
    label: 'Action Lens (24mm)',
    description: 'Wide (18–35mm), fast aperture, lightweight. Keeps the audience close to chaos without distortion.',
    category: 'By Subjective Use',
    focalLength: '24mm'
  },
  {
    value: 'action-lens-35mm',
    label: 'Action Lens (35mm)',
    description: 'Wide (18–35mm), fast aperture, lightweight. Keeps the audience close to chaos without distortion.',
    category: 'By Subjective Use',
    focalLength: '35mm'
  },
  {
    value: 'documentary-lens-24mm',
    label: 'Documentary Lens (24mm)',
    description: '24–50mm with image stabilization. Neutral, reactive, observational storytelling.',
    category: 'By Subjective Use',
    focalLength: '24mm'
  },
  {
    value: 'documentary-lens-35mm',
    label: 'Documentary Lens (35mm)',
    description: '24–50mm with image stabilization. Neutral, reactive, observational storytelling.',
    category: 'By Subjective Use',
    focalLength: '35mm'
  },
  {
    value: 'documentary-lens-50mm',
    label: 'Documentary Lens (50mm)',
    description: '24–50mm with image stabilization. Neutral, reactive, observational storytelling.',
    category: 'By Subjective Use',
    focalLength: '50mm'
  },
  {
    value: 'vintage-lens',
    label: 'Vintage Lens',
    description: 'Lenses with intentional imperfections (flaring, color fringing, soft edges). Used to evoke nostalgia or past eras.',
    category: 'By Subjective Use'
  },

  // 💡 LENS-DRIVEN STORYTELLING TECHNIQUES
  {
    value: 'rack-focus-technique',
    label: 'Rack Focus',
    description: 'Switching focus from one subject plane to another during a shot. Used for shifting attention and emotional reveals.',
    category: 'Lens-Driven Techniques'
  },
  {
    value: 'zolly-technique',
    label: 'Zolly / Dolly Zoom',
    description: 'Combination of zoom + dolly in/out. Creates psychological tension and disorientation.',
    category: 'Lens-Driven Techniques'
  },
  {
    value: 'lens-breathing-technique',
    label: 'Lens Breathing',
    description: 'Slight shift in field of view during focus pull (more prominent on some lenses). Can be used for subconscious intensity or naturalism.',
    category: 'Lens-Driven Techniques'
  },
  {
    value: 'flare-usage-anamorphic',
    label: 'Flare Usage (Anamorphic)',
    description: 'Flare-prone anamorphic lenses. Adds mood, rawness, or spectacle with horizontal flares.',
    category: 'Lens-Driven Techniques'
  },
  {
    value: 'flare-usage-vintage',
    label: 'Flare Usage (Vintage)',
    description: 'Flare-prone vintage lenses. Adds mood, rawness, or spectacle with organic, imperfect flares.',
    category: 'Lens-Driven Techniques'
  }
]

// Group lens types by category for easier organization
export const LENS_TYPES_BY_CATEGORY = LENS_TYPES.reduce((acc, lens) => {
  if (!acc[lens.category]) {
    acc[lens.category] = []
  }
  acc[lens.category].push(lens)
  return acc
}, {} as Record<string, LensType[]>)

// Get all lens type values for the select options
export const LENS_TYPE_OPTIONS = LENS_TYPES.map(lens => lens.value)

// Helper function to find lens type by value
export const findLensType = (value: string): LensType | undefined => {
  return LENS_TYPES.find(lens => lens.value === value)
}
