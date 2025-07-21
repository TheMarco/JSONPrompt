'use client'

import { useState } from 'react'
import { LIGHTING_TYPES, LIGHTING_TYPES_BY_CATEGORY, LIGHTING_CATEGORY_DISPLAY_NAMES, findLightingType } from '@/constants/lightingTypes'

interface LightingSelectProps {
  value: string
  onChange: (value: string) => void
}

export function LightingSelect({ value, onChange }: LightingSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const currentLightingType = findLightingType(value)
  const categories = Object.keys(LIGHTING_TYPES_BY_CATEGORY)
  
  // Filter lighting types based on search term
  const filteredLightingTypes = searchTerm 
    ? LIGHTING_TYPES.filter(lighting => 
        lighting.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lighting.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : []

  const handleSelect = (lightingValue: string) => {
    onChange(lightingValue)
    setIsOpen(false)
    setSelectedCategory(null)
    setSearchTerm('')
  }

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-slate-300 mb-2">
        Lighting
      </label>

      {/* Current Selection Display */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-slate-700/50 text-left flex justify-between items-center transition-all duration-200 hover:bg-slate-600/50"
      >
        <div>
          <div className="font-medium text-white">
            {currentLightingType?.label || 'Select lighting...'}
          </div>
          {currentLightingType && (
            <div className="text-xs text-slate-400 mt-1">
              {currentLightingType.description}
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
        <div className="absolute z-[120] w-full mt-1 bg-slate-800 border border-slate-600 rounded-xl shadow-2xl max-h-96 overflow-hidden">
          {/* Search Bar */}
          <div className="p-3 border-b border-slate-600">
            <input
              type="text"
              placeholder="Search lighting types..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              autoFocus
            />
          </div>

          <div className="flex">
            {/* Categories Sidebar - Hidden when searching */}
            {!searchTerm && (
              <div className="w-1/3 border-r border-slate-600 bg-slate-700/30">
                <div className="p-2">
                  <div className="text-xs font-semibold text-slate-300 mb-2">Categories</div>
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-2 py-1.5 text-xs rounded hover:bg-slate-600 transition-colors ${
                        selectedCategory === category ? 'bg-purple-600 text-white' : 'text-slate-300'
                      }`}
                    >
                      {LIGHTING_CATEGORY_DISPLAY_NAMES[category] || category}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Lighting Types List */}
            <div className="flex-1 max-h-96 overflow-y-auto">
              {searchTerm ? (
                <div className="p-2">
                  <div className="text-xs font-semibold text-slate-300 mb-2 px-2">
                    Search Results ({filteredLightingTypes.length})
                  </div>
                  {filteredLightingTypes.length > 0 ? (
                    filteredLightingTypes.map((lighting) => (
                      <button
                        key={lighting.value}
                        type="button"
                        onClick={() => handleSelect(lighting.value)}
                        className={`w-full text-left p-2 rounded hover:bg-slate-700 transition-colors duration-200 ${
                          value === lighting.value ? 'bg-purple-600/20 border-l-2 border-purple-500' : ''
                        }`}
                      >
                        <div className="font-medium text-white text-sm">
                          {lighting.label}
                        </div>
                        <div className="text-xs text-slate-300 mt-1">
                          {lighting.description}
                        </div>
                        <div className="text-xs text-slate-400 mt-1">
                          {lighting.category}
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="p-4 text-center text-slate-500 text-sm">
                      No lighting types found matching "{searchTerm}"
                    </div>
                  )}
                </div>
              ) : selectedCategory ? (
                <div className="p-2">
                  <div className="text-xs font-semibold text-slate-300 mb-2 px-2">
                    {LIGHTING_CATEGORY_DISPLAY_NAMES[selectedCategory] || selectedCategory}
                  </div>
                  {LIGHTING_TYPES_BY_CATEGORY[selectedCategory].map((lighting) => (
                    <button
                      key={lighting.value}
                      type="button"
                      onClick={() => handleSelect(lighting.value)}
                      className={`w-full text-left p-2 rounded hover:bg-slate-700 transition-colors duration-200 ${
                        value === lighting.value ? 'bg-purple-600/20 border-l-2 border-purple-500' : ''
                      }`}
                    >
                      <div className="font-medium text-white text-sm">
                        {lighting.label}
                      </div>
                      <div className="text-xs text-slate-300 mt-1">
                        {lighting.description}
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-slate-500 text-sm">
                  Select a category to view lighting types or use the search above
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[119]"
          onClick={() => {
            setIsOpen(false)
            setSelectedCategory(null)
            setSearchTerm('')
          }}
        />
      )}
    </div>
  )
}
