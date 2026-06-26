# Final Fantasy XII: The Zodiac Age - Game Tracker

An interactive game tracker and checklist website for **Final Fantasy XII: The Zodiac Age**, built with React, Vite, and Tailwind CSS. Track your progress, manage quests, collect equipment, and consult guides -- all from your browser.

## Features

- **Dashboard** -- Overview of your game progress with completion percentages
- **Quest Tracker** -- Track main quests, side quests, hunts, and elite hunts
- **Equipment Checklist** -- Organize weapons, armor, accessories, and shields
- **Recipes & Abilities** -- Browse bazaar recipes, synthesis, magic spells, technicks, and espers
- **Trophies & Characters** -- Track trophies, character jobs, and explored zones
- **Guide Viewer** -- Quick reference for key game information from the GameFAQs walkthrough
- **Offline Support** -- All progress saved to localStorage
- **Export/Import** -- Backup and restore your progress as JSON
- **Responsive Design** -- Works on desktop and mobile

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React](https://react.dev/) | UI framework |
| [Vite](https://vite.dev/) | Build tool and dev server |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [Lucide React](https://lucide.dev/) | Icons |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/michaeladige/ff12-tracker.git
cd ff12-tracker

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at `http://localhost:5173`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run linter |

## Deployment (GitHub Pages)

1. Create a GitHub repository
2. Push the code to `main` branch
3. Go to **Settings > Pages** in your repo
4. Set **Source** to **GitHub Actions**

The site will deploy automatically on every push to `main` via the included GitHub Actions workflow at `.github/workflows/deploy.yml`.

Your site will be live at:
```
https://michaeladige.github.io/ff12-tracker/
```

## Project Structure

```
ff12-tracker/
├── public/
├── src/
│   ├── components/         # React components
│   │   ├── ChecklistSection.jsx
│   │   ├── Dashboard.jsx
│   │   ├── EquipmentChecklist.jsx
│   │   ├── GuideViewer.jsx
│   │   ├── QuestTracker.jsx
│   │   ├── RecipeBook.jsx
│   │   ├── Settings.jsx
│   │   └── TrophiesAndCharacters.jsx
│   ├── context/
│   │   └── ProgressContext.jsx    # Global state + localStorage
│   ├── data/                     # Game data (quests, equipment, recipes)
│   │   ├── equipment.js
│   │   ├── quests.js
│   │   ├── recipes.js
│   │   └── world.js
│   ├── utils/
│   │   └── progressUtils.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .github/workflows/
│   └── deploy.yml               # GitHub Pages deployment
├── vite.config.js
└── package.json
```

## Game Data

All game data is sourced from the [GameFAQs walkthrough](https://gamefaqs.gamespot.com/ps4/191202-final-fantasy-xii-the-zodiac-age/faqs/82302) by Vader781.

Data includes:
- 33 main quest steps across 6 chapters
- 24 side quests
- 18 hunts + 6 elite hunts
- 70+ weapons, 39 armor pieces, 24 accessories, 12 shields
- 18 bazaar recipes, 12 synthesis recipes
- 40 magic spells, 23 technicks, 12 espers
- 13 trophies, 32 zones, 6 playable characters

## License

This project is for personal use. Final Fantasy XII is owned by Square Enix.
