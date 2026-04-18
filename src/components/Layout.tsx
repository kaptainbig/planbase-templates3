import type { ReactNode } from 'react';
import SideNavBar from './SideNavBar';
import TopAppBar from './TopAppBar';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-background overflow-hidden blueprint-grid">
      <SideNavBar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <TopAppBar title={title} />
        <main className="flex-1 overflow-y-auto relative z-10 scrollbar-hide">
          <div className="max-w-7xl mx-auto p-4 md:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
