import {
  Plus,
  Search,
  Trash2,
  Edit3,
  RefreshCw,
  Link2
} from 'lucide-react';
import Layout from '../components/Layout';

const Watchlist = () => {
  const endpoints = [
    { id: 1, entity: 'OpenAI', url: 'openai.com/pricing', type: 'Pricing', frequency: 'Hourly', lastSync: '2m ago', status: 'active', change: 'no' },
    { id: 2, entity: 'Anthropic', url: 'anthropic.com/product', type: 'Features', frequency: 'Daily', lastSync: '14h ago', status: 'paused', change: '3d ago' },
    { id: 3, entity: 'Mistral AI', url: 'mistral.ai/news', type: 'Changelog', frequency: 'Hourly', lastSync: '1h ago', status: 'error', change: 'blocked' },
  ];

  return (
    <Layout title="URL Watchlist">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-on-surface tracking-tight">Endpoint Monitoring</h2>
            <p className="text-on-surface-variant mt-1">Watching 142 distinct endpoints across 5 primary competitors.</p>
          </div>
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold text-sm hover:shadow-[0_0_15px_rgba(76,241,220,0.4)] transition-all flex items-center gap-2">
            <Plus size={18} />
            Add New URL
          </button>
        </div>

        <div className="glass-panel p-4 rounded-xl flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
            <input
              type="text"
              placeholder="Search by URL or keyword..."
              className="w-full bg-surface border-none text-sm text-on-surface rounded-lg pl-10 py-2.5 focus:ring-1 focus:ring-primary/50 placeholder:text-on-surface-variant/50 transition-shadow"
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <select className="bg-surface border-none text-sm text-on-surface rounded-lg py-2.5 pl-3 pr-8 appearance-none focus:ring-1 focus:ring-primary/50 cursor-pointer text-on-surface-variant">
              <option>All Competitors</option>
            </select>
            <select className="bg-surface border-none text-sm text-on-surface rounded-lg py-2.5 pl-3 pr-8 appearance-none focus:ring-1 focus:ring-primary/50 cursor-pointer text-on-surface-variant">
              <option>Page Type</option>
            </select>
          </div>
        </div>

        <div className="glass-panel rounded-xl overflow-hidden border border-outline-variant/5">
          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead className="bg-surface-container-high/50 border-b border-outline-variant/10">
                <tr>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Entity</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Target URL</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Classification</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Sweep Rate</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Status</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                {endpoints.map((ep) => (
                  <tr key={ep.id} className="group hover:bg-surface-container-high/20 transition-colors duration-200">
                    <td className="px-6 py-4 text-sm font-bold text-on-surface">{ep.entity}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-[13px] font-mono text-primary group-hover:underline cursor-pointer">
                        <Link2 size={14} className="opacity-50" /> {ep.url}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-surface-container-high text-on-surface-variant border border-outline-variant/10">
                        {ep.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                        <RefreshCw size={12} /> {ep.frequency}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full \${
                          ep.status === 'active' ? 'bg-tertiary shadow-[0_0_8px_#61f3a4]' :
                          ep.status === 'paused' ? 'bg-on-surface-variant' : 'bg-signal-high shadow-[0_0_8px_#FF5C5C]'
                        }`} />
                        <span className={`text-xs font-bold uppercase tracking-wider \${
                          ep.status === 'active' ? 'text-tertiary' :
                          ep.status === 'paused' ? 'text-on-surface-variant' : 'text-signal-high'
                        }`}>
                          {ep.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-on-surface-variant hover:text-primary transition-colors"><Edit3 size={16} /></button>
                        <button className="p-2 text-on-surface-variant hover:text-error transition-colors"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Watchlist;
