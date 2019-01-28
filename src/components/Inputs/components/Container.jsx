import styled, { css } from 'styled-components';
import Grid from '@material-ui/core/Grid';

const Container = styled(Grid)`
  margin: 32px 0 0;

  ${props => props.valid === 'true' && css`
    margin: 32px 0;
  `}
`;

export default Container;
