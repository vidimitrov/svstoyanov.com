import styled, { css } from 'styled-components';
import Line from './Line';
import { breakpoints } from '../../../styles';

const InputWrapper = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  margin-bottom: 16px;

  ${props => props.rendered && css`
    ${Line} {
      transform: scaleX(1);
    }
  `}

  ${breakpoints.md} {
    margin-bottom: 0px;
  }
`;

export default InputWrapper;
