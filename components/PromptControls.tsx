'use client'

import { useState } from 'react'
import { exportAsJSON, exportAsXML, exportAsMarkdown, exportAsYAML, downloadFile, getExportFilename, type ExportFormat } from '@/lib/exportUtils'
import { dbManager } from '@/lib/indexedDB'
import type { PromptData } from '@/types/prompt'

interface PromptControlsProps {
  title: string
  onTitleChange: (title: string) => void
  data: PromptData
  currentPromptId?: string
  onPromptSaved: (id: string) => void
  onPromptLoaded: (id: string, title: string, data: PromptData) => void
}

export default function PromptControls({ 
  title, 
  onTitleChange, 
  data, 
  currentPromptId, 
  onPromptSaved, 
  onPromptLoaded 
}: PromptControlsProps) {
  const [isLoadOpen, setIsLoadOpen] = useState(false)
  const [isExportOpen, setIsExportOpen] = useState(false)
  const [savedPrompts, setSavedPrompts] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleLoadPrompts = async () => {
    setIsLoading(true)
    try {
      const prompts = await dbManager.getAllPrompts()
      setSavedPrompts(prompts)
      setIsLoadOpen(!isLoadOpen)
    } catch (error) {
      console.error('Failed to load prompts:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLoadPrompt = (prompt: any) => {
    onPromptLoaded(prompt.id, prompt.title, prompt.data)
    setIsLoadOpen(false)
  }

  const handleDeletePrompt = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    if (confirm('Are you sure you want to delete this prompt?')) {
      try {
        await dbManager.deletePrompt(id)
        const prompts = await dbManager.getAllPrompts()
        setSavedPrompts(prompts)
      } catch (error) {
        console.error('Failed to delete prompt:', error)
      }
    }
  }

  const handleSave = async () => {
    if (!title.trim()) return
    
    setIsSaving(true)
    setSaveStatus('idle')
    
    try {
      let id: string
      if (currentPromptId) {
        await dbManager.updatePrompt(currentPromptId, { title, data })
        id = currentPromptId
      } else {
        id = await dbManager.savePrompt({ title, data })
      }
      
      onPromptSaved(id)
      setSaveStatus('success')
      
      // Clear success message after 3 seconds
      setTimeout(() => setSaveStatus('idle'), 3000)
    } catch (error) {
      console.error('Failed to save prompt:', error)
      setSaveStatus('error')
      setTimeout(() => setSaveStatus('idle'), 3000)
    } finally {
      setIsSaving(false)
    }
  }

  const handleExport = (format: ExportFormat) => {
    try {
      let content: string
      let mimeType: string
      
      switch (format) {
        case 'json':
          content = exportAsJSON(data)
          mimeType = 'application/json'
          break
        case 'xml':
          content = exportAsXML(data)
          mimeType = 'application/xml'
          break
        case 'markdown':
          content = exportAsMarkdown(data)
          mimeType = 'text/markdown'
          break
        case 'yaml':
          content = exportAsYAML(data)
          mimeType = 'application/x-yaml'
          break
        default:
          throw new Error(`Unsupported format: ${format}`)
      }
      
      const filename = getExportFilename(title || 'prompt', format)
      downloadFile(content, filename, mimeType)
      setIsExportOpen(false)
    } catch (error) {
      console.error('Export failed:', error)
      alert('Export failed. Please try again.')
    }
  }

  return (
    <div className="relative z-[9999] bg-gradient-to-br from-slate-800/40 via-slate-800/30 to-slate-900/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-600/30 p-8 hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
        <h3 className="text-xl font-semibold bg-gradient-to-r from-white via-purple-200 to-slate-300 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">Prompt Management</h3>
      </div>

      <div className="space-y-6">
        {/* Title Input */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Prompt Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="Enter a title for your prompt..."
            className="w-full px-4 py-3 bg-slate-700/30 backdrop-blur-sm border border-slate-600/50 rounded-2xl text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 hover:border-slate-500/70 hover:bg-slate-600/30 shadow-inner"
          />
        </div>

        {/* Action Buttons - Desktop Layout */}
        <div className="hidden md:flex items-center gap-3">
          {/* Load Button with Dropdown */}
          <div className="relative">
            <button
              onClick={handleLoadPrompts}
              disabled={isLoading}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-medium rounded-2xl transition-all duration-300 disabled:cursor-not-allowed hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 border border-white/10"
            >
              {isLoading ? (
                <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              )}
              Load
            </button>

            {/* Dropdown */}
            {isLoadOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/90 backdrop-blur-xl border border-slate-600/30 rounded-2xl shadow-2xl z-[1000] max-h-64 overflow-hidden animate-slideUp">
                <div className="p-3 border-b border-slate-600/30">
                  <h3 className="text-sm font-semibold text-white">Saved Prompts</h3>
                </div>
                <div className="max-h-48 overflow-y-auto">
                  {savedPrompts.length === 0 ? (
                    <div className="p-4 text-center text-slate-400 text-sm">
                      No saved prompts yet
                    </div>
                  ) : (
                    savedPrompts.map((prompt) => (
                      <div key={prompt.id} className="group flex items-center p-3 hover:bg-slate-700/50 transition-colors">
                        <button
                          onClick={() => handleLoadPrompt(prompt)}
                          className="flex-1 text-left"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-white text-sm truncate">
                              {prompt.title}
                            </div>
                            <div className="text-xs text-slate-400 mt-1">
                              {new Date(prompt.updatedAt).toLocaleDateString()} at {new Date(prompt.updatedAt).toLocaleTimeString()}
                            </div>
                          </div>
                        </button>
                        <button
                          onClick={(e) => handleDeletePrompt(prompt.id, e)}
                          className="ml-2 p-1 text-slate-400 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
                          title="Delete prompt"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={isSaving || !title.trim()}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-medium rounded-2xl transition-all duration-300 disabled:cursor-not-allowed hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 border border-white/10"
          >
            {isSaving ? (
              <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
              </svg>
            )}
            Save
          </button>

          {/* Export Button - Desktop */}
          <div className="relative">
            <button
              onClick={() => {
                console.log('Export button clicked, current state:', isExportOpen)
                setIsExportOpen(!isExportOpen)
              }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 border border-white/10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export
            </button>

            {/* Export Dropdown - Desktop */}
            {isExportOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-slate-800/90 backdrop-blur-xl border border-slate-600/30 rounded-2xl shadow-2xl z-[1000]">
                <div className="p-2">
                  <button
                    onClick={() => handleExport('json')}
                    className="w-full text-left px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/70 rounded-xl transition-colors"
                  >
                    Export as JSON
                  </button>
                  <button
                    onClick={() => handleExport('yaml')}
                    className="w-full text-left px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/70 rounded-xl transition-colors"
                  >
                    Export as YAML
                  </button>
                  <button
                    onClick={() => handleExport('xml')}
                    className="w-full text-left px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/70 rounded-xl transition-colors"
                  >
                    Export as XML
                  </button>
                  <button
                    onClick={() => handleExport('markdown')}
                    className="w-full text-left px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/70 rounded-xl transition-colors"
                  >
                    Export as Markdown
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-4">
        {/* Load and Save Buttons - Mobile - Full Width */}
        <div className="flex gap-3 w-full">
          {/* Load Button - Mobile */}
          <div className="relative flex-1">
            <button
              onClick={handleLoadPrompts}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-medium rounded-2xl transition-all duration-300 disabled:cursor-not-allowed hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 border border-white/10"
            >
              {isLoading ? (
                <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              )}
              Load
            </button>

            {/* Load Dropdown - Mobile */}
            {isLoadOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/90 backdrop-blur-xl border border-slate-600/30 rounded-2xl shadow-2xl z-[1000] max-h-64 overflow-hidden animate-slideUp">
                <div className="p-3 border-b border-slate-600/30">
                  <h3 className="text-sm font-semibold text-white">Saved Prompts</h3>
                </div>
                <div className="max-h-48 overflow-y-auto">
                  {savedPrompts.length === 0 ? (
                    <div className="p-4 text-center text-slate-400 text-sm">
                      No saved prompts yet
                    </div>
                  ) : (
                    savedPrompts.map((prompt) => (
                      <div key={prompt.id} className="group flex items-center p-3 hover:bg-slate-700/50 transition-colors">
                        <button
                          onClick={() => handleLoadPrompt(prompt)}
                          className="flex-1 text-left"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-white text-sm truncate">
                              {prompt.title}
                            </div>
                            <div className="text-xs text-slate-400 mt-1">
                              {new Date(prompt.updatedAt).toLocaleDateString()} at {new Date(prompt.updatedAt).toLocaleTimeString()}
                            </div>
                          </div>
                        </button>
                        <button
                          onClick={(e) => handleDeletePrompt(prompt.id, e)}
                          className="ml-2 p-1 text-slate-400 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
                          title="Delete prompt"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Save Button - Mobile */}
          <button
            onClick={handleSave}
            disabled={isSaving || !title.trim()}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-medium rounded-2xl transition-all duration-300 disabled:cursor-not-allowed hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 border border-white/10"
          >
            {isSaving ? (
              <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
              </svg>
            )}
            Save
          </button>
        </div>

        {/* Export Button - Mobile Full Width */}
        <div className="relative">
          <button
            onClick={() => setIsExportOpen(!isExportOpen)}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 border border-white/10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export Prompt
          </button>

          {/* Export Dropdown - Mobile */}
          {isExportOpen && (
            <div className="absolute left-0 top-full mt-2 w-full bg-slate-800/90 backdrop-blur-xl border border-slate-600/30 rounded-2xl shadow-2xl z-[1000]">
              <div className="p-2">
                <button
                  onClick={() => handleExport('json')}
                  className="w-full text-left px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/70 rounded-xl transition-colors"
                >
                  Export as JSON
                </button>
                <button
                  onClick={() => handleExport('yaml')}
                  className="w-full text-left px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/70 rounded-xl transition-colors"
                >
                  Export as YAML
                </button>
                <button
                  onClick={() => handleExport('xml')}
                  className="w-full text-left px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/70 rounded-xl transition-colors"
                >
                  Export as XML
                </button>
                <button
                  onClick={() => handleExport('markdown')}
                  className="w-full text-left px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/70 rounded-xl transition-colors"
                >
                  Export as Markdown
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Save Status */}
      {saveStatus !== 'idle' && (
        <div className={`mt-4 p-3 rounded-xl ${
          saveStatus === 'success'
            ? 'bg-green-900/50 border border-green-700 text-green-300'
            : 'bg-red-900/50 border border-red-700 text-red-300'
        }`}>
          {saveStatus === 'success' ? '✓ Prompt saved successfully!' : '✗ Failed to save prompt'}
        </div>
      )}

      {/* Click outside to close dropdowns */}
      {(isExportOpen || isLoadOpen) && (
        <div
          className="fixed inset-0 z-[999]"
          onClick={() => {
            setIsExportOpen(false)
            setIsLoadOpen(false)
          }}
        />
      )}
    </div>
  )
}
