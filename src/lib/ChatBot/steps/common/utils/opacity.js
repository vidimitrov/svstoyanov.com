const LIMIT = 450;

export const calculateOpacity = el => 1 - (0.8 - el.getBoundingClientRect().y / LIMIT);
