import React, { useState, useEffect } from 'react';
import { Info, Plus, Minus, Navigation as NavigationIcon, Rotate3d, ChevronRight, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const Workspace: React.FC = () => {
  const [coords, setCoords] = useState({ lat: 40.7527, lng: -73.9772 });
  const [zoom, setZoom] = useState(1);

  // Simulate moving coordinates
  useEffect(() => {
    const interval = setInterval(() => {
      setCoords(prev => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.0001,
        lng: prev.lng + (Math.random() - 0.5) * 0.0001,
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full relative">
      {/* 3D Viewport Simulation */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ scale: zoom }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="w-full h-full relative">
          <img
            className="w-full h-full object-cover opacity-40 mix-blend-screen grayscale"
            alt="3D architectural wireframe"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmt74j63mfqE9-4DmMcMAgqJXxj0TvMGGIOl7HQJTomj5hcVoNHULGX7jVVHU3jnbZ4nBjs6Cg6h_ScPy-oKDA0tRWAX6DiI1N6KASzUclA1zoFObKszRrV_fJQf-NCCrwCkYX_bO_xT80IZlWfirNPN0luSbnUEScdhBAfCqc9HTHduQ7sAn7BjapRXPj-r2AfMMJTKQMl608i6Lw-U-g8tt_dNDJFQ2a3GaZT_1-zhe9RgZbfSaaW1-bigksZy7T8VnL-NkyKzIB"
          />
          {/* HUD Overlays */}
          <div className="absolute top-8 left-8 flex flex-col gap-2 pointer-events-none">
            <div className="bg-black/40 backdrop-blur-md border-[0.5px] border-[#00FFFF]/20 p-4 rounded">
              <div className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] mb-1">Cursor Coordinates</div>
              <div className="font-mono text-sm text-[#00FFFF]">
                {coords.lat.toFixed(4)}° N, {Math.abs(coords.lng).toFixed(4)}° W
              </div>
            </div>
            <div className="bg-black/40 backdrop-blur-md border-[0.5px] border-[#00FFFF]/20 p-4 rounded">
              <div className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] mb-1">Elevation Data</div>
              <div className="font-mono text-sm text-white">42.4m AMSL <span className="text-tertiary-fixed ml-2">+0.2m Slope</span></div>
            </div>
          </div>
          {/* 3D Perspective Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
            <line stroke="#00FFFF" strokeWidth="0.5" x1="0" x2="100%" y1="100%" y2="0"></line>
            <line stroke="#00FFFF" strokeWidth="0.5" x1="20%" x2="100%" y1="100%" y2="20%"></line>
            <circle cx="50%" cy="50%" fill="none" r="200" stroke="#00FFFF" strokeDasharray="4 4" strokeWidth="0.5"></circle>
          </svg>
        </div>
      </motion.div>

      {/* Breadcrumbs */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 bg-surface-container-lowest/80 backdrop-blur rounded-full border-[0.5px] border-white/5 flex items-center gap-3">
        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Project Alpha</span>
        <ChevronRight className="w-3 h-3 text-zinc-700" />
        <span className="text-[10px] font-bold text-[#00FFFF] uppercase tracking-widest">Site Analysis</span>
      </div>

      {/* Map Tools */}
      <div className="absolute bottom-8 left-8 flex flex-col gap-2 z-10">
        <div className="flex flex-col bg-surface-container-high/90 backdrop-blur border-[0.5px] border-white/10 rounded overflow-hidden">
          <button onClick={() => setZoom(z => Math.min(z + 0.1, 2))} className="p-2 hover:bg-[#00FFFF]/10 text-white border-b border-white/5"><Plus className="w-5 h-5" /></button>
          <button onClick={() => setZoom(z => Math.max(z - 0.1, 0.5))} className="p-2 hover:bg-[#00FFFF]/10 text-white border-b border-white/5"><Minus className="w-5 h-5" /></button>
          <button className="p-2 hover:bg-[#00FFFF]/10 text-[#00FFFF]"><NavigationIcon className="w-5 h-5" /></button>
        </div>
        <button className="bg-surface-container-high/90 backdrop-blur border-[0.5px] border-white/10 rounded p-2 text-white hover:bg-[#00FFFF]/10">
          <Rotate3d className="w-5 h-5" />
        </button>
      </div>

      {/* Intelligence Panel */}
      <aside className="absolute right-8 top-8 bottom-8 w-80 z-20">
        <div className="h-full bg-surface-container-low/40 backdrop-blur-2xl border-[0.5px] border-white/10 rounded-lg p-6 shadow-2xl flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="font-headline font-bold text-white text-lg tracking-tight">Site Intelligence</h2>
            <Info className="text-[#00FFFF] w-5 h-5" />
          </div>

          <div className="grid grid-cols-1 gap-4">
            <motion.div
              whileHover={{ x: 4 }}
              className="bg-surface-container-high/40 p-4 rounded hairline-border relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#00FFFF]/50"></div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Lot Area</div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-headline font-bold text-white">15,000</span>
                <span className="text-xs text-zinc-400">sq ft</span>
              </div>
            </motion.div>

            <div className="bg-surface-container-high/40 p-4 rounded hairline-border">
              <div className="flex justify-between items-start mb-2">
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Max Height (Zoning)</div>
                <span className="text-xs font-mono text-[#00FFFF]">85%</span>
              </div>
              <div className="h-1.5 bg-black/40 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  className="h-full bg-gradient-to-r from-surface-tint to-primary-container"
                ></motion.div>
              </div>
              <div className="mt-2 text-xl font-headline font-bold text-white">240 <span className="text-xs text-zinc-400 font-normal">ft</span></div>
            </div>

            <div className="bg-surface-container-high/40 p-4 rounded hairline-border">
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-3">Wind Direction</div>
              <div className="flex items-center gap-6">
                <div className="relative w-16 h-16 rounded-full border border-dashed border-[#00FFFF]/20 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: [45, 50, 40, 45] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="w-1 h-8 bg-gradient-to-t from-transparent to-[#00FFFF] absolute -top-1 origin-bottom rotate-[45deg]"
                  ></motion.div>
                  <span className="text-[8px] text-zinc-500">N</span>
                </div>
                <div>
                  <div className="text-lg font-headline font-bold text-white">NE 14 <span className="text-[10px] font-normal text-zinc-400">mph</span></div>
                  <div className="text-[10px] text-[#00FFFF] mt-1">Stable Pattern</div>
                </div>
              </div>
            </div>

            <div className="mt-2 p-4 bg-tertiary-fixed/10 border-[0.5px] border-tertiary-fixed/20 rounded">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-tertiary-fixed uppercase tracking-wider">Zoning Constraints</span>
                <div className="w-8 h-4 bg-tertiary-fixed rounded-full relative cursor-pointer">
                  <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-on-tertiary-fixed rounded-full shadow-sm"></div>
                </div>
              </div>
              <p className="text-[10px] text-tertiary-fixed/80 leading-relaxed font-label">Active setbacks: 15ft front, 10ft side. Commercial FAR limit: 6.5.</p>
            </div>
          </div>

          <div className="mt-auto">
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4">Sun Exposure (Annual)</div>
            <div className="flex items-end gap-1.5 h-20">
              {[40, 55, 75, 90, 85, 60, 45].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    "flex-1 rounded-t-sm",
                    h >= 85 ? "bg-surface-tint" : h >= 70 ? "bg-[#00FFFF]/40" : "bg-surface-container-highest"
                  )}
                ></motion.div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[8px] text-zinc-600 font-mono">
              <span>JAN</span>
              <span>JUN</span>
              <span>DEC</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Status Bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-6 px-6 py-2 bg-black/60 backdrop-blur border-[0.5px] border-white/10 rounded-full z-10">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[10px] font-mono text-zinc-400">SYNCED</span>
        </div>
        <div className="h-4 w-[1px] bg-white/10"></div>
        <div className="flex items-center gap-2">
          <Cpu className="w-3 h-3 text-zinc-500" />
          <span className="text-[10px] font-mono text-zinc-400">GPU: 42%</span>
        </div>
        <div className="h-4 w-[1px] bg-white/10"></div>
        <div className="text-[10px] font-mono text-zinc-400">LOD: ULTRA</div>
      </div>
    </div>
  );
};

export default Workspace;
