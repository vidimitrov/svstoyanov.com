const OFFSET = 550;
const STRANGE = 1.1;

export const calculateOpacity = el => 1 - (STRANGE - el.getBoundingClientRect().bottom / OFFSET);
