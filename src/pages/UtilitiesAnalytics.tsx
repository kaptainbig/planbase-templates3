import React from 'react';
import { Bolt, Plus, Minus, Info } from 'lucide-react';

const UtilitiesAnalytics: React.FC = () => {
  return (
    <div className="flex h-full overflow-hidden">
      {/* Central Viewport: Electrical Grid Visualization */}
      <section className="flex-1 relative bg-surface overflow-hidden blueprint-grid">
        {/* Map Base Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale contrast-125"
          alt="Satellite grid view"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkK0zWo140DL-kaSdwPHcJ3T873avbqaxsQIkdylCG7fGaJ160w3ORqZNFqIMkzPrbGa-lGt_xbTW-6RWRhICh9Imd_OlNo7BoB16Y5ydipzGnNSrsGVHIznPH-RuQeAPGF_w_E04LPvidTcNbd2eyVJSuGbx0Tf-W1I-Vf_KSFAw1iKPceN6HBFCnOce3D2kucXsiYcJp54imuAhYKTbp_Ry1mCq9My2oUHK1sjV1lcdEYBAyr7yWcmhLVhAwFGHF8X0LKrugG0ly"
        />

        {/* HUD: Coordinate Overlay */}
        <div className="absolute top-6 left-6 z-10 bg-surface-variant/60 backdrop-blur-xl border border-outline-variant/20 p-3 flex flex-col gap-1 shadow-2xl">
          <div className="flex items-center justify-between gap-8">
            <span className="text-[10px] font-mono text-cyan-400/70 tracking-widest uppercase">Target Lat/Long</span>
            <span className="text-[10px] font-mono text-white">41.8781° N, 87.6298° W</span>
          </div>
          <div className="flex items-center justify-between gap-8">
            <span className="text-[10px] font-mono text-cyan-400/70 tracking-widest uppercase">Grid Stability</span>
            <span className="text-[10px] font-mono text-tertiary-fixed">98.42% NOMINAL</span>
          </div>
        </div>

        {/* Pulsing Electrical Nodes Overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <path d="M 400,300 L 600,450 L 850,200 L 900,500 L 700,600 L 400,300" fill="none" stroke="rgba(252, 228, 66, 0.2)" strokeDasharray="10 5" strokeWidth="1.5" />
          <path d="M 600,450 L 550,700 L 300,550" fill="none" stroke="rgba(252, 228, 66, 0.2)" strokeWidth="1" />
          <circle cx="400" cy="300" fill="#fce442" r="4">
            <animate attributeName="r" values="4;8;4" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="450" fill="#fce442" r="6">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="850" cy="200" fill="#fce442" r="4" />
          <circle cx="900" cy="500" fill="#fce442" r="5" />
          <circle cx="550" cy="700" fill="#fce442" r="4" />
        </svg>

        {/* Interactive Transformer Marker */}
        <div className="absolute top-[440px] left-[590px] group cursor-pointer">
          <div className="w-5 h-5 bg-tertiary-fixed rounded-sm flex items-center justify-center shadow-[0_0_15px_rgba(252,228,66,0.6)]">
            <Bolt className="w-4 h-4 text-on-tertiary" />
          </div>
          <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-surface-container-highest border border-outline-variant/30 px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
            <p className="text-[10px] font-bold text-white uppercase tracking-tighter">TRANSFORMER_ST-09</p>
            <p className="text-[9px] text-neutral-400">Capacity: 1500 kVA (Active)</p>
          </div>
        </div>

        {/* Zoom Controls */}
        <div className="absolute bottom-6 left-6 flex flex-col gap-2">
          <button className="w-10 h-10 bg-surface-container-high/80 backdrop-blur-md border border-outline-variant/20 text-white flex items-center justify-center hover:bg-surface-tint/20 transition-colors">
            <Plus className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-surface-container-high/80 backdrop-blur-md border border-outline-variant/20 text-white flex items-center justify-center hover:bg-surface-tint/20 transition-colors">
            <Minus className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Right Panel: Utilities Analytics */}
      <aside className="w-96 bg-surface-container-low border-l border-white/5 p-6 flex flex-col h-full">
        <div className="p-6 border-b border-white/5">
          <h2 className="font-headline text-lg font-bold text-white tracking-tight uppercase">Utilities Analytics</h2>
          <p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Live Feed: Infrastructure Node 04</p>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <div>
            <div className="flex items-end justify-between mb-2">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Peak Load Estimate</span>
              <span className="text-xs text-tertiary-fixed-dim">High Demand Zone</span>
            </div>
            <div className="bg-surface-container-lowest p-4 border-l-2 border-primary-fixed">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-headline font-light text-white">4.2</span>
                <span className="text-sm font-label text-neutral-500">MW/h</span>
              </div>
              <div className="mt-4 h-1 w-full bg-surface-container-highest overflow-hidden">
                <div className="h-full bg-primary-fixed w-[72%] shadow-[0_0_10px_#00fbfb]"></div>
              </div>
              <p className="text-[9px] text-neutral-400 mt-2 italic font-light">Projected variance ±0.4 MW based on historical seasonal data.</p>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-3 block">Connection Distance</span>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-high p-4 flex flex-col gap-1 border border-outline-variant/10">
                <span className="text-[9px] text-neutral-500 uppercase">Primary Grid</span>
                <span className="text-xl font-headline text-white">124<span className="text-xs ml-1 text-neutral-500">m</span></span>
              </div>
              <div className="bg-surface-container-high p-4 flex flex-col gap-1 border border-outline-variant/10">
                <span className="text-[9px] text-neutral-500 uppercase">Backup Sub</span>
                <span className="text-xl font-headline text-white">2.8<span className="text-xs ml-1 text-neutral-500">km</span></span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-3 block">Cost-to-Connect Projections</span>
            <div className="space-y-3">
              {[
                { label: "Excavation & Trenching", cost: "$12,450.00" },
                { label: "Substation Permitting", cost: "$4,200.00" },
                { label: "Material Overhead", cost: "$8,900.00" },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-[11px]">
                  <span className="text-neutral-400">{item.label}</span>
                  <span className="text-white font-mono">{item.cost}</span>
                </div>
              ))}
              <div className="pt-3 border-t border-white/5 flex justify-between items-baseline">
                <span className="text-[10px] font-bold text-white uppercase">ESTIMATED TOTAL</span>
                <span className="text-2xl font-headline text-primary-fixed">$25,550</span>
              </div>
            </div>
          </div>

          <div className="bg-error-container/10 border border-error/20 p-4 flex gap-3 items-start">
            <Info className="text-error w-5 h-5 mt-0.5" />
            <div>
              <h4 className="text-[10px] font-bold text-error uppercase">Grid Constraint Detected</h4>
              <p className="text-[9px] text-error/80 mt-1 leading-relaxed">Infrastructure aging report indicates limited capacity at Node ST-09. Expansion may require transformer upgrade ($15k+).</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-surface-container-highest border-t border-white/5">
          <button className="w-full py-4 bg-primary-fixed text-on-primary font-headline font-bold text-xs uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(0,251,251,0.2)] hover:bg-white transition-all active:scale-[0.98]">
            Generate Full Report
          </button>
        </div>
      </aside>

      {/* Blueprint Toggle HUD */}
      <div className="fixed bottom-6 right-[400px] z-50 flex gap-2">
        <div className="bg-surface-container-high/90 backdrop-blur-xl border border-outline-variant/30 p-1 flex rounded-sm">
          <button className="px-4 py-2 bg-tertiary-fixed text-on-tertiary text-[10px] font-bold uppercase tracking-widest rounded-sm">2D Plan</button>
          <button className="px-4 py-2 text-neutral-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">3D Model</button>
          <button className="px-4 py-2 text-neutral-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Heatmap</button>
        </div>
      </div>
    </div>
  );
};

export default UtilitiesAnalytics;
