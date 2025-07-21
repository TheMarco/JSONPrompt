'use client'

import { useState } from 'react'

interface CustomSelectProps {
  label: string
  value: string
  onChange: (value: string) => void
  options: Array<{ value: string; label: string; description?: string }>
  placeholder?: string
}

export function CustomSelect({ label, value, onChange, options, placeholder }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false)

  const currentOption = options.find(option => option.value === value)

  const handleSelect = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  return (
    <div className="relative group">
      <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-3">
        <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-focus-within:scale-150 transition-transform duration-200"></div>
        {label}
      </label>
      
      {/* Current Selection Display */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-slate-700/50 text-left flex justify-between items-center transition-all duration-200 hover:bg-slate-600/50 hover:border-slate-500"
      >
        <div className="flex-1">
          <div className="font-medium text-white">
            {currentOption?.label || placeholder || 'Select an option...'}
          </div>
          {currentOption?.description && (
            <div className="text-xs text-slate-400 mt-1">
              {currentOption.description}
            </div>
          )}
        </div>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-[105] w-full mt-1 bg-slate-800 border border-slate-600 rounded-xl shadow-2xl max-h-64 overflow-hidden">
          <div className="max-h-64 overflow-y-auto">
            <div className="p-2">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`w-full text-left p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 ${
                    value === option.value ? 'bg-purple-600/20 border-l-2 border-purple-500' : ''
                  }`}
                >
                  <div className="font-medium text-white text-sm">
                    {option.label}
                  </div>
                  {option.description && (
                    <div className="text-xs text-slate-400 mt-1">
                      {option.description}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[104]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
