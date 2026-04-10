import React from 'react';
import { Plus, Minus, Layers, Compass, Train, HardHat, Navigation } from 'lucide-react';

const InfrastructureAnalysis: React.FC = () => {
  return (
    <div className="flex h-full relative overflow-hidden">
      {/* Central Map Viewport */}
      <section className="flex-grow relative bg-surface-container-lowest blueprint-grid">
        {/* Mock Map Background */}
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img
            alt="Map View"
            className="w-full h-full object-cover grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9Jf7KTlTNiuXBStTmVPUeLZmD1q4o_fZQWz_5y77oh5yYdiqxMxnoceQ3I42f0NTIkOMBcHGx4v-NUdErFtpUap1CpZDLCSXURoIe8dFZaY0ADF6Aw_nb-0fHbmqkVUlDG-Hbv8-fy99XA6CcTidR4TRqCO-aWRzexG_LFKMnVb_27YSzol3Th1B0hOLBNFnhRobKXkwicrmkb7cPw8-V_rHFjD8sREFli39jeL-9a0fTPfPlhXzv_U52SQ54m5HjArmqPAk-gSnd"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>

        {/* Glowing Infrastructure Overlay */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Water Network */}
          <path className="drop-shadow-[0_0_8px_rgba(0,221,221,0.8)]" d="M100,200 L400,200 L400,600 L800,600" stroke="#00dddd" strokeWidth="2" strokeDasharray="10 5" />
          <circle cx="400" cy="200" r="4" fill="#00dddd" />
          {/* Sewer Network */}
          <path className="drop-shadow-[0_0_8px_rgba(252,228,66,0.6)]" d="M200,800 L200,400 L600,400 L600,100" stroke="#fce442" strokeWidth="2" strokeDasharray="5 5" />
          {/* Road Points */}
          <circle className="animate-pulse" cx="600" cy="400" r="6" fill="white" stroke="#00fbfb" strokeWidth="1" />
          <circle cx="400" cy="600" r="6" fill="white" stroke="#00fbfb" strokeWidth="1" />
        </svg>

        {/* Coordinate HUD Overlay */}
        <div className="absolute bottom-8 left-8 p-4 bg-surface-variant/60 backdrop-blur-xl hairline-border rounded-sm">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-primary-fixed tracking-[0.2em] font-medium uppercase">Coordinate Feed</span>
            <div className="flex gap-4 font-mono text-[11px] text-on-surface-variant">
              <span>LAT: 34.0522° N</span>
              <span>LONG: 118.2437° W</span>
              <span>ELEV: 84m</span>
            </div>
          </div>
        </div>

        {/* Viewport Controls */}
        <div className="absolute top-8 right-8 flex flex-col gap-2">
          <div className="bg-surface-container-high/80 backdrop-blur-md hairline-border flex flex-col p-1">
            <button className="p-2 hover:bg-white/10 transition-colors text-white"><Plus className="w-5 h-5" /></button>
            <div className="h-[0.5px] bg-white/10 mx-2"></div>
            <button className="p-2 hover:bg-white/10 transition-colors text-white"><Minus className="w-5 h-5" /></button>
          </div>
          <button className="bg-surface-container-high/80 backdrop-blur-md hairline-border p-2 text-white hover:bg-white/10">
            <Layers className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Right Side Panel: Infrastructure Stats */}
      <aside className="w-96 bg-surface-container-low border-l border-white/5 p-6 flex flex-col gap-8 overflow-y-auto">
        <header>
          <h3 className="text-white font-headline text-xl tracking-tight mb-1">Infrastructure Stats</h3>
          <p className="text-neutral-500 text-xs tracking-wider uppercase">Site ID: AX-4929-GRID</p>
        </header>

        {/* Proximity Bento Grid */}
        <section className="space-y-4">
          <div className="flex justify-between items-end">
            <span className="text-[10px] text-neutral-400 font-bold tracking-widest uppercase">Transit Proximity</span>
            <span className="text-[10px] text-cyan-400 font-bold tracking-widest uppercase">Optimal</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-surface-container-high p-4 hairline-border flex flex-col gap-3">
              <Train className="text-cyan-400 w-6 h-6" />
              <div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-tighter">Subway Link</p>
                <p className="text-xl font-headline text-white">450m</p>
              </div>
            </div>
            <div className="bg-surface-container-high p-4 hairline-border flex flex-col gap-3">
              <Compass className="text-cyan-400 w-6 h-6" />
              <div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-tighter">Bus Rapid</p>
                <p className="text-xl font-headline text-white">120m</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pipe Capacity Gauges */}
        <section className="space-y-6">
          <span className="text-[10px] text-neutral-400 font-bold tracking-widest uppercase">Utility Capacity</span>
          {/* Water Gauge */}
          <div className="space-y-2">
            <div className="flex justify-between text-[11px] font-medium tracking-tight">
              <span className="text-neutral-300">Water Main (24")</span>
              <span className="text-cyan-400">82% Load</span>
            </div>
            <div className="h-1 bg-surface-container-highest w-full relative overflow-hidden">
              <div className="absolute h-full bg-cyan-400 shadow-[0_0_10px_rgba(0,221,221,0.5)]" style={{ width: '82%' }}></div>
            </div>
          </div>
          {/* Sewer Gauge */}
          <div className="space-y-2">
            <div className="flex justify-between text-[11px] font-medium tracking-tight">
              <span className="text-neutral-300">Sewer Discharge</span>
              <span className="text-tertiary-fixed">41% Load</span>
            </div>
            <div className="h-1 bg-surface-container-highest w-full relative overflow-hidden">
              <div className="absolute h-full bg-tertiary-fixed shadow-[0_0_10px_rgba(252,228,66,0.3)]" style={{ width: '41%' }}></div>
            </div>
          </div>
        </section>

        {/* Road Width Data List */}
        <section className="space-y-4">
          <span className="text-[10px] text-neutral-400 font-bold tracking-widest uppercase">Access Points</span>
          <div className="space-y-px">
            {[
              { icon: Navigation, name: "Main St. Entrance", width: "18.5m" },
              { icon: Compass, name: "Alley Secondary", width: "4.2m" },
              { icon: HardHat, name: "Loading Zone B", width: "12.0m" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-surface-container-highest/30 border-b border-white/5 hover:bg-surface-container-highest/50 transition-colors">
                <div className="flex items-center gap-3">
                  <item.icon className="text-neutral-500 w-4 h-4" />
                  <span className="text-xs text-neutral-200">{item.name}</span>
                </div>
                <span className="text-xs font-mono text-white">{item.width} Width</span>
              </div>
            ))}
          </div>
        </section>

        {/* Blueprint Toggle Floating Action Style */}
        <div className="mt-auto pt-6">
          <div className="bg-tertiary-fixed p-4 flex items-center justify-between rounded-sm">
            <div>
              <p className="text-[10px] text-on-tertiary-fixed font-black uppercase tracking-tighter">Zoning Overlap</p>
              <p className="text-sm font-headline text-on-tertiary-fixed-variant font-bold">Constraint Detected</p>
            </div>
            <div className="w-12 h-6 bg-on-tertiary-fixed rounded-full p-1 relative cursor-pointer">
              <div className="w-4 h-4 bg-tertiary-fixed-dim rounded-full translate-x-6 transition-transform"></div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default InfrastructureAnalysis;
