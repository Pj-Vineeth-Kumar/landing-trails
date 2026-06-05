/* Shared design tokens for inline JSX styles.
 * CSS-side equivalent: --icon-grad in :root (global.css).
 * Keep in sync if the gradient ever changes. */

export const ICON_GRAD = 'linear-gradient(135deg, var(--blue-bright) 0%, var(--blue) 100%)';
export const ICON_SHADOW_SM = '0 1px 4px var(--blue-a16)';
export const ICON_SHADOW_MD = '0 calc(2px * var(--ui-scale)) calc(8px * var(--ui-scale)) var(--blue-a16)';
export const ICON_SHADOW_LG = '0 calc(4px * var(--ui-scale)) calc(12px * var(--ui-scale)) var(--blue-a24)';
