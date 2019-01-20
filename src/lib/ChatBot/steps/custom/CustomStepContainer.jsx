import styled from 'styled-components';

const ChatStepContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 0 16px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0;
    width: 60%;
  }
`;

export default ChatStepContainer;
