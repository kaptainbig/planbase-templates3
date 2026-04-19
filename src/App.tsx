import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Overview from './pages/Overview';
import Alerts from './pages/Alerts';
import Competitors from './pages/Competitors';
import CompetitorDetail from './pages/CompetitorDetail';
import Watchlist from './pages/Watchlist';
import Reports from './pages/Reports';
import AddCompetitor from './pages/AddCompetitor';
import SettingsLayout, {
  Profile,
  Team,
  Billing,
  Notifications,
  APIAccess,
  Security
} from './pages/settings/SettingsLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/competitors" element={<Competitors />} />
        <Route path="/competitors/:id" element={<CompetitorDetail />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/add-competitor" element={<AddCompetitor />} />

        <Route path="/settings" element={<SettingsLayout />}>
          <Route index element={<Profile />} />
          <Route path="team" element={<Team />} />
          <Route path="billing" element={<Billing />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="api" element={<APIAccess />} />
          <Route path="security" element={<Security />} />
          <Route path="plan" element={<Billing />} /> {/* Reusing billing for plan upgrade in this demo */}
        </Route>

        <Route path="/integrations" element={<Overview />} />
        <Route path="/support" element={<Overview />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
