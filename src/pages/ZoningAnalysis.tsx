import React from 'react';
import { Rotate3d, Layers, Ruler, Camera, TrendingUp, AlertTriangle, CheckCircle, Info, Eye } from 'lucide-react';
import { cn } from '../lib/utils';

const ZoningAnalysis: React.FC = () => {
  return (
    <div className="grid grid-cols-12 h-full">
      {/* Central 3D Viewport */}
      <section className="col-span-8 relative overflow-hidden flex items-center justify-center bg-surface-container-lowest">
        {/* HUD: Coordinates Overlay */}
        <div className="absolute top-6 left-6 z-10 bg-surface-variant/60 backdrop-blur-md px-4 py-3 rounded-lg hairline-border">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-neutral-400 font-label tracking-widest uppercase">Target Coordinates</span>
            <span className="font-mono text-cyan-400 text-sm tracking-tight">40.7128° N, 74.0060° W</span>
            <span className="text-[10px] text-neutral-400 font-label tracking-widest uppercase mt-2">Projection System</span>
            <span className="font-mono text-white text-xs">EPSG:3857 (WGS 84 / Pseudo-Mercator)</span>
          </div>
        </div>

        {/* Viewport Interaction Tools */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2 bg-surface-variant/40 backdrop-blur-xl p-1.5 rounded-lg hairline-border">
          <button className="w-10 h-10 flex items-center justify-center bg-cyan-400/20 text-cyan-400 rounded-sm border border-cyan-400/30">
            <Rotate3d className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center hover:bg-white/5 text-white/60 rounded-sm">
            <Layers className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center hover:bg-white/5 text-white/60 rounded-sm">
            <Ruler className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center hover:bg-white/5 text-white/60 rounded-sm">
            <Camera className="w-5 h-5" />
          </button>
        </div>

        {/* 3D Visualization Placeholder */}
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-[500px] h-[300px] bg-surface-container-high transform rotate-x-45 rotate-z-12 hairline-border shadow-[0_0_10px_rgba(252,228,66,0.3)]">
            <div className="absolute bottom-0 left-10 right-10 h-48 bg-fuchsia-500/20 border-x-2 border-t-2 border-fuchsia-500/60 shadow-[0_0_15px_rgba(255,0,255,0.4)]">
              <div className="absolute inset-x-0 top-0 h-1/2 bg-fuchsia-400/10 border-b border-fuchsia-500/30"></div>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-fuchsia-400 tracking-tighter whitespace-nowrap bg-background/80 px-2 py-0.5 rounded border border-fuchsia-500/30">
                SETBACK LIMIT: 35.00m
              </div>
            </div>
            <div className="absolute inset-0 blueprint-grid opacity-20"></div>
            <div className="absolute bottom-4 left-4 text-xs font-mono text-neutral-600">LOT 224-B</div>
          </div>
          <div className="absolute inset-0 -z-10 opacity-30">
            <img
              className="w-full h-full object-cover grayscale"
              alt="Site map"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt03JElwk1fHhj9ODSw1KJwxd8kcJgYgOhONsoTPeBYzEIO-1G-fybxG1ZK7DtsW51_Bpb_DkmDT2tUTkuWRRSwsEatMxC5M8XqLbMlG5sNb1RioKhaL08KsWLO9rpNTjB5PATrx15vQ6Gdzk9lVOp0doQ_uzHzad7IBzM8OfmVKnsE2OPOP-XvgHuv3Ltr2sQNvvELUTH4le2rp8_oRpPM99QCWaWb0gm7_U3ixxXt5tYXbAl8xtxFQ4XjQdvq8RJrF5iAKIIzzby"
            />
          </div>
        </div>
      </section>

      {/* Right Panel: Zoning Intelligence */}
      <aside className="col-span-4 bg-surface-container-low border-l border-white/5 p-8 overflow-y-auto flex flex-col gap-8">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight text-white mb-2">Zoning Intelligence</h1>
          <p className="text-neutral-500 font-body text-sm leading-relaxed">Deep analysis for Zone R7-A (High-Density Residential). Detailed constraints based on 2024 municipal updates.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-container-high p-4 rounded-lg hairline-border">
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 mb-1 block">Current FAR</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-headline font-bold text-white">3.42</span>
              <span className="text-xs text-cyan-400 font-mono">/ 4.00</span>
            </div>
            <div className="w-full bg-surface-container-highest h-1 mt-3 rounded-full overflow-hidden">
              <div className="bg-cyan-400 h-full w-[85%]"></div>
            </div>
          </div>
          <div className="bg-surface-container-high p-4 rounded-lg hairline-border">
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 mb-1 block">Total GFA</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-headline font-bold text-white">42.5k</span>
              <span className="text-[10px] text-neutral-500 font-mono uppercase">sqft</span>
            </div>
            <div className="mt-3 flex items-center gap-1 text-[10px] text-error font-medium">
              <TrendingUp className="w-3 h-3" />
              92% UTILIZED
            </div>
          </div>
        </div>

        <div className="bg-surface-container-high p-6 rounded-lg hairline-border">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">Height Constraints</h3>
            <span className="text-[10px] text-cyan-400 font-mono">MAX: 85 FT</span>
          </div>
          <div className="flex items-end gap-3 h-32 px-2">
            <div className="flex-1 bg-surface-container-highest group relative">
              <div className="absolute bottom-0 w-full bg-neutral-600 h-2/3 group-hover:bg-neutral-500 transition-colors"></div>
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-neutral-500">Proposed</span>
            </div>
            <div className="flex-1 bg-surface-container-highest group relative">
              <div className="absolute bottom-0 w-full bg-cyan-400/40 h-full border-t-2 border-cyan-400 shadow-[0_0_10px_rgba(252,228,66,0.3)]"></div>
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-cyan-400">Permitted</span>
            </div>
            <div className="flex-1 bg-surface-container-highest group relative">
              <div className="absolute bottom-0 w-full bg-error/20 h-1/4 border-t-2 border-error"></div>
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-error">Average</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-white" />
            Critical Code Constraints
          </h3>
          <div className="space-y-2">
            {[
              { icon: AlertTriangle, title: "Sky Exposure Plane", desc: "Setback required at 60' height for all street-facing facades. Encroachment detected in Segment C.", color: "text-tertiary-fixed" },
              { icon: CheckCircle, title: "Lot Coverage Compliance", desc: "65% max coverage. Current design utilizes 62.4%. Standard residential requirements met.", color: "text-cyan-400" },
              { icon: Info, title: "Secondary Egress", desc: "Building occupancy exceeds 120. Second fire-rated exit path mandated per Section 403.5.1.", color: "text-neutral-500" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-3 bg-surface-container-highest/30 hover:bg-surface-container-highest transition-colors rounded hairline-border">
                <item.icon className={cn("w-4 h-4 mt-0.5", item.color)} />
                <div>
                  <p className="text-sm text-white font-medium">{item.title}</p>
                  <p className="text-xs text-neutral-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto bg-surface-container-highest p-4 rounded-xl border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-tertiary-fixed/20 flex items-center justify-center">
              <Eye className="text-tertiary-fixed w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Blueprint Overlay</p>
              <p className="text-[10px] text-neutral-500">Highlighting Setback Envelopes</p>
            </div>
          </div>
          <div className="w-10 h-5 bg-cyan-400 rounded-full relative shadow-[0_0_8px_rgba(0,221,221,0.5)] cursor-pointer">
            <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ZoningAnalysis;
