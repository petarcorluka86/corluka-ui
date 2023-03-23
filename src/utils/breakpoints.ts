export const BREAKPOINTS = {
  sm: 768,
  md: 992,
  lg: 1344,
};

const phone = `(max-width:${BREAKPOINTS.sm}px)`;
const tablet = `(min-width: ${BREAKPOINTS.sm}px) and (max-width:${
  BREAKPOINTS.md - 1
}px)`;
const desktopMedium = `(min-width: ${BREAKPOINTS.md}px) and (max-width:${
  BREAKPOINTS.lg - 1
}px)`;
const desktopLarge = `(min-width: ${BREAKPOINTS.lg}px)`;

const mobile = `(max-width:${BREAKPOINTS.md - 1}px)`;
const desktop = `(min-width:${BREAKPOINTS.md}px)`;

export const queries = {
  phone,
  tablet,
  desktopMedium,
  desktopLarge,
  mobile,
  desktop,
};
