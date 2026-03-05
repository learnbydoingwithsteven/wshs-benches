import React, { useState } from 'react';

const BenchmarkCard = ({ title, url, description, iframeSupported = true }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="glass-panel rounded-2xl overflow-hidden flex flex-col h-[600px] border border-white/10 group">
            <div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/5 relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex-1">
                    <h3 className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors">{title}</h3>
                    {description && <p className="text-sm text-gray-400 mt-1">{description}</p>}
                </div>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 relative z-10 border border-white/5 hover:border-white/20 group/btn ml-4"
                    title="Open in new tab"
                >
                    <svg className="w-4 h-4 text-gray-400 group-hover/btn:text-white group-hover/btn:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
            <div className="relative flex-1 bg-black/40 flex items-center justify-center overflow-hidden">
                {iframeSupported ? (
                    <>
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm z-10">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="relative flex h-10 w-10">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-20"></span>
                                        <span className="relative inline-flex rounded-full h-10 w-10 bg-blue-500/20 border border-blue-500/50 justify-center items-center">
                                            <div className="h-4 w-4 rounded-full border-2 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
                                        </span>
                                    </div>
                                    <span className="text-xs font-medium text-blue-400/80 uppercase tracking-widest">Loading Source</span>
                                </div>
                            </div>
                        )}
                        <iframe
                            src={url}
                            className="absolute inset-0 w-full h-full border-0"
                            onLoad={() => setIsLoading(false)}
                            title={title}
                            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                        />
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center p-8 text-center max-w-md w-full">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h4 className="text-white/90 font-medium mb-2">Embedding Restricted</h4>
                        <p className="text-gray-400 text-sm mb-6">
                            This platform enforces strict security policies that prevent it from being embedded here.
                        </p>
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 hover:border-blue-500/40 rounded-xl transition-all duration-300 font-medium flex items-center gap-2"
                        >
                            Open Benchmark
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BenchmarkCard;
