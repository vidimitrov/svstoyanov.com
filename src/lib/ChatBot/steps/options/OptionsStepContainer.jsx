import styled from 'styled-components';
import { breakpoints } from '../../../../styles';

const OptionsStepContainer = styled.div`
  background-color: transparent;
  padding: 0 16px;
  margin: 0 auto;

  ${breakpoints.sm} {
    padding: 0;
    width: 60%;
  }
`;

export default OptionsStepContainer;
