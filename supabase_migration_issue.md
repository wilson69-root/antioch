# Backend Migration: Introduce Supabase & Custom Dashboard

**Status**: Proposal / RFC
**Related Components**: Backend, Admin Dashboard, Data Layer

## 📝 Context
Currently, the application relies on hardcoded static data (located in `lib/data/`) for Sermons, Events, Ministries, and Staff. While this works for the initial version, it prevents non-technical staff from managing content.

We initially considered Sanity (Headless CMS), but are now proposing **Supabase** combined with a **Custom Admin Dashboard**. This approach offers greater control, reduces vendor lock-in, and leverages a powerful SQL database (PostgreSQL) directly.

## 🎯 Objectives
1.  **Migrate Data Layer**: Replace static JSON/TS files with a Supabase PostgreSQL database.
2.  **Authentication**: Implement Supabase Auth to secure the Admin Dashboard.
3.  **Admin Dashboard**: Build a user-friendly interface within the Next.js app (e.g., `/admin`) for content management.
4.  **Public API**: Refactor frontend components to fetch dynamic data from Supabase.
5.  **Storage**: Use Supabase Storage for managing images (thumbnails, event flyers, staff photos).

## ⚖️ Why Supabase + Custom Dashboard?
| Feature | Sanity (Headless CMS) | Supabase + Custom Dashboard |
| :--- | :--- | :--- |
| **Data Control** | Proprietary JSON format (GROQ) | Standard PostgreSQL (SQL) |
| **UI** | Pre-built Studio (Excellent) | Custom built (Tailored to exact needs) |
| **Flexibility** | High (plugins) | Unlimited (it's just code) |
| **Pricing** | Generous free tier, but limits on bandwidth/users | Generous free tier, pay for usage |
| **Dev Experience** | CMS-centric | DB-centric (User auth, RLS provided) |

**Conclusion**: Building our own dashboard allows us to tailor the experience specifically for our church staff's needs (e.g., specific fields for scripture references, sermon series) without navigating a generic CMS interface.

## 🛠 Proposed Implementation Plan

### Phase 1: Setup & Schema Design
- [ ] Initialize Supabase project.
- [ ] Define Database Schema (PostgreSQL tables):
    -   `sermons` (id, title, speaker, date, video_url, series, etc.)
    -   `events` (id, title, date, time, image_url, category, etc.)
    -   `ministries` (id, name, description, leader, etc.)
    -   `staff` (id, name, role, bio, image_url)
- [ ] Configure Storage Buckets for images (`sermon-thumbnails`, `event-images`, `staff-photos`).

### Phase 2: Authentication (Admin Access)
- [ ] Setup Supabase Auth (Email/Password).
- [ ] Create an "Admins" table or use App Metadata to restrict dashboard access.
- [ ] Implement Protected Routes for `/admin/...`.

### Phase 3: Dashboard Implementation
Create a layout at `/admin` using our existing UI components (`shadcn/ui`).
- [ ] **Dashboard Home**: Overview of recent sermons/events.
- [ ] **Sermons Manager**: List view + Create/Edit Form.
- [ ] **Events Manager**: List view + Create/Edit Form.
- [ ] **Ministry/Staff Manager**: Simple CRUD interfaces.
- [ ] **Image Upload**: Integrate file uploader with Supabase Storage.

### Phase 4: Frontend Integration
Refactor the public-facing pages to fetch data:
- [ ] **Sermons Page**: `GET /rest/v1/sermons` (with filtering/search).
- [ ] **Events Page**: `GET /rest/v1/events` (date sorting).
- [ ] **Home Page**: Fetch featured sermon and upcoming events.

## 💾 Proposed Schema Details

#### `sermons` Table
```sql
id uuid primary key
created_at timestamptz
title text
speaker text
date date
video_url text
description text
topic text[]
featured boolean
series text
duration text
thumbnail_url text
scripture text
```

#### `events` Table
```sql
id uuid primary key
created_at timestamptz
title text
date date
time text
description text
location text
image_url text
category text
registration_link text
```

## ⚠️ Considerations
-   **Security**: Ensure Row Level Security (RLS) policies are set so *public* can only READ data, and *authenticated admins* can WRITE.
-   **Image Optimization**: We might need to use a Next.js Image Loader for Supabase Storage to ensure images are optimized.
-   **Offline Dev**: Supabase works great locally (via Docker), but requires some setup. Static files were easier for offline dev.

## 📢 Discussion
-   Is the team comfortable building strict validation forms in the Dashboard?
-   Do we need "Draft" vs "Published" states for content?
