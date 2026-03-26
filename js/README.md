# ⚡ js/ — JavaScript README

## Files

### particles.js
Canvas-based particle background system.

**Customization** (edit `CONFIG` object at the top):
```js
const CONFIG = {
  count: 80,         // Number of particles (lower = better performance)
  maxDist: 130,      // Max distance for connecting lines
  speed: 0.4,        // Particle movement speed
  colors: ['#00f5ff', '#3b82f6', '#a855f7'],  // Particle colors
};
```
- Mouse interaction: particles gently repel from cursor
- Pauses when browser tab is hidden (saves CPU)

### animations.js
Contains:
1. **Typing Effect** — Cycles through role phrases in the hero
   ```js
   const phrases = ['Data Scientist', 'AI Innovator', ...];
   ```
   Edit this array to change what gets typed.

2. **Scroll Reveal (AOS-like)** — Elements with `data-aos` attribute fade in when scrolled into view

3. **Skill Bar Animation** — Progress bars animate to their width when visible

4. **Active Nav Link** — Highlights current section in navbar

5. **Stagger Card Entrance** — Project cards appear with staggered delay

### main.js
Core interactivity:
- Navbar scroll effect (adds `.scrolled` class)
- Hamburger menu toggle for mobile
- Project filter system (by category)
- Back-to-top button
- Smooth scroll for anchor links
- Profile image fallback (shows "SV" if image missing)
- Mouse tracking glow on project cards
- Console easter egg 🐣

## No Dependencies
All vanilla JavaScript — no jQuery, no React, no build step needed.
