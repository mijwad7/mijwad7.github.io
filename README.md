# Muhammed Mijwad — Portfolio

Personal portfolio website for Muhammed Mijwad, a Full Stack Developer based in Bahrain.

**Live site:** [mijwad7.github.io](https://mijwad7.github.io)

---

## Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS 3**
- **Framer Motion** — animations
- **Lucide React** — icons
- Fully static — no backend

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Build

```bash
npm run build
```

Output goes to `dist/`.

---

## Deploy to GitHub Pages

> **Before deploying**, place your resume PDF at:
> `public/resume/Muhammed-Mijwad-Resume.pdf`

```bash
npm run deploy
```

This runs `npm run build` then pushes the `dist/` folder to the `gh-pages` branch using `gh-pages`.

> **Note:** Since this is a user/org GitHub Pages repo (`username.github.io`), GitHub Pages serves from the `main` branch root by default. For cleanest deployment, either:
> - Push the `dist/` contents directly to `main`, OR
> - Configure GitHub Pages to serve from the `gh-pages` branch in repo Settings → Pages

---

## Resume PDF

Place the resume file at:
```
public/resume/Muhammed-Mijwad-Resume.pdf
```

The "Download Resume" button links to `/resume/Muhammed-Mijwad-Resume.pdf`.

---

## Updating Content

All content is stored in `src/data/`:

| File | Contains |
|------|----------|
| `links.js` | GitHub, LinkedIn, email, phone, resume URL |
| `journey.js` | Timeline items |
| `experience.js` | Work experience |
| `productionSystems.js` | Production contribution case studies |
| `projects.js` | Main portfolio projects |
| `earlierProjects.js` | Foundation / earlier projects |
| `skills.js` | Skill groups and paths |
| `education.js` | Education and certifications |
| `notes.js` | Engineering learnings |

---

## Project Structure

```
src/
  components/      # All UI components
  data/            # Content data files
  App.jsx          # Section assembly
  main.jsx         # Entry point
  index.css        # Global styles + design tokens
public/
  resume/          # Place resume PDF here
  favicon.svg
```
