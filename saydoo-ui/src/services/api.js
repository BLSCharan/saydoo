// API Service for Backend Connection
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Dummy data fallback when backend is not available
const DUMMY_USERS = {
  investor: { id: "inv_001", role: "investor", name: "John Investor", email: "investor@example.com" },
  founder: { id: "fnd_001", role: "founder", name: "Sarah Founder", email: "founder@example.com" },
  influencer: { id: "inf_001", role: "influencer", name: "Alex Influencer", email: "influencer@example.com" },
  business: { id: "bus_001", role: "business", name: "Tech Business", email: "business@example.com" },
};

const DUMMY_TOKEN = "dummy_token_" + Date.now();
let backendAvailable = null;

// Check if backend is available
const checkBackendAvailability = async () => {
  if (backendAvailable !== null) return backendAvailable;
  
  try {
    const response = await fetch(`${API_BASE_URL.replace("/api", "/health")}`, {
      method: "GET",
      timeout: 3000,
    });
    backendAvailable = response.ok;
  } catch (error) {
    backendAvailable = false;
  }
  return backendAvailable;
};

// Get JWT token from session/memory
export const getToken = () => {
  return sessionStorage.getItem("authToken");
};

// Set JWT token
export const setToken = (token) => {
  sessionStorage.setItem("authToken", token);
};

// Clear JWT token on logout
export const clearToken = () => {
  sessionStorage.removeItem("authToken");
};

// Get user role from token/session
export const getUserRole = () => {
  return sessionStorage.getItem("userRole");
};

// Set user role
export const setUserRole = (role) => {
  sessionStorage.setItem("userRole", role);
};

// API request helper with JWT and fallback
const apiRequest = async (endpoint, method = "GET", data = null) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const token = getToken();
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const config = {
    method,
    headers,
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

    if (!response.ok) {
      const error = await response.json();
      throw error;
    }

    return await response.json();
  } catch (error) {
    console.error(`API Error [${method} ${endpoint}]:`, error);
    throw error;
  }
};

// ============ AUTH ENDPOINTS ============

export const authAPI = {
  // Founder Login/Signup
  founderLogin: async (email, password) => {
    const isBackendUp = await checkBackendAvailability();
    if (!isBackendUp) {
      return { token: DUMMY_TOKEN, user: DUMMY_USERS.founder };
    }
    return apiRequest("/auth/founder/login", "POST", { email, password });
  },

  founderSignup: async (email, password) => {
    const isBackendUp = await checkBackendAvailability();
    if (!isBackendUp) {
      setUserRole("founder");
      return { token: DUMMY_TOKEN, user: { ...DUMMY_USERS.founder, email } };
    }
    return apiRequest("/auth/founder/signup", "POST", { email, password });
  },

  // Investor Login/Signup
  investorLogin: async (email, password) => {
    const isBackendUp = await checkBackendAvailability();
    if (!isBackendUp) {
      return { token: DUMMY_TOKEN, user: DUMMY_USERS.investor };
    }
    return apiRequest("/auth/investor/login", "POST", { email, password });
  },

  investorSignup: async (email, password) => {
    const isBackendUp = await checkBackendAvailability();
    if (!isBackendUp) {
      setUserRole("investor");
      return { token: DUMMY_TOKEN, user: { ...DUMMY_USERS.investor, email } };
    }
    return apiRequest("/auth/investor/signup", "POST", { email, password });
  },

  // Influencer Login/Signup
  influencerLogin: async (email, password) => {
    const isBackendUp = await checkBackendAvailability();
    if (!isBackendUp) {
      return { token: DUMMY_TOKEN, user: DUMMY_USERS.influencer };
    }
    return apiRequest("/auth/influencer/login", "POST", { email, password });
  },

  influencerSignup: async (email, password) => {
    const isBackendUp = await checkBackendAvailability();
    if (!isBackendUp) {
      setUserRole("influencer");
      return { token: DUMMY_TOKEN, user: { ...DUMMY_USERS.influencer, email } };
    }
    return apiRequest("/auth/influencer/signup", "POST", { email, password });
  },

  // Business Login/Signup
  businessLogin: async (email, password) => {
    const isBackendUp = await checkBackendAvailability();
    if (!isBackendUp) {
      return { token: DUMMY_TOKEN, user: DUMMY_USERS.business };
    }
    return apiRequest("/auth/business/login", "POST", { email, password });
  },

  businessSignup: async (email, password) => {
    const isBackendUp = await checkBackendAvailability();
    if (!isBackendUp) {
      setUserRole("business");
      return { token: DUMMY_TOKEN, user: { ...DUMMY_USERS.business, email } };
    }
    return apiRequest("/auth/business/signup", "POST", { email, password });
  },

  // Logout
  logout: () => {
    clearToken();
    return Promise.resolve();
  },

  // Verify token
  verifyToken: async () => {
    const isBackendUp = await checkBackendAvailability();
    if (!isBackendUp) {
      const role = getUserRole();
      return { verified: true, user: DUMMY_USERS[role] || DUMMY_USERS.investor };
    }
    return apiRequest("/auth/verify", "GET");
  },
};

// ============ ONBOARDING ENDPOINTS ============

export const onboardingAPI = {
  // Founder Onboarding
  submitFounderOnboarding: async (data) => {
    const isBackendUp = await checkBackendAvailability();
    if (!isBackendUp) {
      return { success: true, message: "Onboarding saved locally (demo mode)", data };
    }
    return apiRequest("/onboarding/founder", "POST", data);
  },

  getFounderOnboarding: async () => {
    const isBackendUp = await checkBackendAvailability();
    if (!isBackendUp) {
      return { success: true, data: {} };
    }
    return apiRequest("/onboarding/founder", "GET");
  },

  updateFounderOnboarding: async (data) => {
    const isBackendUp = await checkBackendAvailability();
    if (!isBackendUp) {
      return { success: true, message: "Onboarding updated locally (demo mode)", data };
    }
    return apiRequest("/onboarding/founder", "PUT", data);
  },

  // Investor Onboarding
  submitInvestorOnboarding: async (data) => {
    const isBackendUp = await checkBackendAvailability();
    if (!isBackendUp) {
      return { success: true, message: "Onboarding saved locally (demo mode)", data };
    }
    return apiRequest("/onboarding/investor", "POST", data);
  },

  getInvestorOnboarding: async () => {
    const isBackendUp = await checkBackendAvailability();
    if (!isBackendUp) {
      return { success: true, data: {} };
    }
    return apiRequest("/onboarding/investor", "GET");
  },

  updateInvestorOnboarding: async (data) => {
    const isBackendUp = await checkBackendAvailability();
    if (!isBackendUp) {
      return { success: true, message: "Onboarding updated locally (demo mode)", data };
    }
    return apiRequest("/onboarding/investor", "PUT", data);
  },

  // Influencer Onboarding
  submitInfluencerOnboarding: async (data) => {
    const isBackendUp = await checkBackendAvailability();
    if (!isBackendUp) {
      return { success: true, message: "Onboarding saved locally (demo mode)", data };
    }
    return apiRequest("/onboarding/influencer", "POST", data);
  },

  getInfluencerOnboarding: async () => {
    const isBackendUp = await checkBackendAvailability();
    if (!isBackendUp) {
      return { success: true, data: {} };
    }
    return apiRequest("/onboarding/influencer", "GET");
  },

  updateInfluencerOnboarding: async (data) => {
    const isBackendUp = await checkBackendAvailability();
    if (!isBackendUp) {
      return { success: true, message: "Onboarding updated locally (demo mode)", data };
    }
    return apiRequest("/onboarding/influencer", "PUT", data);
  },
};

// ============ PROFILE ENDPOINTS ============

export const profileAPI = {
  getProfile: async () => {
    const isBackendUp = await checkBackendAvailability();
    if (!isBackendUp) {
      const role = getUserRole();
      return { success: true, data: DUMMY_USERS[role] || DUMMY_USERS.investor };
    }
    return apiRequest("/profile", "GET");
  },

  updateProfile: async (data) => {
    const isBackendUp = await checkBackendAvailability();
    if (!isBackendUp) {
      return { success: true, message: "Profile updated locally (demo mode)", data };
    }
    return apiRequest("/profile", "PUT", data);
  },
  getUserRole,
  setUserRole,
  checkBackendAvailability,

  getProfileByRole: async (role) => {
    const isBackendUp = await checkBackendAvailability();
    if (!isBackendUp) {
      return { success: true, data: DUMMY_USERS[role] || DUMMY_USERS.investor };
    }
    return apiRequest(`/profile/${role}`, "GET");
  },

  deleteProfile: async () => {
    const isBackendUp = await checkBackendAvailability();
    if (!isBackendUp) {
      return { success: true, message: "Profile deleted (demo mode)" };
    }
    return apiRequest("/profile", "DELETE");
  },
};

export default {
  authAPI,
  onboardingAPI,
  profileAPI,
  getToken,
  setToken,
  clearToken,
};
