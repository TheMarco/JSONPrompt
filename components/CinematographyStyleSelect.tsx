'use client'

import { useState } from 'react'
import { CINEMATOGRAPHY_STYLES, findCinematographyStyle } from '@/constants/cinematographyStyles'

interface CinematographyStyleSelectProps {
  value: string
  onChange: (value: string) => void
}

export function CinematographyStyleSelect({ value, onChange }: CinematographyStyleSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  
  const currentStyle = findCinematographyStyle(value)
  
  // Filter styles based on search term
  const filteredStyles = searchTerm 
    ? CINEMATOGRAPHY_STYLES.filter(style => 
        style.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        style.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        style.mood.toLowerCase().includes(searchTerm.toLowerCase()) ||
        style.useCase.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : CINEMATOGRAPHY_STYLES

  const handleSelect = (styleValue: string) => {
    onChange(styleValue)
    setIsOpen(false)
    setSearchTerm('')
  }

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-slate-300 mb-2">
        Cinematography Style
      </label>

      {/* Current Selection Display */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-slate-700/50 text-left flex justify-between items-center transition-all duration-200 hover:bg-slate-600/50"
      >
        <div>
          <div className="font-medium text-white">
            {currentStyle?.label || 'Select a cinematography style...'}
          </div>
          {currentStyle && (
            <div className="text-xs text-slate-400 mt-1">
              <div className="mb-1">{currentStyle.description}</div>
              <div className="text-slate-500">
                <span className="font-medium text-slate-300">Mood:</span> {currentStyle.mood}
              </div>
            </div>
          )}
        </div>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-[130] w-full mt-1 bg-slate-800 border border-slate-600 rounded-xl shadow-2xl max-h-96 overflow-hidden">
          {/* Search Bar */}
          <div className="p-3 border-b border-slate-600">
            <input
              type="text"
              placeholder="Search cinematography styles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              autoFocus
            />
          </div>
          
          {/* Styles List */}
          <div className="max-h-80 overflow-y-auto">
            <div className="p-2">
              <div className="text-xs font-semibold text-slate-300 mb-2 px-2">
                Cinematography Styles ({filteredStyles.length})
              </div>
              {filteredStyles.length > 0 ? (
                filteredStyles.map((style) => (
                  <button
                    key={style.value}
                    type="button"
                    onClick={() => handleSelect(style.value)}
                    className={`w-full text-left p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 border-b border-slate-600/50 last:border-b-0 ${
                      value === style.value ? 'bg-purple-600/20 border-l-2 border-purple-500' : ''
                    }`}
                  >
                    <div className="font-medium text-white text-sm mb-1">
                      {style.label}
                    </div>
                    <div className="text-xs text-slate-300 mb-2">
                      {style.description}
                    </div>
                    <div className="text-xs text-slate-400 space-y-1">
                      <div>
                        <span className="font-medium text-slate-300">Visual:</span> {style.visualTrademarks}
                      </div>
                      <div>
                        <span className="font-medium text-slate-300">Mood:</span> {style.mood}
                      </div>
                      <div>
                        <span className="font-medium text-slate-300">Use Case:</span> {style.useCase}
                      </div>
                      <div>
                        <span className="font-medium text-slate-300">Examples:</span> {style.examples}
                      </div>
                    </div>
                  </button>
                ))
              ) : (
                <div className="p-4 text-center text-slate-400 text-sm">
                  No cinematography styles found matching "{searchTerm}"
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[129]"
          onClick={() => {
            setIsOpen(false)
            setSearchTerm('')
          }}
        />
      )}
    </div>
  )
}
