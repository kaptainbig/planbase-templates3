import React from 'react';
import { FileText, Coins, Layers, HardHat, Train, Eye, CheckCircle, ZoomIn, Maximize, Box, Building } from 'lucide-react';
import { cn } from '../lib/utils';

const ExportReport: React.FC = () => {
  return (
    <div className="p-8 max-w-[1600px] mx-auto overflow-y-auto h-full custom-scrollbar">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-primary-fixed-dim">
            <FileText className="w-4 h-4" />
            <span className="text-[10px] font-body uppercase tracking-[0.2em]">Export Module / 042-X</span>
          </div>
          <h1 className="text-4xl font-headline font-bold text-white tracking-tight">Export Report Screen</h1>
          <p className="text-on-surface-variant max-w-md font-body text-sm leading-relaxed">
            Configure professional PDF and BIM documentation for Project Alpha. Select structural layers and coordinate systems for final generation.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-surface-container-high text-white text-xs font-bold uppercase tracking-wider hairline-border hover:bg-surface-variant transition-colors">
            Save Configuration
          </button>
          <button className="px-8 py-3 bg-gradient-to-r from-surface-tint to-primary-container text-on-primary text-xs font-bold uppercase tracking-[0.15em] shadow-[0_0_20px_rgba(0,221,221,0.3)] hover:shadow-[0_0_30px_rgba(0,221,221,0.5)] transition-all flex items-center gap-2">
            <Coins className="w-4 h-4" />
            Generate Report
          </button>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-8 pb-12">
        <div className="col-span-12 xl:col-span-5 space-y-8">
          <section className="space-y-4">
            <div className="flex justify-between items-center border-b-[0.5px] border-outline-variant/20 pb-2">
              <h2 className="text-xs font-headline font-bold uppercase tracking-widest text-primary-fixed-dim">Report Layers</h2>
              <span className="text-[10px] text-slate-500 font-mono">08 SELECTED</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Layers, label: "Zoning & Setbacks", detail: "Vector Overlay", active: true },
                { icon: HardHat, label: "Infrastructure", detail: "Utility Mesh", active: true },
                { icon: Train, label: "Topography", detail: "Contour Lines", active: false },
                { icon: Eye, label: "Shadow Analysis", detail: "Chronological", active: true },
              ].map((layer, idx) => (
                <div key={idx} className={cn(
                  "p-4 flex flex-col justify-between h-32 hairline-border group transition-colors cursor-pointer",
                  layer.active ? "bg-surface-container-low hover:bg-surface-container-high" : "bg-surface-container-low opacity-60"
                )}>
                  <div className="flex justify-between items-start">
                    <layer.icon className={cn("w-5 h-5", layer.active ? "text-primary-fixed-dim" : "text-slate-500")} />
                    <div className={cn("w-8 h-4 rounded-full flex items-center px-0.5", layer.active ? "bg-primary-fixed-dim/20" : "bg-surface-variant")}>
                      <div className={cn("w-3 h-3 rounded-full", layer.active ? "bg-primary-fixed-dim translate-x-4" : "bg-slate-600")} style={{ transition: 'transform 0.2s' }}></div>
                    </div>
                  </div>
                  <div>
                    <span className={cn("block text-xs font-bold tracking-tight", layer.active ? "text-white" : "text-slate-400")}>{layer.label}</span>
                    <span className={cn("text-[10px] uppercase tracking-tighter", layer.active ? "text-on-surface-variant" : "text-slate-600")}>{layer.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xs font-headline font-bold uppercase tracking-widest text-primary-fixed-dim border-b-[0.5px] border-outline-variant/20 pb-2">Export Formats</h2>
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-3 bg-primary-container text-on-primary-container text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <FileText className="w-4 h-4" /> PDF
              </button>
              <button className="px-5 py-3 bg-surface-container-high text-white text-xs font-bold uppercase tracking-widest hairline-border hover:bg-surface-variant transition-colors flex items-center gap-2">
                <Box className="w-4 h-4" /> RHINO (3DM)
              </button>
              <button className="px-5 py-3 bg-surface-container-high text-white text-xs font-bold uppercase tracking-widest hairline-border hover:bg-surface-variant transition-colors flex items-center gap-2">
                <Building className="w-4 h-4" /> REVIT (RVT)
              </button>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xs font-headline font-bold uppercase tracking-widest text-tertiary-fixed border-b-[0.5px] border-outline-variant/20 pb-2">Pre-Generation Checklist</h2>
            <div className="space-y-px bg-outline-variant/10">
              {[
                { label: "Coordinate System Alignment", detail: "WGS84 Reference confirmed", status: "READY", active: true },
                { label: "High-Res Textures", detail: "Satellite data indexed at 15cm/px", status: "INDEXED", active: true },
                { label: "Watermark Branding", detail: "Apply architectural firm logo (Optional)", status: "PENDING", active: false },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-surface-container-lowest p-4">
                  {item.active ? <CheckCircle className="text-primary-fixed-dim w-5 h-5 fill-current" /> : <div className="w-5 h-5 border-[0.5px] border-outline-variant"></div>}
                  <div className="flex-1">
                    <span className={cn("block text-xs font-medium", item.active ? "text-white" : "text-slate-400")}>{item.label}</span>
                    <span className="text-[10px] text-on-surface-variant">{item.detail}</span>
                  </div>
                  <span className={cn("text-[10px] font-mono uppercase", item.active ? "text-slate-500" : "text-slate-600")}>{item.status}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="col-span-12 xl:col-span-7">
          <div className="relative bg-surface-container-low h-full min-h-[700px] hairline-border p-1">
            <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-10 glass-panel p-4 border-[0.5px] border-outline-variant/20">
              <div className="flex items-center gap-4">
                <Eye className="text-primary-fixed-dim w-5 h-5" />
                <div className="h-6 w-[1px] bg-outline-variant/30"></div>
                <span className="text-xs font-mono tracking-widest text-white uppercase">Draft_v2.1_ProjectAlpha.pdf</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono text-on-surface-variant">PAGE 01 / 24</span>
                <div className="flex gap-1">
                  <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-variant transition-colors"><ZoomIn className="w-4 h-4" /></button>
                  <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-variant transition-colors"><Maximize className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
            <div className="w-full h-full bg-[#131313] flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 opacity-20 pointer-events-none grayscale" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsSngNqV_XznmHVCEclegVmVeZaZMgjWFxznvhYoeUZRiXHGhbATqtTaNaHscXB4arl8z4Gl4keKGaUKvem8aF6rj33L8QkYLpCP6RDUFPDdFP1mM1T5Xr_i5QB3mavvMlxhdxBMd_Psv0GbBNLTX5RIsFml5_XfIvV1IKEweZwA2Rba5eGEhhpVubex7hEvjhtECqCuzCycGlZdsri8-1qpKwCwzVs9TUo-1PrpZtU-NXDGV50AGVkkef9nOVN_8bYkaLQRU2f477')", backgroundSize: 'cover' }}></div>

              <div className="bg-white w-[85%] aspect-[1/1.414] shadow-2xl relative overflow-hidden flex flex-col p-12 text-[#131313]">
                <div className="flex justify-between items-start border-b-[2px] border-[#131313] pb-8 mb-12">
                  <div className="space-y-1">
                    <h4 className="text-3xl font-headline font-extrabold tracking-tighter">SITESNAP</h4>
                    <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-60">Architectural Report</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-wider">Project ID: ALPHA-2024</p>
                    <p className="text-[10px] opacity-60">Generated: OCT 24, 2024</p>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-8">
                  <div className="w-full h-64 bg-slate-100 flex items-center justify-center relative">
                    <img className="w-full h-full object-cover" alt="Site Aerial Analysis" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAzL1LGkhAErkaARIIMOhGEgeO5UKRm54N9PYPkgHYj7q-gnKwpPd65Q5euMIn5iCw0eXlRKXpdRAEPDDaR2Znhgmwge6ke421R0KcBWX3fOEo3Lwd6Sm5LCV4uS3oq9y8TlpUmJKYUtM7Qbr-nQw6iEwMp001G8S3b00GQow1u7Fcr78ev-s-Y-XLCSwwtZerqy1IoxRs7nuVjojF_VmZngUZMheYTI1YhkIkn0nzVmiiGmziVIzWy0ToBxeprAlELazCSsmt3UJN" />
                    <div className="absolute inset-0 border-[0.5px] border-[#131313]/20"></div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-1 flex-1 bg-[#131313]"></div>
                      <span className="text-xs font-bold uppercase tracking-widest">Section 01: Site Context</span>
                      <div className="h-1 w-12 bg-[#131313]"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <div className="h-2 w-full bg-slate-200"></div>
                        <div className="h-2 w-3/4 bg-slate-200"></div>
                        <div className="h-2 w-full bg-slate-200"></div>
                        <div className="h-2 w-5/6 bg-slate-200"></div>
                      </div>
                      <div className="space-y-2">
                        {[
                          { label: "Plot Area", value: "14,250 m²" },
                          { label: "Zoning Class", value: "M-1 Urban" },
                          { label: "Max Height", value: "42.00 m" },
                        ].map((item, idx) => (
                          <div key={idx} className="flex justify-between border-b border-slate-300 pb-1">
                            <span className="text-[8px] font-bold uppercase">{item.label}</span>
                            <span className="text-[8px] font-mono">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 flex justify-between items-center opacity-40">
                  <span className="text-[8px] font-mono tracking-widest">CONFIDENTIAL DOCUMENT - FOR ARCHITECTURAL REVIEW ONLY</span>
                  <span className="text-[8px] font-mono">PAGE 01</span>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 glass-panel p-4 border-[0.5px] border-outline-variant/20 flex flex-col gap-2 pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-fixed-dim animate-pulse"></span>
                  <span className="text-[10px] font-mono tracking-widest text-primary-fixed-dim uppercase">Live Coordinates</span>
                </div>
                <div className="text-[9px] font-mono text-white/60">
                  LAT: 40.7128° N<br/>
                  LONG: 74.0060° W<br/>
                  ELEV: 24.5m MSL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportReport;
