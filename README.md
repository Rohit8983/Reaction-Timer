# 🎯 Reaction Tester

Live Demo: https://reaction-tester-0001.netlify.app/

---

## Overview

A quick and fun browser‑based reaction time game that displays a shape and measures how fast you click on it. Ideal for testing and improving your reflexes!

---

## 🕹️ Features

- Randomly sized, colored, and positioned **circles or squares** on screen :contentReference[oaicite:1]{index=1}  
- Measures the time (in ms) between shape appearance and click :contentReference[oaicite:2]{index=2}  
- Tracks your **best reaction time**, **average**, and **click count**  
- Customizable:
  - Number of targets  
  - Timeout duration  
  - Shape types (circle/square)  
  - Color palettes

---

## 🧩 How It Works

1. Press **Start**  
2. A shape appears at a random position after a random delay  
3. Click the shape ASAP  
4. Stats (reaction time, score) update live  
5. Repeat until timeout or end condition

---

## 🛠️ Built With

- HTML, CSS  
- Vanilla JavaScript  
- Deployed with Netlify

---

## ⚙️ Configuration Options

| Option         | Description                                                               | Default |
|----------------|---------------------------------------------------------------------------|---------|
| `shapeCount`   | Number of shapes to click                                                | 20      |
| `timeout`      | Max time (ms) to wait for click before skipping                           | 3000    |
| `shapes`       | Array of allowed shape types (`circle`, `square`)                         | [`circle`] |
| `colors`       | Array of CSS color strings for shapes                                     | e.g. `["red", "blue", "green"]` |
| `sizeRange`    | Min/max size in px                                                        | `[50, 150]` |

_Tip: Update these in your JavaScript config or constants at the top of the script._

---

## 🏃‍♂️ Getting Started

### Clone & Run Locally

```bash
git clone https://github.com/your‑username/reaction‑tester.git
cd reaction‑tester
npm install       # Optional, if using a build tool
open index.html   # Or serve via local HTTP server
