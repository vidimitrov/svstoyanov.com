/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { colors } from '../../styles';

const borderFontFamily = '"Space Mono"';
const borderFontSize = '28px';

const ButtonText = styled.span`
  font-size: 16px;
  line-height: 21px;
  margin: 0 16px;
  font-weight: bold;
  color: ${colors.primary};
  letter-spacing: 2px;
  line-height: 1.5;
  transform: none;
`;

const ButtonOutline = styled.div`
  display: flex;
  align-items: center;

  &:before, &:after {
    color: ${colors.primary};
    font-family: ${borderFontFamily};
    font-size: ${borderFontSize};
  }

  &:before {
    content: "[";
  }

  &:after {
    content: "]";
  }
`;

const Wrapper = styled.div`
  margin: 0 0 24px 12px;
  position: relative;

  &:before {
    content: no-close-quote;
    display: block;
    position: absolute;
    top: 2px;
    left: 24px;
    width: 24px;
    height: 24px;
    background-color: #02a0a7;
    opacity: 0.12;
}

  &:hover {
    &:before {
      display: none;
    }
    
    ${ButtonOutline} {
      &:before, &:after {
        transition: transform 100ms ease-in-out;
        transform: scale(1.3);
      }
    }

    ${ButtonText} {
      background-color: ${colors.primary};
      color: ${colors.black};
      cursor: crosshair;
    }
  }
`;

const Button = ({ ...props }) => {
  const {
    children,
    onClick,
  } = props;

  return (
    <Wrapper onClick={onClick}>
      <Grid container direction="row" alignItems="center">
        <ButtonOutline>
          <ButtonText>{children}</ButtonText>
        </ButtonOutline>
      </Grid>
    </Wrapper>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.any,
  onClick: PropTypes.func,
};

export default Button;
