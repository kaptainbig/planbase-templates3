import React from 'react';
import { MessageSquare, BarChart3, FileText, Download, CheckCircle, ShieldAlert, ChevronRight, History } from 'lucide-react';

const Notifications: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10 overflow-y-auto h-full custom-scrollbar">
      {/* Header Section */}
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-surface-tint font-label text-[10px] uppercase tracking-[0.2em] mb-2">
            <span className="w-8 h-[1px] bg-surface-tint/30"></span> System Protocols
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tighter">Notifications</h1>
          <p className="text-slate-400 font-label text-sm tracking-wide">Detailed event log for Project Alpha Cluster.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-surface-container-high border-[0.5px] border-outline-variant/30 text-xs font-label uppercase tracking-widest text-slate-300 hover:text-white transition-colors">Mark All Read</button>
          <button className="p-2 bg-surface-container-high border-[0.5px] border-outline-variant/30 text-slate-300 hover:text-primary transition-colors">
            <History className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Notifications Feed */}
      <div className="space-y-12">
        {/* Group: Today */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-headline font-bold text-surface-tint uppercase tracking-widest">Today</span>
            <div className="h-[0.5px] flex-grow bg-outline-variant/20"></div>
            <span className="text-[10px] font-label text-slate-600 uppercase tracking-widest">02 JUL 2024</span>
          </div>
          <div className="grid grid-cols-1 gap-[1px] bg-outline-variant/10">
            {/* Alert Item 1: Team Comment */}
            <div className="group relative bg-surface-container-low p-6 flex gap-6 hover:bg-surface-container-high transition-colors">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full border-[0.5px] border-surface-tint/40 flex items-center justify-center text-surface-tint">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
              </div>
              <div className="flex-grow space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-headline font-bold text-white uppercase tracking-wider">New Comment from Sarah Chen</h3>
                  <span className="text-[10px] font-label text-slate-500 uppercase tracking-widest">14:02 UTC</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">"The structural integrity of Sector 7G needs re-verification based on the latest topographical scan. The gradient exceeds blueprint tolerance."</p>
                <div className="pt-4 flex gap-4">
                  <a className="text-[10px] font-label text-surface-tint uppercase tracking-[0.15em] border-b border-surface-tint/0 hover:border-surface-tint/50 transition-all" href="#">View Context</a>
                  <a className="text-[10px] font-label text-slate-500 uppercase tracking-[0.15em] hover:text-white transition-colors" href="#">Reply Directly</a>
                </div>
              </div>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </div>
            </div>

            {/* Alert Item 2: System Update */}
            <div className="group relative bg-surface-container-low p-6 flex gap-6 hover:bg-surface-container-high transition-colors">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full border-[0.5px] border-tertiary-fixed/40 flex items-center justify-center text-tertiary-fixed">
                  <BarChart3 className="w-5 h-5" />
                </div>
              </div>
              <div className="flex-grow space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-headline font-bold text-white uppercase tracking-wider">Analysis Complete: Site v2.4</h3>
                  <span className="text-[10px] font-label text-slate-500 uppercase tracking-widest">09:45 UTC</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">Atmospheric simulation and soil density metrics for Project Alpha have been processed. Critical variance detected in Northeast quadrant.</p>
                <div className="pt-4">
                  <div className="inline-flex items-center gap-3 bg-surface-container-lowest p-2 rounded-sm border-[0.5px] border-outline-variant/20">
                    <div className="w-8 h-8 bg-surface-container-high flex items-center justify-center">
                      <FileText className="w-4 h-4 text-tertiary-fixed" />
                    </div>
                    <span className="text-[10px] font-label text-slate-300 uppercase tracking-widest pr-4">Report_A102.pdf</span>
                    <Download className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Group: Yesterday */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-headline font-bold text-slate-500 uppercase tracking-widest">Yesterday</span>
            <div className="h-[0.5px] flex-grow bg-outline-variant/10"></div>
            <span className="text-[10px] font-label text-slate-600 uppercase tracking-widest">01 JUL 2024</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-outline-variant/10">
            <div className="bg-surface-container-low p-6 space-y-4 hover:bg-surface-container-high transition-colors">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary-fixed w-5 h-5" />
                <h3 className="text-xs font-headline font-bold text-white uppercase tracking-widest">Milestone Achieved</h3>
              </div>
              <p className="text-sm text-slate-400 font-label leading-relaxed">Phase 1: Site Clearance verified. All logistical parameters met for Project Alpha.</p>
              <div className="pt-2">
                <img className="w-full h-32 object-cover opacity-60 rounded-sm grayscale group-hover:grayscale-0 transition-all" alt="Construction progress" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUjaTeftsWuvciHBLOeZYVksqAEevwhQI1opD8BHKXOyFSwx0qyapQ871_XzLRni3BAYJztFt3RIfMQNbpB5tFov7e2EZWKOFOwx0DxbdgD41hGWQUTZH89AxCAeXLqe3gim0O88J-HPADfQokZSKN_mRorwDghzRWHn5DcoF-Oi3xUyskWrrbbXE8sopC4yJw7N3PgPd88o4CJV5KgcEoC6PMWQZUHxE-1cKVWuKoMqVx-lMZ0sH6joM_Vje96mx66R1_JAQPlHNL" />
              </div>
            </div>
            <div className="bg-surface-container-low p-6 space-y-4 border-l-2 border-error/50 hover:bg-surface-container-high transition-colors">
              <div className="flex items-center gap-3">
                <ShieldAlert className="text-error w-5 h-5" />
                <h3 className="text-xs font-headline font-bold text-white uppercase tracking-widest">Access Protocol Violation</h3>
              </div>
              <p className="text-sm text-slate-400 font-label leading-relaxed">Unauthorized credential attempt detected from IP: 192.168.1.104 at 23:14 UTC.</p>
              <div className="flex gap-4 pt-2">
                <button className="text-[10px] font-label text-error uppercase tracking-widest border border-error/20 px-3 py-1 hover:bg-error/10">Audit Log</button>
                <button className="text-[10px] font-label text-slate-500 uppercase tracking-widest px-3 py-1">Ignore</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-16 text-center pb-8">
        <button className="group inline-flex items-center gap-3 px-8 py-4 border-[0.5px] border-outline-variant/30 hover:border-surface-tint/50 transition-all">
          <span className="text-xs font-headline font-bold text-slate-500 group-hover:text-white uppercase tracking-[0.3em]">Load Older Protocols</span>
          <History className="text-slate-500 group-hover:text-surface-tint transition-colors w-4 h-4" />
        </button>
      </footer>
    </div>
  );
};

export default Notifications;
