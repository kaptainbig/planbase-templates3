import {
  Plus,
  Search,
  MoreVertical,
  Trash2,
  Edit3,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Competitors = () => {
  const competitors = [
    {
      id: 'openai',
      name: 'OpenAI',
      domain: 'openai.com',
      urlCount: 12,
      lastAlert: '2h ago',
      signal: 'high',
      categories: ['Pricing', 'Features', 'Changelog', 'Blog']
    },
    {
      id: 'anthropic',
      name: 'Anthropic',
      domain: 'anthropic.com',
      urlCount: 8,
      lastAlert: '1d ago',
      signal: 'low',
      categories: ['API Docs', 'Research', 'Pricing']
    },
    {
      id: 'mistral',
      name: 'Mistral AI',
      domain: 'mistral.ai',
      urlCount: 4,
      lastAlert: 'Yesterday',
      signal: 'medium',
      categories: ['Changelog', 'Models']
    }
  ];

  return (
    <Layout title="Competitors">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-on-surface tracking-tight">Monitored Entities</h2>
            <p className="text-on-surface-variant mt-1">Tracking strategic shifts across 24 primary entities.</p>
          </div>
          <Link
            to="/add-competitor"
            className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold text-sm hover:shadow-[0_0_15px_rgba(76,241,220,0.4)] transition-all flex items-center gap-2 w-fit"
          >
            <Plus size={18} />
            Add Entity
          </Link>
        </div>

        {/* Search Bar */}
        <div className="glass-panel p-2 rounded-xl flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
            <input
              type="text"
              placeholder="Search entities, domains, or parameters..."
              className="w-full bg-transparent border-none rounded-lg pl-10 pr-4 py-2.5 text-sm text-on-surface focus:ring-0 placeholder:text-on-surface-variant/50 transition-all"
            />
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competitors.map((comp) => (
            <div
              key={comp.id}
              className="glass-panel rounded-xl p-6 relative overflow-hidden group hover:border-primary/20 transition-all duration-300 flex flex-col h-full"
            >
              {/* Signal Glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 \${
                comp.signal === 'high' ? 'bg-signal-high/10 opacity-60' :
                comp.signal === 'medium' ? 'bg-signal-medium/10 opacity-40' :
                'bg-signal-low/10 opacity-20'
              }`} />

              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center font-bold text-xl text-primary border border-outline-variant/10">
                    {comp.name[0]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-on-surface">{comp.name}</h3>
                    <p className="text-xs font-mono text-on-surface-variant mt-1">{comp.domain}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-on-surface-variant hover:text-primary transition-colors"><Edit3 size={16} /></button>
                  <button className="p-2 text-on-surface-variant hover:text-error transition-colors"><Trash2 size={16} /></button>
                  <button className="p-2 text-on-surface-variant hover:text-on-surface transition-colors"><MoreVertical size={16} /></button>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Watched URLs</p>
                  <p className="text-sm font-bold text-on-surface">{comp.urlCount}</p>
                </div>
                <div className="w-px h-8 bg-outline-variant/10" />
                <div className="space-y-1">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Last Alert</p>
                  <p className="text-sm font-bold text-on-surface">{comp.lastAlert}</p>
                </div>
                <div className="ml-auto">
                  <div className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border flex items-center gap-2 \${
                    comp.signal === 'high' ? 'bg-signal-high/10 text-signal-high border-signal-high/20' :
                    comp.signal === 'medium' ? 'bg-signal-medium/10 text-signal-medium border-signal-medium/20' :
                    'bg-signal-low/10 text-signal-low border-signal-low/20'
                  }`}>
                    {comp.signal === 'high' && <ShieldAlert size={12} className="animate-pulse" />}
                    {comp.signal} Signal
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {comp.categories.map(cat => (
                  <span key={cat} className="px-2.5 py-1 rounded bg-surface-container-lowest text-[10px] font-bold text-on-surface-variant border border-outline-variant/5">
                    {cat}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-outline-variant/10">
                <Link
                  to={`/competitors/\${comp.id}`}
                  className="text-xs font-black uppercase tracking-widest text-primary hover:text-primary-container transition-colors flex items-center gap-2 group-hover:translate-x-1 duration-300 w-fit"
                >
                  View Intel Profile <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Competitors;
