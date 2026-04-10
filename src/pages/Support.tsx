import React from 'react';
import { Search, Code, Compass, Monitor, Bolt, ShieldCheck, Paperclip, ArrowRight } from 'lucide-react';

const Support: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 overflow-y-auto h-full custom-scrollbar">
      <section className="relative mb-16">
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-surface-tint/5 blur-[120px] rounded-full"></div>
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 leading-none">
          Precision <span className="text-surface-tint">Support</span>
        </h1>
        <p className="font-body text-on-surface-variant max-w-xl mb-10 text-lg">
          Access technical documentation, API specifications, and site analysis tutorials for professional architectural workflows.
        </p>
        <div className="relative max-w-2xl group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-surface-tint transition-colors w-5 h-5" />
          <input className="w-full bg-surface-container-high border-none border-b-2 border-transparent focus:border-surface-tint focus:ring-0 text-white font-label text-sm tracking-widest py-5 pl-14 pr-6 transition-all placeholder:text-slate-600 uppercase" placeholder="SEARCH DOCUMENTATION, API REFS, OR TOOLS..." type="text"/>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
            <span className="px-2 py-1 bg-surface-container-lowest rounded text-[10px] text-slate-500 font-mono border-[0.5px] border-outline-variant/30 uppercase">CMD</span>
            <span className="px-2 py-1 bg-surface-container-lowest rounded text-[10px] text-slate-500 font-mono border-[0.5px] border-outline-variant/30 uppercase">K</span>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-20">
        {[
          { icon: Code, title: "API Integration", desc: "RESTful endpoints for site telemetry, BIM data syncing, and automated report generation.", links: ["Authentication Guide", "Endpoint Reference", "Webhook Listeners"] },
          { icon: Compass, title: "Modeling Tools", desc: "Advanced geometric analysis tools, solar path projection, and topographic mesh editing.", links: ["Mesh Optimization", "Volumetric Analysis", "Lighting Simulation"] },
          { icon: Monitor, title: "Analytics Engine", desc: "Understanding site constraints, zoning setbacks, and environmental impact scoring metrics.", links: ["Constraint Logic", "Exporting Reports", "Custom Metadata"] },
        ].map((card, idx) => (
          <div key={idx} className="group bg-surface-container-low p-8 hairline-border relative overflow-hidden hover:bg-surface-container transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <card.icon className="w-24 h-24" />
            </div>
            <card.icon className="text-surface-tint w-8 h-8 mb-6" />
            <h3 className="font-headline text-xl text-white font-bold mb-3 uppercase tracking-tight">{card.title}</h3>
            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">{card.desc}</p>
            <ul className="space-y-3">
              {card.links.map((link, i) => (
                <li key={i}>
                  <a className="text-xs font-label tracking-wider text-surface-tint flex items-center gap-2 hover:translate-x-1 transition-transform" href="#">
                    <ArrowRight className="w-3 h-3" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-12">
        <div className="lg:col-span-4 sticky top-24">
          <h2 className="font-headline text-3xl font-bold text-white tracking-tighter mb-4 uppercase">Direct Link</h2>
          <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">Can't find the technical documentation required? Initiate a high-priority ticket with our engineering team.</p>
          <div className="space-y-4">
            <div className="p-4 bg-surface-container-lowest border-[0.5px] border-outline-variant/30 flex items-center gap-4">
              <Bolt className="text-tertiary-fixed w-5 h-5 fill-current" />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Average Response</p>
                <p className="text-sm font-bold text-white uppercase tracking-tight">12 Minutes</p>
              </div>
            </div>
            <div className="p-4 bg-surface-container-lowest border-[0.5px] border-outline-variant/30 flex items-center gap-4">
              <ShieldCheck className="text-surface-tint w-5 h-5" />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Service Status</p>
                <p className="text-sm font-bold text-white uppercase tracking-tight">All Systems Nominal</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 bg-surface-container-low p-1 border-[0.5px] border-outline-variant/20">
          <div className="bg-surface p-8 md:p-12">
            <h4 className="font-headline text-sm font-bold tracking-[0.2em] text-surface-tint uppercase mb-8">Technical Request Form</h4>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Inquiry Type</label>
                  <select className="w-full bg-surface-container-high border-none focus:ring-1 focus:ring-surface-tint text-white text-xs tracking-wider py-3 px-4 rounded-sm appearance-none cursor-pointer uppercase">
                    <option>TECHNICAL DOCUMENTATION</option>
                    <option>API ERROR LOG</option>
                    <option>FEATURE ENHANCEMENT</option>
                    <option>ACCOUNT CREDENTIALS</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Severity Level</label>
                  <select className="w-full bg-surface-container-high border-none focus:ring-1 focus:ring-surface-tint text-white text-xs tracking-wider py-3 px-4 rounded-sm appearance-none cursor-pointer uppercase">
                    <option>LOW - INQUIRY</option>
                    <option>MEDIUM - WORKFLOW BLOCK</option>
                    <option>HIGH - CRITICAL FAILURE</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Subject / Reference Code</label>
                <input className="w-full bg-surface-container-high border-none focus:ring-1 focus:ring-surface-tint text-white text-xs tracking-wider py-3 px-4 rounded-sm uppercase" placeholder="E.G. ERROR_AUTH_402 IN BLUEPRINT SYNC" type="text"/>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Technical Description</label>
                <textarea className="w-full bg-surface-container-high border-none focus:ring-1 focus:ring-surface-tint text-white text-xs tracking-wider py-3 px-4 rounded-sm resize-none uppercase" placeholder="PROVIDE CONTEXT, PROJECT COORDS, OR ERROR STACKS..." rows={6}></textarea>
              </div>
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-2 group cursor-pointer">
                  <Paperclip className="text-slate-500 group-hover:text-surface-tint transition-colors w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Attach Log File</span>
                </div>
                <button className="px-10 py-4 bg-surface-tint text-on-primary font-headline font-bold text-xs uppercase tracking-[0.2em] rounded-sm hover:brightness-110 active:scale-95 transition-all shadow-[0_10px_30px_rgba(0,221,221,0.2)]" type="submit">
                  Submit Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="fixed bottom-8 right-8 z-50 bg-[#1c1b1b]/80 backdrop-blur-md px-4 py-3 hairline-border hidden lg:block">
        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <span className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">Lat</span>
            <span className="text-[10px] font-mono text-surface-tint">40.7128° N</span>
          </div>
          <div className="w-px h-6 bg-outline-variant/30"></div>
          <div className="flex flex-col">
            <span className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">Long</span>
            <span className="text-[10px] font-mono text-surface-tint">74.0060° W</span>
          </div>
          <div className="w-px h-6 bg-outline-variant/30"></div>
          <div className="flex flex-col">
            <span className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">Status</span>
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-surface-tint animate-pulse"></div>
              <span className="text-[10px] font-mono text-white">LIVE_SUPPORT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
