import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

import Workspace from './pages/Workspace';
import ZoningAnalysis from './pages/ZoningAnalysis';
import InfrastructureAnalysis from './pages/InfrastructureAnalysis';
import EnvironmentalAnalysis from './pages/EnvironmentalAnalysis';
import UtilitiesAnalytics from './pages/UtilitiesAnalytics';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import ProjectRegistry from './pages/ProjectRegistry';
import Support from './pages/Support';
import ExportReport from './pages/ExportReport';
import Archive from './pages/Archive';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/workspace" replace />} />
          <Route path="workspace" element={<Workspace />} />
          <Route path="analysis/zoning" element={<ZoningAnalysis />} />
          <Route path="analysis/infrastructure" element={<InfrastructureAnalysis />} />
          <Route path="analysis/environmental" element={<EnvironmentalAnalysis />} />
          <Route path="analysis/utilities" element={<UtilitiesAnalytics />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="projects" element={<ProjectRegistry />} />
          <Route path="support" element={<Support />} />
          <Route path="export" element={<ExportReport />} />
          <Route path="archive" element={<Archive />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
