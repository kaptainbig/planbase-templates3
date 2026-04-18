import {
  Download,
  Calendar,
  TrendingUp,
  AlertCircle,
  BarChart3,
  PieChart,
  Target
} from 'lucide-react';
import Layout from '../components/Layout';

const Reports = () => {
  return (
    <Layout title="Signal Reports">
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-on-surface tracking-tight">Intelligence Reporting</h2>
            <p className="text-on-surface-variant mt-1">Aggregated signal data and trend analysis.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-low border border-outline-variant/10 text-sm text-on-surface-variant hover:bg-surface-container-high transition-colors">
              <Calendar size={18} />
              <span>Last 30 Days</span>
            </button>
            <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold text-sm hover:shadow-[0_0_15px_rgba(76,241,220,0.4)] transition-all flex items-center gap-2">
              <Download size={18} />
              Export PDF
            </button>
          </div>
        </div>

        {/* Bento Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="glass-panel p-6 rounded-2xl md:col-span-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-2">Total Signals Logged</p>
            <div className="flex items-end gap-6 mt-4">
              <h3 className="text-5xl font-light tracking-tighter text-on-surface">1,284</h3>
              <div className="flex items-center gap-1.5 text-tertiary mb-1 font-bold">
                <TrendingUp size={16} />
                <span className="text-sm">+12.4%</span>
              </div>
            </div>
            <div className="mt-8 flex gap-1 h-2 rounded-full overflow-hidden bg-surface-container-high">
              <div className="h-full bg-signal-high w-[15%]" />
              <div className="h-full bg-signal-medium w-[35%]" />
              <div className="h-full bg-signal-low w-[50%]" />
            </div>
            <div className="mt-4 flex gap-6 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
              <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-signal-high" /> High</div>
              <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-signal-medium" /> Medium</div>
              <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-signal-low" /> Low</div>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between">
            <div className="p-2 rounded-lg bg-surface-container-high text-primary w-fit"><Target size={20} /></div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1">Top Vector</p>
              <h4 className="text-lg font-bold text-on-surface">Pricing Pages</h4>
              <p className="text-xs text-on-surface-variant mt-1">342 Signals</p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between border-signal-high/20 bg-signal-high/5">
            <div className="p-2 rounded-lg bg-signal-high/10 text-signal-high w-fit"><AlertCircle size={20} /></div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1">Critical Anomalies</p>
              <h4 className="text-lg font-bold text-signal-high">8 Active</h4>
              <p className="text-xs text-on-surface-variant mt-1 font-mono">NEEDS REVIEW</p>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-panel p-8 rounded-2xl space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-on-surface flex items-center gap-3">
                <BarChart3 className="text-primary" size={20} /> Signal Distribution
              </h3>
            </div>
            {/* Visual Chart Placeholder */}
            <div className="h-64 flex items-end justify-between gap-2 border-b border-outline-variant/10 pb-2 px-4 relative">
              {[60, 80, 45, 95, 55, 75, 90].map((h) => (
                <div key={h} className="flex-1 flex flex-col justify-end group cursor-pointer">
                  <div className="w-full bg-primary/20 group-hover:bg-primary transition-all rounded-t-sm" style={{ height: `\${h}%` }} />
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[10px] font-black text-on-surface-variant uppercase tracking-widest px-4">
              <span>May 01</span>
              <span>May 07</span>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl space-y-8">
             <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-on-surface flex items-center gap-3">
                <PieChart className="text-primary" size={20} /> Entity Breakdown
              </h3>
            </div>
            <div className="space-y-6">
              {[
                { name: 'OpenAI', share: 42, color: 'bg-primary' },
                { name: 'Anthropic', share: 28, color: 'bg-primary/60' },
                { name: 'Mistral AI', share: 18, color: 'bg-primary/30' },
                { name: 'Others', share: 12, color: 'bg-surface-container-high' },
              ].map(item => (
                <div key={item.name} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                    <span className="text-on-surface-variant">{item.name}</span>
                    <span className="text-on-surface">{item.share}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div className={`h-full \${item.color} rounded-full`} style={{ width: `\${item.share}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;
