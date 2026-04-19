import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Bell,
  FileText,
  Puzzle,
  Settings,
  HelpCircle,
  PlusCircle,
  Activity,
  List,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SideNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/' },
    { icon: Users, label: 'Competitors', path: '/competitors' },
    { icon: List, label: 'Watchlist', path: '/watchlist' },
    { icon: Bell, label: 'Alerts', path: '/alerts' },
    { icon: FileText, label: 'Reports', path: '/reports' },
    { icon: Puzzle, label: 'Integrations', path: '/integrations' },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  const NavContent = () => (
    <>
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
            <Activity size={20} />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tighter text-primary">Mightstill</h1>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium">Intelligence Suite</p>
          </div>
        </div>
        <button className="lg:hidden text-on-surface-variant hover:text-on-surface" onClick={toggleSidebar} aria-label="Close menu">
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 px-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 group ${isActive ? 'bg-primary/10 text-primary border-l-4 border-primary' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}`
            }
            aria-label={item.label}
          >
            <item.icon size={20} className="group-hover:scale-110 transition-transform" />
            <span className="font-medium tracking-tight">{item.label}</span>
          </NavLink>
        ))}

        <div className="pt-4 mt-4 border-t border-outline-variant/10">
          <NavLink
            to="/add-competitor"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 group ${isActive ? 'bg-primary/10 text-primary' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}`
            }
            aria-label="Add Entity"
          >
            <PlusCircle size={20} />
            <span className="font-medium tracking-tight">Add Entity</span>
          </NavLink>
          <NavLink
            to="/settings"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 group mt-1 ${isActive ? 'bg-primary/10 text-primary' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}`
            }
            aria-label="Settings"
          >
            <Settings size={20} />
            <span className="font-medium tracking-tight">Settings</span>
          </NavLink>
        </div>
      </div>

      <div className="p-4 mt-auto">
        <NavLink
          to="/support"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-primary transition-colors text-sm"
          aria-label="Support"
        >
          <HelpCircle size={18} />
          <span>Support</span>
        </NavLink>
        <div className="mt-4 pt-4 border-t border-outline-variant/10 flex items-center gap-3 px-4">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUInLlBVN0Bs6IlZ2jpafJj-6m6X84vMnh8E4gj_9Q5vBW_fuYt0iPDYbbyqsMN9VkTDaVoA9BJNH_4q0Qv6WvofITEKTnkhjwlV9NoYdR_gBQxlwaXCpEDHxT3rFuMBQi5YZYjuaiqhH3FJyhq83qj6HJVnjmijfaH3xbQ47SN62P0Vqh-KoardVA8mqzdjrj9NXsZAJCj7KB-dTp39foz7sGRAvB1ekXOTGclYpGO4-kr_iGTxNYT3mwUUAcebX9ykJe-zd-y9de"
            alt="Profile"
            className="w-8 h-8 rounded-full border border-outline-variant/30"
          />
          <div className="flex flex-col overflow-hidden">
            <span className="text-xs font-semibold text-on-surface leading-none truncate">Alex Mercer</span>
            <span className="text-[10px] text-on-surface-variant mt-1">ID: 8842</span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-[60] p-2 bg-surface-container rounded-lg border border-outline-variant/20 text-primary shadow-lg"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        <Menu size={20} />
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[55]"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Desktop */}
      <aside className="hidden lg:flex w-64 h-screen bg-surface-container-lowest border-r border-outline-variant/10 flex-col z-50 shrink-0">
        <NavContent />
      </aside>

      {/* Sidebar Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed left-0 top-0 w-72 h-screen bg-surface-container-lowest border-r border-outline-variant/10 flex flex-col z-[60]"
          >
            <NavContent />
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideNavBar;
