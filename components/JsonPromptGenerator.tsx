'use client'

import { useState, useEffect } from 'react'
import { Header } from './Header'
import { FormSection } from './FormSection'
import { CompositionSelect } from './CompositionSelect'
import { CameraMotionSelect } from './CameraMotionSelect'
import { LensSelect } from './LensSelect'
import { LightingSelect } from './LightingSelect'
import { CinematographyStyleSelect } from './CinematographyStyleSelect'
import { CustomSelect } from './CustomSelect'
import { JsonModal } from './JsonModal'
import { generatePromptJson } from '@/lib/promptGenerator'
import { dbManager } from '@/lib/indexedDB'
import type { PromptData } from '@/types/prompt'

const initialData: PromptData = {
  shot: {
    composition: 'medium-shot',
    camera_motion: 'locked-off',
    lens: 'standard-lens-50mm',
    depth_of_field: 'shallow',
    film_grain: 'light grain'
  },
  subject: {
    entities: [{
      role: 'main character',
      screen_side: 'center',
      appearance: '',
      movement: 'natural standing pose'
    }]
  },
  scene: {
    location: '',
    time_of_day: 'controlled lighting',
    environment_details: ''
  },
  visual_details: {
    primary_action: ''
  },
  cinematography: {
    lighting: 'key-light',
    style: 'naturalistic-realism',
    tone: 'uplifting'
  },
  audio: {
    ambience: 'room tone',
    sound_design: [],
    music: 'none'
  },
  dialogue: {
    spoken_lines: [],
    subtitles: false
  },
  color_palette: {
    description: 'natural colors'
  },
  visual_rules: {
    prohibited_elements: ['camera shake', 'on-screen text', 'brand logos', 'minors or nudity']
  }
}

export function JsonPromptGenerator() {
  const [data, setData] = useState<PromptData>(initialData)
  const [jsonOutput, setJsonOutput] = useState('')
  const [title, setTitle] = useState('')
  const [currentPromptId, setCurrentPromptId] = useState<string>()
  const [isJsonModalOpen, setIsJsonModalOpen] = useState(false)

  useEffect(() => {
    // Initialize IndexedDB
    dbManager.init().catch(console.error)
  }, [])

  const updateData = (section: keyof PromptData, updates: any) => {
    setData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...updates }
    }))
  }

  const generateJson = () => {
    const json = generatePromptJson(data)
    setJsonOutput(json)
    setIsJsonModalOpen(true)
  }

  const handlePromptSaved = (id: string) => {
    setCurrentPromptId(id)
  }

  const handlePromptLoaded = (id: string, loadedTitle: string, loadedData: PromptData) => {
    setCurrentPromptId(id)
    setTitle(loadedTitle)
    setData(loadedData)
    setJsonOutput('') // Clear the JSON output so user needs to regenerate
  }

  return (
    <div className="min-h-screen">
      <Header
        title={title}
        onTitleChange={setTitle}
        data={data}
        currentPromptId={currentPromptId}
        onPromptSaved={handlePromptSaved}
        onPromptLoaded={handlePromptLoaded}
      />

      <div className="container mx-auto px-6 py-8 pb-[500px]">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
        <div className="relative z-[100]">
          <FormSection
            title="Visual Details"
            data={data.visual_details}
            onUpdate={(updates) => updateData('visual_details', updates)}
            fields={[
            {
              key: 'primary_action',
              label: 'Primary Action',
              type: 'textarea',
              placeholder: 'Describe the main action or movement...'
            }
          ]}
        />
        </div>

        {/* Scene Configuration */}
        <div className="relative z-[90]">
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700/50 p-8 hover:shadow-purple-500/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Scene</h3>
          </div>
          <div className="space-y-6">
            {/* Location */}
            <div className="group">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-3">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-focus-within:scale-150 transition-transform duration-200"></div>
                Location
              </label>
              <input
                type="text"
                value={data.scene.location || ''}
                onChange={(e) => updateData('scene', { location: e.target.value })}
                placeholder="example: a scary forest"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-slate-600/50 transition-all duration-200 hover:border-slate-500"
              />
            </div>

            <CustomSelect
              label="Time of Day"
              value={data.scene.time_of_day}
              onChange={(value) => updateData('scene', { time_of_day: value })}
              options={[
                { value: 'controlled lighting', label: 'Controlled Lighting' },
                { value: 'golden hour', label: 'Golden Hour' },
                { value: 'blue hour', label: 'Blue Hour' },
                { value: 'midday sun', label: 'Midday Sun' },
                { value: 'overcast', label: 'Overcast' },
                { value: 'indoor artificial', label: 'Indoor Artificial' },
                { value: 'night', label: 'Night' },
                { value: 'late night', label: 'Late Night' },
                { value: 'midnight', label: 'Midnight' },
                { value: 'dawn', label: 'Dawn' },
                { value: 'dusk', label: 'Dusk' }
              ]}
              placeholder="Select time of day..."
            />

            {/* Environment Details */}
            <div className="group">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-3">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-focus-within:scale-150 transition-transform duration-200"></div>
                Environment Details
              </label>
              <textarea
                value={data.scene.environment_details || ''}
                onChange={(e) => updateData('scene', { environment_details: e.target.value })}
                placeholder="Additional environmental details..."
                rows={3}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-slate-600/50 resize-y transition-all duration-200 hover:border-slate-500"
              />
            </div>
          </div>
        </div>
        </div>

        {/* Shot Configuration with Custom Composition Select */}
        <div className="relative z-[85]">
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700/50 p-8 hover:shadow-purple-500/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Shot Configuration</h3>
          </div>
          <div className="space-y-6">
            <CompositionSelect
              value={data.shot.composition}
              onChange={(value) => updateData('shot', { composition: value })}
            />

            <CameraMotionSelect
              value={data.shot.camera_motion}
              onChange={(value) => updateData('shot', { camera_motion: value })}
            />

            <LensSelect
              value={data.shot.lens}
              onChange={(value) => updateData('shot', { lens: value })}
            />

            <CustomSelect
              label="Depth of Field"
              value={data.shot.depth_of_field}
              onChange={(value) => updateData('shot', { depth_of_field: value })}
              options={[
                { value: 'extremely shallow', label: 'Extremely Shallow' },
                { value: 'shallow', label: 'Shallow' },
                { value: 'medium', label: 'Medium' },
                { value: 'deep', label: 'Deep' },
                { value: 'rack focus', label: 'Rack Focus' },
                { value: 'selective focus on main subject', label: 'Selective Focus' }
              ]}
              placeholder="Select depth of field..."
            />

            <CustomSelect
              label="Film Grain"
              value={data.shot.film_grain}
              onChange={(value) => updateData('shot', { film_grain: value })}
              options={[
                { value: 'none', label: 'None' },
                { value: 'light grain', label: 'Light Grain' },
                { value: 'medium grain', label: 'Medium Grain' },
                { value: 'heavy grain', label: 'Heavy Grain' }
              ]}
              placeholder="Select film grain..."
            />
          </div>
        </div>
        </div>

        {/* Cinematography with Custom Lighting Select */}
        <div className="relative z-[80]">
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700/50 p-8 hover:shadow-purple-500/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Cinematography</h3>
          </div>
          <div className="space-y-6">
            <LightingSelect
              value={data.cinematography.lighting}
              onChange={(value) => updateData('cinematography', { lighting: value })}
            />

            <CinematographyStyleSelect
              value={data.cinematography.style}
              onChange={(value) => updateData('cinematography', { style: value })}
            />

            <CustomSelect
              label="Tone"
              value={data.cinematography.tone}
              onChange={(value) => updateData('cinematography', { tone: value })}
              options={[
                { value: 'uplifting', label: 'Uplifting' },
                { value: 'bright', label: 'Bright' },
                { value: 'tense', label: 'Tense' },
                { value: 'moody', label: 'Moody' },
                { value: 'dark', label: 'Dark' },
                { value: 'dreamlike', label: 'Dreamlike' },
                { value: 'gritty', label: 'Gritty' },
                { value: 'romantic', label: 'Romantic' },
                { value: 'playful', label: 'Playful' },
                { value: 'haunting', label: 'Haunting' },
                { value: 'nostalgic', label: 'Nostalgic' },
                { value: 'epic', label: 'Epic' }
              ]}
              placeholder="Select tone..."
            />
          </div>
        </div>
        </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
        {/* Subject Configuration */}
        <div className="relative z-[70]">
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700/50 p-8 hover:shadow-purple-500/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Subject</h3>
          </div>
          <div className="space-y-6">
            {data.subject.entities.map((entity, index) => (
              <div key={index} className="border border-slate-600 rounded-xl p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium text-slate-300">Entity {index + 1}</h4>
                  {data.subject.entities.length > 1 && (
                    <button
                      onClick={() => {
                        const newEntities = data.subject.entities.filter((_, i) => i !== index)
                        updateData('subject', { entities: newEntities })
                      }}
                      className="text-red-400 hover:text-red-300 text-sm"
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">Role</label>
                    <input
                      type="text"
                      value={entity.role}
                      onChange={(e) => {
                        const newEntities = [...data.subject.entities]
                        newEntities[index] = { ...entity, role: e.target.value }
                        updateData('subject', { entities: newEntities })
                      }}
                      placeholder="e.g., main character, background person"
                      className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">Screen Position</label>
                    <select
                      value={entity.screen_side}
                      onChange={(e) => {
                        const newEntities = [...data.subject.entities]
                        newEntities[index] = { ...entity, screen_side: e.target.value }
                        updateData('subject', { entities: newEntities })
                      }}
                      className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    >
                      <option value="center">Center</option>
                      <option value="left">Left</option>
                      <option value="right">Right</option>
                      <option value="background">Background</option>
                      <option value="foreground">Foreground</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2">Appearance</label>
                  <textarea
                    value={entity.appearance}
                    onChange={(e) => {
                      const newEntities = [...data.subject.entities]
                      newEntities[index] = { ...entity, appearance: e.target.value }
                      updateData('subject', { entities: newEntities })
                    }}
                    placeholder="Describe the character's appearance..."
                    rows={2}
                    className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-y text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2">Movement</label>
                  <input
                    type="text"
                    value={entity.movement}
                    onChange={(e) => {
                      const newEntities = [...data.subject.entities]
                      newEntities[index] = { ...entity, movement: e.target.value }
                      updateData('subject', { entities: newEntities })
                    }}
                    placeholder="e.g., walking, standing, gesturing"
                    className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>
            ))}

            <button
              onClick={() => {
                const newEntity = { role: '', screen_side: 'center', appearance: '', movement: '' }
                updateData('subject', { entities: [...data.subject.entities, newEntity] })
              }}
              className="w-full py-3 border-2 border-dashed border-slate-600 rounded-xl text-slate-400 hover:border-purple-500 hover:text-purple-400 transition-colors duration-200 text-sm"
            >
              + Add Another Entity
            </button>
          </div>
        </div>
        </div>

        {/* Audio Configuration */}
        <div className="relative z-[50]">
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700/50 p-8 hover:shadow-purple-500/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Audio</h3>
          </div>
          <div className="space-y-6">
            <CustomSelect
              label="Ambience"
              value={data.audio.ambience}
              onChange={(value) => updateData('audio', { ambience: value })}
              options={[
                { value: 'room tone', label: 'Room Tone', description: 'Natural indoor silence' },
                { value: 'outdoor ambience', label: 'Outdoor Ambience', description: 'Natural outdoor sounds' },
                { value: 'urban ambience', label: 'Urban Ambience', description: 'City background sounds' },
                { value: 'nature sounds', label: 'Nature Sounds', description: 'Birds, wind, water' },
                { value: 'office ambience', label: 'Office Ambience', description: 'Workplace background' },
                { value: 'cafe ambience', label: 'Cafe Ambience', description: 'Coffee shop atmosphere' },
                { value: 'silence', label: 'Silence', description: 'No ambient sound' }
              ]}
              placeholder="Select ambience..."
            />

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-3">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                Sound Design Elements
              </label>
              <div className="space-y-2">
                {data.audio.sound_design.map((sound, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={sound}
                      onChange={(e) => {
                        const newSounds = [...data.audio.sound_design]
                        newSounds[index] = e.target.value
                        updateData('audio', { sound_design: newSounds })
                      }}
                      placeholder="e.g., footsteps, door closing, phone ringing"
                      className="flex-1 px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    />
                    <button
                      onClick={() => {
                        const newSounds = data.audio.sound_design.filter((_, i) => i !== index)
                        updateData('audio', { sound_design: newSounds })
                      }}
                      className="px-3 py-2 text-red-400 hover:text-red-300 border border-slate-600 rounded-lg hover:border-red-500 transition-colors"
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => {
                    updateData('audio', { sound_design: [...data.audio.sound_design, ''] })
                  }}
                  className="w-full py-2 border-2 border-dashed border-slate-600 rounded-lg text-slate-400 hover:border-purple-500 hover:text-purple-400 transition-colors duration-200 text-sm"
                >
                  + Add Sound Element
                </button>
              </div>
            </div>

            <CustomSelect
              label="Music"
              value={data.audio.music}
              onChange={(value) => updateData('audio', { music: value })}
              options={[
                { value: 'none', label: 'None', description: 'No music' },
                { value: 'subtle background', label: 'Subtle Background', description: 'Quiet instrumental' },
                { value: 'dramatic score', label: 'Dramatic Score', description: 'Emotional orchestral' },
                { value: 'upbeat', label: 'Upbeat', description: 'Energetic and positive' },
                { value: 'ambient', label: 'Ambient', description: 'Atmospheric soundscape' },
                { value: 'tension', label: 'Tension', description: 'Suspenseful music' },
                { value: 'romantic', label: 'Romantic', description: 'Soft and emotional' },
                { value: 'action', label: 'Action', description: 'High-energy music' }
              ]}
              placeholder="Select music style..."
            />
          </div>
        </div>
        </div>

        {/* Dialogue Configuration */}
        <div className="relative z-[40]">
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700/50 p-8 hover:shadow-purple-500/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Dialogue</h3>
          </div>
          <div className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-3">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                Spoken Lines
              </label>
              <div className="space-y-2">
                {data.dialogue.spoken_lines.map((line, index) => (
                  <div key={index} className="flex gap-2">
                    <textarea
                      value={line}
                      onChange={(e) => {
                        const newLines = [...data.dialogue.spoken_lines]
                        newLines[index] = e.target.value
                        updateData('dialogue', { spoken_lines: newLines })
                      }}
                      placeholder="Enter dialogue line..."
                      rows={2}
                      className="flex-1 px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-y text-sm"
                    />
                    <button
                      onClick={() => {
                        const newLines = data.dialogue.spoken_lines.filter((_, i) => i !== index)
                        updateData('dialogue', { spoken_lines: newLines })
                      }}
                      className="px-3 py-2 text-red-400 hover:text-red-300 border border-slate-600 rounded-lg hover:border-red-500 transition-colors self-start"
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => {
                    updateData('dialogue', { spoken_lines: [...data.dialogue.spoken_lines, ''] })
                  }}
                  className="w-full py-2 border-2 border-dashed border-slate-600 rounded-lg text-slate-400 hover:border-purple-500 hover:text-purple-400 transition-colors duration-200 text-sm"
                >
                  + Add Dialogue Line
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="subtitles"
                checked={data.dialogue.subtitles}
                onChange={(e) => updateData('dialogue', { subtitles: e.target.checked })}
                className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500 focus:ring-2"
              />
              <label htmlFor="subtitles" className="text-sm font-medium text-slate-300">
                Include Subtitles
              </label>
            </div>
          </div>
        </div>
        </div>

        {/* Color Palette Configuration */}
        <div className="relative z-[30]">
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700/50 p-8 hover:shadow-purple-500/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Color Palette</h3>
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-3">
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              Color Description
            </label>
            <textarea
              value={data.color_palette.description}
              onChange={(e) => updateData('color_palette', { description: e.target.value })}
              placeholder="Describe the color palette (e.g., warm earth tones, cool blues and grays, vibrant neon colors)..."
              rows={3}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-slate-600/50 resize-y transition-all duration-200 hover:border-slate-500"
            />
          </div>
        </div>
        </div>

        {/* Visual Rules Configuration */}
        <div className="relative z-[20]">
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700/50 p-8 hover:shadow-purple-500/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Visual Rules</h3>
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-3">
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              Prohibited Elements
            </label>
            <div className="space-y-2">
              {data.visual_rules.prohibited_elements.map((element, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={element}
                    onChange={(e) => {
                      const newElements = [...data.visual_rules.prohibited_elements]
                      newElements[index] = e.target.value
                      updateData('visual_rules', { prohibited_elements: newElements })
                    }}
                    placeholder="e.g., camera shake, on-screen text, brand logos"
                    className="flex-1 px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  />
                  <button
                    onClick={() => {
                      const newElements = data.visual_rules.prohibited_elements.filter((_, i) => i !== index)
                      updateData('visual_rules', { prohibited_elements: newElements })
                    }}
                    className="px-3 py-2 text-red-400 hover:text-red-300 border border-slate-600 rounded-lg hover:border-red-500 transition-colors"
                  >
                    ×
                  </button>
                </div>
              ))}
              <button
                onClick={() => {
                  updateData('visual_rules', { prohibited_elements: [...data.visual_rules.prohibited_elements, ''] })
                }}
                className="w-full py-2 border-2 border-dashed border-slate-600 rounded-lg text-slate-400 hover:border-purple-500 hover:text-purple-400 transition-colors duration-200 text-sm"
              >
                + Add Prohibited Element
              </button>
            </div>
          </div>
        </div>
        </div>

          </div>
        </div>

        {/* Generate Button - Centered across both columns */}
        <div className="lg:col-span-2 flex justify-center pt-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75"></div>
            <button
              onClick={generateJson}
              className="relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Generate JSON Prompt
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* JSON Modal */}
      <JsonModal
        isOpen={isJsonModalOpen}
        onClose={() => setIsJsonModalOpen(false)}
        json={jsonOutput}
        title={title}
      />
    </div>
  )
}