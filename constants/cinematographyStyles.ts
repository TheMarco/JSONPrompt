export interface CinematographyStyle {
  value: string
  label: string
  description: string
  visualTrademarks: string
  mood: string
  useCase: string
  examples: string
}

export const CINEMATOGRAPHY_STYLES: CinematographyStyle[] = [
  {
    value: 'naturalistic-realism',
    label: '🧱 Naturalistic / Realism',
    description: 'Mimics the way the eye sees the world. Lighting is soft and unobtrusive. Camera is often handheld or static.',
    visualTrademarks: 'Neutral color grading, ambient sound, minimal camera movement.',
    mood: 'Intimate, grounded, understated.',
    useCase: 'Drama, indie, slice-of-life, documentary-style fiction.',
    examples: 'Nomadland, Manchester by the Sea, The Florida Project'
  },
  {
    value: 'expressionism-stylized',
    label: '🌑 Expressionism / Stylized Lighting',
    description: 'Visuals express the character\'s internal world. Shadows, distortion, and exaggerated color are common.',
    visualTrademarks: 'Harsh lighting, surreal set design, deep contrast.',
    mood: 'Psychological, surreal, intense.',
    useCase: 'Horror, thrillers, art films, music videos.',
    examples: 'The Cabinet of Dr. Caligari, Suspiria (2018), Sin City'
  },
  {
    value: 'color-theory-driven',
    label: '🎨 Color Theory–Driven',
    description: 'Uses color as a narrative and emotional tool, often highly controlled in costume, lighting, and production design.',
    visualTrademarks: 'Monochromatic palettes, complementary colors, saturated or desaturated tones.',
    mood: 'Varies based on palette. Emotionally loaded visuals.',
    useCase: 'Music videos, arthouse, auteur cinema.',
    examples: 'In the Mood for Love, Her, The Grand Budapest Hotel'
  },
  {
    value: 'classic-hollywood',
    label: '🎥 Classic Hollywood (Continuity Style)',
    description: 'Clear, invisible camera work designed to serve storytelling without drawing attention to itself.',
    visualTrademarks: 'Shot/reverse shot, master shot, 3-point lighting, smooth cuts.',
    mood: 'Polished, timeless, narrative-forward.',
    useCase: 'Mainstream drama, romance, biopics, prestige films.',
    examples: 'Casablanca, Forrest Gump, The King\'s Speech'
  },
  {
    value: 'film-noir',
    label: '🕶️ Film Noir / Neo-Noir',
    description: 'High-contrast lighting, pessimistic tone, morally ambiguous characters.',
    visualTrademarks: 'Low-key lighting, Venetian blinds shadows, dutch angles, rain-soaked streets.',
    mood: 'Cynical, brooding, stylish.',
    useCase: 'Crime, mystery, thrillers.',
    examples: 'Double Indemnity, Blade Runner, Drive'
  },
  {
    value: 'documentary-cinema-verite',
    label: '📸 Documentary / Cinéma Vérité',
    description: 'Observational and immersive. No visible artifice. Often shot with available light and handheld cameras.',
    visualTrademarks: 'Grainy image, natural sound, direct address to camera (sometimes).',
    mood: 'Raw, intimate, grounded.',
    useCase: 'Documentaries, docudrama, mockumentary, hybrid fiction.',
    examples: 'The Act of Killing, City of God, United 93'
  },
  {
    value: 'surrealist-dreamlike',
    label: '🌀 Surrealist / Dreamlike',
    description: 'Abandons realism to explore the unconscious or abstract. Often uses slow motion, non-linear time, and symbolic imagery.',
    visualTrademarks: 'Fog, floating camera, symmetry, unmotivated camera moves.',
    mood: 'Ethereal, disorienting, poetic.',
    useCase: 'Experimental films, dream sequences, fantasy.',
    examples: 'Eraserhead, The Tree of Life, The Mirror (Tarkovsky)'
  },
  {
    value: 'minimalist-static',
    label: '📖 Minimalist / Static Composition',
    description: 'Stripped-down visuals, often with long takes, minimal movement, and precise framing.',
    visualTrademarks: 'Wide shots, locked-off camera, negative space, minimal editing.',
    mood: 'Reflective, patient, often isolating.',
    useCase: 'Slow cinema, art-house, contemplative films.',
    examples: 'A Ghost Story, The Turin Horse, The Sacrifice'
  },
  {
    value: 'high-octane-action',
    label: '🧯 High-Octane / Action-Oriented',
    description: 'Fast cuts, kinetic movement, impactful visuals. Prioritizes visceral energy over realism.',
    visualTrademarks: 'Quick dolly-ins, whip pans, lens flares, overcranked slow-mo.',
    mood: 'Adrenaline, chaos, tension.',
    useCase: 'Action films, thrillers, sports promos.',
    examples: 'John Wick, Mad Max: Fury Road, The Bourne Ultimatum'
  },
  {
    value: 'retro-vintage',
    label: '📦 Retro / Vintage',
    description: 'Emulates the look of past decades through lens choices, lighting, film grain, and color grading.',
    visualTrademarks: '4:3 or 16mm aspect ratios, halation, faded colors, older glass.',
    mood: 'Nostalgic, warm, melancholic.',
    useCase: 'Period pieces, flashbacks, coming-of-age films.',
    examples: 'Licorice Pizza, Stranger Things, Super 8'
  },
  {
    value: 'one-take-long-take',
    label: '🎞️ One-Take / Long Take',
    description: 'Emphasizes continuity and immersion with very long or continuous shots.',
    visualTrademarks: 'Elaborate camera choreography, shallow focus, blocking precision.',
    mood: 'Tension, real-time immersion, artistry.',
    useCase: 'War films, dramas, technical showcases.',
    examples: 'Children of Men, 1917, Birdman'
  },
  {
    value: 'subjective-pov',
    label: '🧠 Subjective / POV',
    description: 'Entire visual experience is filtered through a character\'s perception—sometimes literally their POV.',
    visualTrademarks: 'Headcam rigs, distorted audio, focus shifts, hallucinations.',
    mood: 'Immersive, paranoid, emotional.',
    useCase: 'Horror, action, experimental.',
    examples: 'Enter the Void, Hardcore Henry, Requiem for a Dream (select scenes)'
  },
  {
    value: 'glossy-commercial',
    label: '💎 Glossy / Commercial',
    description: 'Designed to look beautiful, high-contrast, sharp, clean. Prioritizes visual appeal.',
    visualTrademarks: 'Backlight glow, shallow DoF, high-end gear, cinematic LUTs.',
    mood: 'Aspirational, stylish, slick.',
    useCase: 'Ads, fashion, beauty, music videos.',
    examples: 'Apple ads, Euphoria, Gucci campaigns'
  },
  {
    value: 'theatrical-staged',
    label: '🎭 Theatrical / Staged',
    description: 'Emphasizes symmetry, blocking, and artifice. Often very choreographed.',
    visualTrademarks: 'Proscenium framing, color blocking, flat lighting, elaborate set design.',
    mood: 'Playful, artificial, visually clever.',
    useCase: 'Arthouse, satire, meta cinema.',
    examples: 'The Grand Budapest Hotel, Dogville, Asteroid City'
  }
]

// Get all cinematography style values for the select options
export const CINEMATOGRAPHY_STYLE_OPTIONS = CINEMATOGRAPHY_STYLES.map(style => style.value)

// Helper function to find cinematography style by value
export const findCinematographyStyle = (value: string): CinematographyStyle | undefined => {
  return CINEMATOGRAPHY_STYLES.find(style => style.value === value)
}
