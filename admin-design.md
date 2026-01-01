# Retailfluencer Design System

A complete design theme reference for building landing pages and marketing sites with the Retailfluencer aesthetic.

---

## Color Palette

### Background Colors
```css
--bg-primary: #0a0a0f;     /* Deep black - main page background */
--bg-secondary: #12121a;    /* Slightly lighter for cards */
--bg-tertiary: #1a1a2e;     /* Tertiary surfaces, hover states */
```

### Text Colors
```css
--text-primary: #ffffff;    /* Main headings */
--text-secondary: #e5e7eb;  /* Body text */
--text-muted: #9ca3af;      /* Subtitles, descriptions */
--text-dim: #6b7280;        /* Timestamps, hints */
--text-placeholder: #4b5563; /* Input placeholders */
```

### Accent Colors (Purple Theme)
```css
--accent-primary: #7c3aed;   /* Primary purple (Violet 600) */
--accent-secondary: #a855f7; /* Light purple (Purple 500) */
--accent-gradient: linear-gradient(135deg, #7c3aed, #a855f7);
```

### Semantic Colors
```css
--success: #10b981;    /* Green - Emerald 500 */
--success-bg: rgba(16, 185, 129, 0.15);
--success-border: rgba(16, 185, 129, 0.3);

--warning: #f59e0b;    /* Amber 500 */
--error: #ef4444;      /* Red 500 */
--error-bg: rgba(239, 68, 68, 0.1);
--error-border: rgba(239, 68, 68, 0.2);
```

### Border & Surface Effects
```css
--border: rgba(255, 255, 255, 0.06);
--border-hover: rgba(255, 255, 255, 0.12);
--border-accent: rgba(124, 58, 237, 0.3);
--surface-glass: rgba(255, 255, 255, 0.03);
--surface-glass-hover: rgba(255, 255, 255, 0.05);
```

---

## Typography

### Font Family
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
```

### Font Sizes
| Element | Size | Weight | Letter-spacing |
|---------|------|--------|----------------|
| H1 (Hero) | 3.5rem | 800 | -0.02em |
| H2 | 2rem | 700 | -0.02em |
| H3 | 1.25rem | 600 | normal |
| Body | 1rem | 400 | normal |
| Subtitle | 1.25rem | 400 | normal |
| Small | 0.875rem | 500 | normal |
| Caption | 0.75rem | 400 | normal |

### Gradient Text Effect
```css
.gradient-text {
  background: linear-gradient(135deg, #7c3aed, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## Component Patterns

### Glass Card
```css
.card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 1rem;
  padding: 1.5rem;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
}

.card:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.12);
}
```

### Primary Button
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #7c3aed, #a855f7);
  border: none;
  border-radius: 0.75rem;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);
}
```

### Secondary Button
```css
.btn-secondary {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 500;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.12);
}
```

### Ghost Button
```css
.btn-ghost {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #9ca3af;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.3);
}
```

### Input Field
```css
input {
  width: 100%;
  padding: 0.875rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  color: #fff;
  font-size: 1rem;
  transition: all 0.2s ease;
}

input:focus {
  outline: none;
  border-color: #7c3aed;
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.2);
}

input::placeholder {
  color: #4b5563;
}
```

### Badge / Tag
```css
.badge {
  display: inline-block;
  background: rgba(124, 58, 237, 0.2);
  color: #a855f7;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
}

.badge-success {
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #34d399;
}
```

---

## Background Effects

### Hero Glow
```css
.hero {
  position: relative;
  background: radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.15) 0%, transparent 60%);
}

/* Alternative with overlay pseudo-element */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 30% 20%, rgba(124, 58, 237, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
  pointer-events: none;
}
```

### Page Gradient Background
```css
.page {
  background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%);
}
```

### Centered Glow Effect
```css
.glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(124, 58, 237, 0.15) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}
```

---

## Animations

### Float Animation (for cards)
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.floating {
  animation: float 6s ease-in-out infinite;
}
```

### Spinner
```css
.spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Fade-in with Fly
```css
/* Use with Svelte transitions or CSS */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeInUp 0.4s ease forwards;
}
```

---

## Shadows

```css
/* Subtle card shadow */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

/* Hover shadow */
box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);

/* Purple glow shadow (buttons, featured elements) */
box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);

/* Deep shadow for modals/overlays */
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
```

---

## Border Radius Scale

```css
--radius-sm: 0.375rem;   /* 6px - chips, small tags */
--radius-md: 0.5rem;     /* 8px - small buttons */
--radius-lg: 0.75rem;    /* 12px - buttons, inputs, cards */
--radius-xl: 1rem;       /* 16px - larger cards */
--radius-2xl: 1.5rem;    /* 24px - sections, modals */
--radius-full: 9999px;   /* Pill shape */
```

---

## Glassmorphism Elements

### Floating Stat Card
```css
.floating-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #7c3aed, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  color: #9ca3af;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
```

---

## Key Design Principles

1. **Dark-first**: All designs start with `#0a0a0f` as the base
2. **Purple accent**: Use sparingly for CTAs, highlights, and gradients
3. **Glassmorphism**: Semi-transparent cards with blur for depth
4. **Subtle borders**: Low-opacity white borders create separation
5. **Generous spacing**: Plenty of whitespace, especially in hero sections
6. **Micro-animations**: Subtle hover transforms and transitions
7. **Gradient text**: For hero headlines and featured numbers

---

## Quick Start CSS

```css
/* Copy this base to get started */

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg-primary: #0a0a0f;
  --accent: #7c3aed;
  --accent-light: #a855f7;
}

html {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
}

body {
  background: var(--bg-primary);
  color: #e5e7eb;
  min-height: 100vh;
}

/* Add Inter font via Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
```

---

## Logo

The Retailfluencer logo uses the "◈" character with a gradient:

```html
<div class="logo">
  <span class="logo-icon">◈</span>
  <span class="logo-text">Retailfluencer</span>
</div>
```

```css
.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  font-size: 2rem;
  background: linear-gradient(135deg, #7c3aed, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.02em;
}
```

