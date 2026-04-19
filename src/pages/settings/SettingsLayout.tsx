import {
  Camera,
  Mail,
  Trash2,
  ChevronRight,
  ShieldCheck,
  Zap,
  CreditCard,
  Bell,
  Users,
  Key,
  Lock,
  Bolt,
  Info
} from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';
import Layout from '../../components/Layout';

const SettingsLayout = () => {

  const menuItems = [
    { label: 'Profile', path: '/settings', icon: Users },
    { label: 'Team', path: '/settings/team', icon: Users },
    { label: 'Billing', path: '/settings/billing', icon: CreditCard },
    { label: 'Notifications', path: '/settings/notifications', icon: Bell },
    { label: 'API Access', path: '/settings/api', icon: Key },
    { label: 'Security', path: '/settings/security', icon: Lock },
  ];

  return (
    <Layout title="Settings">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Settings Sidebar */}
        <aside className="w-full lg:w-48 shrink-0">
          <div className="space-y-1 sticky top-24">
            <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-4 px-3">Configuration</p>
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/settings'}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-bold transition-all ${isActive ? 'bg-primary/10 text-primary' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'}`
                }
              >
                <item.icon size={16} />
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4 mt-4 border-t border-outline-variant/10">
              <NavLink
                to="/settings/plan"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-bold transition-all ${isActive ? 'bg-tertiary/10 text-tertiary' : 'text-tertiary/60 hover:text-tertiary hover:bg-tertiary/5'}`
                }
              >
                <Bolt size={16} />
                Plan & Upgrade
              </NavLink>
            </div>
          </div>
        </aside>

        {/* Settings Content */}
        <main className="flex-1 max-w-2xl">
          <Outlet />
        </main>
      </div>
    </Layout>
  );
};

export const Profile = () => (
  <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
    <header>
      <h2 className="text-2xl font-bold text-on-surface tracking-tight">Profile Settings</h2>
      <p className="text-on-surface-variant mt-1 text-sm leading-relaxed">Manage your personal information and intelligence identity.</p>
    </header>

    <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -mr-32 -mt-32 pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center gap-8 mb-12 relative z-10">
        <div className="relative group/avatar">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUInLlBVN0Bs6IlZ2jpafJj-6m6X84vMnh8E4gj_9Q5vBW_fuYt0iPDYbbyqsMN9VkTDaVoA9BJNH_4q0Qv6WvofITEKTnkhjwlV9NoYdR_gBQxlwaXCpEDHxT3rFuMBQi5YZYjuaiqhH3FJyhq83qj6HJVnjmijfaH3xbQ47SN62P0Vqh-KoardVA8mqzdjrj9NXsZAJCj7KB-dTp39foz7sGRAvB1ekXOTGclYpGO4-kr_iGTxNYT3mwUUAcebX9ykJe-zd-y9de"
            className="w-24 h-24 rounded-full border-4 border-surface-container-lowest object-cover"
            alt="Avatar"
          />
          <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover/avatar:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
            <Camera className="text-white" size={24} />
          </div>
          <div className="absolute bottom-1 right-1 w-5 h-5 bg-tertiary rounded-full border-4 border-surface-container-high animate-pulse" />
        </div>
        <div className="space-y-2 text-center md:text-left">
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <button className="px-4 py-2 rounded-lg border border-outline-variant/30 text-xs font-black uppercase tracking-widest text-primary hover:bg-primary/5 transition-colors">Change Photo</button>
            <button className="px-4 py-2 text-xs font-black uppercase tracking-widest text-error hover:underline transition-all">Remove</button>
          </div>
          <p className="text-[10px] font-mono text-on-surface-variant">JPG, GIF OR PNG. MAX SIZE OF 800K.</p>
        </div>
      </div>

      <form className="space-y-6 relative z-10">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Full Name</label>
          <input
            type="text"
            defaultValue="Alex Mercer"
            className="w-full bg-surface-container-high/50 border border-outline-variant/10 rounded-xl px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-end">
            <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Email Address</label>
            <button type="button" className="text-[10px] font-black uppercase text-primary hover:underline">Change Email</button>
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50" size={16} />
            <input
              type="email"
              readOnly
              defaultValue="alex.mercer@acmecorp.com"
              className="w-full bg-surface-container-lowest border border-outline-variant/5 rounded-xl pl-10 pr-4 py-3 text-sm text-on-surface-variant font-mono cursor-not-allowed"
            />
          </div>
          <p className="text-[10px] font-mono text-on-surface-variant">Verified primary email for critical alerts.</p>
        </div>
        <div className="pt-6 border-t border-outline-variant/10 flex justify-end">
          <button className="bg-primary text-on-primary px-8 py-3 rounded-xl font-black uppercase tracking-widest text-sm hover:shadow-[0_0_20px_rgba(76,241,220,0.4)] transition-all">Save Changes</button>
        </div>
      </form>
    </div>
  </div>
);

export const Team = () => (
  <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
    <header>
      <h2 className="text-2xl font-bold text-on-surface tracking-tight">Team Management</h2>
      <p className="text-on-surface-variant mt-1 text-sm leading-relaxed">Collaborate with analysts across your workspace.</p>
    </header>

    <div className="glass-panel p-6 rounded-2xl space-y-6">
      <h3 className="text-sm font-bold text-on-surface uppercase tracking-widest">Invite Member</h3>
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="colleague@company.com"
          className="flex-1 bg-surface-container-low border border-outline-variant/10 rounded-xl px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
        />
        <select className="w-full sm:w-32 bg-surface-container-low border border-outline-variant/10 rounded-xl px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none">
          <option>Member</option>
          <option>Admin</option>
        </select>
        <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-black uppercase tracking-widest text-sm hover:shadow-[0_0_20px_rgba(76,241,220,0.4)] transition-all">Send Invite</button>
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="text-sm font-bold text-on-surface uppercase tracking-widest">Active Analysts</h3>
      <div className="glass-panel rounded-2xl overflow-hidden">
        {[
          { name: 'Alex Mercer', role: 'Admin', joined: 'Oct 12, 2023', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUInLlBVN0Bs6IlZ2jpafJj-6m6X84vMnh8E4gj_9Q5vBW_fuYt0iPDYbbyqsMN9VkTDaVoA9BJNH_4q0Qv6WvofITEKTnkhjwlV9NoYdR_gBQxlwaXCpEDHxT3rFuMBQi5YZYjuaiqhH3FJyhq83qj6HJVnjmijfaH3xbQ47SN62P0Vqh-KoardVA8mqzdjrj9NXsZAJCj7KB-dTp39foz7sGRAvB1ekXOTGclYpGO4-kr_iGTxNYT3mwUUAcebX9ykJe-zd-y9de' },
          { name: 'Sarah Chen', role: 'Analyst', joined: 'Nov 04, 2023', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDddE4v941xgwxjToDC4m9wU5U6-ukbz2Xe40gaeFiBJGmEqgEzqsza5Qg0MnEk5wLNB0qttSc7P4YH6Ef4ZSPYZcpCjejw4DCSjH_uLWTYCJC1KGamtdaM38T6tHBjwzSUnQmTwc9VRSe6rO9YyGBkeDO6b3T4lHc4iTUvRN9SVhKAtL3KSUiax6qNGAd5S--LuNro3G9Sm2HDgPUxNepqpwX_uzQoMGMyFZE9zJEpJm1Kk2_5-SI3HXFhVJ17VkiLHJw43GJ4OZA8' }
        ].map((member) => (
          <div key={member.name} className="flex items-center justify-between p-4 hover:bg-surface-container-high transition-colors group border-b border-outline-variant/5 last:border-0">
            <div className="flex items-center gap-4">
              <img src={member.avatar} className="w-10 h-10 rounded-full border border-outline-variant/10" alt="" />
              <div>
                <p className="text-sm font-bold text-on-surface">{member.name}</p>
                <p className="text-[10px] font-mono text-on-surface-variant uppercase">{member.joined}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant bg-surface-container-high px-2 py-0.5 rounded border border-outline-variant/5">{member.role}</span>
              <button className="p-2 text-on-surface-variant hover:text-error transition-colors opacity-0 group-hover:opacity-100"><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const Notifications = () => (
  <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
    <header>
      <h2 className="text-2xl font-bold text-on-surface tracking-tight">Notification Settings</h2>
      <p className="text-on-surface-variant mt-1 text-sm leading-relaxed">Configure how and when the Obsidian Lens alerts you to market movements.</p>
    </header>

    <div className="space-y-6">
      <h3 className="text-xs font-black uppercase tracking-widest text-primary">Delivery Channels</h3>
      <div className="space-y-4">
        {[
          { label: 'Slack Integration', desc: 'Deliver alerts to connected workspace channels.', icon: Bolt, meta: 'Connected: acme-corp.slack.com', active: true },
          { label: 'Email Notifications', desc: 'Receive alerts via secure email dispatch.', icon: Mail, meta: 'Active: a.mercer@acmecorp.com', active: true },
        ].map(channel => (
          <div key={channel.label} className="glass-panel p-5 rounded-2xl flex items-start justify-between group hover:border-primary/20 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-surface-container-high border border-outline-variant/10 flex items-center justify-center text-primary">
                <channel.icon size={20} />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold text-on-surface">{channel.label}</p>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">{channel.desc}</p>
                <p className="text-[10px] font-mono text-primary/60">{channel.meta}</p>
              </div>
            </div>
            <div className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked={channel.active} className="sr-only peer" />
              <div className="w-11 h-6 bg-surface-container-highest rounded-full peer-checked:bg-primary transition-all after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const APIAccess = () => (
  <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
    <header>
      <h2 className="text-2xl font-bold text-on-surface tracking-tight">API Access</h2>
      <p className="text-on-surface-variant mt-1 text-sm leading-relaxed">Connect external tools to your intelligence feed.</p>
    </header>

    <div className="bg-surface-container-low/30 border border-primary/20 rounded-2xl p-6 flex items-start gap-4">
      <Info className="text-primary mt-0.5" size={20} />
      <p className="text-sm text-on-surface-variant leading-relaxed">
        API access is restricted to Pro and Enterprise tiers. Keys generated here follow strict read-only protocols for surveillance data.
      </p>
    </div>

    <div className="space-y-6">
      <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
        <h3 className="text-sm font-bold text-on-surface uppercase tracking-widest">Production Keys</h3>
        <button className="text-xs font-black uppercase text-primary hover:underline">Generate New Key</button>
      </div>
      <div className="glass-panel p-6 rounded-2xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1 space-y-2">
            <p className="text-[10px] font-black uppercase text-on-surface-variant">Default Production Key</p>
            <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-xl px-4 py-3 font-mono text-sm text-on-surface-variant flex items-center justify-between">
              <span>sk_live_••••••••••••••••4242</span>
              <button className="text-primary hover:text-primary-container transition-colors uppercase text-[10px] font-black">Copy</button>
            </div>
            <p className="text-[10px] font-mono text-on-surface-variant/50">CREATED 2 DAYS AGO • LAST USED: NEVER</p>
          </div>
          <button className="px-5 py-2.5 rounded-lg border border-outline-variant/30 text-xs font-black uppercase text-on-surface-variant hover:text-primary transition-all">Regenerate</button>
        </div>
      </div>
    </div>
  </div>
);

export const Security = () => (
  <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
    <header>
      <h2 className="text-2xl font-bold text-on-surface tracking-tight">Security</h2>
      <p className="text-on-surface-variant mt-1 text-sm leading-relaxed">Secure your intelligence assets and workspace access.</p>
    </header>

    <div className="space-y-8">
      <div className="glass-panel p-6 rounded-2xl flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-surface-container-high text-primary"><ShieldCheck size={24} /></div>
          <div>
            <h3 className="text-md font-bold text-on-surface">Two-Factor Authentication</h3>
            <p className="text-xs text-on-surface-variant mt-1">Add an extra layer of security to your account.</p>
          </div>
        </div>
        <button className="px-6 py-2.5 bg-primary text-on-primary rounded-xl font-black uppercase tracking-widest text-[10px] hover:shadow-[0_0_15px_rgba(76,241,220,0.4)] transition-all">Enable</button>
      </div>

      <div className="glass-panel p-6 rounded-2xl flex items-center justify-between opacity-60">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-surface-container-high text-on-surface-variant"><Zap size={24} /></div>
          <div>
            <h3 className="text-md font-bold text-on-surface">Single Sign-On (SSO)</h3>
            <p className="text-xs text-on-surface-variant mt-1">Enterprise-grade authentication via Okta or Azure AD.</p>
          </div>
        </div>
        <span className="text-[10px] font-black uppercase text-on-surface-variant border border-outline-variant/20 px-2 py-0.5 rounded">Pro Feature</span>
      </div>
    </div>
  </div>
);

export const Billing = () => (
  <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
    <header>
      <h2 className="text-2xl font-bold text-on-surface tracking-tight">Billing & Usage</h2>
      <p className="text-on-surface-variant mt-1 text-sm leading-relaxed">Manage your subscription, invoices, and entity quotas.</p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="glass-panel p-6 rounded-2xl space-y-6 bg-primary/5 border-primary/20">
        <div className="flex justify-between items-start">
          <h3 className="text-[10px] font-black uppercase text-primary tracking-widest">Current Plan</h3>
          <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-bold border border-primary/30 uppercase tracking-widest">Active</span>
        </div>
        <div>
          <p className="text-2xl font-bold text-on-surface">Growth Plan</p>
          <p className="text-sm font-mono text-on-surface-variant">$149 / MONTHLY</p>
        </div>
        <button className="w-full py-3 bg-primary text-on-primary rounded-xl font-black uppercase tracking-widest text-[10px] hover:shadow-[0_0_15px_rgba(76,241,220,0.4)] transition-all">Manage Subscription</button>
      </div>

      <div className="glass-panel p-6 rounded-2xl space-y-6">
        <h3 className="text-[10px] font-black uppercase text-on-surface-variant tracking-widest">Payment Method</h3>
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-lg bg-surface-container-high text-on-surface-variant"><CreditCard size={20} /></div>
          <div>
            <p className="text-sm font-bold text-on-surface">Visa ending in 4242</p>
            <p className="text-[10px] font-mono text-on-surface-variant">EXPIRES 12/28</p>
          </div>
        </div>
        <button className="text-[10px] font-black uppercase text-primary hover:underline transition-all">Update Method</button>
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Recent Invoices</h3>
      <div className="glass-panel rounded-2xl overflow-hidden divide-y divide-outline-variant/10">
        {[
          { date: 'May 12, 2024', amount: '$149.00', status: 'Paid' },
          { date: 'Apr 12, 2024', amount: '$149.00', status: 'Paid' }
        ].map(inv => (
          <div key={inv.date} className="p-4 flex items-center justify-between hover:bg-surface-container-high/30 transition-colors cursor-pointer group">
            <div className="flex items-center gap-6">
              <span className="text-sm font-bold text-on-surface">{inv.date}</span>
              <span className="text-xs font-mono text-on-surface-variant">{inv.amount}</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-black uppercase text-tertiary">{inv.status}</span>
              <ChevronRight className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SettingsLayout;
