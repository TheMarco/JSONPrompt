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
        className="w-full px-4 py-3 border border-slate-600/50 rounded-2xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 bg-slate-700/30 backdrop-blur-sm text-left flex justify-between items-center transition-all duration-300 hover:bg-slate-600/30 hover:border-slate-500/70 shadow-inner group"
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
        <div className="absolute z-[105] w-full mt-2 bg-slate-800/90 backdrop-blur-xl border border-slate-600/30 rounded-2xl shadow-2xl max-h-64 overflow-hidden animate-slideUp">
          <div className="max-h-64 overflow-y-auto">
            <div className="p-2">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`w-full text-left p-3 rounded-xl hover:bg-slate-700/70 transition-all duration-300 hover:scale-[1.02] ${
                    value === option.value ? 'bg-purple-600/20 border-l-2 border-purple-500 shadow-lg shadow-purple-500/10' : ''
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
