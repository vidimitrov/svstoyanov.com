import styled from 'styled-components';
import { breakpoints } from '../../../../styles';

const ChatStepContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 0 16px;
  margin: 0 auto;

  ${breakpoints.md} {
    padding: 0;
    width: 60%;
  }
`;

export default ChatStepContainer;
