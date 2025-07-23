'use client'

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-slate-900/70 via-purple-900/70 to-indigo-900/70 border-b border-purple-500/20 backdrop-blur-2xl shadow-2xl shadow-purple-500/20 sticky top-0 z-[100] relative overflow-hidden">
      {/* Enhanced header glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-violet-600/10 animate-gradient"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-violet-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/40 animate-pulse relative overflow-hidden">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                {/* Floating sparkles around logo */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-sparkle"></div>
                <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-purple-300 rounded-full animate-sparkle delay-500"></div>
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 via-pink-200 to-violet-200 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                  AI Video Prompt Composer - Le tool plus cool!
                </h1>
                <p className="text-slate-200 text-base font-medium mt-1 bg-gradient-to-r from-slate-200 to-purple-200 bg-clip-text text-transparent">Create professional structured prompts for AI video generation</p>
              </div>
            </div>
          </div>

          {/* Beautiful CTA */}
          <div className="text-center">
            <div className="relative inline-block group">
              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 animate-pulse delay-75"></div>
              
              {/* Sparkles */}
              <div className="absolute -top-2 -left-2 w-1 h-1 bg-white rounded-full animate-sparkle"></div>
              <div className="absolute -top-1 right-4 w-0.5 h-0.5 bg-purple-300 rounded-full animate-sparkle delay-300"></div>
              <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-pink-300 rounded-full animate-sparkle delay-700"></div>
              
              <a
                href="/promo"
                className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 hover:from-purple-700 hover:via-pink-700 hover:to-violet-700 text-white font-bold text-lg rounded-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-white/20 backdrop-blur-sm shadow-2xl"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span className="bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                    Love this? Click here!
                  </span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
            <p className="text-slate-400 text-xs mt-3 font-medium">
              Discover more incredible AI tools and connect with the creator
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
