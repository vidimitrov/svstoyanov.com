import styled, { css } from 'styled-components';
import Grid from '@material-ui/core/Grid';
import {breakpoints} from '../../../styles';

const Container = styled(Grid)`
  margin: 16px 0 0;

  ${breakpoints.md} {
    margin: 32px 0 0;
  }

  ${props => props.valid === 'true' && css`
    margin: 16px 0 0;

    ${breakpoints.md} {
    margin: 32px 0 0;
  }
  `}
`;

export default Container;
