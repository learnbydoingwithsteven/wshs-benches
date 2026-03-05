import React from 'react';
import BenchmarkCard from './BenchmarkCard';

const BENCHMARKS = [
    {
        id: 'bullshit',
        title: 'Bullshit Benchmark',
        description: 'Measuring LLM hallucination & refuse rates',
        url: 'https://petergpt.github.io/bullshit-benchmark/viewer/index.v2.html',
        iframeSupported: true
    },
    {
        id: 'hf-open',
        title: 'Open LLM Leaderboard',
        description: 'HuggingFace standard evaluation suite',
        url: 'https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard#/',
        iframeSupported: false
    },
    {
        id: 'arena',
        title: 'Chatbot Arena',
        description: 'Crowdsourced blind testing & Elo rating',
        url: 'https://arena.ai/leaderboard/',
        iframeSupported: false
    },
    {
        id: 'gpqa',
        title: 'Artificial Analysis (GPQA)',
        description: 'Graduate-level reasoning capabilities',
        url: 'https://artificialanalysis.ai/evaluations/gpqa-diamond',
        iframeSupported: true
    }
];

const Dashboard = () => {
    const supportedBenchmarks = BENCHMARKS.filter(b => b.iframeSupported);
    const externalBenchmarks = BENCHMARKS.filter(b => !b.iframeSupported);

    return (
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col min-h-[calc(100vh-4rem)] animate-in fade-in duration-700">
            <div className="flex-1 space-y-8">
                {supportedBenchmarks.map((benchmark) => (
                    <div key={benchmark.id} className="w-full">
                        <BenchmarkCard
                            title={benchmark.title}
                            description={benchmark.description}
                            url={benchmark.url}
                            iframeSupported={benchmark.iframeSupported}
                        />
                    </div>
                ))}
            </div>

            {externalBenchmarks.length > 0 && (
                <div className="mt-12 pt-6 border-t border-white/10 text-center">
                    <p className="text-sm text-gray-500 mb-4">Other Benchmarks (External Links Only):</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {externalBenchmarks.map(link => (
                            <a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 text-sm text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2"
                            >
                                {link.title}
                                <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
