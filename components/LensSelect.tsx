'use client'

import { useState } from 'react'
import { LENS_TYPES, LENS_TYPES_BY_CATEGORY, LENS_CATEGORY_DISPLAY_NAMES, findLensType } from '@/constants/lensTypes'

interface LensSelectProps {
  value: string
  onChange: (value: string) => void
}

export function LensSelect({ value, onChange }: LensSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const currentLensType = findLensType(value)
  const categories = Object.keys(LENS_TYPES_BY_CATEGORY)
  
  // Filter lens types based on search term
  const filteredLensTypes = searchTerm 
    ? LENS_TYPES.filter(lens => 
        lens.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lens.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (lens.focalLength && lens.focalLength.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : []

  const handleSelect = (lensValue: string) => {
    onChange(lensValue)
    setIsOpen(false)
    setSelectedCategory(null)
    setSearchTerm('')
  }

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-slate-300 mb-2">
        Lens
      </label>

      {/* Current Selection Display */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-slate-700/50 text-left flex justify-between items-center transition-all duration-200 hover:bg-slate-600/50"
      >
        <div>
          <div className="font-medium text-white">
            {currentLensType?.label || 'Select a lens...'}
          </div>
          {currentLensType && (
            <div className="text-xs text-slate-400 mt-1">
              {currentLensType.focalLength && (
                <span className="font-mono bg-slate-600 text-slate-200 px-2 py-0.5 rounded mr-2">
                  {currentLensType.focalLength}
                </span>
              )}
              {currentLensType.description}
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
        <div className="absolute z-[125] w-full mt-1 bg-slate-800 border border-slate-600 rounded-xl shadow-2xl max-h-96 overflow-hidden">
          {/* Search Bar */}
          <div className="p-3 border-b border-slate-600">
            <input
              type="text"
              placeholder="Search lenses by name, focal length, or description..."
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
                      {LENS_CATEGORY_DISPLAY_NAMES[category] || category}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Lens Types List */}
            <div className="flex-1 max-h-96 overflow-y-auto">
              {searchTerm ? (
                <div className="p-2">
                  <div className="text-xs font-semibold text-slate-300 mb-2 px-2">
                    Search Results ({filteredLensTypes.length})
                  </div>
                  {filteredLensTypes.length > 0 ? (
                    filteredLensTypes.map((lens) => (
                      <button
                        key={lens.value}
                        type="button"
                        onClick={() => handleSelect(lens.value)}
                        className={`w-full text-left p-2 rounded hover:bg-slate-700 transition-colors duration-200 ${
                          value === lens.value ? 'bg-purple-600/20 border-l-2 border-purple-500' : ''
                        }`}
                      >
                        <div className="font-medium text-white text-sm">
                          {lens.label}
                          {lens.focalLength && (
                            <span className="ml-2 font-mono text-xs bg-slate-600 text-slate-200 px-1 rounded">
                              {lens.focalLength}
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-300 mt-1">
                          {lens.description}
                        </div>
                        <div className="text-xs text-slate-400 mt-1">
                          {lens.category}
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="p-4 text-center text-slate-500 text-sm">
                      No lenses found matching "{searchTerm}"
                    </div>
                  )}
                </div>
              ) : selectedCategory ? (
                <div className="p-2">
                  <div className="text-xs font-semibold text-slate-300 mb-2 px-2">
                    {LENS_CATEGORY_DISPLAY_NAMES[selectedCategory] || selectedCategory}
                  </div>
                  {LENS_TYPES_BY_CATEGORY[selectedCategory].map((lens) => (
                    <button
                      key={lens.value}
                      type="button"
                      onClick={() => handleSelect(lens.value)}
                      className={`w-full text-left p-2 rounded hover:bg-slate-700 transition-colors duration-200 ${
                        value === lens.value ? 'bg-purple-600/20 border-l-2 border-purple-500' : ''
                      }`}
                    >
                      <div className="font-medium text-white text-sm">
                        {lens.label}
                        {lens.focalLength && (
                          <span className="ml-2 font-mono text-xs bg-slate-600 text-slate-200 px-1 rounded">
                            {lens.focalLength}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-300 mt-1">
                        {lens.description}
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-slate-500 text-sm">
                  Select a category to view lenses or use the search above
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[124]"
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
