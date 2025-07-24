import type { PromptData } from '@/types/prompt'

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

  return JSON.stringify(output, null, 2)
}