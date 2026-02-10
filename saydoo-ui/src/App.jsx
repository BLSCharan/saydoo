import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/HomeSaaS";
import RoleSelection from "./components/RoleSelection";
import InfluencerLogin from "./components/InfluencerLogin";
import InvestorLogin from "./components/InvestorLogin";
import FounderLogin from "./components/FounderLogin";
import BusinessLogin from "./components/BusinessLogin";
import InfluencerOnboarding from "./pages/onboarding/InfluencerOnboarding";
import InvestorOnboarding from "./pages/onboarding/InvestorOnboarding";
import FounderOnboarding from "./pages/onboarding/FounderOnboarding";
import InfluencerDashboard from "./pages/dashboard/InfluencerDashboard";
import InvestorDashboard from "./pages/dashboard/InvestorDashboard";
import FounderDashboard from "./pages/dashboard/FounderDashboard";
import MyLinks from "./pages/dashboard/MyLinks";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roles" element={<RoleSelection />} />
        <Route path="/login/influencer" element={<InfluencerLogin />} />
        <Route path="/login/creator" element={<InfluencerLogin />} />
        <Route path="/login/investor" element={<InvestorLogin />} />
        <Route path="/login/founder" element={<FounderLogin />} />
        <Route path="/login/business" element={<BusinessLogin />} />
        <Route path="/onboarding/influencer" element={<InfluencerOnboarding />} />
        <Route path="/onboarding/investor" element={<InvestorOnboarding />} />
        <Route path="/onboarding/founder" element={<FounderOnboarding />} />
        <Route path="/dashboard" element={<InfluencerDashboard />} />
        <Route path="/my-links" element={<MyLinks />} />
        <Route path="/dashboard/investor" element={<InvestorDashboard />} />
        <Route path="/dashboard/founder" element={<FounderDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
