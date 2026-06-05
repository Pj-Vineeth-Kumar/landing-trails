---
name: project-tokens-js
description: lib/tokens.js exports icon gradient and shadow tokens for inline JSX use
metadata:
  type: reference
---

`lib/tokens.js` exports named gradient and shadow tokens for use in inline JSX styles where CSS variables can't be used directly in `background:` shorthand.

Available exports:
- `ICON_GRAD` — blue gradient (default)
- `ICON_GRAD_TEAL` — teal gradient
- `ICON_GRAD_VIOLET` — violet gradient  
- `ICON_GRAD_AMBER` — amber gradient
- `ICON_SHADOW_SM/MD/LG` — blue shadow variants
- `ICON_SHADOW_TEAL_SM/MD/LG` — teal shadow variants
- `ICON_SHADOW_VIOLET_SM/MD/LG` — violet shadow variants

**How to apply:** Import the appropriate ICON_GRAD_* and ICON_SHADOW_*_* variant to match the accent color used for that component's context (teal for data/ops icons, violet for premium/featured icons, amber for alert/callout icons).
