import type { PromptData, Entity } from '@/types/prompt'

export type ExportFormat = 'json' | 'xml' | 'markdown' | 'yaml'

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

export function exportAsJSON(data: PromptData, title?: string): string {
  const filteredData = filterEmptyFields(data)
  const exportData = {
    title: title || 'Untitled Prompt',
    exportedAt: new Date().toISOString(),
    data: filteredData
  }
  return JSON.stringify(exportData, null, 2)
}

export function exportAsXML(data: PromptData, title?: string): string {
  const filteredData = filterEmptyFields(data)

  const escapeXml = (str: string) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')
  }

  const buildXmlElement = (key: string, value: any, indent = 0): string => {
    const spaces = '  '.repeat(indent)

    if (typeof value === 'object' && value !== null) {
      if (Array.isArray(value)) {
        return value.map((item, index) =>
          buildXmlElement(`${key}_${index}`, item, indent)
        ).join('\n')
      } else {
        const children = Object.entries(value)
          .map(([k, v]) => buildXmlElement(k, v, indent + 1))
          .join('\n')
        return `${spaces}<${key}>\n${children}\n${spaces}</${key}>`
      }
    } else {
      return `${spaces}<${key}>${escapeXml(String(value))}</${key}>`
    }
  }

  const xmlContent = Object.entries(filteredData || {})
    .map(([key, value]) => buildXmlElement(key, value, 1))
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<video_prompt>
  <title>${escapeXml(title || 'Untitled Prompt')}</title>
  <exported_at>${new Date().toISOString()}</exported_at>
${xmlContent}
</video_prompt>`
}

export function exportAsMarkdown(data: PromptData, title?: string): string {
  const filteredData = filterEmptyFields(data) || {}

  const formatValue = (value: any): string => {
    if (Array.isArray(value)) {
      return value.length > 0 ? value.map(item => `- ${formatValue(item)}`).join('\n') : '_None_'
    }
    if (typeof value === 'object' && value !== null) {
      return Object.entries(value)
        .filter(([k, v]) => !isEmpty(v))
        .map(([k, v]) => `**${k.replace(/_/g, ' ')}:** ${formatValue(v)}`)
        .join('\n')
    }
    return value ? String(value) : '_Not specified_'
  }

  const sections = [
    `# ${title || 'Untitled Video Prompt'}`,
    `*Exported on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}*`,
    ''
  ]

  // Only add sections that have data
  if (filteredData.shot) {
    sections.push('## Shot Configuration')
    if (filteredData.shot.composition) sections.push(`**Composition:** ${filteredData.shot.composition}`)
    if (filteredData.shot.camera_motion) sections.push(`**Camera Motion:** ${filteredData.shot.camera_motion}`)
    if (filteredData.shot.lens) sections.push(`**Lens:** ${filteredData.shot.lens}`)
    if (filteredData.shot.depth_of_field) sections.push(`**Depth of Field:** ${filteredData.shot.depth_of_field}`)
    if (filteredData.shot.film_grain) sections.push(`**Film Grain:** ${filteredData.shot.film_grain}`)
    sections.push('')
  }

  if (filteredData.scene) {
    sections.push('## Scene')
    if (filteredData.scene.location) sections.push(`**Location:** ${filteredData.scene.location}`)
    if (filteredData.scene.time_of_day) sections.push(`**Time of Day:** ${filteredData.scene.time_of_day}`)
    if (filteredData.scene.environment_details) sections.push(`**Environment Details:** ${filteredData.scene.environment_details}`)
    sections.push('')
  }

  if (filteredData.visual_details?.primary_action) {
    sections.push('## Visual Details')
    sections.push(`**Primary Action:** ${filteredData.visual_details.primary_action}`)
    sections.push('')
  }

  if (filteredData.cinematography) {
    sections.push('## Cinematography')
    if (filteredData.cinematography.lighting) sections.push(`**Lighting:** ${filteredData.cinematography.lighting}`)
    if (filteredData.cinematography.style) sections.push(`**Style:** ${filteredData.cinematography.style}`)
    if (filteredData.cinematography.tone) sections.push(`**Tone:** ${filteredData.cinematography.tone}`)
    sections.push('')
  }

  if (filteredData.subject) {
    sections.push('## Subject(s)')
    if (filteredData.subject.no_characters) {
      sections.push('_No characters in this scene_')
    } else if (filteredData.subject.entities && filteredData.subject.entities.length > 0) {
      sections.push(filteredData.subject.entities.map((entity: Entity, index: number) =>
        `### Entity ${index + 1}\n${formatValue(entity)}`
      ).join('\n\n'))
    }
    sections.push('')
  }

  if (filteredData.audio) {
    sections.push('## Audio')
    if (filteredData.audio.ambience) sections.push(`**Ambience:** ${filteredData.audio.ambience}`)
    if (filteredData.audio.sound_design && filteredData.audio.sound_design.length > 0) {
      sections.push(`**Sound Design:** ${filteredData.audio.sound_design.join(', ')}`)
    }
    if (filteredData.audio.music) sections.push(`**Music:** ${filteredData.audio.music}`)
    sections.push('')
  }

  if (filteredData.dialogue) {
    sections.push('## Dialogue')
    if (filteredData.dialogue.spoken_lines && filteredData.dialogue.spoken_lines.length > 0) {
      sections.push(`**Spoken Lines:** ${filteredData.dialogue.spoken_lines.join(', ')}`)
    }
    if (filteredData.dialogue.subtitles !== undefined) {
      sections.push(`**Subtitles:** ${filteredData.dialogue.subtitles ? 'Yes' : 'No'}`)
    }
    sections.push('')
  }

  if (filteredData.color_palette?.description) {
    sections.push('## Color Palette')
    sections.push(`**Description:** ${filteredData.color_palette.description}`)
    sections.push('')
  }

  if (filteredData.visual_rules?.prohibited_elements && filteredData.visual_rules.prohibited_elements.length > 0) {
    sections.push('## Visual Rules')
    sections.push(`**Prohibited Elements:** ${filteredData.visual_rules.prohibited_elements.join(', ')}`)
    sections.push('')
  }

  if (filteredData.additional_properties && Object.keys(filteredData.additional_properties).length > 0) {
    sections.push('## Additional Properties')
    sections.push(formatValue(filteredData.additional_properties))
    sections.push('')
  }

  return sections.join('\n')
}

export function exportAsYAML(data: PromptData, title?: string): string {
  const filteredData = filterEmptyFields(data)

  const formatYamlValue = (value: any, indent = 0): string => {
    const spaces = '  '.repeat(indent)

    if (value === null || value === undefined) {
      return 'null'
    }

    if (typeof value === 'string') {
      // Escape special YAML characters and wrap in quotes if needed
      if (value.includes('\n') || value.includes('"') || value.includes("'") ||
          value.includes(':') || value.includes('#') || value.includes('|') ||
          value.trim() !== value || value === '') {
        return `"${value.replace(/"/g, '\\"')}"`
      }
      return value
    }

    if (typeof value === 'boolean' || typeof value === 'number') {
      return String(value)
    }

    if (Array.isArray(value)) {
      if (value.length === 0) {
        return '[]'
      }
      return '\n' + value.map(item =>
        `${spaces}- ${formatYamlValue(item, indent + 1).replace(/^\s+/, '')}`
      ).join('\n')
    }

    if (typeof value === 'object') {
      const entries = Object.entries(value)
      if (entries.length === 0) {
        return '{}'
      }
      return '\n' + entries.map(([k, v]) => {
        const formattedValue = formatYamlValue(v, indent + 1)
        if (formattedValue.startsWith('\n')) {
          return `${spaces}${k}:${formattedValue}`
        } else {
          return `${spaces}${k}: ${formattedValue}`
        }
      }).join('\n')
    }

    return String(value)
  }

  const yamlContent = [
    `title: "${title || 'Untitled Prompt'}"`,
    `exported_at: "${new Date().toISOString()}"`,
    `data:${formatYamlValue(filteredData, 1)}`
  ].join('\n')

  return yamlContent
}

export function downloadFile(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export function getExportFilename(title: string, format: ExportFormat): string {
  const sanitizedTitle = title.replace(/[^a-z0-9]/gi, '_').toLowerCase()
  const timestamp = new Date().toISOString().split('T')[0]
  const extension = format === 'yaml' ? 'yml' : format
  return `${sanitizedTitle}_${timestamp}.${extension}`
}
