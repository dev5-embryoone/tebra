# Design System

This document defines the shared visual and interaction standards for the website.  
Use it as the single source of truth for UI decisions across pages and components.

## 1) Principles

- Keep interfaces clean, clear, and content-first.
- Prioritize readability and accessibility over decoration.
- Use consistent spacing, typography, and interaction patterns.
- Build reusable components before one-off styles.

## 2) Design Tokens

Define and maintain tokens centrally (for example in global CSS variables or theme config).

### Color Tokens

- `--color-primary`: Brand/action color
- `--color-primary-hover`: Hover state for primary actions
- `--color-secondary`: Supporting accent
- `--color-bg`: Default page background
- `--color-surface`: Cards/containers background
- `--color-text`: Primary body text
- `--color-text-muted`: Secondary/help text
- `--color-border`: Borders/dividers
- `--color-success`: Positive feedback
- `--color-warning`: Warning states
- `--color-error`: Error states

Example:

```css
:root {
  --color-primary: #0057ff;
  --color-primary-hover: #0049d1;
  --color-secondary: #00a3ff;
  --color-bg: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-text-muted: #475569;
  --color-border: #e2e8f0;
  --color-success: #16a34a;
  --color-warning: #d97706;
  --color-error: #dc2626;
}
```

### Typography Tokens

- `--font-family-base`: Main UI/body font
- `--font-family-heading`: Heading font (can match base)
- `--font-size-xs`: 12px
- `--font-size-sm`: 14px
- `--font-size-md`: 16px
- `--font-size-lg`: 18px
- `--font-size-xl`: 20px
- `--font-size-2xl`: 24px
- `--font-size-3xl`: 30px
- `--line-height-tight`: 1.2
- `--line-height-normal`: 1.5
- `--line-height-relaxed`: 1.7

### Spacing Tokens (8pt scale)

- `--space-1`: 4px
- `--space-2`: 8px
- `--space-3`: 12px
- `--space-4`: 16px
- `--space-5`: 20px
- `--space-6`: 24px
- `--space-8`: 32px
- `--space-10`: 40px
- `--space-12`: 48px
- `--space-16`: 64px

### Radius, Border, Shadow, Motion

- `--radius-sm`: 6px
- `--radius-md`: 10px
- `--radius-lg`: 14px
- `--border-width-default`: 1px
- `--shadow-sm`: Subtle elevation
- `--shadow-md`: Card elevation
- `--shadow-lg`: Modal/dropdown elevation
- `--duration-fast`: 120ms
- `--duration-normal`: 200ms
- `--duration-slow`: 300ms
- `--ease-standard`: `cubic-bezier(0.2, 0, 0, 1)`

## 3) Layout System

- Use a responsive content container (`max-width` with horizontal padding).
- Keep section spacing consistent (for example `48px` mobile, `64px+` desktop).
- Prefer a 12-column layout concept for larger screens.
- Keep line length readable (roughly 60-80 characters for body copy).

## 4) Component Guidelines

### Buttons

- Primary: filled brand button for primary actions.
- Secondary: outlined or soft background for alternative actions.
- Tertiary/Text: minimal style for low-emphasis actions.
- Include clear hover, active, focus-visible, and disabled states.

### Inputs and Forms

- Every input needs a visible label.
- Show helper text when needed.
- Errors should include text guidance, not color only.
- Keep vertical rhythm consistent across fields and buttons.

### Cards

- Use `surface` background with subtle border/shadow.
- Maintain predictable padding and title/body spacing.
- Entire card should not be clickable unless clearly intended.

### Navigation

- Keep top-level nav labels short and scannable.
- Highlight current page/section state.
- Mobile navigation must be keyboard accessible and easy to close.

### Feedback

- Use toasts/alerts for operation feedback.
- Success, warning, and error styles should be consistent everywhere.

## 5) Accessibility Standards

- Follow WCAG 2.2 AA as baseline.
- Maintain contrast ratio (normal text at least 4.5:1).
- Ensure full keyboard navigation for interactive UI.
- Use visible `:focus-visible` styles on all controls.
- Provide alt text for meaningful images.
- Respect reduced motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## 6) Content and Voice

- Prefer plain language and short sentences.
- Use sentence case for most UI labels and headings.
- Keep CTA text action-oriented (for example, "Book a demo", "Get started").
- Avoid jargon unless required for the audience.

## 7) Responsive Breakpoints

Suggested defaults:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Use mobile-first styles and progressively enhance for larger screens.

## 8) Implementation Rules

- Avoid hardcoded values when a token exists.
- Add new reusable patterns as components, not page-specific CSS first.
- Keep component APIs simple and predictable.
- Update this file whenever introducing a new visual pattern or token.

## 9) QA Checklist (Before Merge)

- UI matches tokenized styles (color, spacing, type).
- Hover/focus/disabled states are present and usable.
- Mobile and desktop layouts are validated.
- Keyboard navigation works end-to-end.
- No color-only status messaging.
- New components are documented and reusable.

---

## Changelog

- `v1.0`: Initial design system guide.
