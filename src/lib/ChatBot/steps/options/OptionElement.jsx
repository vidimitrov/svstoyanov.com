import styled from 'styled-components';
import defaultTheme from '../../theme';

const OptionElement = styled.a`
  background: ${({ theme }) => theme.botBubbleColor};
  border-radius: 22px;
  color: ${({ theme }) => theme.botFontColor};
  display: inline-block;
  font-size: 14px;
  padding: 12px;

  &:hover { opacity: .7; }
`;

OptionElement.defaultProps = {
  theme: defaultTheme,
};

export default OptionElement;
