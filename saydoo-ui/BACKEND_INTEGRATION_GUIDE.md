# Backend Integration Guide

## 🎯 Changes Implemented

All login and onboarding pages have been converted from static/localStorage to **dynamic backend-connected** pages with JWT authentication support.

---

## 📋 Files Updated

### 1. **API Service Layer** (NEW)
- **File**: `src/services/api.js`
- **Purpose**: Centralized API client with JWT token management
- **Features**:
  - Automatic JWT token injection in headers
  - Auth endpoints for all roles (Founder, Investor, Influencer, Business)
  - Onboarding endpoints for data submission
  - Error handling and promise-based requests

### 2. **Login Pages** (Updated)
All 4 login pages now support backend API calls:

#### FounderLogin.jsx
- ✅ Founder login/signup with API
- ✅ JWT token stored on success
- ✅ Error handling
- ✅ Loading states
- ✅ Redirects to dashboard or onboarding

#### InvestorLogin.jsx
- ✅ Investor login/signup with API
- ✅ Same features as FounderLogin

#### InfluencerLogin.jsx
- ✅ Influencer login/signup with API
- ✅ Same features as FounderLogin

#### BusinessLogin.jsx
- ✅ Business login/signup with API
- ✅ Same features as FounderLogin

### 3. **Onboarding Pages** (Updated)
All 3 onboarding pages now submit data to backend:

#### FounderOnboarding.jsx
- ✅ Removed localStorage (`localStorage.setItem()`)
- ✅ Added `onboardingAPI.submitFounderOnboarding()` call
- ✅ Loading states with "Submitting..." message
- ✅ Error handling and display
- ✅ Navigates to dashboard on success

#### InvestorOnboarding.jsx
- ✅ Same updates as FounderOnboarding

#### InfluencerOnboarding.jsx
- ✅ Same updates as FounderOnboarding

---

## 🔑 JWT Token Management

### How It Works:
1. User logs in → Backend returns JWT token
2. Token stored in `sessionStorage` (secure, cleared on tab close)
3. Token automatically added to all API requests via Authorization header
4. Format: `Authorization: Bearer {token}`

### Token Functions:
```javascript
// Get token
const token = getToken();

// Set token after login
setToken(response.token);

// Clear token on logout
clearToken();
```

---

## 🚀 Backend API Endpoints Required

### Authentication Endpoints (3 required endpoints per role)

```
POST /api/auth/founder/login
POST /api/auth/founder/signup
POST /api/auth/investor/login
POST /api/auth/investor/signup
POST /api/auth/influencer/login
POST /api/auth/influencer/signup
POST /api/auth/business/login
POST /api/auth/business/signup
GET  /api/auth/verify       (optional, for token validation)
```

### Onboarding Endpoints

```
POST /api/onboarding/founder   (submit onboarding data)
POST /api/onboarding/investor
POST /api/onboarding/influencer
```

---

## 📝 Expected Request/Response Format

### Login Request
```json
{
  "email": "user@example.com",
  "password": "encrypted_password"
}
```

### Login Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "123",
    "email": "user@example.com",
    "role": "founder"
  }
}
```

### Onboarding Request
```json
{
  "founderIdentity": {
    "name": "John Doe",
    "role": "Founder",
    "location": "San Francisco"
  },
  "ventureOverview": {
    "name": "TechStartup",
    "industry": "Tech",
    "stage": "Seed",
    ...
  },
  // ... all form data
}
```

### Onboarding Response
```json
{
  "success": true,
  "message": "Onboarding data saved successfully",
  "profile": { ... }
}
```

---

## 🔧 Configuration

### Set Backend API URL
Create a `.env` file in your project root:
```env
VITE_API_URL=http://localhost:5000/api
```

The API service reads this in `src/services/api.js`:
```javascript
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
```

**Note:** Vite uses `import.meta.env` instead of `process.env`, and environment variables must be prefixed with `VITE_` by default.

---

## ✨ Features Added

### Error Handling
- Real-time error messages displayed to users
- Console logging for debugging
- Graceful error recovery

### Loading States
- Button text changes to "Processing..." during API calls
- Buttons disabled during submission to prevent double-submit
- "Submitting..." shown on finish button during onboarding

### User Feedback
- Success: Navigation to dashboard/next step
- Error: Red alert box with error message
- Loading: Disabled button with feedback text

---

## 🔐 Security Features

✅ JWT Token-based authentication
✅ Token stored in sessionStorage (cleared on tab close)
✅ Automatic token injection in all requests
✅ Password confirmation validation on signup
✅ XSS protection (no localStorage for sensitive data)

---

## 📊 Data Flow

### Login Flow
```
User Input
  ↓
Login Component
  ↓
API Call (authAPI.founderLogin)
  ↓
JWT Token Received
  ↓
Token Stored (setToken)
  ↓
Navigate to Dashboard/Onboarding
```

### Onboarding Flow
```
Fill Form (step by step)
  ↓
Click "Finish"
  ↓
Validate Data
  ↓
Send to Backend (onboardingAPI.submitFounderOnboarding)
  ↓
JWT Token in Header
  ↓
Data Saved on Backend
  ↓
Navigate to Dashboard
```

---

## 🧪 Testing Checklist

- [ ] Login with invalid credentials → Error message shows
- [ ] Login with valid credentials → Redirects to dashboard
- [ ] Signup with mismatched passwords → Error message shows
- [ ] Signup with valid data → Redirects to onboarding
- [ ] Fill onboarding form → "Finish" button enables/disables correctly
- [ ] Click "Finish" → Data sent to backend with JWT token
- [ ] Successful submission → Redirects to dashboard
- [ ] Network error → Error message displays
- [ ] Refresh page → Maintains session if token in sessionStorage

---

## 🎓 Next Steps

1. **Implement Backend Endpoints**
   - Create POST `/auth/{role}/login` endpoints
   - Create POST `/auth/{role}/signup` endpoints
   - Create POST `/onboarding/{role}` endpoints
   - Implement JWT signing and verification

2. **Update API Base URL**
   - Set `REACT_APP_API_URL` environment variable

3. **Test Integration**
   - Use Postman/Similar to test endpoints
   - Test with frontend in browser

4. **Handle Additional Features**
   - Password reset endpoint
   - Profile update endpoints
   - File uploads for pitch deck/videos
   - Social media integration

---

## 📚 Code Examples

### Making an API Call
```javascript
try {
  const response = await authAPI.founderLogin(email, password);
  if (response.token) {
    setToken(response.token);
    navigate("/dashboard/founder");
  }
} catch (err) {
  setError(err.message || "Login failed");
}
```

### Using JWT Token in Requests
Token is automatically added by `api.js`:
```javascript
const token = getToken();
if (token) {
  headers["Authorization"] = `Bearer ${token}`;
}
```

---

## 🛠️ File Structure
```
src/
  ├── services/
  │   └── api.js              (NEW - API service)
  ├── components/
  │   ├── FounderLogin.jsx    (UPDATED)
  │   ├── InvestorLogin.jsx   (UPDATED)
  │   ├── InfluencerLogin.jsx (UPDATED)
  │   └── BusinessLogin.jsx   (UPDATED)
  └── pages/
      └── onboarding/
          ├── FounderOnboarding.jsx    (UPDATED)
          ├── InvestorOnboarding.jsx   (UPDATED)
          └── InfluencerOnboarding.jsx (UPDATED)
```

---

## ✅ Status: READY FOR BACKEND CONNECTION

All front-end pages are now **fully configured and ready** to connect with your backend API. No localStorage, all dynamic, JWT-authenticated ✨
