import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Hero from "./components/Hero";
import RoleSelection from "./components/RoleSelection";
import InfluencerLogin from "./components/InfluencerLogin";
import InfluencerOnboarding from "./pages/onboarding/InfluencerOnboarding";
import InfluencerDashboard from "./pages/dashboard/InfluencerDashboard";
export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/roles" element={<RoleSelection />} />
          <Route path="/login/influencer" element={<InfluencerLogin />} />
          <Route path="/onboarding/influencer" element={<InfluencerOnboarding />} />
          <Route path="/dashboard" element={<InfluencerDashboard />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
