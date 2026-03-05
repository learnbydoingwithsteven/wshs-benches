import React from 'react';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 glass-panel border-x-0 border-t-0 border-b border-white/10 rounded-none w-full bg-[#05050A]/80">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-blue-500/20 blur-md rounded-full"></div>
                        <div className="relative w-9 h-9 rounded-xl bg-gradient-to-b from-blue-500/20 to-purple-500/10 border border-blue-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center">
                            <svg className="w-5 h-5 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300 drop-shadow-sm">
                            LLM Benchmarks
                        </h1>
                    </div>
                </div>
                <div className="hidden sm:flex items-center gap-3">
                    <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)] animate-pulse"></span>
                        Real-time Aggregation
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
