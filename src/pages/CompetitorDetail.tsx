import {
  ArrowLeft,
  ExternalLink,
  Edit,
  Trash2,
  Bell,
  Link2,
  Clock,
  Activity,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const CompetitorDetail = () => {
  const { id } = useParams();

  const stats = [
    { label: 'Watched URLs', value: '12', icon: Link2 },
    { label: 'Last Alert', value: '2h ago', icon: Clock },
    { label: 'Alerts (7d)', value: '8', icon: Activity, color: 'text-primary' },
  ];

  const recentActivity = [
    { id: 1, title: 'Pricing Page Structural Change', time: '2h ago', priority: 'high', description: 'Significant modifications observed on openai.com/pricing. Enterprise Plus tier detected in hidden DOM elements.' },
    { id: 2, title: 'Minor copy updates', time: 'May 12', priority: 'low', description: 'Small adjustments to standard tier descriptions and formatting.' },
    { id: 3, title: 'New Blog: Future of GPT-4o', time: 'May 10', priority: 'medium', description: 'Announced expanded multimodal capabilities for the base model.' },
  ];

  return (
    <Layout title={`Competitor: \${id}`}>
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Breadcrumbs & Actions */}
        <div className="flex items-center justify-between">
          <Link to="/competitors" className="flex items-center gap-2 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">
            <ArrowLeft size={16} /> Back to Entities
          </Link>
          <div className="flex items-center gap-3">
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors"><Edit size={18} /></button>
            <button className="p-2 text-on-surface-variant hover:text-error transition-colors"><Trash2 size={18} /></button>
          </div>
        </div>

        {/* Entity Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="w-20 h-20 rounded-2xl bg-surface-container-high border border-outline-variant/10 flex items-center justify-center font-bold text-4xl text-primary shadow-xl">
            {id?.toUpperCase()[0]}
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-bold text-on-surface tracking-tight">{id === 'openai' ? 'OpenAI' : id}</h1>
              <div className="px-2.5 py-1 rounded-full bg-signal-high/10 text-signal-high text-[10px] font-black uppercase tracking-widest border border-signal-high/20 flex items-center gap-2">
                <ShieldAlert size={12} className="animate-pulse" />
                High Threat
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm font-mono text-on-surface-variant">
              <span className="flex items-center gap-1.5"><ExternalLink size={14} /> {id}.com</span>
              <span className="w-1 h-1 rounded-full bg-outline-variant/30" />
              <span>Oct 14, 2023</span>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-panel p-6 rounded-xl border border-outline-variant/5">
              <div className="flex items-start justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{stat.label}</span>
                <stat.icon size={18} className="text-outline" />
              </div>
              <p className={`text-2xl font-bold tracking-tighter text-on-surface \${stat.color || ''}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Content Tabs Header */}
        <div className="border-b border-outline-variant/10">
          <nav className="flex gap-8">
            <button className="pb-4 text-sm font-bold text-primary border-b-2 border-primary uppercase tracking-widest">Overview</button>
            <button className="pb-4 text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors uppercase tracking-widest">Alerts</button>
            <button className="pb-4 text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors uppercase tracking-widest">Watched URLs</button>
          </nav>
        </div>

        {/* Asymmetric Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-8">
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group border-primary/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -mr-32 -mt-32 pointer-events-none" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <span className="text-xs font-black text-signal-high uppercase tracking-widest flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-signal-high shadow-[0_0_8px_#FF5C5C]" />
                  High Priority Signal
                </span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-4 relative z-10 tracking-tight">Pricing Page Structural Change Detected</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8 relative z-10">
                Significant modifications observed on <span className="text-primary font-mono text-sm px-1.5 py-0.5 rounded bg-surface-container-high border border-outline-variant/10">openai.com/pricing</span>.
                A new tier "Enterprise Plus" has been added to the DOM structure, although currently hidden via CSS.
                Initial analysis suggests an imminent shift toward higher-tier seat-based modeling.
              </p>
              <button className="flex items-center gap-2 text-sm font-black text-primary hover:text-primary-container transition-colors uppercase tracking-widest group relative z-10">
                View Full Diff <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              <h4 className="text-sm font-black text-on-surface-variant uppercase tracking-widest flex items-center gap-3">
                Recent Activity Log
                <div className="h-px flex-1 bg-outline-variant/10" />
              </h4>
              <div className="space-y-6 relative pl-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary/50 before:to-transparent">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="relative group">
                    <div className={`absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-background z-10 \${
                      activity.priority === 'high' ? 'bg-signal-high shadow-[0_0_8px_#FF5C5C]' :
                      activity.priority === 'medium' ? 'bg-signal-medium' : 'bg-outline-variant'
                    }`} />
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h5 className="text-md font-bold text-on-surface">{activity.title}</h5>
                        <span className="text-xs font-mono text-on-surface-variant">{activity.time}</span>
                      </div>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="glass-panel p-6 rounded-xl space-y-6 border border-outline-variant/5">
              <h4 className="text-xs font-black text-on-surface-variant uppercase tracking-widest">Entity Meta</h4>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-black uppercase text-on-surface-variant mb-1">Industry Category</p>
                  <span className="px-2.5 py-1 rounded bg-surface-container-high text-xs font-bold text-on-surface border border-outline-variant/10">
                    Artificial Intelligence
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-on-surface-variant mb-1">Monitoring Intensity</p>
                  <p className="text-sm font-bold text-on-surface">Hourly Sweeps (Active)</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-on-surface-variant mb-1">Integrations</p>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant/10 flex items-center justify-center text-on-surface-variant" title="Slack Notifications">
                      <Bell size={14} />
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant/10 flex items-center justify-center text-on-surface-variant" title="Email Daily Digest">
                      <ExternalLink size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CompetitorDetail;
