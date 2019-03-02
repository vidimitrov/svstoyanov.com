import styled from 'styled-components';
import { breakpoints } from '../../../../styles';

const TextStepContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: 'flex-start';
  background-color: transparent;
  padding: 0 16px;
  margin: 0 auto;

  ${breakpoints.sm} {
    padding: 0;
    width: 60%;
  }
`;

export default TextStepContainer;
