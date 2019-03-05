import { isMobile } from '../../../../viewport';

const OFFSET = isMobile() ? 250 : 550;
const STRANGE = 1.1;

// export const calculateOpacity = el => 1 - (STRANGE - el.getBoundingClientRect().bottom / OFFSET);

export const calculateOpacity = el => 1;
