import { Search, HelpCircle, Bell, User } from 'lucide-react';

const TopAppBar = ({ title }: { title: string }) => {
  return (
    <header className="h-16 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/10 flex items-center justify-between pl-16 pr-4 lg:px-8 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <h2 className="text-lg md:text-xl font-bold tracking-tight text-primary truncate max-w-[150px] md:max-w-none uppercase tracking-widest">{title}</h2>
      </div>

      <div className="flex items-center gap-2 md:gap-6">
        <div className="hidden sm:flex items-center bg-surface-container-low rounded-lg px-3 py-1.5 border border-outline-variant/20 focus-within:border-primary/50 transition-all">
          <Search size={16} className="text-on-surface-variant mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none text-xs text-on-surface w-24 md:w-48 placeholder:text-on-surface-variant/50"
            aria-label="Search intelligence"
          />
        </div>

        <div className="flex items-center gap-1 md:gap-4 text-on-surface-variant">
          <button className="p-2 hover:text-primary transition-colors hidden md:block" aria-label="Help">
            <HelpCircle size={18} />
          </button>
          <button className="p-2 relative hover:text-primary transition-colors" aria-label="Notifications">
            <Bell size={18} />
            <span className="absolute top-2 right-2 w-1 h-1 bg-signal-high rounded-full border border-surface"></span>
          </button>
          <div className="w-px h-5 bg-outline-variant/20 mx-1"></div>
          <button className="p-1 md:p-2 hover:text-primary transition-colors" aria-label="User Profile">
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopAppBar;
