import type { PromptData } from '@/types/prompt'

export type ExportFormat = 'json' | 'xml' | 'markdown' | 'yaml'

export function exportAsJSON(data: PromptData, title?: string): string {
  const exportData = {
    title: title || 'Untitled Prompt',
    exportedAt: new Date().toISOString(),
    data
  }
  return JSON.stringify(exportData, null, 2)
}

export function exportAsXML(data: PromptData, title?: string): string {
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

  const xmlContent = Object.entries(data)
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
  const formatValue = (value: any): string => {
    if (Array.isArray(value)) {
      return value.length > 0 ? value.map(item => `- ${formatValue(item)}`).join('\n') : '_None_'
    }
    if (typeof value === 'object' && value !== null) {
      return Object.entries(value)
        .map(([k, v]) => `**${k.replace(/_/g, ' ')}:** ${formatValue(v)}`)
        .join('\n')
    }
    return value ? String(value) : '_Not specified_'
  }

  const sections = [
    `# ${title || 'Untitled Video Prompt'}`,
    `*Exported on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}*`,
    '',
    '## Shot Configuration',
    `**Composition:** ${data.shot.composition}`,
    `**Camera Motion:** ${data.shot.camera_motion}`,
    `**Lens:** ${data.shot.lens}`,
    `**Depth of Field:** ${data.shot.depth_of_field}`,
    `**Film Grain:** ${data.shot.film_grain}`,
    '',
    '## Scene',
    `**Location:** ${data.scene.location || '_Not specified_'}`,
    `**Time of Day:** ${data.scene.time_of_day}`,
    `**Environment Details:** ${data.scene.environment_details || '_Not specified_'}`,
    '',
    '## Visual Details',
    `**Primary Action:** ${data.visual_details.primary_action || '_Not specified_'}`,
    '',
    '## Cinematography',
    `**Lighting:** ${data.cinematography.lighting}`,
    `**Style:** ${data.cinematography.style}`,
    `**Tone:** ${data.cinematography.tone}`,
    '',
    '## Subject',
    data.subject.entities.length > 0 
      ? data.subject.entities.map((entity, index) => 
          `### Entity ${index + 1}\n${formatValue(entity)}`
        ).join('\n\n')
      : '_No entities specified_',
    '',
    '## Audio',
    `**Ambience:** ${data.audio.ambience}`,
    `**Sound Design:** ${data.audio.sound_design.length > 0 ? data.audio.sound_design.join(', ') : '_None_'}`,
    `**Music:** ${data.audio.music}`,
    '',
    '## Dialogue',
    `**Spoken Lines:** ${data.dialogue.spoken_lines.length > 0 ? data.dialogue.spoken_lines.join(', ') : '_None_'}`,
    `**Subtitles:** ${data.dialogue.subtitles ? 'Yes' : 'No'}`,
    '',
    '## Color Palette',
    `**Description:** ${data.color_palette.description || '_Not specified_'}`,
    '',
    '## Visual Rules',
    `**Prohibited Elements:** ${data.visual_rules.prohibited_elements.length > 0 ? data.visual_rules.prohibited_elements.join(', ') : '_None_'}`
  ]

  return sections.join('\n')
}

export function exportAsYAML(data: PromptData, title?: string): string {
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
    `data:${formatYamlValue(data, 1)}`
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
