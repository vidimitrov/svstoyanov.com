import styled from 'styled-components';

const yellow = '#F8E71C';

const ValidationLabel = styled.p`
  display: none;

  ${props => props.invalid && css`
    display: block;
    color: ${yellow};
    font-family: 'Space Mono';
    text-align: left;
    margin: 4px 0 20px 70px;
  `}

  ${props => props.hidden && css`
    display: none;
  `}
`;

export default ValidationLabel;
