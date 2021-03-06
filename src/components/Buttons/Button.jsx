/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { colors, breakpoints, animations } from '../../styles';

const borderFontFamily = '"Space Mono"';

const ButtonText = styled.span`
  font-size: 12px;
  font-weight: bold;
  line-height: 21px; 
  padding: 0 8px;
  color: ${colors.primary};
  letter-spacing: .5px;
  line-height: 1.5;
  transform: none;
  transition: background-color 250ms ease-in, color 250ms ease-in;

  ${breakpoints.md} {
    font-size: 16px;
    margin: 0 16px;
  }
`;

const ButtonOutline = styled.div`
  display: flex;
  align-items: center;

  &:before, &:after {
    color: ${colors.primary};
    font-family: ${borderFontFamily};
    font-size: 32px;
  }

  &:before {
    content: "[";
  }

  &:after {
    content: "]";
  }
`;

const Wrapper = styled.div`
  margin: 0;
  position: relative;
  opacity: 0;
  height: 37px;
  transform: scaleX(0);
  animation: ${animations.scaleIn} 200ms ease-in-out;
  animation-fill-mode: forwards;

  &:nth-child(2) {
    animation-delay: .2s;
  }
  &:nth-child(3) {
    animation-delay: .4s;
  }

  &:before {
    content: no-close-quote;
    display: block;
    position: absolute;
    top: 4px;
    left: 18px;
    width: 24px;
    height: 24px;
    background-color: #02a0a7;
    opacity: 0.12;
  }

  ${breakpoints.md} {
    margin: 0;

    &:before {
      top: 5px;
      left: 32px;
      width: 24px;
      height: 24px;
    }
  }

  &:hover {
    &:before {
      display: none;
    }
    
    ${ButtonOutline} {
      &:before, &:after {
        transition: transform 150ms ease-in-out;
        transform: scale(1.1);
      }
    }

    ${ButtonText} {
      background-color: ${colors.primary};
      color: ${colors.black};
      cursor: crosshair;
    }
  }

  ${props => props.navigational && css`
    &:before {
      display: none;
    }

    &:hover {
      ${ButtonText} {
        background-color: ${colors.white};
        color: ${colors.black};
        cursor: crosshair;
      }
    }

    ${ButtonOutline} {
      &:before, &:after {
        color: ${colors.white};
      }
    }

    ${ButtonText} {
      color: ${colors.white};
    }
  `}
`;

const Button = ({ ...props }) => {
  const {
    children,
    onClick,
    navigational,
  } = props;

  return (
    <Wrapper navigational={navigational} onClick={onClick}>
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
  navigational: PropTypes.bool,
};

export default Button;
