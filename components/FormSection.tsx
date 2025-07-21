'use client'

import { CustomSelect } from './CustomSelect'

interface Field {
  key: string
  label: string
  type: 'text' | 'textarea' | 'select' | 'range' | 'number'
  options?: string[]
  placeholder?: string
  min?: number
  max?: number
  step?: number
}

interface FormSectionProps {
  title: string
  data: Record<string, any>
  onUpdate: (updates: Record<string, any>) => void
  fields: Field[]
}

export function FormSection({ title, data, onUpdate, fields }: FormSectionProps) {
  const handleChange = (key: string, value: any) => {
    onUpdate({ [key]: value })
  }

  return (
    <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700/50 p-8 hover:shadow-purple-500/10 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
        <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">{title}</h3>
      </div>
      <div className="space-y-6">
        {fields.map((field) => (
          <div key={field.key} className="group">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-3">
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-focus-within:scale-150 transition-transform duration-200"></div>
              {field.label}
            </label>
            {field.type === 'select' && (
              <div className="-mt-3">
                <CustomSelect
                  label=""
                  value={data[field.key] || ''}
                  onChange={(value) => handleChange(field.key, value)}
                  options={field.options?.map(option => ({ value: option, label: option })) || []}
                  placeholder={`Select ${field.label.toLowerCase()}...`}
                />
              </div>
            )}
            {field.type === 'text' && (
              <input
                type="text"
                value={data[field.key] || ''}
                onChange={(e) => handleChange(field.key, e.target.value)}
                placeholder={field.placeholder}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-slate-600/50 transition-all duration-200 hover:border-slate-500"
              />
            )}
            {field.type === 'textarea' && (
              <textarea
                value={data[field.key] || ''}
                onChange={(e) => handleChange(field.key, e.target.value)}
                placeholder={field.placeholder}
                rows={3}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-slate-600/50 resize-none transition-all duration-200 hover:border-slate-500"
              />
            )}
            {field.type === 'range' && (
              <div className="space-y-2">
                <input
                  type="range"
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  value={data[field.key] || 0}
                  onChange={(e) => handleChange(field.key, parseFloat(e.target.value))}
                  className="w-full accent-purple-500"
                />
                <div className="text-sm text-slate-400 text-center">
                  {data[field.key] || 0}
                </div>
              </div>
            )}
            {field.type === 'number' && (
              <input
                type="number"
                value={data[field.key] || ''}
                onChange={(e) => handleChange(field.key, parseFloat(e.target.value))}
                min={field.min}
                max={field.max}
                step={field.step}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}