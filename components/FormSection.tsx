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
    <div className="bg-gradient-to-br from-slate-800/40 via-slate-800/30 to-slate-900/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-600/30 p-8 hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
        <h3 className="text-xl font-semibold bg-gradient-to-r from-white via-purple-200 to-slate-300 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">{title}</h3>
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
                className="w-full px-4 py-3 bg-slate-700/30 backdrop-blur-sm border border-slate-600/50 rounded-2xl text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 focus:bg-slate-600/40 transition-all duration-300 hover:border-slate-500/70 hover:bg-slate-600/30 shadow-inner"
              />
            )}
            {field.type === 'textarea' && (
              <textarea
                value={data[field.key] || ''}
                onChange={(e) => handleChange(field.key, e.target.value)}
                placeholder={field.placeholder}
                rows={3}
                className="w-full px-4 py-3 bg-slate-700/30 backdrop-blur-sm border border-slate-600/50 rounded-2xl text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 focus:bg-slate-600/40 resize-y transition-all duration-300 hover:border-slate-500/70 hover:bg-slate-600/30 shadow-inner"
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