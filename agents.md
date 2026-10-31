# Project Guide

## Architecture

This is a framework-free static Netlify site.

- `index.html`: semantic page structure and French narrative content
- `styles.css`: complete visual system, responsive layouts, and animations
- `script.js`: point-of-view switching, relationship interaction, chapter dialog, and scroll reveals
- `assets/`: production image assets used by the page

## Conventions

- Keep all visitor-facing content in French.
- Use semantic HTML and preserve keyboard-accessible controls.
- Reuse the CSS custom properties defined in `:root` for colors and typography.
- Prefer transform and opacity for motion and maintain the reduced-motion fallback.
- Keep the project dependency-free unless a new feature clearly requires otherwise.

## Design Decisions

The supplied character sheet is intentionally reused through careful cropping rather than duplicated derivative files. The visual direction contrasts warm bronze tones for Kaien with pale dawn tones for Haru. JavaScript enhances the experience but the main story remains readable without interaction.
