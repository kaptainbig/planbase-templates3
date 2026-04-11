import {
  Layers,
  Compass,
  Leaf,
  Zap,
  HelpCircle,
  History,
  Search,
  Bell,
  Settings as SettingsIcon,
  FileUp,
  Gavel,
} from 'lucide-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export const TopNavBar: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#131313]/60 backdrop-blur-xl border-b-[0.5px] border-[#00FFFF]/20 shadow-2xl shadow-black/40 flex items-center justify-between px-6 h-16">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-xl font-bold tracking-tighter text-white">SiteSnap</Link>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-high rounded hairline-border">
          <Search className="text-zinc-500 w-4 h-4" />
          <input
            className="bg-transparent border-none focus:ring-0 text-sm font-label text-white w-48 p-0"
            type="text"
            placeholder="Search..."
            defaultValue="450 Fifth Ave, NYC"
          />
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/projects" className="font-headline tracking-wider uppercase text-xs text-zinc-500 hover:text-[#00FFFF] transition-colors">Projects</Link>
          <Link to="/workspace" className="font-headline tracking-wider uppercase text-xs text-zinc-500 hover:text-[#00FFFF] transition-colors">Blueprint</Link>
          <Link to="/analysis/zoning" className="font-headline tracking-wider uppercase text-xs text-white border-b border-[#00FFFF] pb-1">Analysis</Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4 text-zinc-500 mr-4">
          <Link to="/notifications" className="hover:bg-[#2a2a2a] p-1.5 rounded transition-all cursor-pointer">
            <Bell className="w-5 h-5" />
          </Link>
          <Link to="/settings" className="hover:bg-[#2a2a2a] p-1.5 rounded transition-all cursor-pointer">
            <SettingsIcon className="w-5 h-5" />
          </Link>
        </div>
        <Link to="/export" className="bg-surface-tint text-on-primary px-4 py-2 rounded text-xs font-bold tracking-wider uppercase hover:opacity-90 transition-all flex items-center gap-2">
          <FileUp className="w-4 h-4" />
          Export Report
        </Link>
        <Link to="/profile">
          <img
            alt="Architect Profile"
            className="w-8 h-8 rounded-full border border-[#00FFFF]/30"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7jz_g6SG8JTQV8xbQn9Dgb9OmKj7cUQV3Ayfrw7fgW8YpuwV2pVyzs-6-jh7te04_ravHnkuIo_--pUsZNm2aZ1uJFF9aucTyDK31WMZac2K_y782PRyKvZa32i4czqVqhfGDvvsDS6P2jbUSKq_bzxwB2NqyRblKhPKXSgxDi3eR_yk_YDwutZ8C9oPUK6zzBFDPC1HRIIzdQdBE1jhrOIUMiT8WfQar_sgv5_qB3Nh16cdHWluZUrpB4H07kgDE02tc2DhSWOUx"
          />
        </Link>
      </div>
    </header>
  );
};

export const SideNavBar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Terrain', icon: Layers, path: '/workspace' },
    { name: 'Zoning', icon: Gavel, path: '/analysis/zoning' },
    { name: 'Infrastructure', icon: Compass, path: '/analysis/infrastructure' },
    { name: 'Environmental', icon: Leaf, path: '/analysis/environmental' },
    { name: 'Utilities', icon: Zap, path: '/analysis/utilities' },
  ];

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-[#1c1b1b] border-r-[0.5px] border-[#00FFFF]/10 flex flex-col py-8 px-4 z-40">
      <div className="mb-8 px-2">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-surface-container-high rounded flex items-center justify-center border border-[#00FFFF]/20">
            <Layers className="text-[#00FFFF] w-5 h-5" />
          </div>
          <div>
            <h3 className="text-white font-black text-lg leading-none">Project Alpha</h3>
            <p className="text-zinc-500 text-[10px] tracking-widest uppercase mt-1">Site ID: 4882-QX</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-3 py-3 font-body font-medium text-sm transition-all duration-200",
              location.pathname === item.path
                ? "text-[#00FFFF] bg-[#2a2a2a] border-l-2 border-[#00FFFF]"
                : "text-zinc-400 hover:bg-[#2a2a2a]/50 hover:translate-x-1"
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </Link>
        ))}
      </nav>
      <button className="mt-4 mx-2 border-[0.5px] border-[#00FFFF]/30 text-[#00FFFF] py-2 rounded text-xs font-bold uppercase tracking-widest hover:bg-[#00FFFF]/10 transition-all mb-8">
        Add Layer
      </button>
      <div className="pt-6 border-t border-zinc-800 flex flex-col gap-1">
        <Link to="/support" className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-white text-sm transition-colors">
          <HelpCircle className="w-4 h-4" />
          Support
        </Link>
        <Link to="/archive" className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-white text-sm transition-colors">
          <History className="w-4 h-4" />
          Archive
        </Link>
      </div>
    </aside>
  );
};
