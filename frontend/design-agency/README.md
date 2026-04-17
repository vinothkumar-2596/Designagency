# Design Agency Website

This project is a full-stack design agency website. The agency offers creative design solutions for branding, websites, design systems, digital product interfaces, case studies, and editorial content.

The app now includes a React/Vite frontend and an Express API backend. It is structured so future developers or AI agents can quickly understand where pages, CMS content, API routes, middleware, auth, uploads, SEO, and styles live.

## Project Goals

- Present a creative design agency with strong responsive pages.
- Support CMS-style content for services, case studies, and blog posts.
- Store contact leads from the website.
- Provide JWT authentication with refresh-token sessions for admin actions.
- Support Cloudflare R2 image uploads for CMS media.
- Centralize SEO metadata, sitemap, robots, and schema markup.
- Keep the frontend accessible, responsive, and split into maintainable modules.

## Tech Stack

- React
- Vite
- React Router DOM
- SCSS
- Express
- JWT auth
- Cloudflare R2 via S3-compatible SDK
- Local JSON persistence for the current CMS and lead storage layer
- ESLint

## Frontend Routes

- `/` renders the Home page
- `/services` renders service CMS listings
- `/services/:slug` renders a service detail page
- `/case-studies` renders case study CMS listings
- `/case-studies/:slug` renders a case study detail page
- `/blog` renders blog CMS listings
- `/blog/:slug` renders a blog detail page
- `/aboutus` renders the About Us page
- `/contactus` renders the Contact Us page and lead form

Frontend routes are registered in `src/app/routes.jsx`. `src/App.jsx` only owns the `BrowserRouter`.

## API Routes

The Express API runs from `server/index.js`.

- `GET /api/health`
- `POST /api/auth/login`
- `POST /api/auth/refresh`
- `POST /api/auth/logout`
- `GET /api/auth/me`
- `GET /api/content/:type`
- `GET /api/content/:type/:slug`
- `POST /api/content/:type` admin only
- `PATCH /api/content/items/:id` admin only
- `DELETE /api/content/items/:id` admin only
- `POST /api/leads`
- `GET /api/leads` admin only
- `GET /api/seo`
- `GET /api/seo/:path`
- `PUT /api/seo/:path` admin only
- `POST /api/uploads` admin only, Cloudflare R2
- `GET /sitemap.xml`
- `GET /robots.txt`

Valid CMS content types are `services`, `case-studies`, and `blog`.

## Source Structure

```txt
src/
  App.jsx
  main.jsx
  app/
    routes.jsx
  assets/
  components/
    Button/
      Button.jsx
    ContentGrid/
      ContentGrid.jsx
    Layout/
      Layout.jsx
    SEO/
      SEO.jsx
  config/
    site.js
  data/
    fallbackContent.js
    seoDefaults.js
  pages/
    Home/
      Index.jsx
    Services/
      Index.jsx
    CaseStudies/
      Index.jsx
    Blog/
      Index.jsx
    ContentDetail/
      Index.jsx
    AboutUs/
      Index.jsx
    ContactUs/
      Index.jsx
  services/
    apiClient.js
    contentService.js
  styles/
    main.scss
    abstracts/
      _variables.scss
      _mixins.scss
      _breakpoints.scss
      _typography.scss
      _globals.scss
    components/
      Button/
        Button.scss
      ContentGrid/
        ContentGrid.scss
      Layout/
        Layout.scss
    pages/
      _cms.scss
      _home.scss
      _aboutUs.scss
      _contactUs.scss
  utils/
    schema.js

server/
  app.js
  index.js
  config/
    env.js
  controllers/
  data/
  middleware/
  repositories/
  routes/
  services/
  utils/
  validators/
```

## Backend Architecture

The backend follows a route-controller-service-repository structure.

- `server/routes`: HTTP route definitions.
- `server/controllers`: request and response handling.
- `server/services`: business logic for auth, CMS, leads, SEO, and R2 uploads.
- `server/repositories`: persistence abstraction. Current storage is JSON files under `server/data`.
- `server/middleware`: security, auth, validation, rate limiting, request IDs, and error handling.
- `server/validators`: Zod schemas for request validation.

This structure makes it straightforward to replace JSON files with a database later without rewriting controllers or routes.

## Auth Model

Admin authentication uses short-lived JWT access tokens and rotating refresh tokens.

- Access token: returned from `/api/auth/login` and `/api/auth/refresh`.
- Refresh token: stored as an HTTP-only cookie.
- Refresh sessions: stored hashed in `server/data/refreshTokens.json`.
- Admin-only routes use `requireAuth` and `requireRole('admin')`.

On first API boot, the server creates a default admin user from environment variables if `server/data/users.json` is empty.

## Environment

Create a `.env` file from `.env.example`.

Important variables:

```txt
PORT=4000
CLIENT_ORIGIN=http://127.0.0.1:5173
SITE_URL=http://127.0.0.1:5173
JWT_ACCESS_SECRET=replace-with-a-long-random-access-secret
JWT_REFRESH_SECRET=replace-with-a-long-random-refresh-secret
ADMIN_EMAIL=admin@designagency.local
ADMIN_PASSWORD=change-this-password
CLOUDFLARE_R2_ACCOUNT_ID=
CLOUDFLARE_R2_ACCESS_KEY_ID=
CLOUDFLARE_R2_SECRET_ACCESS_KEY=
CLOUDFLARE_R2_BUCKET=
CLOUDFLARE_R2_PUBLIC_URL=
```

Use strong secrets and a new admin password before deploying.

## Styling Pattern

Global styles start from `src/styles/main.scss`, which is imported in `src/main.jsx`.

- `abstracts/` contains reusable design values and helpers.
- `components/` contains reusable component styles.
- `pages/` contains page-level styles.

Use Sass `@use` for imports.

The active palette is saved in `src/styles/abstracts/_variables.scss`.

## SEO

SEO is managed through:

- `src/components/SEO/SEO.jsx` for document title, meta description, canonical URL, and JSON-LD schema.
- `server/data/seo.json` for editable metadata records.
- `GET /api/seo` and `GET /api/seo/:path` for frontend metadata.
- `GET /sitemap.xml` for dynamic sitemap output.
- `GET /robots.txt` for crawler rules.
- Static fallbacks in `public/sitemap.xml` and `public/robots.txt`.

## Accessibility And Performance Notes

- Routes are lazy-loaded in `src/app/routes.jsx`.
- Layout includes a skip link and semantic navigation.
- Forms use labels, required fields, status messaging, and keyboard-focus styles.
- Images use `loading="lazy"` where appropriate.
- Styles include responsive grid behavior and stable card dimensions.
- Avoid viewport-scaled font sizes; use breakpoint-based typography.

## Development Commands

```bash
npm install
npm run dev
npm run dev:api
npm run build
npm run lint
npm run preview
```

Run the frontend and API in separate terminals during local development.

## Notes For Future AI Agents

Treat this as an enterprise-shaped design agency site, not a generic Vite starter.

When adding new work:

- Keep route pages inside `src/pages/PageName/Index.jsx`.
- Keep frontend route definitions in `src/app/routes.jsx`.
- Keep API calls inside `src/services`.
- Keep reusable UI inside `src/components`.
- Keep backend route/controller/service/repository boundaries intact.
- Add protected CMS/admin behavior through existing auth middleware.
- Add reusable SCSS under `src/styles/components`.
- Add page-specific SCSS under `src/styles/pages`.
- Keep copy focused on creative design solutions, branding, web design, digital products, accessibility, and performance.
