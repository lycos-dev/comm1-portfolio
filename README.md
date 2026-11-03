# Myra Bathan — React portfolio

A complete React + Vite source project for a continuous, scrolling portfolio. All seven sections are on one page. Navigation scrolls to each section; campaign details open in an accessible overlay without leaving the page.

## Run locally

Use Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

To check and build the production site:

```sh
npm test
npm run build
npm run preview
```

## Deploy to Vercel

Extract the ZIP and import the project into Vercel through your Git repository. The project root is the folder containing `package.json`.

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 22.x or later
- No environment variables required

If your repository includes an enclosing `myra-portfolio` folder, select that folder as the Root Directory. Deployment settings are also provided in `vercel.json`.

## File structure

```text
myra-portfolio/
├── public/                 # Favicon and downloadable résumé
├── src/
│   ├── assets/             # Original natural-color portrait
│   ├── components/         # Navigation, carousel, dialog, form, shared UI
│   ├── data/               # Profile, campaigns, experience, section order
│   ├── hooks/              # Scroll reveals, active navigation, page metadata
│   ├── sections/           # Home, About, Work, Experience, Skills, Education, Contact
│   ├── styles/             # Shared styles, responsive rules, section backgrounds
│   ├── App.jsx
│   └── main.jsx
├── tests/portfolio.test.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── vercel.json
├── .gitignore
├── .nvmrc
└── README.md
```

## Design and interactions

Sections alternate between white, light slate, and charcoal backgrounds across the full viewport width. Rounded cards and generous spacing keep the content readable within each section. The supplied portrait retains its natural colors.

- Smooth anchor navigation with active-section highlighting and reading progress
- Fade-in and slide-up scroll reveals, staggered cards, and animated statistics
- Touch-friendly horizontal campaign and skills carousels
- Campaign filters and an accessible detail dialog with Escape dismissal and focus restoration
- Searchable experience, expandable roles, and expand/collapse all
- Keyboard-accessible tool tabs
- Mobile menu and bottom navigation
- Visible focus states, reduced-motion support, and print styles

Operating-system reduced-motion settings intentionally disable scroll animations and smooth scrolling.

## Edit the content

- Profile, contact links, résumé URL: `src/data/profile.js`
- Campaigns, case studies, experience, skills: `src/data/portfolio.js`
- Section order and background choices: `src/data/navigation.js`
- Section copy: `src/sections/`
- Full-width backgrounds and scroll effects: `src/styles/continuous.css`
- Shared design values: `src/styles/tokens.css`
- Portrait: `src/assets/myra-bathan.png`
- Résumé: `public/Myra_Bathan_Resume.pdf`

Specific employment dates follow the supplied résumé. No certifications, testimonials, or numerical skill ratings have been invented.

## Contact form

The form prepares a `mailto:` draft with the topic, sender details, and message. The visitor reviews and sends it in their email app. The site does not send or store submissions and requires no email backend.

## Package contents

The ZIP includes the complete source, lockfile, original assets, deployment configuration, and tests. Dependencies and generated build files are excluded; `npm ci` and `npm run build` recreate them.
