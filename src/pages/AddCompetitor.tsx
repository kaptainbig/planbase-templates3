import { useState } from 'react';
import {
  Globe,
  FileText,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Search,
  Plus,
  ShieldCheck,
  Clock,
  Radar
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const AddCompetitor = () => {
  const [step, setStep] = useState(1);
  const [domain, setDomain] = useState('');
  const navigate = useNavigate();

  const steps = [
    { id: 1, label: 'Domain', icon: Globe },
    { id: 2, label: 'Pages', icon: FileText },
    { id: 3, label: 'Confirm', icon: ShieldCheck },
  ];

  const suggestions = [
    { label: 'Pricing', url: '/pricing', category: 'Pricing' },
    { label: 'Features', url: '/product', category: 'Features' },
    { label: 'Changelog', url: '/changelog', category: 'Changelog' },
    { label: 'Blog', url: '/blog', category: 'Marketing' },
  ];

  return (
    <div className="min-h-screen bg-background blueprint-grid flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-2xl space-y-12">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-on-surface tracking-tight">Add Competitor</h1>
          <p className="text-on-surface-variant max-w-md mx-auto leading-relaxed">
            Initialize tracking by providing the core domain. We'll automatically detect strategic surfaces.
          </p>
        </header>

        {/* Stepper */}
        <div className="flex items-center justify-center gap-4 relative">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center gap-4">
              <div className={`flex items-center gap-3 \${step >= s.id ? 'text-primary' : 'text-on-surface-variant/40'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 \${
                  step >= s.id ? 'border-primary bg-primary/10 shadow-[0_0_15px_rgba(76,241,220,0.3)]' : 'border-outline-variant/20 bg-surface-container-low'
                }`}>
                  <s.icon size={18} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest hidden sm:block">{s.label}</span>
              </div>
              {i < steps.length - 1 && <div className={`h-px w-8 sm:w-12 \${step > s.id ? 'bg-primary' : 'bg-outline-variant/20'}`} />}
            </div>
          ))}
        </div>

        {/* Form Area */}
        <div className="glass-panel p-8 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -mr-32 -mt-32 pointer-events-none" />

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Competitor Domain</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Search className="text-on-surface-variant group-focus-within:text-primary transition-colors" size={20} />
                    </div>
                    <input
                      type="text"
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      placeholder="e.g. openai.com"
                      className="w-full bg-surface-container border border-outline-variant/10 rounded-xl pl-12 pr-4 py-4 text-lg text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-all font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-bold text-on-surface uppercase tracking-widest">Strategic Targets Found</h3>
                    <span className="text-[10px] font-mono text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">4 DETECTED</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {suggestions.map((sug) => (
                      <div key={sug.label} className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/10 flex items-start gap-4 cursor-pointer hover:bg-surface-container-high transition-colors group">
                        <div className="w-5 h-5 rounded border-2 border-outline-variant/30 mt-0.5 group-hover:border-primary transition-colors flex items-center justify-center">
                          <div className="w-2 h-2 bg-primary rounded-sm scale-0 group-hover:scale-100 transition-transform" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-on-surface">{sug.label}</p>
                          <p className="text-[11px] font-mono text-on-surface-variant mt-1">{domain || 'openai.com'}{sug.url}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setStep(2)}
                    className="bg-primary text-on-primary px-8 py-3 rounded-xl font-black uppercase tracking-widest text-sm hover:shadow-[0_0_20px_rgba(76,241,220,0.4)] transition-all flex items-center gap-2"
                  >
                    Next Step <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <h3 className="text-sm font-bold text-on-surface uppercase tracking-widest">Crawl Frequency</h3>
                    <span className="text-[10px] font-mono text-tertiary uppercase">Usage: Medium Impact</span>
                  </div>
                  <div className="flex rounded-xl bg-surface-container-low p-1.5 border border-outline-variant/10">
                    <button className="flex-1 py-3 text-xs font-black uppercase tracking-widest rounded-lg bg-surface-container-high text-primary shadow-sm ring-1 ring-white/5 transition-all">Hourly Sweeps</button>
                    <button className="flex-1 py-3 text-xs font-black uppercase tracking-widest rounded-lg text-on-surface-variant hover:text-on-surface transition-colors">Daily Summary</button>
                  </div>
                  <p className="text-[11px] text-on-surface-variant leading-relaxed text-center italic">
                    High-frequency crawling provides near-real-time detection of strategic pivots and pricing shifts.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-on-surface uppercase tracking-widest">Add Custom Endpoint</h3>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="https://example.com/api-docs"
                      className="flex-1 bg-surface-container border border-outline-variant/10 rounded-xl px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none font-mono"
                    />
                    <button className="px-4 py-3 rounded-xl bg-surface-container-high border border-outline-variant/10 text-primary hover:bg-primary/10 transition-colors">
                      <Plus size={20} />
                    </button>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    <ArrowLeft size={18} /> Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="bg-primary text-on-primary px-8 py-3 rounded-xl font-black uppercase tracking-widest text-sm hover:shadow-[0_0_20px_rgba(76,241,220,0.4)] transition-all flex items-center gap-2"
                  >
                    Preview Logic <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <div className="bg-surface-container-high/30 rounded-2xl p-6 border border-primary/20 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                      <Radar size={24} className="animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-on-surface tracking-tight">{domain || 'openai.com'}</h4>
                      <p className="text-xs text-on-surface-variant font-mono uppercase tracking-widest">Active Surveillance Protocol</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase text-on-surface-variant tracking-widest">Strategic Points</p>
                      <p className="text-lg font-bold text-on-surface">4 URLs</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase text-on-surface-variant tracking-widest">Sweep Rate</p>
                      <p className="text-lg font-bold text-on-surface">Hourly</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-on-surface-variant">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span className="text-xs">Automatic classification of pricing components enabled.</span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface-variant">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span className="text-xs">HTML structural change alerts configured.</span>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setStep(2)}
                    className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    <ArrowLeft size={18} /> Edit Config
                  </button>
                  <button
                    onClick={() => navigate('/competitors')}
                    className="bg-primary text-on-primary px-8 py-3 rounded-xl font-black uppercase tracking-widest text-sm hover:shadow-[0_0_20px_rgba(76,241,220,0.4)] transition-all flex items-center gap-2"
                  >
                    Start Surveillance <Radar size={18} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40">
           <div className="flex items-center gap-2"><ShieldCheck size={12} /> SOC2 Compliant</div>
           <div className="flex items-center gap-2"><Clock size={12} /> Low Latency</div>
        </div>
      </div>
    </div>
  );
};

export default AddCompetitor;
