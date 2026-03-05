import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full relative selection:bg-blue-500/30 selection:text-white">
      {/* Dynamic ambient background glow */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      <Header />
      <main className="flex-1 w-full z-0 relative">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
