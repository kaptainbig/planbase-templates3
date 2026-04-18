import { useState } from 'react';
import {
  Search,
  Filter,
  MoreVertical,
  Share2,
  CheckCircle2,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import Layout from '../components/Layout';

const Alerts = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  void activeFilter;

  const alerts = [
    {
      id: 1,
      entity: 'OpenAI',
      title: 'Pricing Page Structural Change',
      time: '2h ago',
      severity: 'high',
      category: 'Pricing',
      url: 'openai.com/pricing',
      message: 'Significant modifications observed on the pricing surface. A new tier "Enterprise Plus" has been added to the DOM structure, although currently hidden via CSS. Imminent launch suggested.'
    },
    {
      id: 2,
      entity: 'Anthropic',
      title: 'Claude Pro Feature Update',
      time: '5h ago',
      severity: 'medium',
      category: 'Features',
      url: 'anthropic.com/product',
      message: 'Anthropic updated their Claude Pro feature set to include "Projects". This directly competes with shared workspace features currently in our Q4 roadmap.'
    },
    {
      id: 3,
      entity: 'Mistral AI',
      title: 'SDK Version Bump (v2.4.0)',
      time: '1d ago',
      severity: 'low',
      category: 'Developer',
      url: 'docs.mistral.ai',
      message: 'Released minor updates to their Python SDK. Includes new parameter mappings for streaming inference optimizations.'
    }
  ];

  return (
    <Layout title="Alerts">
      <div className="space-y-8">
        {/* Header Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
              <input
                type="text"
                placeholder="Search alerts..."
                className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg pl-10 pr-4 py-2.5 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none transition-all"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm text-on-surface hover:bg-surface-container-high transition-colors">
              <Filter size={18} />
              <span>Filters</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-sm font-bold text-primary hover:text-primary-container transition-colors uppercase tracking-widest">Mark all as read</button>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {['All', 'High', 'Medium', 'Low', 'Pricing', 'Features', 'Changelog'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap \${
                activeFilter === filter
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container-low text-on-surface-variant border border-outline-variant/10 hover:border-primary/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {alerts.map((alert) => (
            <article
              key={alert.id}
              className="glass-panel rounded-xl p-6 relative overflow-hidden group hover:border-primary/20 transition-all duration-300"
            >
              {/* Unread indicator for the first item */}
              {alert.id === 1 && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary shadow-[0_0_15px_#4cf1dc]" />}

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <header className="flex items-center gap-4">
                    <div className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest border \${
                      alert.severity === 'high' ? 'bg-signal-high/10 text-signal-high border-signal-high/20' :
                      alert.severity === 'medium' ? 'bg-signal-medium/10 text-signal-medium border-signal-medium/20' :
                      'bg-signal-low/10 text-signal-low border-signal-low/20'
                    }`}>
                      {alert.severity} Signal
                    </div>
                    <h3 className="text-lg font-bold text-on-surface">{alert.entity}</h3>
                    <span className="text-xs text-on-surface-variant font-mono">{alert.time}</span>
                  </header>

                  <div className="space-y-2">
                    <h4 className="text-md font-semibold text-on-surface">{alert.title}</h4>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] px-2 py-0.5 rounded bg-surface-container-high border border-outline-variant/10 text-on-surface-variant font-medium">
                        {alert.category}
                      </span>
                      <a href="#" className="flex items-center gap-1 text-[11px] font-mono text-primary hover:underline transition-all">
                        {alert.url} <ExternalLink size={12} />
                      </a>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed max-w-3xl">
                      {alert.message}
                    </p>
                  </div>

                  <footer className="flex items-center gap-6 pt-4 border-t border-outline-variant/5">
                    <button className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-container transition-colors group">
                      View Analysis <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="flex items-center gap-4 ml-auto text-on-surface-variant">
                      <button className="p-1 hover:text-primary transition-colors" title="Mark as read"><CheckCircle2 size={18} /></button>
                      <button className="p-1 hover:text-primary transition-colors" title="Share insight"><Share2 size={18} /></button>
                      <button className="p-1 hover:text-primary transition-colors"><MoreVertical size={18} /></button>
                    </div>
                  </footer>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Alerts;
