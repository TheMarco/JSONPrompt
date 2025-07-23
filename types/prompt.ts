export interface Entity {
  role: string
  screen_side: string
  appearance: string
  movement: string
}

export interface PromptData {
  shot: {
    composition: string
    camera_motion: string
    lens: string
    depth_of_field: string
    film_grain: string
  }
  subject: {
    no_characters: boolean
    entities: Entity[]
  }
  scene: {
    location: string
    time_of_day: string
    environment_details: string
  }
  visual_details: {
    primary_action: string
  }
  cinematography: {
    lighting: string
    style: string
    tone: string
  }
  audio: {
    ambience: string
    sound_design: string[]
    music: string
  }
  dialogue: {
    spoken_lines: string[]
    subtitles: boolean
  }
  color_palette: {
    description: string
  }
  visual_rules: {
    prohibited_elements: string[]
  }
}