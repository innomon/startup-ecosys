# GEMINI.md - StartUp Ecosystem Mandates

This document serves as the foundational mandate for all development activities within the **StartUp Ecosystem** project. These instructions take absolute precedence over general workflows and tool defaults.

## 1. Project Overview
A multi-sided networking and marketplace platform connecting **Founders**, **Mentors**, **Incubators**, **Accelerators**, and **Investors**. The goal is to create a disaggregated, open ecosystem where anchors can interoperate and collaborate using federated access.

## 2. Core Mandates
- **Framework**: Use [AiGen App](https://github.com/innomon/aigen-app) as the foundation.
- **Backend Language**: Go (Golang).
- **Frontend**: A2UI (Agent-to-User Interface) for rich, streaming UI components, integrated with a React-based frontend (AiGen CMS defaults).
- **Federated Access**: 
  - **MCP**: Only use the official [MCP go-sdk](https://github.com/modelcontextprotocol/go-sdk).
  - **A2A**: Only use the [A2A go sdk](https://github.com/a2aproject/a2a-go).
- **Agentic Framework**: Matchmaking and search functionality must utilize the Agentic framework defined in `agent.yaml`.
- **Communication**: Messaging (Email, WhatsApp, Signal, Bluesky) must be integrated through the channel service of the AiGen App framework.

## 3. Workspace Structure
- `docs/`: Original product and UX documentation.
- `apps/`: AiGen App application definitions (schemas, data, logic).
- `wwwroot/`: Static assets and frontend.
- `framework/`: (Internal) AiGen App framework code.

## 4. Technical Requirements
- **Matchmaking System**: Search and filter functionality based on "Investor Preference" or "Mentor Specialization" using the Agentic framework (`agent.yaml`).
- **Video Meetings**: In-platform video conferencing (external tools) with API/MCP integration and transcription download feature.
- **Authentication**: Visitors can browse as guests; login is required only for specific actions.

## 5. Domain Entities
- **Users**: Founder, Mentor, Investor, Vendor, Admin, Partners.
- **Entities**: Venture/Startup, Challenge, Meeting/Appointment, Event, Product/Resource, aiBizScore.

## 6. Sitemap Reference
- `/` (Home/Landing)
- `/founders` | `/mentors` | `/investors`
- `/pricing` (Tier comparison)
- `/marketplace` (Vendor products)
- `/activity-wall` (Public/Private feed)
- `/dashboard` (Role-based user cockpit)
- `/aiBizScore` (Analytics/Assessment tool)
