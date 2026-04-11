import React from 'react';
import { CloudUpload, Ruler, ShieldAlert, ArrowRight, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const Profile: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 overflow-y-auto h-full custom-scrollbar">
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        <div className="md:col-span-8 flex flex-col md:flex-row gap-8 items-start">
          <div className="relative">
            <div className="w-48 h-48 bg-surface-container-high border border-outline-variant/20 p-1">
              <img
                className="w-full h-full object-cover grayscale brightness-90 contrast-125"
                alt="Marcus Thorne"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVl_SwNVSV26ABv3RKibZUe8OH38iJ7R5EWQ5sYHhEe0YtLr52qr7CnPVL5SQqwaWKIyo30MOUOjVOYOVjY98A-xg6yoopIIZx0Y0S-Ir6LOshQECyAEj6krXd4VobWBbTnq6M_pc41t2jmpKBaSR2ub6R6mbla12PUUsPoywh7K4PrVa_iLyXpDAUu8GFBVoPAimlLnEzgH8GurQuq3jdUMydHFmTFyvJ5y39kwOlRdZbg-ADCTHTx55hYhcFbUEKW_0XvzvoR-77"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 font-body text-[10px] font-bold uppercase tracking-widest">
              Verified Expert
            </div>
          </div>
          <div className="flex-1">
            <h1 className="font-headline text-5xl font-extrabold text-white tracking-tighter mb-2">Marcus Thorne</h1>
            <div className="flex flex-wrap gap-4 items-center mb-6">
              <span className="text-primary-fixed font-headline text-lg font-medium">Principal Architect</span>
              <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
              <span className="text-on-surface-variant font-body text-sm tracking-wide uppercase">Studio XYZ • NYC</span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-xl mb-8 font-light">
              Specializing in parametric urbanism and sustainable structural systems. Leading computational design initiatives at Studio XYZ with a focus on high-density residential developments and site-specific environmental analysis.
            </p>
            <div className="flex gap-4">
              <button className="bg-surface-tint text-on-primary px-6 py-2.5 font-bold text-xs uppercase tracking-widest rounded-sm hover:brightness-110 transition-all">Edit Profile</button>
              <button className="border border-outline-variant/40 text-primary-fixed px-6 py-2.5 font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-[#00FFFF]/5 transition-all">Export CV</button>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 bg-surface-container-low border-l-[0.5px] border-cyan-500/10 p-8">
          <h4 className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">Credential Metadata</h4>
          <div className="space-y-6">
            <div>
              <p className="text-[10px] text-primary-fixed uppercase tracking-widest mb-1">Registration No.</p>
              <p className="font-headline text-xl text-white">NY-882941-X</p>
            </div>
            <div>
              <p className="text-[10px] text-primary-fixed uppercase tracking-widest mb-1">License Authority</p>
              <p className="font-headline text-xl text-white">NYS Board for Architecture</p>
            </div>
            <div>
              <p className="text-[10px] text-primary-fixed uppercase tracking-widest mb-1">AIA Status</p>
              <p className="font-headline text-xl text-white">Active Member</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        <div className="md:col-span-1 bg-surface-container p-6 border-b-2 border-surface-tint">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-4">Total Analysed</p>
          <div className="flex items-baseline gap-2">
            <span className="font-headline text-4xl font-bold text-white">42</span>
            <span className="text-surface-tint font-headline font-medium">SITES</span>
          </div>
        </div>
        <div className="md:col-span-1 bg-surface-container p-6 border-b-2 border-tertiary-fixed">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-4">Active Projects</p>
          <div className="flex items-baseline gap-2">
            <span className="font-headline text-4xl font-bold text-white">12</span>
            <span className="text-tertiary-fixed font-headline font-medium">LIVE</span>
          </div>
        </div>
        <div className="md:col-span-2 bg-[#1c1b1b] p-6 relative overflow-hidden flex flex-col justify-center">
          <div className="relative z-10">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-4">Productivity Index</p>
            <div className="flex items-center gap-8">
              <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                <div className="w-[84%] h-full bg-gradient-to-r from-surface-tint to-primary-fixed"></div>
              </div>
              <span className="font-headline text-2xl font-bold text-white">84%</span>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-surface-tint/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          <div className="flex justify-between items-end mb-4 px-2">
            <h2 className="font-headline text-2xl font-bold text-white">Project Activity</h2>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">Last 30 Days</span>
          </div>
          {[
            { icon: CloudUpload, title: "Blueprint Uploaded:", highlight: "The Heights v4.2", detail: "Structural analysis requested • 2h ago", color: "text-primary-fixed" },
            { icon: Ruler, title: "Zoning Report Generated:", highlight: "Pier 11 Development", detail: "3 Constraints identified • 5h ago", color: "text-tertiary-fixed" },
            { icon: ShieldAlert, title: "Conflict Flag:", highlight: "Utility Easement 04", detail: "Site Alpha-B Intersection • Yesterday", color: "text-error" },
          ].map((activity, idx) => (
            <div key={idx} className="group flex items-center gap-6 p-5 bg-surface-container-low hover:bg-surface-container-high transition-all border-l border-transparent hover:border-surface-tint cursor-pointer">
              <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center">
                <activity.icon className={cn("w-6 h-6", activity.color)} />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-white mb-1">{activity.title} <span className={activity.color}>{activity.highlight}</span></h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">{activity.detail}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
            </div>
          ))}
        </div>
        <div className="md:col-span-1">
          <div className="bg-surface-container-low p-8 border border-outline-variant/10 flex flex-col h-full">
            <h4 className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-8">Organization</h4>
            <div className="mb-10">
              <div className="w-16 h-16 bg-white flex items-center justify-center mb-4 overflow-hidden">
                <img className="w-full h-full object-cover" alt="Studio XYZ Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWt18JkUfIYS1dSRTjWAibvCM9npvs5tXCp4mGXxUu6FxxuS0Mta-vS8xxg8gYkty_Fcrui7fhy97ap0CwkkFnPhmhxw4wTpRiVF4BsZmvgAWWTqEdaIXgbBN45F3uEhDRv1lE_KI3KnTJ6DyxwjfgIY3cxaUefoHd0v4HNhRxseySbzK3Ny__WKv1b5ThK20oWjr-2j5L0VLin0a_PE44tc2HTTgIxnvscCtOGmYOoPKK4SVJVmV321mL6wiCVzbNj_bLrIEdCB6V" />
              </div>
              <h3 className="font-headline text-2xl font-bold text-white mb-1">Studio XYZ</h3>
              <p className="text-xs text-primary-fixed uppercase tracking-widest">Enterprise Tier</p>
            </div>
            <div className="space-y-6 flex-1">
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.1em] mb-2">Primary Contact</p>
                <p className="text-sm text-white font-medium">elena.vance@studioxyz.com</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.1em] mb-2">Billing Cycle</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-white font-medium">Monthly Pro</p>
                  <span className="text-[10px] px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded-sm">PAID</span>
                </div>
              </div>
            </div>
            <button className="mt-8 flex items-center justify-between text-white border-t border-outline-variant/10 pt-4 hover:text-surface-tint transition-all group">
              <span className="text-xs font-bold uppercase tracking-widest">Org Management</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
