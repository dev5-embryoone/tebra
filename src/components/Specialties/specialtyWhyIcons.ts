/** Inline SVGs for the three “Why Tebra?” columns — shared across specialty pages. */

export type SpecialtyWhyIconKind = "platform" | "automation" | "insights";

export function specialtyWhyIconSvg(kind: SpecialtyWhyIconKind): string {
  const base =
    'class="h-16 w-16 text-tebra-teal-dark/80" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"';
  switch (kind) {
    case "platform":
      return `<svg ${base}><circle cx="32" cy="32" r="18"/><path d="M32 10v8M32 46v8M10 32h8M46 32h8"/><circle cx="32" cy="10" r="3"/><circle cx="32" cy="54" r="3"/><circle cx="10" cy="32" r="3"/><circle cx="54" cy="32" r="3"/><path d="M23 23l-6-6"/><path d="M41 41l6 6"/><path d="M41 23l6-6"/><path d="M23 41l-6 6"/></svg>`;
    case "automation":
      return `<svg ${base}><rect x="14" y="18" width="36" height="28" rx="8"/><path d="M22 32h20"/><path d="M22 26h8"/><path d="M44 26h0"/><circle cx="44" cy="26" r="2"/><path d="M22 38h12"/><path d="M50 46l4 4"/><path d="M14 18l-4-4"/></svg>`;
    case "insights":
      return `<svg ${base}><path d="M14 46V18"/><path d="M14 46h36"/><path d="M22 40l8-10 7 6 9-14"/><circle cx="30" cy="30" r="2"/><circle cx="37" cy="36" r="2"/><circle cx="46" cy="22" r="2"/><path d="M46 22l8 0"/><path d="M54 22l0 8"/></svg>`;
  }
}

export function specialtyWhyIconForIndex(index: number): SpecialtyWhyIconKind {
  if (index === 0) return "platform";
  if (index === 1) return "automation";
  return "insights";
}
