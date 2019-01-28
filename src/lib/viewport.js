export const isMobile = () => window.matchMedia('(min-width: 0px)').matches
  && window.matchMedia('(max-width: 599px)').matches;

export const isTablet = () => window.matchMedia('(min-width: 600px)').matches
  && window.matchMedia('(max-width: 959px)').matches;

export const isDesktop = () => window.matchMedia('(min-width: 960px)').matches;
