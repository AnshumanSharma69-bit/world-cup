# ⚽ FIFA World Cup 2026 — Fan Platform

> A cyberpunk-themed, full-stack World Cup fan experience. Live scores, historical match archive, and an interactive card battle game — all in one.

[![Live Demo](https://img.shields.io/badge/LIVE%20DEMO-Visit%20Site-00f7ff?style=for-the-badge)](https://your-vercel-url.vercel.app)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Supabase](https://img.shields.io/badge/Database-Supabase-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.com)

---

![World Cup 2026 Platform Preview](![World Cup 2026 Platform Preview](./images/app.png))

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Pages](#pages)
- [API Architecture](#api-architecture)
- [Database Schema](#database-schema)
- [Deployment](#deployment)
- [Roadmap](#roadmap)

---

## Overview

A fully deployed, full-stack World Cup platform built with **vanilla JavaScript**, a **Vercel serverless backend**, and **Supabase** for the historical database. Features a consistent cyberpunk HUD design system across all pages — no UI framework used.

Built as a personal project to demonstrate full-stack skills: real-time data integration, serverless backend architecture, database querying, and interactive UI design.

---

## Features

### 🔴 Live Scores
- Real-time match scores powered by ESPN's API via a custom serverless proxy
- Auto-refreshes every 30 seconds during live matches, 2 minutes otherwise
- Full 104-match WC2026 schedule from open data (no API key required)
- Fixtures, Live, Results, and Standings tabs
- Filter by group (A–L) or knockout stage
- Countdown timer to opening kickoff

### 🗃️ Historical Archive
- Every World Cup match from **1930 to 2022** — 900+ matches
- Powered by Supabase PostgreSQL database
- Filter by tournament year and stage (Final, Semi, Quarter, Groups, R16)
- Winner highlighting, score formatting, venue and attendance data
- Stage match counts loaded per year

### ⚔️ Card Battle Game
- Playable trading card game featuring 8 world-class players
- Random stat combat — Speed, Finishing, Dribbling, Aura
- CSS `preserve-3d` card flip animations
- Particle burst canvas on win/lose
- Win streak tracking

### 🎨 Design System
- Consistent cyberpunk HUD aesthetic across all pages
- Custom CSS token system (`--cyan`, `--gold`, `--void`, `--border`)
- Custom dual-layer cursor with smooth RAF follow
- Ambient grid, scanlines, vignette, HUD corner brackets
- GSAP 3 + ScrollTrigger animations on the main page
- Three.js particle canvas hero background
- Fully responsive (mobile-first on all pages)

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Vanilla HTML5, CSS3, JavaScript (ES Modules) |
| **Animations** | GSAP 3.12 + ScrollTrigger |
| **3D / Canvas** | Three.js (r134) |
| **Backend** | Vercel Serverless Functions (Node.js) |
| **Database** | Supabase (PostgreSQL) |
| **Live Data** | ESPN Unofficial API (proxied) |
| **Schedule Data** | openfootball open data |
| **Deployment** | Vercel |
| **Fonts** | Google Fonts — Orbitron, Rajdhani, Share Tech Mono |

---

## Project Structure

```
world-cup/
│
├── api/
│   └── scores.js              # Vercel serverless function — ESPN proxy
│
├── images/
│   ├── messi.webp
│   ├── mbappe.webp
│   ├── ronaldo.webp
│   └── ...                    # Player photos
│
├── index.html                 # Main showcase page
├── live-scores.html           # Live scores + WC2026 fixtures
├── matches.html               # Historical archive (1930–2022)
├── villain-boss-battle.html   # Card battle game
├── matches.js                 # Archive JS — Supabase queries
├── vercel.json                # Vercel config
└── README.md
```

---

## Getting Started

### Prerequisites
- A [Vercel](https://vercel.com) account (free)
- A [Supabase](https://supabase.com) account (free)

### 1. Clone the repo

```bash
git clone https://github.com/AnshumanSharma69-bit/world-cup.git
cd world-cup
```

### 2. Set up Supabase

1. Create a new Supabase project
2. Create a `matches` table with the following columns:

```sql
create table matches (
  id          bigint generated always as identity primary key,
  Year        int,
  Round       text,
  Date        text,
  home_team   text,
  away_team   text,
  home_score  int,
  away_score  int,
  Venue       text,
  City        text,
  Host        text,
  Attendance  text
);
```

3. Import historical match data (CSV available [here](https://www.kaggle.com/datasets/abecklas/fifa-world-cup))
4. Copy your **Project URL** and **anon public key** from Settings → API

### 3. Add your Supabase credentials

In `matches.js`, replace:

```js
const supabase = createClient(
  'YOUR_SUPABASE_URL',      // ← paste your Project URL
  'YOUR_SUPABASE_ANON_KEY'  // ← paste your anon key
)
```

### 4. Run locally with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Run dev server (enables the /api/scores serverless function)
vercel dev
```

Then open `http://localhost:3000`

> **Note:** Opening `index.html` directly in the browser works for most pages,
> but `/api/scores` (live scores proxy) requires `vercel dev` to function.

---

## Pages

### `index.html` — Main Showcase
The hero page. Features a Three.js particle background, animated team cards with 3D tilt and magnetic sheen, player holographic cards with stat bars, and a full GSAP scroll animation sequence.

### `live-scores.html` — Live Scores
Connects to the `/api/scores` serverless proxy which forwards requests to ESPN's soccer API. Falls back to the openfootball schedule when no live matches are in progress. No API key ever required by the end user.

### `matches.html` — Historical Archive
Queries Supabase for World Cup matches filtered by year and stage. Loads match counts per stage after year selection to populate the filter badges. Displays winner highlighting, AET/penalty notation, and attendance data.

### `villain-boss-battle.html` — Card Battle
A self-contained card battle game. Shuffles a deck of 8 player cards, reveals a random battle stat, and compares values to determine a winner. Includes card flip physics, particle bursts, and win streak tracking.

---

## API Architecture

The live scores feature uses a **serverless proxy** to bypass CORS restrictions:

```
Browser  →  /api/scores?dates=20260611  →  Vercel Function  →  ESPN API
                                        ←  JSON response    ←
```

**Why a proxy?**
ESPN's API blocks direct browser requests (`Access-Control-Allow-Origin` is not set). The Vercel function fetches ESPN server-side — no CORS headers needed — and returns the data to the browser.

**Caching:**
- `Cache-Control: s-maxage=20` during live matches
- `Cache-Control: s-maxage=300` when no matches are live

```js
// api/scores.js
const response = await fetch(ESPN_URL, {
  headers: { 'Referer': 'https://www.espn.com/' }
})
```

---

## Database Schema

```
matches table (Supabase / PostgreSQL)
─────────────────────────────────────
id          BIGINT  PK
Year        INT           e.g. 2022
Round       TEXT          e.g. "Final", "Group A"
Date        TEXT          e.g. "18 Dec 2022"
home_team   TEXT          e.g. "Argentina"
away_team   TEXT          e.g. "France"
home_score  INT           e.g. 3
away_score  INT           e.g. 3
Venue       TEXT          e.g. "Lusail Stadium"
City        TEXT          e.g. "Lusail"
Host        TEXT          e.g. "Qatar"
Attendance  TEXT          e.g. "88,966"
```

---

## Deployment

The project is deployed on **Vercel** with zero configuration beyond `vercel.json`.

```bash
# Deploy to production
git push origin main
# Vercel auto-deploys on every push
```

The `vercel.json` configures:
- Serverless function max duration (10s)
- CORS headers on `/api/*` routes

```json
{
  "functions": {
    "api/scores.js": { "maxDuration": 10 }
  }
}
```

---

## Roadmap

- [ ] Mobile responsiveness fixes
- [ ] Search by team name across all years
- [ ] Head-to-head: compare any two nations across history
- [ ] WC2026 group stage bracket predictor
- [ ] User auth (Supabase Auth) — save favourite teams
- [ ] Player stats page connected to card battle deck
- [ ] Loading skeleton cards instead of spinner
- [ ] `og:image` and Twitter card meta tags

---

## Acknowledgements

- Match data: [openfootball/worldcup.json](https://github.com/openfootball/worldcup.json)
- Historical data: [Kaggle — FIFA World Cup Dataset](https://www.kaggle.com/datasets/abecklas/fifa-world-cup)
- Live scores: ESPN (unofficial public API)
- Fonts: [Google Fonts](https://fonts.google.com)

---

<div align="center">
  <p>Built by <a href="https://github.com/AnshumanSharma69-bit">Anushman Sharma</a></p>
  <p>
    <a href="https://world-cup-two-indol.vercel.app">🌐 Live Demo</a> &nbsp;·&nbsp;
    <a href="https://github.com/AnshumanSharma69-bit/world-cup/issues">🐛 Report Bug</a> &nbsp;·&nbsp;
    <a href="https://github.com/AnshumanSharma69-bit/world-cup/issues">✨ Request Feature</a>
  </p>
</div>
