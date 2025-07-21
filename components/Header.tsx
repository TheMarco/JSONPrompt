'use client'

import { useState } from 'react'
import { exportAsJSON, exportAsXML, exportAsMarkdown, downloadFile, getExportFilename, type ExportFormat } from '@/lib/exportUtils'
import { dbManager } from '@/lib/indexedDB'
import type { PromptData } from '@/types/prompt'

interface HeaderProps {
  title: string
  onTitleChange: (title: string) => void
  data: PromptData
  currentPromptId?: string
  onPromptSaved: (id: string) => void
  onPromptLoaded: (id: string, title: string, data: PromptData) => void
}

export function Header({ title, onTitleChange, data, currentPromptId, onPromptSaved, onPromptLoaded }: HeaderProps) {
  const [isExportOpen, setIsExportOpen] = useState(false)
  const [isLoadOpen, setIsLoadOpen] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [savedPrompts, setSavedPrompts] = useState<any[]>([])

  const handleExport = async (format: ExportFormat) => {
    try {
      let content: string
      let mimeType: string

      switch (format) {
        case 'json':
          content = exportAsJSON(data, title)
          mimeType = 'application/json'
          break
        case 'xml':
          content = exportAsXML(data, title)
          mimeType = 'application/xml'
          break
        case 'markdown':
          content = exportAsMarkdown(data, title)
          mimeType = 'text/markdown'
          break
      }

      const filename = getExportFilename(title || 'untitled_prompt', format)
      downloadFile(content, filename, mimeType)
      setIsExportOpen(false)
    } catch (error) {
      console.error('Export failed:', error)
    }
  }

  const handleSave = async () => {
    if (!title.trim()) {
      alert('Please enter a title for your prompt')
      return
    }

    setIsSaving(true)
    setSaveStatus('idle')

    try {
      if (currentPromptId) {
        await dbManager.updatePrompt(currentPromptId, { title, data })
      } else {
        const id = await dbManager.savePrompt({ title, data })
        onPromptSaved(id)
      }
      setSaveStatus('success')
      setTimeout(() => setSaveStatus('idle'), 2000)
    } catch (error) {
      console.error('Save failed:', error)
      setSaveStatus('error')
      setTimeout(() => setSaveStatus('idle'), 3000)
    } finally {
      setIsSaving(false)
    }
  }

  const handleLoadPrompts = async () => {
    setIsLoading(true)
    try {
      const prompts = await dbManager.getAllPrompts()
      setSavedPrompts(prompts)
      setIsLoadOpen(true)
    } catch (error) {
      console.error('Failed to load prompts:', error)
      alert('Failed to load saved prompts')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLoadPrompt = (prompt: any) => {
    onPromptLoaded(prompt.id, prompt.title, prompt.data)
    setIsLoadOpen(false)
  }

  const handleDeletePrompt = async (promptId: string, event: React.MouseEvent) => {
    event.stopPropagation()
    if (confirm('Are you sure you want to delete this prompt?')) {
      try {
        await dbManager.deletePrompt(promptId)
        const prompts = await dbManager.getAllPrompts()
        setSavedPrompts(prompts)
      } catch (error) {
        console.error('Failed to delete prompt:', error)
        alert('Failed to delete prompt')
      }
    }
  }

  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-slate-700/50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Title Section */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    AI Video Prompt Composer - Le tool plus cool!
                  </h1>
                  <p className="text-slate-400 text-sm">Create professional structured prompts for AI video generation</p>
                </div>
              </div>
            </div>

            {/* Title Input */}
            <div className="max-w-md">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Prompt Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => onTitleChange(e.target.value)}
                placeholder="Enter a title for your prompt..."
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Load Button */}
            <div className="relative">
              <button
                onClick={handleLoadPrompts}
                disabled={isLoading}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-medium rounded-xl transition-all duration-200 disabled:cursor-not-allowed"
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

              {/* Load Dropdown */}
              {isLoadOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-slate-800 border border-slate-600 rounded-xl shadow-xl z-[99999] max-h-96 overflow-y-auto">
                  <div className="p-3">
                    <div className="text-sm font-medium text-slate-300 mb-3">Saved Prompts</div>
                    {savedPrompts.length === 0 ? (
                      <div className="text-slate-400 text-sm py-4 text-center">No saved prompts found</div>
                    ) : (
                      <div className="space-y-2">
                        {savedPrompts.map((prompt) => (
                          <div
                            key={prompt.id}
                            onClick={() => handleLoadPrompt(prompt)}
                            className="flex items-center justify-between p-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg cursor-pointer transition-colors group"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-white text-sm truncate">
                                {prompt.title}
                              </div>
                              <div className="text-xs text-slate-400 mt-1">
                                {new Date(prompt.updatedAt).toLocaleDateString()} at {new Date(prompt.updatedAt).toLocaleTimeString()}
                              </div>
                            </div>
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
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              disabled={isSaving || !title.trim()}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-medium rounded-xl transition-all duration-200 disabled:cursor-not-allowed"
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
              {currentPromptId ? 'Update' : 'Save'}
            </button>

            {/* Export Button */}
            <div className="relative">
              <button
                onClick={() => setIsExportOpen(!isExportOpen)}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-xl transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export
              </button>

              {/* Export Dropdown */}
              {isExportOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-slate-800 border border-slate-600 rounded-xl shadow-xl z-[99999]">
                  <div className="p-2">
                    <button
                      onClick={() => handleExport('json')}
                      className="w-full text-left px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      Export as JSON
                    </button>
                    <button
                      onClick={() => handleExport('xml')}
                      className="w-full text-left px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      Export as XML
                    </button>
                    <button
                      onClick={() => handleExport('markdown')}
                      className="w-full text-left px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      Export as Markdown
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Save Status */}
        {saveStatus !== 'idle' && (
          <div className={`mt-4 p-3 rounded-lg ${
            saveStatus === 'success'
              ? 'bg-green-900/50 border border-green-700 text-green-300'
              : 'bg-red-900/50 border border-red-700 text-red-300'
          }`}>
            {saveStatus === 'success' ? '✓ Prompt saved successfully!' : '✗ Failed to save prompt'}
          </div>
        )}

        {/* Credits */}
        <div className="mt-6 pt-4 border-t border-slate-700/50">
          <div className="text-center">
            <p className="text-slate-400 text-sm">
              Created by{' '}
              <a
                href="https://ai-created.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
              >
                Marco van Hylckama Vlieg
              </a>
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Love this tool?{' '}
              <a
                href="https://x.com/AIandDesign"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Follow and subscribe on X
              </a>{' '}
              for more AI tools and insights!
            </p>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {(isExportOpen || isLoadOpen) && (
        <div
          className="fixed inset-0 z-[99998]"
          onClick={() => {
            setIsExportOpen(false)
            setIsLoadOpen(false)
          }}
        />
      )}
    </div>
  )
}
