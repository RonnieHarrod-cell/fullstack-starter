```markdown
# fullstack-starter

Monorepo starter with:
- frontend: Vite + React + TypeScript
- api: Express + TypeScript
- GitHub Actions: CI that installs and builds both projects

Quick start
1. Install Node.js (LTS) and Git.
2. From repo root:
   - cd frontend && npm install && npm run dev
   - cd api && npm install && npm run dev
3. Open http://localhost:5173 for frontend (Vite default) and http://localhost:4000 for API.

Project structure
- frontend/ — Vite + React + TypeScript app
- api/ — Express + TypeScript API
- .github/workflows/ci.yml — CI workflow

Environment
- For local API env variables, copy `api/.env.example` to `api/.env` and adjust.

Deploy
- Frontend: build with `npm run build` in frontend and deploy `frontend/dist` to Vercel/Netlify.
- API: build with `npm run build` in api then run `node dist/index.js` (or deploy using Railway/Render).

README for each subproject contains more details.
```