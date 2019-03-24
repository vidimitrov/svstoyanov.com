import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { animations } from '../../../styles';

const ButtonWrapper = styled(Grid)`
  display: flex;
  align-items: center;
  animation: ${animations.fadeIn} 250ms ease-out;
`;

export default ButtonWrapper;
