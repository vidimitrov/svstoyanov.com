import styled from 'styled-components';

const FloatButton = styled.a`
  align-items: center;
  cursor: pointer;
  background: ${({ theme }) => theme.headerBgColor};
  bottom: 32px;
  border-radius: 100%;
  display: flex;
  fill: ${({ theme }) => theme.headerFontColor};
  height: 56px;
  justify-content: center;
  position: fixed;
  right: 32px;
  transform: ${props => (props.opened ? 'scale(0)' : 'scale(1)')};
  transition: transform .3s ease;
  width: 56px;
  z-index: 999;
`;

FloatButton.defaultProps = {
  theme: {
    headerBgColor: '#6e48aa',
    headerFontColor: '#fff',
  },
};

export default FloatButton;
