# Afnan's Game Hub

A multi-game web hub with a password gate, game selection screen, and multiple playable games. Built with vanilla HTML5, CSS, and JavaScript.

## Games

### 🚗 Dodge Game
Top-down car dodging game on an HTML5 Canvas.
- **Lamborghini player car** — Gold wedge-shaped sports car with your photo in the driver seat
- **Minecraft enemy faces** — Enemy trucks show random pixel-art faces (Creeper, Steve, Zombie, Enderman)
- **High score tracking** — Best score saved locally per device
- **8-bit sounds & music** — Web Audio API synthesised sound effects and looping background music
- **Keyboard & touch controls** — Arrow keys or on-screen ← → buttons

### 🌍 World Flag Match Quiz
Match flags to country outline maps across 3 modes.
- **Classic** — Unlimited questions, no timer, no lives
- **Time Attack** — 60 seconds, answer as fast as you can
- **Survival** — 3 lives, wrong answers cost you
- **233 country outlines** — SVG maps rendered as black silhouettes
- **Flag images** — Loaded from flagcdn.com

## How to play

1. Enter the password **afnan** (case-insensitive) at the welcome screen
2. Choose a game from the hub
3. For Flag Quiz, pick a mode (Classic / Time Attack / Survival)
4. Use the **Back to Menu** button to return to the hub at any time

## Project structure

```
├── index.html           — Main HTML shell (login, hub, games)
├── css/
│   └── style.css        — All styles, responsive layout
├── js/
│   ├── app.js           — Screen navigation, hub rendering, login
│   ├── audio.js         — Web Audio API sound engine
│   ├── countries.js     — 233 country entries with ISO codes & flag URLs
│   └── games/
│       ├── dodge.js     — Dodge Game logic & rendering
│       └── flag-quiz.js — Flag Match Quiz logic & rendering
├── maps/                — 233 SVG country outline files
├── assets/
│   └── afnan-driving.png — Player photo
└── CNAME                — Custom domain for GitHub Pages
```

## Tech stack

- **Vanilla JS** — No frameworks
- **HTML5 Canvas** — Dodge Game rendering
- **Web Audio API** — Procedural 8-bit sound effects
- **CSS Flexbox & Grid** — Responsive layout
- **CSS Animations** — Animated gradient background, screen transitions, card hover effects
- **Google Fonts** — Fredoka font family
- **GitHub Pages** — Deployment (custom domain: afnan.jawadurrafid.com)
