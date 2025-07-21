'use client'

import { useState, useRef, useEffect } from 'react'
import { CAMERA_MOTIONS, CAMERA_MOTIONS_BY_CATEGORY, CAMERA_MOTION_CATEGORY_DISPLAY_NAMES, findCameraMotion } from '@/constants/cameraMotion'

interface CameraMotionSelectProps {
  value: string
  onChange: (value: string) => void
}

export function CameraMotionSelect({ value, onChange }: CameraMotionSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const currentCameraMotion = findCameraMotion(value)
  const categories = Object.keys(CAMERA_MOTIONS_BY_CATEGORY)
  
  // Filter camera motions based on search term
  const filteredCameraMotions = searchTerm 
    ? CAMERA_MOTIONS.filter(motion => 
        motion.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        motion.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : []

  const handleSelect = (motionValue: string) => {
    onChange(motionValue)
    setIsOpen(false)
    setSelectedCategory(null)
    setSearchTerm('')
  }

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-slate-300 mb-2">
        Camera Motion
      </label>

      {/* Current Selection Display */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-slate-700/50 text-left flex justify-between items-center transition-all duration-200 hover:bg-slate-600/50"
      >
        <div>
          <div className="font-medium text-white">
            {currentCameraMotion?.label || 'Select a camera motion...'}
          </div>
          {currentCameraMotion && (
            <div className="text-xs text-slate-400 mt-1">
              {currentCameraMotion.description}
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
        <div className="absolute z-[115] w-full mt-1 bg-slate-800 border border-slate-600 rounded-xl shadow-2xl max-h-96 overflow-hidden">
          {/* Search Bar */}
          <div className="p-3 border-b border-slate-600">
            <input
              type="text"
              placeholder="Search camera motions..."
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
                      {CAMERA_MOTION_CATEGORY_DISPLAY_NAMES[category] || category}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Camera Motions List */}
            <div className="flex-1 max-h-96 overflow-y-auto">
              {searchTerm ? (
                <div className="p-2">
                  <div className="text-xs font-semibold text-slate-600 mb-2 px-2">
                    Search Results ({filteredCameraMotions.length})
                  </div>
                  {filteredCameraMotions.length > 0 ? (
                    filteredCameraMotions.map((motion) => (
                      <button
                        key={motion.value}
                        type="button"
                        onClick={() => handleSelect(motion.value)}
                        className={`w-full text-left p-2 rounded hover:bg-slate-100 ${
                          value === motion.value ? 'bg-blue-50 border-l-2 border-blue-500' : ''
                        }`}
                      >
                        <div className="font-medium text-slate-900 text-sm">
                          {motion.label}
                        </div>
                        <div className="text-xs text-slate-600 mt-1">
                          {motion.description}
                        </div>
                        <div className="text-xs text-slate-400 mt-1">
                          {motion.category}
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="p-4 text-center text-slate-500 text-sm">
                      No camera motions found matching "{searchTerm}"
                    </div>
                  )}
                </div>
              ) : selectedCategory ? (
                <div className="p-2">
                  <div className="text-xs font-semibold text-slate-600 mb-2 px-2">
                    {CAMERA_MOTION_CATEGORY_DISPLAY_NAMES[selectedCategory] || selectedCategory}
                  </div>
                  {CAMERA_MOTIONS_BY_CATEGORY[selectedCategory].map((motion) => (
                    <button
                      key={motion.value}
                      type="button"
                      onClick={() => handleSelect(motion.value)}
                      className={`w-full text-left p-2 rounded hover:bg-slate-100 ${
                        value === motion.value ? 'bg-blue-50 border-l-2 border-blue-500' : ''
                      }`}
                    >
                      <div className="font-medium text-slate-900 text-sm">
                        {motion.label}
                      </div>
                      <div className="text-xs text-slate-600 mt-1">
                        {motion.description}
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-slate-500 text-sm">
                  Select a category to view camera motions or use the search above
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[114]"
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
