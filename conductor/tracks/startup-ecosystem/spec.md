# StartUp Ecosystem Platform Specification

## 1. Project Overview
A multi-sided networking and marketplace platform connecting Founders, Mentors, Incubators, Accelerators, and Investors. The platform aims to facilitate business connections, fundraising, mentorship, and access to startup resources within a disaggregated, open ecosystem. Anchors (incubators, accelerators) can interoperate and collaborate using federated access (MCP and A2A), eliminating vendor lock-in and profile duplication.

Brand Identity: **OwlWise** (based on provided UX mockups).

### Core Mandates
- **Framework:** AiGen App foundation.
- **Backend Language:** Go (Golang).
- **Frontend:** A2UI (Agent-to-User Interface) for rich, streaming UI components with a React-based frontend (AiGen CMS defaults).
- **Federated Access:** Official MCP go-sdk and A2A go sdk.
- **Styling/UX:** Dark theme UI based on "OwlWise" designs (Tailwind CSS, Plus Jakarta Sans, Material Symbols Outlined).

---

## 2. Core Entities & Data Model

The application will follow the AiGen App downstream app structure in `apps/startup_ecosystem/`.
An `app_def.json` manifest will define the app, roles, and entities.
Each entity will be defined as a JSON schema in `apps/startup_ecosystem/schemas/` with corresponding Markdown context documentation in `apps/startup_ecosystem/docs/`.
Data is stored using the framework's single-table JSON architecture (`aigen_records`), meaning entities are defined via JSON schemas, not direct Go structs.

### 2.1 Users (Roles)
- **Founder:** Profile includes venture details, stage, sector, and posted Challenges.
- **Mentor:** Profile includes specialization, years of experience, and availability for meetings.
- **Investor:** Profile includes investment thesis, preferred sectors, stage, and ticket size.
- **Vendor:** Verified service providers offering startup tools/products.
- **Admin:** Internal users for moderation, events, and reports.
- **Partners:** Incubators/Accelerators accessing via MCP and A2A.

### 2.2 Domain Entities (Schemas)
*Note: Entity Names are PascalCase, TableNames are snake_case.*
- **StartupVenture (`startup_venture`):** Pitch Decks, business stage, sector, metrics.
- **StartupChallenge (`startup_challenge`):** A post by a Founder seeking advice/solutions.
- **EcosystemMeeting (`ecosystem_meeting`):** Scheduled interaction (integrated with video tools).
- **EcosystemEvent (`ecosystem_event`):** Webinars, pitch days, workshops.
- **VendorProduct (`vendor_product`):** Digital assets (templates, reports, vendor tools).
- **AiBizScore (`ai_biz_score`):** AI-generated open metric/assessment tool for startup readiness.

---

## 3. Key Features

### 3.1 User-Specific Modules
- **Founder Dashboard:** Post challenges, track AiBizScore, search network, access resources.
- **Mentor/Investor Dashboard:** Filter startups, manage meeting requests, browse Activity Wall.
- **Marketplace:** Vendor products/services for startups.

### 3.2 Interaction Tools
- **Activity Wall:** Social feed for posting/solving challenges.
- **Matchmaking System:** Agentic framework (`agent.yaml`) powered search/filters (e.g., "Investor Preference").
- **Native Video Meetings:** API/MCP integrated conferencing with transcription downloads.
- **Messaging System:** Channel service (AiGen App) supporting Email, WhatsApp, Signal, and Bluesky.

### 3.3 Knowledge Hub
- **Learning Center:** Video, audio, document-based startup content.
- **Research Reports:** Sector-specific analysis and competitive matrices.

---

## 4. UX & Design System (from `assets/`)
The frontend will strictly follow the "OwlWise" design system provided in the assets directory.
- **Theme:** Dark mode by default.
  - Background: `#090e1c`
  - Primary: `#fe9832` (Orange)
  - Secondary: `#fcc800` (Yellow)
  - Tertiary: `#a2aaff` (Purple/Blue)
- **Typography:** `Plus Jakarta Sans` for all text (headings, body, labels).
- **Icons:** `Material Symbols Outlined` with specific fill/weight variations.
- **UI Components:**
  - Glassmorphism cards with `backdrop-blur` and semi-transparent backgrounds (`rgba(30, 37, 59, 0.6)`).
  - Bento Grid layout for dashboards.
  - Fixed top app bar and floating/fixed bottom nav bar.

---

## 5. Workflows
1. **Onboarding & Verification:** Role selection, LinkedIn integration, Admin/Automated verification.
2. **The "Connection" Workflow:** Search -> Request -> Accept/Decline -> Book Meeting -> Video Interaction.
3. **The "Challenge-Solution" Workflow:** Post -> Engagement -> Conversion to Mentorship.

---

## 6. Business & Monetization Model
- **Founders:** Lite (Free, limited connections/meetings) vs. Pro (Paid, unlimited meetings, premium reports, aiBizScore).
- **Mentors/Vendors:** Paid mentorship options, platform revenue share/commission on sales.

---

## 7. Sitemap
- `/` (Home/Landing)
- `/founders`, `/mentors`, `/investors`
- `/pricing`
- `/marketplace`
- `/activity-wall`
- `/dashboard`
- `/aiBizScore`