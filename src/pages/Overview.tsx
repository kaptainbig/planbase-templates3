import {
  TrendingUp,
  AlertCircle,
  Globe,
  Activity,
  ArrowUpRight,
  ChevronRight,
  Clock,
  PlusCircle
} from 'lucide-react';
import Layout from '../components/Layout';

const StatCard = ({ label, value, trend, icon: Icon, colorClass = "text-primary" }: any) => (
  <div className="glass-panel p-6 rounded-xl group hover:border-primary/30 transition-all duration-300">
    <div className="flex items-start justify-between mb-4">
      <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">{label}</span>
      <div className={`p-2 rounded-lg bg-surface-container-high ${colorClass}`}>
        <Icon size={18} />
      </div>
    </div>
    <div className="flex items-end gap-3">
      <span className="text-4xl font-bold tracking-tighter text-on-surface">{value}</span>
      {trend && (
        <div className="flex items-center gap-1 mb-1 text-tertiary">
          <TrendingUp size={14} />
          <span className="text-xs font-medium">{trend}</span>
        </div>
      )}
    </div>
  </div>
);

const Overview = () => {
  const recentAlerts = [
    { id: 1, entity: 'OpenAI', type: 'Pricing', message: 'Detected new tiered pricing structure for API access.', time: '10m ago', severity: 'high' },
    { id: 2, entity: 'Anthropic', type: 'Features', message: 'Published post detailing updated context window expansion.', time: '2h ago', severity: 'medium' },
    { id: 3, entity: 'Mistral', type: 'Changelog', message: 'Minor updates to developer documentation regarding SDK.', time: 'Yesterday', severity: 'low' },
  ];

  return (
    <Layout title="Overview">
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-on-surface tracking-tight">Intelligence Dashboard</h2>
            <p className="text-on-surface-variant mt-1">Real-time competitive telemetry and signal analysis.</p>
          </div>
          <button className="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-bold text-sm hover:shadow-[0_0_15px_rgba(76,241,220,0.4)] transition-all flex items-center gap-2 w-fit">
            <PlusCircle size={18} />
            Create Briefing
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            label="Alerts this week"
            value="42"
            trend="+12% vs last week"
            icon={AlertCircle}
          />
          <StatCard
            label="Entities tracked"
            value="14"
            icon={Globe}
          />
          <StatCard
            label="High-signal signals"
            value="8"
            icon={Activity}
            colorClass="text-signal-high"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Intelligence Feed */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-on-surface flex items-center gap-2">
                <Clock className="text-primary" size={20} />
                Recent Intelligence
              </h3>
              <button className="text-sm text-primary hover:text-primary-container transition-colors font-medium">View all</button>
            </div>

            <div className="glass-panel rounded-xl overflow-hidden divide-y divide-outline-variant/10">
              {recentAlerts.map((alert) => (
                <div key={alert.id} className="p-5 hover:bg-surface-container-high/30 transition-colors group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 \${
                      alert.severity === 'high' ? 'bg-signal-high shadow-[0_0_8px_#FF5C5C]' :
                      alert.severity === 'medium' ? 'bg-signal-medium shadow-[0_0_8px_#F5A623]' :
                      'bg-signal-low'
                    }`} />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-on-surface">{alert.entity}</span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-high text-[10px] font-mono text-on-surface-variant uppercase tracking-wider border border-outline-variant/10">
                          {alert.type}
                        </span>
                        <span className="text-xs text-on-surface-variant font-mono ml-auto">{alert.time}</span>
                      </div>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{alert.message}</p>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore Insight <ArrowUpRight size={12} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions / Entities */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-on-surface">Monitored Entities</h3>
            <div className="glass-panel rounded-xl p-2 space-y-1">
              {['OpenAI', 'Anthropic', 'Mistral', 'Cohere'].map((entity) => (
                <div key={entity} className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center font-bold text-xs text-primary">
                      {entity[0]}
                    </div>
                    <span className="text-sm font-medium text-on-surface">{entity}</span>
                  </div>
                  <ChevronRight size={16} className="text-on-surface-variant group-hover:text-primary transition-colors" />
                </div>
              ))}
              <button className="w-full mt-2 p-3 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors text-center uppercase tracking-widest">
                View Entity Matrix
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Overview;
