import React from 'react';
import { Droplets, Thermometer, TreePine, TrendingUp, AlertTriangle } from 'lucide-react';
import { cn } from '../lib/utils';

const EnvironmentalAnalysis: React.FC = () => {
  return (
    <div className="flex h-full relative overflow-hidden">
      {/* Central Viewport (Map/Terrain) */}
      <section className="flex-1 relative bg-surface-container-lowest overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30"></div>
        {/* Map Visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[120%] h-[120%] -rotate-6">
            <img
              className="w-full h-full object-cover opacity-60 grayscale"
              alt="Satellite view"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQXW3KtuFew0Q9WC00Ojx9rXqnkRyylgmYPNhMqiJb4TMw4pyjvxP8DU9v1-6xszBGT-6kH64PqN6cL3QEPWx28pY8bZRmIJmVFjP35iG-pBgIpHwg3JIIbSCbFHfFONdqq7We6JhWAZbD1nPtOLCYXmtDfddYvbGMseyqqWCjtYiEgP-ThEPrlW95InvxFOP-N_G1-MWMKthQpQwq-08Jz1Ta0io4Qy5MpUy20_VXry1MWmR2Mex_kI9ueFGT8Bxcke1A_eX1Azbp"
            />
            {/* Heatmap Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary-fixed/15 via-transparent to-error/20"></div>

            {/* Marker: Protected Vegetation */}
            <div className="absolute top-[35%] left-[45%] group cursor-pointer">
              <div className="absolute inset-0 w-8 h-8 bg-primary-container/20 rounded-full animate-ping"></div>
              <div className="relative w-8 h-8 flex items-center justify-center bg-primary-container/40 rounded-full border border-primary-container">
                <TreePine className="text-primary-container w-4 h-4 fill-primary-container" />
              </div>
            </div>
          </div>
        </div>

        {/* HUD Overlay: Coordinates */}
        <div className="absolute bottom-6 left-6 glass-panel border border-white/5 px-4 py-2 rounded shadow-2xl">
          <div className="flex gap-6 items-center">
            <div className="flex flex-col">
              <span className="text-[10px] text-neutral-500 tracking-[0.1em] uppercase">Latitude</span>
              <span className="font-headline text-primary tracking-tight">30.2672° N</span>
            </div>
            <div className="h-8 w-px bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-[10px] text-neutral-500 tracking-[0.1em] uppercase">Longitude</span>
              <span className="font-headline text-primary tracking-tight">97.7431° W</span>
            </div>
            <div className="h-8 w-px bg-white/10"></div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_#00fbfb]"></span>
              <span className="text-[10px] text-primary-container font-bold tracking-widest uppercase">Live Tracking</span>
            </div>
          </div>
        </div>

        {/* Blueprint Legend */}
        <div className="absolute top-6 left-6 flex flex-col gap-2">
          <div className="glass-panel border border-white/5 p-4 rounded min-w-[200px]">
            <h3 className="text-[10px] font-bold text-neutral-400 tracking-[0.2em] uppercase mb-4">Overlay Controls</h3>
            <div className="flex flex-col gap-3">
              {[
                { label: "Heat Island", color: "bg-tertiary-fixed", active: true },
                { label: "Vegetation", color: "bg-primary-container", active: true },
                { label: "Hydrology", color: "bg-white/20", active: false },
              ].map((item, idx) => (
                <div key={idx} className={cn("flex items-center justify-between", !item.active && "opacity-40")}>
                  <span className="text-xs text-on-surface">{item.label}</span>
                  <div className={cn("w-8 h-4 rounded-full relative border", item.active ? "bg-primary-container/30 border-primary-container/40" : "bg-white/5 border-white/10")}>
                    <div className={cn("absolute top-0.5 w-3 h-2.5 rounded-sm", item.active ? "right-0.5 bg-primary-container" : "left-0.5 bg-white/20")}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Right Panel: Environmental Data */}
      <aside className="w-96 glass-panel border-l border-white/5 flex flex-col overflow-y-auto z-40 p-6 gap-6">
        <header>
          <h2 className="font-headline text-2xl font-bold tracking-tight text-white mb-1">Environmental Data</h2>
          <p className="text-xs text-neutral-500">Site analysis summary generated 4m ago.</p>
        </header>

        {/* Temperature Graph Area */}
        <div className="bg-surface-container-high/40 p-5 border border-white/5 rounded">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-bold tracking-[0.1em] text-neutral-400 uppercase">Avg Temperature</span>
            <span className="text-primary-fixed font-headline text-lg">94.2°F</span>
          </div>
          <div className="h-24 flex items-end gap-1.5 px-1">
            {[60, 40, 75, 85, 100, 65, 55, 45].map((h, idx) => (
              <div key={idx} className={cn("flex-1 transition-colors", idx === 4 ? "bg-primary-container" : "bg-white/5 hover:bg-primary-container/40")} style={{ height: `${h}%` }}></div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[8px] text-neutral-600 font-bold uppercase tracking-widest">
            <span>06:00 AM</span>
            <span>12:00 PM</span>
            <span>06:00 PM</span>
          </div>
        </div>

        {/* Soil Quality Indicators */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-container-low p-4 border border-white/5">
            <Thermometer className="text-tertiary-fixed w-5 h-5 mb-2" />
            <div className="text-xl font-headline text-white">6.4 <span className="text-[10px] text-neutral-500">pH</span></div>
            <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">Acidity Level</div>
          </div>
          <div className="bg-surface-container-low p-4 border border-white/5">
            <Droplets className="text-secondary w-5 h-5 mb-2" />
            <div className="text-xl font-headline text-white">22 <span className="text-[10px] text-neutral-500">%</span></div>
            <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">Moisture</div>
          </div>
        </div>

        {/* Tree Canopy Gauge */}
        <div className="bg-surface-container-highest p-5 rounded relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary-container/5 rounded-full blur-2xl group-hover:bg-primary-container/10 transition-colors"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-12 bg-primary-container"></div>
              <div>
                <h4 className="text-white text-sm font-bold uppercase tracking-widest">Tree Canopy</h4>
                <p className="text-[10px] text-neutral-500">Percentage of site coverage</p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-headline text-4xl font-bold text-white">18.4%</span>
              <div className="flex items-center gap-1 text-primary-container">
                <TrendingUp className="w-3 h-3" />
                <span className="text-[10px] font-bold">+2.1%</span>
              </div>
            </div>
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-primary-container" style={{ width: '18.4%' }}></div>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between py-2 border-t border-white/5">
                <span className="text-[10px] text-neutral-400 uppercase">Native Species</span>
                <span className="text-xs text-white">12 identified</span>
              </div>
              <div className="flex items-center justify-between py-2 border-t border-white/5">
                <span className="text-[10px] text-neutral-400 uppercase">Protected Units</span>
                <span className="text-xs text-white">04 trees</span>
              </div>
            </div>
          </div>
        </div>

        {/* Critical Alerts */}
        <div className="mt-auto bg-error-container/20 p-4 border border-error/20 flex gap-4 items-start">
          <AlertTriangle className="text-error w-5 h-5" />
          <div>
            <h5 className="text-error text-[10px] font-bold uppercase tracking-widest mb-1">Erosion Risk</h5>
            <p className="text-xs text-on-error-container leading-relaxed">High vulnerability detected in Sector 4G due to low vegetation density.</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default EnvironmentalAnalysis;
