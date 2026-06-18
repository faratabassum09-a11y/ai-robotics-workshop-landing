# AI & Robotics Summer Workshop — Landing Page

A responsive workshop landing page built for the GEMA Education Technology
assignment, styled in the spirit of Kidrove's workshop listings.

## Stack

- **Frontend:** React 18 + Vite + Tailwind CSS
- **Backend:** Express.js (`POST /api/enquiry`), optional MongoDB persistence via Mongoose

## Project structure

```
workshop-landing/
├── client/      React frontend (Vite + Tailwind)
└── server/      Express API
```

## Running locally

**Backend**
```bash
cd server
npm install
cp .env.example .env   # optionally add a MONGODB_URI
npm start               # runs on http://localhost:5000
```

**Frontend**
```bash
cd client
npm install
npm run dev              # runs on http://localhost:5173, proxies /api to :5000
```

## API

`POST /api/enquiry`

Request body:
```json
{ "name": "Aanya Sharma", "email": "parent@example.com", "phone": "9876543210" }
```

Validates that `name`, `email` (valid format), and `phone` (10 digits) are present.
Returns `201` with `{ success: true }` on success, `400` with a message on
validation failure. If `MONGODB_URI` is set, the enquiry is persisted to
MongoDB; otherwise it's logged server-side and the API still responds
successfully, so the flow works end-to-end without a database.

## Approach (100–150 words)

I built this as two small, focused services rather than one monolith,
mirroring how I structured my Flashcard LMS and LuxeNest projects. The
frontend is a single-page React app split into small presentational
components (Hero, WorkshopDetails, LearningOutcomes, FAQ, RegistrationForm)
so each section is easy to review and reuse. I used Tailwind for styling to
keep the design system (colors, type, spacing) consistent without writing
repetitive CSS, and added a custom SVG "circuit constellation" motif in the
hero to tie the visual identity to the robotics theme rather than using a
generic banner. The form does client-side validation first, then calls the
Express API, with loading and success/error states so the experience feels
responsive. The API validates again server-side (never trust the client)
and treats MongoDB as optional so the submission still works in a quick
local review without needing a database connection string.

## Improvements with more time

- Add TypeScript across both client and server for stronger type safety
- Add automated tests (Jest + React Testing Library for components, a
  request-level test for the `/api/enquiry` endpoint)
- Add a confirmation email on successful enquiry submission
- Deploy frontend to Vercel and backend to Render, wired together with
  environment-based API URLs instead of a dev-only proxy
