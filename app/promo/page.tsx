'use client'

export default function PromoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-pink-400/20 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-blue-400/40 rounded-full animate-float delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-violet-400/25 rounded-full animate-float delay-1500"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-400/35 rounded-full animate-float delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-6 py-12 text-center">
          <div className="relative inline-block mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-pink-500 to-violet-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/40 animate-pulse mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              <svg className="w-12 h-12 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            {/* Sparkles around logo */}
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full animate-sparkle"></div>
            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-300 rounded-full animate-sparkle delay-500"></div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 via-pink-200 to-violet-200 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%] mb-6">
            Meet Marco van Hylckama Vlieg
          </h1>
          
          <p className="text-2xl md:text-3xl text-slate-200 font-medium mb-8 bg-gradient-to-r from-slate-200 to-purple-200 bg-clip-text text-transparent">
            The AI Visionary Behind Your Favorite Tools
          </p>

          <div className="max-w-4xl mx-auto text-lg text-slate-300 leading-relaxed mb-12">
            <p className="mb-6">
              This incredible AI Video Prompt Composer is just the beginning! If you love what you've experienced,
              you're going to be absolutely <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">blown away</span> by what else Marco has created.
            </p>

            {/* Open Source Highlight */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  🎉 Completely Open Source!
                </h3>
              </div>
              <p className="text-slate-300 mb-4">
                Love transparency? This entire AI Video Prompt Composer is <span className="text-green-400 font-semibold">100% open source</span>!
                Download the complete source code, learn from it, modify it, or contribute to make it even better.
              </p>
              <a
                href="https://github.com/TheMarco/JSONPrompt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Source Code on GitHub
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <p className="text-xl font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-8">
              For less than a fancy Starbucks coffee ($3/month), unlock a universe of AI-powered productivity tools!
            </p>
          </div>

          {/* Main CTA */}
          <div className="mb-16">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 animate-pulse delay-75"></div>
              
              <a
                href="https://x.com/AIandDesign"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 hover:from-purple-700 hover:via-pink-700 hover:to-violet-700 text-white font-bold text-2xl rounded-3xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-white/20 backdrop-blur-sm shadow-2xl"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>Follow Marco on X & Subscribe!</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Apps Showcase */}
        <div className="container mx-auto px-6 pb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Unlock These Amazing AI Tools
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Thought 2 Tweet */}
            <div className="bg-gradient-to-br from-slate-800/40 via-slate-800/30 to-slate-900/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-600/30 p-8 hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">Thought 2 Tweet</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Transform your scattered thoughts into <span className="text-cyan-400 font-semibold">viral social media posts</span> in seconds! 
                Just speak your mind while driving, walking, or whenever inspiration strikes. Our AI crafts beautiful posts in various tones and styles.
              </p>
              <a 
                href="https://thought2tweet.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group-hover:translate-x-2 duration-300"
              >
                Try Thought 2 Tweet
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Calorie Counter */}
            <div className="bg-gradient-to-br from-slate-800/40 via-slate-800/30 to-slate-900/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-600/30 p-8 hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">AI Calorie Counter</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                The most <span className="text-emerald-400 font-semibold">effortless way</span> to track your nutrition! 
                Log calories and macros through photos, speech, barcode scanning, or text. Beautiful visualizations make health tracking actually enjoyable.
              </p>
              <a 
                href="https://caloriecounter.ai-created.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors group-hover:translate-x-2 duration-300"
              >
                Start Tracking Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* My AI Journal */}
            <div className="bg-gradient-to-br from-slate-800/40 via-slate-800/30 to-slate-900/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-600/30 p-8 hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2 group md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">My AI Journal</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                <span className="text-violet-400 font-semibold">The future of journaling</span> is here! 
                Currently in exclusive beta - this revolutionary app makes journaling effortless with AI summaries, chat sessions with your entire archive, and features you never imagined possible.
              </p>
              <a 
                href="https://diary.ai-created.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-semibold transition-colors group-hover:translate-x-2 duration-300"
              >
                Join the Beta
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Connect Section */}
        <div className="container mx-auto px-6 pb-16">
          <div className="bg-gradient-to-br from-slate-800/40 via-slate-800/30 to-slate-900/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-600/30 p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Connect with Marco
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <a 
                href="https://ai-created.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl p-6 hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2">Website</h3>
                <p className="text-slate-400 text-sm">ai-created.com</p>
              </a>

              <a 
                href="https://x.com/AIandDesign" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl p-6 hover:from-blue-600/20 hover:to-cyan-600/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2">X (Twitter)</h3>
                <p className="text-slate-400 text-sm">@AIandDesign</p>
              </a>

              <a 
                href="http://youtube.com/@AIandDesign" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl p-6 hover:from-red-600/20 hover:to-pink-600/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2">YouTube</h3>
                <p className="text-slate-400 text-sm">@AIandDesign</p>
              </a>
            </div>

            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 animate-pulse"></div>
              
              <a
                href="https://x.com/AIandDesign"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 hover:from-purple-700 hover:via-pink-700 hover:to-violet-700 text-white font-bold text-xl rounded-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-white/20 backdrop-blur-sm shadow-2xl"
              >
                <span className="text-2xl">🚀</span>
                <span>Start Your AI Journey Today!</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Back to Tool */}
        <div className="container mx-auto px-6 pb-16 text-center">
          <a 
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to AI Video Prompt Composer
          </a>
        </div>
      </div>
    </div>
  )
}
