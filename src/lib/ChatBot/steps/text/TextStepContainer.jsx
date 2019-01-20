import styled from 'styled-components';

const TextStepContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: 'flex-start';
  background-color: transparent;
  padding: 0 16px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0;
    width: 60%;
  }
`;

export default TextStepContainer;
