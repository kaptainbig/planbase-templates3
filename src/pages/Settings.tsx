import React from 'react';
import { ChevronRight, Edit, Rocket, Undo2 } from 'lucide-react';
import { cn } from '../lib/utils';

const Settings: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 md:p-12 overflow-y-auto h-full custom-scrollbar">
      <header className="mb-12">
        <h1 className="text-4xl font-headline font-bold text-white tracking-tighter mb-2 uppercase">SYSTEM CONFIGURATION</h1>
        <p className="text-sm font-label text-on-surface-variant tracking-widest uppercase opacity-70">Architectural Environment & Account Parameters</p>
      </header>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-3 space-y-1">
          {[
            { name: "ACCOUNT", active: true },
            { name: "WORKSPACE", active: false },
            { name: "INTEGRATIONS", active: false },
            { name: "SECURITY", active: false },
          ].map((item) => (
            <button key={item.name} className={cn(
              "w-full text-left px-4 py-3 flex items-center justify-between group transition-colors",
              item.active ? "bg-primary-container/10 border-l-2 border-surface-tint text-surface-tint" : "hover:bg-surface-container-high text-on-surface-variant"
            )}>
              <span className="text-[11px] font-bold tracking-[0.15em]">{item.name}</span>
              <ChevronRight className={cn("w-4 h-4", !item.active && "opacity-0 group-hover:opacity-100 transition-opacity")} />
            </button>
          ))}
        </div>

        <div className="col-span-12 md:col-span-9 space-y-12 pb-24">
          <section className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] font-bold text-surface-tint bg-surface-tint/10 px-2 py-1 tracking-widest">01</span>
              <h2 className="text-xl font-headline font-bold text-white uppercase tracking-tight">Profile & Identity</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-surface-container-low border-[0.5px] border-outline-variant/20 hover:border-surface-tint/30 transition-all">
                <label className="text-[10px] text-outline tracking-[0.2em] uppercase font-bold mb-4 block">Avatar Technical Reference</label>
                <div className="flex items-center gap-6">
                  <div className="relative group">
                    <div className="w-20 h-20 bg-surface-container-highest overflow-hidden">
                      <img className="w-full h-full object-cover" alt="Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2jtcbHa_O6s4ASqkOJDZduS43b5UIRk9EQ3G0tIHKI4Y4lZ0yjfnrGjZIqDfrY9l78mFIhBMuWcfz7LgW2d2MoYlHrOq5fW4hCSVfrOPp9Fai0MzE559nJ_0BD_CQfZlbdHyv48OHexYmqMxTbckSeZq3iauoi4qn_UAJFPYg1FoQ8wKGSolaKSKAms9zBXSlqlis2A4N60td7JDVM9sXCxKdeU61_peHw-w4rji335j0X7hXcBQUBHdIw6My5WZBDm2aQJL2apMc" />
                    </div>
                    <button className="absolute inset-0 bg-surface-tint/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-on-primary">
                      <Edit className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-on-surface-variant leading-relaxed">Format: JPEG, PNG, WEBP<br/>Resolution: 512x512px suggested</p>
                    <button className="px-4 py-2 border-[0.5px] border-surface-tint text-surface-tint text-[10px] font-bold tracking-widest hover:bg-surface-tint/10">UPDATE SOURCE</button>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-surface-container-low border-[0.5px] border-outline-variant/20">
                <label className="text-[10px] text-outline tracking-[0.2em] uppercase font-bold mb-4 block">Credentials</label>
                <div className="space-y-4">
                  <div className="border-b-[0.5px] border-outline-variant/20 pb-2">
                    <div className="text-[9px] text-slate-500 uppercase">Primary ID</div>
                    <div className="text-sm text-white font-mono">alex.v@sitesnap.arch</div>
                  </div>
                  <div className="border-b-[0.5px] border-outline-variant/20 pb-2">
                    <div className="text-[9px] text-slate-500 uppercase">Access Level</div>
                    <div className="text-sm text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-tertiary-container rounded-full"></span>
                      PRINCIPAL ARCHITECT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] font-bold text-surface-tint bg-surface-tint/10 px-2 py-1 tracking-widest">02</span>
              <h2 className="text-xl font-headline font-bold text-white uppercase tracking-tight">Drafting Units & Theme</h2>
            </div>
            <div className="bg-surface-container-high/40 backdrop-blur-sm p-8 border-[0.5px] border-outline-variant/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-[11px] font-bold tracking-[0.15em] text-white mb-6">MEASUREMENT SYSTEM</h3>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between group cursor-pointer p-3 bg-surface-container-lowest border-[0.5px] border-outline-variant/20 hover:border-surface-tint/50">
                      <div className="flex items-center gap-3">
                        <input checked readOnly className="text-surface-tint bg-transparent border-outline-variant focus:ring-0 focus:ring-offset-0" name="units" type="radio"/>
                        <span className="text-xs font-bold text-on-surface">METRIC (M, CM, MM)</span>
                      </div>
                      <span className="text-[10px] text-slate-500">SI Standard</span>
                    </label>
                    <label className="flex items-center justify-between group cursor-pointer p-3 border-[0.5px] border-outline-variant/10 hover:bg-surface-container-lowest transition-all">
                      <div className="flex items-center gap-3">
                        <input className="text-surface-tint bg-transparent border-outline-variant focus:ring-0 focus:ring-offset-0" name="units" type="radio"/>
                        <span className="text-xs font-bold text-slate-400">IMPERIAL (FT, IN)</span>
                      </div>
                      <span className="text-[10px] text-slate-500">US Architecture</span>
                    </label>
                  </div>
                </div>
                <div>
                  <h3 className="text-[11px] font-bold tracking-[0.15em] text-white mb-6">INTERFACE CHROMA</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="aspect-square bg-[#0e0e0e] border-2 border-surface-tint p-4 flex flex-col justify-end gap-2">
                      <div className="w-full h-1 bg-surface-tint"></div>
                      <span className="text-[9px] font-bold text-white">BLUEPRINT DARK</span>
                    </button>
                    <button className="aspect-square bg-[#e5e2e1] border-[0.5px] border-outline-variant/20 p-4 flex flex-col justify-end gap-2 opacity-50 hover:opacity-100 transition-opacity">
                      <div className="w-full h-1 bg-surface-container-low"></div>
                      <span className="text-[9px] font-bold text-black">TRACING PAPER</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] font-bold text-surface-tint bg-surface-tint/10 px-2 py-1 tracking-widest">03</span>
              <h2 className="text-xl font-headline font-bold text-white uppercase tracking-tight">Third-Party Pipeline</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Autodesk Revit", subtitle: "BIM Model Sync v4.0", initials: "AD", connected: true },
                { name: "Rhino 3D", subtitle: "Grasshopper Link", initials: "RH", connected: false },
                { name: "ArcGIS", subtitle: "Geospatial Data API", initials: "AR", connected: false },
              ].map((item) => (
                <div key={item.name} className="group bg-surface-container-low border-[0.5px] border-outline-variant/20 p-6 flex flex-col gap-4 relative overflow-hidden">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-on-background/10 flex items-center justify-center border-[0.5px] border-on-background/30">
                      <span className="text-xs font-bold text-white">{item.initials}</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{item.name}</h4>
                      <p className="text-[9px] text-slate-500">{item.subtitle}</p>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <span className={cn("text-[10px] font-bold uppercase", item.connected ? "text-surface-tint" : "text-slate-500 italic")}>
                      {item.connected ? "CONNECTED" : "NOT LINKED"}
                    </span>
                    <button className={cn(
                      "text-[10px] font-bold tracking-widest uppercase transition-all px-3 py-1.5",
                      item.connected ? "text-slate-500 hover:text-error" : "bg-primary-container text-on-primary-container active:scale-95"
                    )}>
                      {item.connected ? "Disconnect" : "Authorize"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20 pt-8 border-t-[0.5px] border-error/20">
            <div className="bg-error-container/10 p-6 flex items-start justify-between border-[0.5px] border-error/30">
              <div>
                <h3 className="text-xs font-bold text-error uppercase tracking-widest mb-1">DANGER ZONE: DELETE ARCHIVE</h3>
                <p className="text-[11px] text-on-error-container opacity-80 leading-relaxed max-w-md">Deleting your account will permanently remove all architectural blueprints, site metadata, and 3D terrain cache. This action is irreversible.</p>
              </div>
              <button className="px-4 py-2 border-[0.5px] border-error text-error text-[10px] font-bold tracking-widest hover:bg-error/10 transition-colors uppercase">INITIATE WIPE</button>
            </div>
          </section>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 flex gap-3 z-50">
        <button className="w-12 h-12 bg-surface-container-highest border-[0.5px] border-outline-variant/20 flex items-center justify-center text-white hover:bg-surface-container-high transition-colors active:scale-95">
          <Undo2 className="w-5 h-5" />
        </button>
        <button className="bg-surface-tint text-on-primary px-8 py-3 flex items-center gap-3 font-headline font-bold text-sm tracking-tight active:scale-95 transition-transform">
          COMMIT CHANGES
          <Rocket className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Settings;
