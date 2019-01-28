/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors } from '../../styles';

const Label = styled.span``;
const LabelWrapper = styled.div``;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 24px;
  max-width: 200px;
  box-sizing: border-box;
  padding: 8px 16px 8px 24px;
  margin-bottom: 8px;
  border-top: 1px dotted rgba(255,255,255,0.48);
  border-bottom: 1px dotted rgba(255,255,255,0.48);
  border-left: 1px solid ${colors.white};
  border-right: 1px solid ${colors.white};
  border-radius: 1px;
  font-size: 8px;
  font-weight: bold;
  text-align: center;
  color: ${colors.white};
  line-height: 1.5;
  letter-spacing: 2px;

  @media (min-width: 960px) {
    height: 36px;
    margin-bottom: 16px;
    font-size: 16px;
  }
  
  &:before {
    content: no-close-quote;
    display: block;
    position: absolute;
    top: 6px;
    left: 16px;
    width: 24px;
    height: 24px;
    background-color: rgba(73, 221, 186, 0.12);
  }

  ${props => !props.disabled && css`
    &:hover {
      cursor: crosshair;
      border: 1px solid ${colors.white};

      &:before {
        display: none;
      }

      ${LabelWrapper} {
        background-color: #02A0A7;
        color: ${colors.black};
      };
    }
  `}

  ${props => props.active && css`
    padding: 4px 16px;
    border: 1px solid ${colors.white};

    ${LabelWrapper} {
      background-color: #02A0A7;
      padding: 0 4px;

      ${Label} {
        background-color: ${colors.primary};
        color: ${colors.black};
      };
    }
  `}

  ${props => props.disabled && css`
    opacity: 0.24;
    pointer-events: none;
  `}

  ${props => props.hidden && css`
    display: none;
  `}
`;

const NavigationButton = ({ ...props }) => {
  const {
    children,
    active,
    disabled,
    hidden,
    onClick,
  } = props;

  return (
    <ButtonWrapper
      hidden={hidden}
      disabled={disabled}
      active={active}
      onClick={onClick}
    >
      <LabelWrapper>
        <Label>{children}</Label>
      </LabelWrapper>
    </ButtonWrapper>
  );
};

NavigationButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  hidden: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default NavigationButton;
