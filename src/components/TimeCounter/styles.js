import {breakpoints} from '../../styles';

export default {
  key: {
    fontFamily: 'Space Mono',
    padding: '4px 8px',
    fontSize: '8px',
    letterSpacing: '2px',
    color: 'rgba(255,255,255,0.74)',
    position: 'relative',
    textTransform: 'uppercase',
    margin: '12px 0',
    '&:before': {
      content: 'no-close-quote',
      display: 'block',
      position: 'absolute',
      top: '2px',
      left: '3px',
      width: '12px',
      height: '12px',
      backgroundColor: 'rgba(255,255,255, 0.12)',

      [breakpoints.md]: {
        width: '24px',
        height: '24px',
        top: '-4px',
        left: '0px',
      }
    },
  },
};
