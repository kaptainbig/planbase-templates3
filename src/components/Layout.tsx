import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopNavBar, SideNavBar } from './Navigation';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background font-body">
      <TopNavBar />
      <SideNavBar />
      <main className="ml-64 mt-16 h-[calc(100vh-64px)] relative blueprint-grid overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
