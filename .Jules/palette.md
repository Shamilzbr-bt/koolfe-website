## 2024-05-23 - [Mobile Menu Accessibility]
**Learning:** Many "mobile menu" implementations use a simple state toggle without `aria-expanded` or `aria-controls`. Adding these attributes is a high-value, low-effort "micro-UX" win that significantly helps screen reader users understand the interface state.
**Action:** Always verify mobile menu toggles have `aria-expanded` reflecting the open state and `aria-controls` pointing to the menu container.
