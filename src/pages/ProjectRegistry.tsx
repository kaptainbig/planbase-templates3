import React from 'react';
import { Filter, SortAsc, MoreVertical, ExternalLink, Cloud } from 'lucide-react';
import { cn } from '../lib/utils';

const ProjectRegistry: React.FC = () => {
  const projects = [
    {
      id: "SN-8829-X",
      name: "Project Alpha",
      location: "NYC Metropolitan",
      coord: "40.7128° N, 74.0060° W",
      status: "In Analysis",
      statusColor: "bg-surface-tint",
      modified: "OCT 12, 2024",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXQzAv5p5LsHLg6fpsEzdNdE_vt_c6u1WxS6YWQRPuXxop3errl6Dtk82I6snB-TcOE7LyVp8yNvuUpwJqFW-Xh2ZlLQ8zLlMurjhQhQfYrv35GjttyRt-O_fzNjTIVxKF3_cCYrbi3Gzg7c5fDC41e4s_f4DSASLzEQMbJiIZcfxJLRbAJSwCMwWoHun7JS0cF7jvoRqpP2vXGIf3elqfBbqh7sUlnGo_Lc7z6cAFG8rO1UyTUuBH-1DRgtF5qF-2WlTz8ODYonbv",
      mode: "Analysis Mode"
    },
    {
      id: "SN-4412-K",
      name: "North Loop Development",
      location: "Chicago District 4",
      coord: "41.8781° N, 87.6298° W",
      status: "Drafting",
      statusColor: "bg-tertiary-fixed",
      modified: "OCT 08, 2024",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmXWh6c7aKZp47tcXu20jBaFffRoeSO86sfIaxTXBNfy2qHQRXnIG_KdolK3Cc227fOP2HhOEerqqblk8cqi-CEGY1Qw6FN2eJfQxaX4s1f_8t7MHUGlBsosyXQUI0r60yi8UgqZy1ay2c5VvH8yEguFXP808npiWdlPC-BfDB27MrQxuaaCsQSsG2vZ7XKGVBnmKkeSp5S4Lskztc7nfX3KrMeOVisTYxstf4dCmfLFzXNsjn8S1e-ro-r0tXbps6buhPEl7iPiUN",
      mode: "High Priority"
    },
    {
      id: "SN-1290-L",
      name: "Santa Monica Pier Extension",
      location: "LA Coastal Unit",
      coord: "34.0522° N, 118.2437° W",
      status: "Completed",
      statusColor: "bg-secondary",
      modified: "SEP 22, 2024",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD27-EcmomkXixqV_JtGaA86kIXh89VujfpbljwjaSe4ST5wT_Q7bgDwRtKNuBR44zZYLeCC5isz-eEYNmXJKNPPYtPA0vFs9CaTfW7roA12EIS053CQTRBFSQP0XvIoIKIKmCEmBlJxX93tfolGtwQwNw_i7B2L9kWXXgWHS4iN4n3R7TXIrlEs0pYFZGo84jkpd85KkyNqO3wGORpC_X3g7DfofO7wyrToX7r_FvvhQiGUCpOtPG1cOPDTsGx3PK1tpCDYPVvY0-L",
      mode: "Archived"
    },
    {
      id: "SN-7731-S",
      name: "Rainier View Towers",
      location: "Seattle Central",
      coord: "47.6062° N, 122.3321° W",
      status: "In Analysis",
      statusColor: "bg-surface-tint",
      modified: "OCT 14, 2024",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0CyXfegP0vOgVT_plXcRQhnnU3QWL9oeS6VtqK0sCe4Mx4JsIsQSnPXs8_2DmhzPqRAMziAbaDeM8kS0l9kr_cU1WuWgUCcnUd0kyKZbsNdpBZ2E0kdmx1oyLZUdjGYIYwZgFHoWw1tvdwhWys-gS3fxa_vz-WRSOmOJZ5GTwlKQvs1cAuzEbLImZs8pkb8fSCp4Jobqax0STeDkP3KBhL5d-QtIYEV3Swh-A8TPwbWeOFoQa0Y-vMhbgq2hfb4qV2R0G0CiS6FSu",
      mode: "Analysis Mode"
    }
  ];

  return (
    <div className="p-6 lg:p-10 max-w-[1600px] mx-auto overflow-y-auto h-full custom-scrollbar">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[1px] w-8 bg-surface-tint"></span>
            <span className="text-surface-tint font-body text-[10px] uppercase tracking-[0.2em] font-bold">Registry // 2024</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter text-white">Active Projects</h1>
        </div>
        <div className="flex gap-2">
          <button className="bg-surface-container-high px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-surface border-[0.5px] border-outline-variant/30 hover:border-surface-tint/50 transition-all flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="bg-surface-container-high px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-surface border-[0.5px] border-outline-variant/30 hover:border-surface-tint/50 transition-all flex items-center gap-2">
            <SortAsc className="w-4 h-4" /> Sort
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0.5 bg-outline-variant/10">
        {projects.map((project, idx) => (
          <div key={idx} className="group bg-surface-container-low p-6 flex flex-col gap-6 relative overflow-hidden transition-all hover:bg-surface-container cursor-pointer">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-body text-surface-tint tracking-widest uppercase">COORD: {project.coord}</span>
            </div>
            <div className="h-48 w-full bg-surface-container-lowest border-[0.5px] border-outline-variant/20 relative overflow-hidden">
              <img className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-80 transition-all duration-700" alt={project.name} src={project.image} />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-40"></div>
              <div className="absolute bottom-3 left-3 flex gap-2">
                <span className={cn(
                  "backdrop-blur-md px-2 py-1 text-[9px] font-bold border-[0.5px] uppercase tracking-widest",
                  project.statusColor === 'bg-surface-tint' ? "bg-surface-tint/10 text-surface-tint border-surface-tint/20" :
                  project.statusColor === 'bg-tertiary-fixed' ? "bg-tertiary-fixed/10 text-tertiary-fixed border-tertiary-fixed/20" :
                  "bg-secondary-container/30 text-secondary border-secondary/20"
                )}>
                  {project.mode}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-headline font-bold text-white group-hover:text-surface-tint transition-colors uppercase tracking-tight">{project.name}</h3>
                <MoreVertical className="w-5 h-5 text-slate-500 cursor-pointer hover:text-white" />
              </div>
              <div className="flex items-center gap-4 text-[10px] text-slate-500 font-body uppercase tracking-widest">
                <span>ID: {project.id}</span>
                <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                <span>{project.location}</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex flex-col gap-1">
                <p className="text-[9px] text-slate-600 uppercase tracking-widest">Current Status</p>
                <div className="flex items-center gap-2">
                  <span className={cn("w-2 h-2 rounded-none", project.statusColor, project.statusColor === 'bg-surface-tint' && "shadow-[0_0_8px_rgba(0,211,211,0.6)]")}></span>
                  <span className="text-xs font-bold text-on-surface uppercase">{project.status}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-slate-600 uppercase tracking-widest">Last Modified</p>
                <p className="text-xs font-medium text-slate-400 uppercase">{project.modified}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-headline font-bold text-white uppercase tracking-widest">Detailed Log</h2>
          <div className="h-[1px] flex-grow bg-outline-variant/20"></div>
        </div>
        <div className="bg-surface-container-low overflow-hidden border-[0.5px] border-outline-variant/10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                <th className="px-6 py-4">Project Label</th>
                <th className="px-6 py-4">Site Identifier</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Modified</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {projects.slice(0, 3).map((p, i) => (
                <tr key={i} className="border-b-[0.5px] border-outline-variant/5 hover:bg-surface-container-highest transition-colors group">
                  <td className="px-6 py-4 text-white font-bold uppercase">{p.name}</td>
                  <td className="px-6 py-4 text-slate-500 font-mono text-xs uppercase">{p.id}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "text-[10px] font-bold uppercase border px-2 py-0.5",
                      p.statusColor === 'bg-surface-tint' ? "text-surface-tint border-surface-tint/30" :
                      p.statusColor === 'bg-tertiary-fixed' ? "text-tertiary-fixed border-tertiary-fixed/30" :
                      "text-secondary border-secondary/30"
                    )}>{p.status}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">{p.modified}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-500 hover:text-surface-tint transition-colors"><ExternalLink className="w-4 h-4" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 hidden xl:block">
        <div className="bg-surface-container-high/60 backdrop-blur-xl p-4 border-[0.5px] border-surface-tint/20 shadow-2xl flex flex-col gap-2">
          <div className="flex items-center justify-between gap-12">
            <span className="text-[10px] font-bold text-surface-tint uppercase tracking-widest">System Status</span>
            <span className="text-[10px] text-slate-500 font-mono">0.02ms</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-[9px] text-slate-400 uppercase tracking-tighter">
              <span>Active Layers</span>
              <span>14/20</span>
            </div>
            <div className="w-full h-[2px] bg-outline-variant/20 overflow-hidden">
              <div className="w-[70%] h-full bg-surface-tint"></div>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Cloud className="w-3 h-3 text-surface-tint fill-current" />
            <span className="text-[10px] text-on-surface font-medium uppercase tracking-tight">Cloud Sync Synchronized</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectRegistry;
