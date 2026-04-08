# Design Brainstorm: NRMA Next-Gen Contact Centre AI Guide

## Approach A — "Command Intelligence"
<response>
<text>
**Design Movement:** Dark-mode enterprise dashboard meets editorial intelligence briefing

**Core Principles:**
- Information density without clutter — every pixel earns its place
- Authoritative but approachable — this is a briefing for decision-makers, not developers
- Structured hierarchy — the eye always knows where to go next

**Color Philosophy:**
Deep navy (#0A1628) as the primary canvas, with NRMA's signature red (#E3001B) as the sole accent. Warm off-white (#F5F0E8) for body text. Subtle slate-blue (#1E3A5F) for card surfaces. The palette communicates trust, urgency, and precision.

**Layout Paradigm:**
Left-anchored sidebar navigation with a wide content area. Hero section uses a full-bleed dark banner with a typographic headline and a live search bar. Vendor cards are displayed in a masonry-style grid with category tags. A sticky filter bar sits below the hero.

**Signature Elements:**
- Thin horizontal rule dividers with category labels (like a newspaper)
- Glowing red accent dots on "Why NRMA" callouts
- Monospace font for vendor category tags

**Interaction Philosophy:**
Filtering is instant and animated. Clicking a vendor card expands it in-place (accordion style) rather than navigating away. Search highlights matching text in real-time.

**Animation:**
Fade-up entrance for cards on scroll. Smooth filter transitions with layout animation. Hover state lifts cards with a subtle shadow bloom.

**Typography System:**
- Display: "Playfair Display" — authoritative, editorial
- Body: "Source Sans 3" — clean, readable at small sizes
- Mono: "JetBrains Mono" — for tags and technical labels
</text>
<probability>0.08</probability>
</response>

## Approach B — "Signal & Noise"
<response>
<text>
**Design Movement:** Swiss International Typographic Style meets modern SaaS

**Core Principles:**
- Grid discipline — strict 12-column grid, nothing breaks the rule
- Typography as the primary visual element
- Functional color — color only used to communicate meaning, never decoration

**Color Philosophy:**
Pure white canvas (#FFFFFF), charcoal text (#1A1A1A), and a single accent of electric teal (#00B8A9). Category colors are muted pastels (soft amber, sage, dusty blue) to distinguish vendor types without visual noise.

**Layout Paradigm:**
Full-width top navigation with a centered hero. Vendor cards arranged in a strict 3-column grid. A floating filter panel on the left. The "Use Case Mapping" section uses a large interactive table.

**Signature Elements:**
- Bold oversized section numbers (01, 02, 03) in the background
- Thin teal underlines on hover states
- Clean tag pills with category colors

**Interaction Philosophy:**
Minimalist — the interface gets out of the way. Filtering collapses non-matching cards with a smooth height animation. No modals; everything is inline.

**Animation:**
Stagger-in animation for the initial card grid. Smooth opacity transitions on filter. Subtle scale on card hover.

**Typography System:**
- Display: "DM Serif Display" — elegant contrast
- Body: "DM Sans" — modern, geometric, highly legible
- Tags: "Space Mono" — technical feel
</text>
<probability>0.07</probability>
</response>

## Approach C — "Field Intelligence" (SELECTED)
<response>
<text>
**Design Movement:** Premium analyst report meets interactive product directory — think McKinsey meets Linear.app

**Core Principles:**
- Warm professionalism — feels like a well-designed internal tool, not a marketing site
- Layered information — overview first, depth on demand
- NRMA brand-adjacent without being a corporate template

**Color Philosophy:**
Warm off-white (#FAF8F5) as the page background, deep charcoal (#1C1917) for text. NRMA red (#E3001B) used sparingly for accents and CTAs. Slate (#334155) for secondary text. Card backgrounds in pure white with subtle warm shadows. The palette feels like a premium printed report brought to life.

**Layout Paradigm:**
Asymmetric two-column layout for the hero (text left, search/filter right). Vendor cards in a responsive 2-3 column grid. A sticky top bar with category filter chips. A dedicated "Use Case Matrix" section with a visual table. Sidebar-free — clean, document-like reading experience.

**Signature Elements:**
- Warm paper-like card texture (very subtle noise)
- Red left-border accent on "Why NRMA" callouts
- Category badges with distinct muted colors (not all the same)

**Interaction Philosophy:**
Cards are scannable at a glance. Clicking a vendor opens a slide-over panel (right side) with full detail, keeping the grid visible. Search is live and highlights matches. Filter chips animate in/out.

**Animation:**
Gentle fade-up on scroll for sections. Slide-in from right for the detail panel. Smooth chip selection with a color fill transition.

**Typography System:**
- Display: "Lora" (serif) — warm, authoritative, editorial
- Body: "Inter" — clean and legible (used only for body, not headings)
- Tags: "IBM Plex Mono" — technical precision for category labels
</text>
<probability>0.09</probability>
</response>

## Selected Approach: C — "Field Intelligence"

Warm off-white canvas, Lora serif headings, charcoal body text, NRMA red accents. Asymmetric hero, grid vendor cards, slide-over detail panel, sticky filter chips. Premium analyst report aesthetic.
