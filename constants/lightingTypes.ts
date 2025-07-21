export interface LightingType {
  value: string
  label: string
  description: string
  category: string
}

// Category display names with emojis
export const LIGHTING_CATEGORY_DISPLAY_NAMES: Record<string, string> = {
  'Three-Point Lighting Core': '🔺 By Function in the Lighting Setup (Three-Point Lighting Core)',
  'By Source Type': '🌞 By Source Type',
  'By Light Quality': '💡 By Light Quality (Hard vs Soft)',
  'By Direction': '🧭 By Direction (Where the Light Comes From)',
  'By Creative Effect': '🎨 By Creative or Narrative Effect',
  'By Specific Light Source': '🔌 By Specific Light Source / Gear',
  'Lighting Techniques': '🔄 Lighting Techniques and Styles'
}

export const LIGHTING_TYPES: LightingType[] = [
  // 🔺 BY FUNCTION IN THE LIGHTING SETUP (THREE-POINT LIGHTING CORE)
  {
    value: 'key-light',
    label: 'Key Light',
    description: 'The main light source. Positioned to define the subject\'s shape. Establishes the dominant mood and lighting direction.',
    category: 'Three-Point Lighting Core'
  },
  {
    value: 'fill-light',
    label: 'Fill Light',
    description: 'Softer light placed opposite the key light. Reduces shadows and balances exposure.',
    category: 'Three-Point Lighting Core'
  },
  {
    value: 'back-light',
    label: 'Back Light (Rim/Hair Light)',
    description: 'Positioned behind subject, sometimes above. Separates subject from background, adds depth and dimensionality.',
    category: 'Three-Point Lighting Core'
  },

  // 🌞 BY SOURCE TYPE
  {
    value: 'natural-light',
    label: 'Natural Light',
    description: 'Sunlight or ambient environmental light. Daylight scenes, documentary, realism. Often modified with reflectors or scrims.',
    category: 'By Source Type'
  },
  {
    value: 'practical-light',
    label: 'Practical Light',
    description: 'Visible light sources within the frame (e.g., lamps, TV screens, neon signs). Adds realism, aesthetic glow, or motivation to a scene.',
    category: 'By Source Type'
  },
  {
    value: 'ambient-light',
    label: 'Ambient Light',
    description: 'General background light present in the environment. Often uncontrolled and used to fill space subtly.',
    category: 'By Source Type'
  },
  {
    value: 'available-light',
    label: 'Available Light',
    description: 'Existing light in the location, without artificial additions. Guerrilla shooting, naturalism, documentary feel.',
    category: 'By Source Type'
  },
  {
    value: 'artificial-light',
    label: 'Artificial Light',
    description: 'Any intentionally placed lighting, like LED panels, HMIs, tungsten, or fluorescents. Controlled lighting setups. Used to shape, dramatize, or stylize.',
    category: 'By Source Type'
  },

  // 💡 BY LIGHT QUALITY (HARD VS SOFT)
  {
    value: 'hard-light',
    label: 'Hard Light',
    description: 'Creates strong shadows and crisp edges. Small source, or large source far away. Tension, drama, harshness, definition.',
    category: 'By Light Quality'
  },
  {
    value: 'soft-light',
    label: 'Soft Light',
    description: 'Diffused and even. Large source close to subject or through diffusion. Flattering, emotional, naturalistic.',
    category: 'By Light Quality'
  },
  {
    value: 'bounce-light',
    label: 'Bounce Light',
    description: 'Reflected off a surface (wall, ceiling, board) to soften and spread. Natural fill, subtle atmosphere.',
    category: 'By Light Quality'
  },
  {
    value: 'diffused-light',
    label: 'Diffused Light',
    description: 'Passed through a diffusion material like silk, softbox, or scrim. Controlled softness with consistent quality.',
    category: 'By Light Quality'
  },

  // 🧭 BY DIRECTION (WHERE THE LIGHT COMES FROM)
  {
    value: 'side-light',
    label: 'Side Light',
    description: 'From left or right of subject. Sculpting facial features, adding mystery or tension.',
    category: 'By Direction'
  },
  {
    value: 'top-light',
    label: 'Top Light',
    description: 'From directly overhead. Moody, intimidating, unnatural—used in interrogation or noir.',
    category: 'By Direction'
  },
  {
    value: 'underlight',
    label: 'Underlight / Uplight',
    description: 'From below subject. Horror effect, unnatural or eerie tone.',
    category: 'By Direction'
  },
  {
    value: 'backlight',
    label: 'Backlight',
    description: 'Behind subject, facing camera. Silhouettes, halos, dramatic separation.',
    category: 'By Direction'
  },
  {
    value: 'front-light',
    label: 'Front Light',
    description: 'Head-on lighting. Flattens features. Used for news, interviews, or beauty.',
    category: 'By Direction'
  },
  {
    value: 'high-angle-light',
    label: 'High-Angle Light',
    description: 'Light at 45–60 degrees down onto subject. Classic portrait lighting. Natural-looking shadows.',
    category: 'By Direction'
  },
  {
    value: 'low-angle-light',
    label: 'Low-Angle Light',
    description: 'Light coming up from below. Distortion and unease. Often used in horror and experimental scenes.',
    category: 'By Direction'
  },

  // 🎨 BY CREATIVE OR NARRATIVE EFFECT
  {
    value: 'high-key-lighting',
    label: 'High Key Lighting',
    description: 'Bright, evenly lit with minimal shadows. Comedy, romance, commercials, feel-good films.',
    category: 'By Creative Effect'
  },
  {
    value: 'low-key-lighting',
    label: 'Low Key Lighting',
    description: 'Dominated by shadows, with high contrast and minimal fill. Drama, thrillers, noir, mystery.',
    category: 'By Creative Effect'
  },
  {
    value: 'chiaroscuro-lighting',
    label: 'Chiaroscuro Lighting',
    description: 'Dramatic interplay of light and shadow, often with harsh contrast. Rembrandt-style. Used for visual drama and moral duality.',
    category: 'By Creative Effect'
  },
  {
    value: 'motivated-lighting',
    label: 'Motivated Lighting',
    description: 'Light sources are justified by elements in the scene (e.g., a lamp lights a character). Realism, immersion.',
    category: 'By Creative Effect'
  },
  {
    value: 'stylized-lighting',
    label: 'Stylized Lighting',
    description: 'Colored gels, harsh angles, or unnatural light sources. Sci-fi, fantasy, music videos, or dreamlike sequences.',
    category: 'By Creative Effect'
  },
  {
    value: 'silhouette-lighting',
    label: 'Silhouette Lighting',
    description: 'Strong backlight with no front light. Subject appears dark. Isolation, mystery, or iconic visuals.',
    category: 'By Creative Effect'
  },
  {
    value: 'color-wash-lighting',
    label: 'Color Wash / Gel Lighting',
    description: 'Uses gels or RGB LEDs to color the entire scene or background. Music videos, stylized narrative beats.',
    category: 'By Creative Effect'
  },
  {
    value: 'strobe-lighting',
    label: 'Strobe Lighting',
    description: 'Pulsing flashes of light. Club scenes, chaos, psychological breakdowns.',
    category: 'By Creative Effect'
  },
  {
    value: 'specular-lighting',
    label: 'Specular Lighting',
    description: 'Hard reflections, especially on shiny surfaces. Used in fashion, luxury, or water scenes.',
    category: 'By Creative Effect'
  },

  // 🔌 BY SPECIFIC LIGHT SOURCE / GEAR
  {
    value: 'led-panels',
    label: 'LED Panels',
    description: 'Lightweight, energy-efficient, often dimmable. All-purpose lighting; softboxes can be attached.',
    category: 'By Specific Light Source'
  },
  {
    value: 'fresnel-light',
    label: 'Fresnel Light',
    description: 'Focusable spotlight with adjustable beam angle. Theater, classic cinema look, precise control.',
    category: 'By Specific Light Source'
  },
  {
    value: 'hmi-light',
    label: 'HMI (Hydrargyrum Medium-Arc Iodide)',
    description: 'Extremely bright daylight-balanced lights. Exterior or high-intensity daylight replacement.',
    category: 'By Specific Light Source'
  },
  {
    value: 'tungsten-lights',
    label: 'Tungsten Lights',
    description: 'Warm, orange-balanced lights (~3200K). Traditional film lighting, warm indoor look.',
    category: 'By Specific Light Source'
  },
  {
    value: 'kino-flo',
    label: 'Kino Flo (Fluorescent Tubes)',
    description: 'Soft, color-accurate fluorescent lights. Interviews, beauty shots, low-heat environments.',
    category: 'By Specific Light Source'
  },
  {
    value: 'ring-light',
    label: 'Ring Light',
    description: 'Circular light source, often around the lens. Beauty shots, vloggers, flattering fill.',
    category: 'By Specific Light Source'
  },
  {
    value: 'china-ball',
    label: 'China Ball / Lantern Light',
    description: 'Paper or fabric globes that emit soft, omnidirectional light. Indie film, interiors, naturalistic soft light.',
    category: 'By Specific Light Source'
  },
  {
    value: 'ellipsoidal',
    label: 'Ellipsoidal (LEKO)',
    description: 'Theatrical light with sharp beam control. Background projections, stage look.',
    category: 'By Specific Light Source'
  },
  {
    value: 'practical-led-strips',
    label: 'Practical LED Strips / Tubes',
    description: 'RGB lights like Aputure Tube or Astera. Neon, sci-fi, stylized interiors.',
    category: 'By Specific Light Source'
  },

  // 🔄 LIGHTING TECHNIQUES AND STYLES
  {
    value: 'cross-lighting',
    label: 'Cross Lighting',
    description: 'Two lights from opposite angles—minimizes shadows.',
    category: 'Lighting Techniques'
  },
  {
    value: 'book-lighting',
    label: 'Book Lighting',
    description: 'Bounce light into a surface then through diffusion. Ultra-soft, cinematic.',
    category: 'Lighting Techniques'
  },
  {
    value: 'rembrandt-lighting',
    label: 'Rembrandt Lighting',
    description: 'Triangle of light under eye on shadow side. Portrait classic.',
    category: 'Lighting Techniques'
  },
  {
    value: 'butterfly-lighting',
    label: 'Butterfly Lighting',
    description: 'Top-front light casting butterfly-shaped shadow under nose. Glamour lighting.',
    category: 'Lighting Techniques'
  },
  {
    value: 'split-lighting',
    label: 'Split Lighting',
    description: 'Half of face in shadow, half in light. Dramatic and intense.',
    category: 'Lighting Techniques'
  },
  {
    value: 'loop-lighting',
    label: 'Loop Lighting',
    description: 'Light creates small nose shadow on opposite cheek. Balanced portrait style.',
    category: 'Lighting Techniques'
  }
]

// Group lighting types by category for easier organization
export const LIGHTING_TYPES_BY_CATEGORY = LIGHTING_TYPES.reduce((acc, lighting) => {
  if (!acc[lighting.category]) {
    acc[lighting.category] = []
  }
  acc[lighting.category].push(lighting)
  return acc
}, {} as Record<string, LightingType[]>)

// Get all lighting type values for the select options
export const LIGHTING_TYPE_OPTIONS = LIGHTING_TYPES.map(lighting => lighting.value)

// Helper function to find lighting type by value
export const findLightingType = (value: string): LightingType | undefined => {
  return LIGHTING_TYPES.find(lighting => lighting.value === value)
}
