export const componentPositions = ['top', 'right', 'bottom', 'left'] as const;
export const componentShapes = ['circle', 'square'] as const;
export const componentSizes = ['lg', 'md', 'sm', 'xs'] as const;
export const componentStatuses = ['info', 'success', 'warning', 'error'] as const;
export const brandColors = ['neutral', 'primary', 'secondary', 'accent'] as const;
export const componentColors = [...brandColors, 'ghost', ...componentStatuses] as const;
export const bgColors = ['base-100', 'base-200', 'base-300', 'neutral'] as const;
export const defaultTheme = 'light';
export const DEFAULT_THEMES = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
] as const;
