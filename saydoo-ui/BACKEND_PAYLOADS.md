# Backend Payloads & API Spec (JSON examples)

Share this file with your backend designer. It contains the JSON structures for authentication (login/signup), onboarding steps (Founder / Investor / Influencer), profile responses, error format, and endpoint list with header requirements.

---

**Note:** replace example values as needed. All requests use `Content-Type: application/json` unless noted.

## 1) Authentication

### Login request (POST /api/auth/{role}/login)
```json
{
  "email": "founder@example.com",
  "password": "plain-text-password"
}
```

### Signup request (POST /api/auth/{role}/signup)
```json
{
  "email": "founder@example.com",
  "password": "strong-password",
  "meta": { "source": "web" }
}
```

### Successful auth response
```json
{
  "token": "eyJhbGciOiJI...",
  "user": {
    "id": "uuid-or-int",
    "role": "founder",
    "email": "founder@example.com",
    "name": "Jane Founder"
  },
  "expiresIn": 3600
}
```

### Standard error response (non-2xx)
```json
{
  "error": {
    "code": "INVALID_CREDENTIALS",
    "message": "Invalid email or password",
    "details": null
  }
}
```

---

## 2) Onboarding payloads

### Founder onboarding (POST /api/onboarding/founder)
```json
{
  "founderIdentity": {
    "name": "Jane Doe",
    "role": "Founder",
    "location": "San Francisco"
  },
  "ventureOverview": {
    "name": "Acme Tech",
    "industry": "SaaS",
    "stage": "Seed",
    "problem": "Problem statement",
    "solution": "Solution summary"
  },
  "businessModel": {
    "model": "B2B SaaS",
    "traction": "1000 MAU",
    "keyMetrics": "MRR, CAC"
  },
  "fundraising": {
    "raising": "yes",
    "stage": "Seed",
    "targetAmount": 500000,
    "useOfFunds": "Product, Hiring"
  },
  "pitchSubmission": {
    "formats": ["deck", "video"],
    "pitchDeckUrl": "https://.../deck.pdf",
    "pitchVideoUrl": "https://.../pitch.mp4"
  },
  "aiAssistant": {
    "autoExplain": true,
    "askQualifying": true,
    "summaryFormat": "text"
  },
  "meetings": {
    "allowMeetings": true,
    "types": ["15", "30"],
    "paid": false
  },
  "founderNote": {
    "message": "Short note for reviewers",
    "avoid": "Topics to avoid"
  }
}
```


### Investor onboarding (POST /api/onboarding/investor)
```json
{
  "identity": {
    "name": "VC Fund",
    "type": "Firm",
    "location": "New York"
  },
  "focus": {
    "industries": ["SaaS", "FinTech"],
    "stage": "Series A",
    "ticketRange": "50000-500000",
    "geography": "Global"
  },
  "pitch": {
    "allowedFormats": ["deck","video"],
    "maxDeckSizeMb": 20,
    "maxVideoDurationSec": 300,
    "evaluationFactors": ["team","traction","market"],
    "avoid": "No >20MB decks",
    "minimumExpectations": "Revenue > $10k MRR"
  },
  "aiBehavior": {
    "autoFilter": true,
    "followUpQuestions": true,
    "summaryFormat": "bullet"
  },
  "meetings": {
    "allowMeetings": true,
    "types": ["15","30"],
    "paid": false
  },
  "guidance": {
    "exciteNote": "What excites you",
    "avoidNote": "What to avoid"
  }
}
```


### Influencer onboarding (POST /api/onboarding/influencer)
```json
{
  "basicProfile": {
    "fullName": "Alex Influencer",
    "niche": "Fitness",
    "language": "en",
    "openToCollab": true
  },
  "social": {
    "instagram": "https://instagram.com/alex",
    "youtube": "https://youtube.com/alex"
  },
  "audience": {
    "topRegion": "US",
    "ageRange": "18-34",
    "audienceSize": 120000
  },
  "brands": {
    "pastCollaborations": ["BrandA","BrandB"]
  },
  "content": {
    "links": ["https://.../sample1"],
    "samples": []
  },
  "pricing": {
    "rates": [
      { "format": "instagram_post", "price": 500 }
    ]
  }
}
```

---

## 3) Profile endpoints & sample response

### GET /api/profile  or GET /api/profile/{role}
Response:
```json
{
  "profile": { /* role-specific structure */ },
  "updatedAt": "2026-02-07T12:34:56Z"
}
```

---

## 4) Endpoints list (summary)

- POST /api/auth/{role}/login        (role ∈ {founder, investor, influencer, business})
- POST /api/auth/{role}/signup
- GET  /api/auth/verify              (optional token validation)
- POST /api/onboarding/founder
- GET  /api/onboarding/founder
- PUT  /api/onboarding/founder
- POST /api/onboarding/investor
- GET  /api/onboarding/investor
- PUT  /api/onboarding/investor
- POST /api/onboarding/influencer
- GET  /api/onboarding/influencer
- PUT  /api/onboarding/influencer
- GET  /api/profile
- PUT  /api/profile

---

## 5) Auth / Header requirements
- All protected endpoints require header:
```
Authorization: Bearer <JWT_TOKEN>
```
- Content-Type: application/json for JSON payloads

---

## 6) Error format and status codes
- Use standard HTTP status codes.
- Body format for errors (example):
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "One or more fields are invalid",
    "details": [ { "field": "ventureOverview.name", "message": "Required" } ]
  }
}
```

---

## 7) File uploads / media (pitch deck, video)
- Prefer separate upload endpoint using `multipart/form-data` or a dedicated file storage service (S3 pre-signed URL).
- Example flow for large files:
  1. POST /api/uploads/presign  -> returns pre-signed URL
  2. Client PUTs file to storage (no backend SDK required)
  3. Client sends returned file URL in onboarding JSON

---

## 8) Validation & UX recommendations
- Implement partial saves: allow PUT to save progress and GET to prefill onboarding steps.
- Return validation errors with `details` per-field to show inline messages in frontend.
- Rate-limit auth endpoints to prevent abuse.

---

## 9) Versioning
- Consider `/api/v1/...` for stable contracts.

---

## 10) Example full payload bundle (single JSON object)
This is useful if backend designer wants one JSON file showing all objects under named keys:
```json
{
  "auth": {
    "loginExample": { "email": "founder@example.com", "password": "pass" },
    "signupExample": { "email": "founder@example.com", "password": "pass" }
  },
  "founderOnboarding": { /* object - see Founder section above */ },
  "investorOnboarding": { /* object - see Investor section above */ },
  "influencerOnboarding": { /* object - see Influencer section above */ }
}
```

---

If you want, I can also generate a machine-readable OpenAPI YAML/JSON file or separate JSON Schema files for each payload. Which format should I produce next? 
