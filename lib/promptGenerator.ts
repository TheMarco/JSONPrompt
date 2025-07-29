import type { PromptData, Entity } from '@/types/prompt'

// Utility function to check if a value is considered "empty"
function isEmpty(value: any): boolean {
  if (value === null || value === undefined) return true
  if (typeof value === 'string') return value.trim() === ''
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === 'object') return Object.keys(value).length === 0
  return false
}

// Utility function to recursively filter out empty fields
function filterEmptyFields(obj: any): any {
  if (Array.isArray(obj)) {
    const filtered = obj.filter(item => !isEmpty(item)).map(item => filterEmptyFields(item))
    return filtered.length > 0 ? filtered : undefined
  }

  if (typeof obj === 'object' && obj !== null) {
    const filtered: any = {}

    for (const [key, value] of Object.entries(obj)) {
      if (!isEmpty(value)) {
        const filteredValue = filterEmptyFields(value)
        if (filteredValue !== undefined) {
          filtered[key] = filteredValue
        }
      }
    }

    return Object.keys(filtered).length > 0 ? filtered : undefined
  }

  return obj
}

export function generatePromptJson(data: PromptData): string {
  const output = {
    shot: {
      composition: data.shot.composition,
      camera_motion: data.shot.camera_motion,
      lens: data.shot.lens,
      depth_of_field: data.shot.depth_of_field,
      film_grain: data.shot.film_grain
    },
    subject: data.subject.no_characters ? {
      no_characters: true,
      entities: []
    } : {
      entities: data.subject.entities.filter(entity =>
        entity.role || entity.appearance || entity.movement
      )
    },
    scene: {
      location: data.scene.location,
      time_of_day: data.scene.time_of_day,
      environment_details: data.scene.environment_details
    },
    visual_details: {
      primary_action: data.visual_details.primary_action
    },
    cinematography: {
      lighting: data.cinematography.lighting,
      style: data.cinematography.style,
      tone: data.cinematography.tone
    },
    audio: {
      ambience: data.audio.ambience,
      sound_design: data.audio.sound_design,
      music: data.audio.music
    },
    dialogue: {
      spoken_lines: data.dialogue.spoken_lines,
      subtitles: data.dialogue.subtitles
    },
    color_palette: {
      description: data.color_palette.description
    },
    visual_rules: {
      prohibited_elements: data.visual_rules.prohibited_elements
    },
    additional_properties: data.additional_properties
  }

  // Filter out empty fields from the output
  const filteredOutput = filterEmptyFields(output)

  return JSON.stringify(filteredOutput, null, 2)
}