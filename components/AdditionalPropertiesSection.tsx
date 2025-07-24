'use client'

import { useState } from 'react'

interface AdditionalPropertiesSectionProps {
  data: { [key: string]: string }
  onUpdate: (updates: { [key: string]: string }) => void
}

export function AdditionalPropertiesSection({ data, onUpdate }: AdditionalPropertiesSectionProps) {
  const [newKey, setNewKey] = useState('')
  const [newValue, setNewValue] = useState('')

  const handleAddProperty = () => {
    if (newKey.trim() && newValue.trim()) {
      onUpdate({
        ...data,
        [newKey.trim()]: newValue.trim()
      })
      setNewKey('')
      setNewValue('')
    }
  }

  const handleRemoveProperty = (key: string) => {
    const newData = { ...data }
    delete newData[key]
    onUpdate(newData)
  }

  const handleUpdateProperty = (oldKey: string, newKey: string, newValue: string) => {
    const newData = { ...data }
    if (oldKey !== newKey) {
      delete newData[oldKey]
    }
    newData[newKey] = newValue
    onUpdate(newData)
  }

  const properties = Object.entries(data)

  return (
    <div className="bg-gradient-to-br from-slate-800/40 via-slate-800/30 to-slate-900/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-600/30 p-8 hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
        <h3 className="text-xl font-semibold bg-gradient-to-r from-white via-purple-200 to-slate-300 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">Additional Properties</h3>
      </div>
      
      <div className="space-y-6">
        {/* Existing Properties */}
        {properties.length > 0 && (
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-3">
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              Custom Properties
            </label>
            {properties.map(([key, value]) => (
              <div key={key} className="flex gap-2">
                <input
                  type="text"
                  value={key}
                  onChange={(e) => handleUpdateProperty(key, e.target.value, value)}
                  placeholder="Property name"
                  className="flex-1 px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleUpdateProperty(key, key, e.target.value)}
                  placeholder="Property value"
                  className="flex-1 px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={() => handleRemoveProperty(key)}
                  className="px-3 py-2 text-red-400 hover:text-red-300 border border-slate-600 rounded-lg hover:border-red-500 transition-colors"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Add New Property */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-3">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            Add New Property
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={newKey}
              onChange={(e) => setNewKey(e.target.value)}
              placeholder="Property name (e.g., weather)"
              className="flex-1 px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              onKeyPress={(e) => e.key === 'Enter' && handleAddProperty()}
            />
            <input
              type="text"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              placeholder="Property value (e.g., blizzard)"
              className="flex-1 px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              onKeyPress={(e) => e.key === 'Enter' && handleAddProperty()}
            />
            <button
              onClick={handleAddProperty}
              disabled={!newKey.trim() || !newValue.trim()}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors text-sm font-medium"
            >
              Add
            </button>
          </div>
        </div>

        {/* Help Text */}
        <div className="text-xs text-slate-400 bg-slate-700/20 rounded-lg p-3 border border-slate-600/30">
          <p className="mb-1"><strong>Additional Properties</strong> allow you to add custom key-value pairs not covered by the standard form fields.</p>
          <p><strong>Examples:</strong> weather: blizzard, season: winter, mood: mysterious, temperature: cold</p>
        </div>
      </div>
    </div>
  )
}
