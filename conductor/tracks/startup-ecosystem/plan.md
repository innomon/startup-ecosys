# StartUp Ecosystem Platform Implementation Plan

This document outlines the step-by-step implementation plan for the StartUp Ecosystem Platform, based on the `spec.md` and design requirements in the `assets/` directory.

## Phase 1: Project Setup and Foundational Configuration
- [x] **1.1 Framework Initialization:** Initialize the AiGen App framework structure for `startup_ecosystem` in the `apps/` directory.
- [x] **1.2 App Manifest:** Create the `app_def.json` describing the app's purpose, roles, and entities.
- [x] **1.3 Database Schema Definitions:** Define core entities (StartupVenture, StartupChallenge, EcosystemMeeting, EcosystemEvent, VendorProduct) as JSON schemas in `apps/startup_ecosystem/schemas/*.json` instead of Go structs.
- [x] **1.4 Business Context:** Write detailed context documentation for each entity in `apps/startup_ecosystem/docs/*.md`.
- [x] **1.5 App Registration & Test Data:** Add `startup_ecosystem` to the `enabled_apps` array in `apps/apps.json` and create initial test data in `apps/startup_ecosystem/data/test_data.json`.
- [x] **1.6 Agent Configuration:** Set up the `agentic.yaml` for AI-based matchmaking rules and scoring for the "aiBizScore".
- [x] **1.7 UI Configuration:** Setup Tailwind CSS with the "OwlWise" theme variables (Dark Mode `#090e1c` background, `#fe9832` primary, etc.) in the React/A2UI frontend within `wwwroot/`.

## Phase 2: User Onboarding and Identity Management
- [x] **2.1 Role-Specific Profile Schemas:** Created schemas for FounderProfile, MentorProfile, InvestorProfile, and VendorProfile.
- [ ] **2.2 Registration & Roles:** Create registration flows for Founders, Mentors, Investors, and Vendors (A2UI components).
- [ ] **2.3 Profile Management:** Implement profile building components for each user type (A2UI components).
- [ ] **2.4 Verification:** Add an Admin dashboard to verify "Verified Vendors" and "Accredited Investors".
- [ ] **2.5 Federated Identity:** Integrate MCP and A2A SDKs to allow Partner incubators and accelerators to access and authenticate.

## Phase 3: Core Interactions and Workflows
- [x] **3.1 Matchmaking & Discovery:** Build the search and filter UI backed by the Agentic framework to match Founders with Mentors/Investors based on stage and sector.
- [x] **3.2 Connection Request Workflow:** Implement the request, accept/decline, and scheduling logic.
- [x] **3.3 Activity Wall:** Create the social feed for posting Challenges and allowing engagement/replies.
- [ ] **3.4 Dashboard UI:** Build the Bento Grid dashboard using the "OwlWise" design system (Insights, Ecosystem Pulse, Toolkit).

## Phase 4: Integrations
- [x] **4.1 Channel Service Messaging:** Implement Email, WhatsApp, Signal, and Bluesky notifications via the AiGen App channel service (notification_agent).
- [ ] **4.2 Native Video Conferencing:** Integrate external video tools via API/MCP and support transcription downloading.
- [ ] **4.3 Payments & Subscriptions:** Set up payment gateways for "Pro" Founder subscriptions and Mentor session payments.

## Phase 5: Additional Modules
- [ ] **5.1 Knowledge Hub:** Build the Learning Center and Research Reports document repository.
- [ ] **5.2 Vendor Marketplace:** Create the storefront for partner products and services.
- [ ] **5.3 aiBizScore Assessment Tool:** Develop the questionnaire and AI processing flow for generating the startup readiness score.

## Phase 6: Polish and Validation
- [ ] **6.1 UI/UX Polish:** Ensure all React components perfectly match the Tailwind CSS `assets/` HTML files (Glassmorphism, gradients, icons).
- [ ] **6.2 Testing:** Write unit tests for Go backends and integration tests for the A2A/MCP federation.
- [ ] **6.3 Deployment:** Finalize deployment scripts and environment variables.