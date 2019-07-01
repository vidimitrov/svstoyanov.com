import styled from 'styled-components';
import { breakpoints } from '../../styles';

const ImageStep = styled.img`
  margin: 40px 0;
  width: 100%;
  /* Fixed height for mobile, because of the scroll problem  */
  height: 200px;

  ${breakpoints.md} {
    /* Fixed height for desktop, because of the scroll problem  */
    height: 500px;
  }
`;

export default ImageStep;
