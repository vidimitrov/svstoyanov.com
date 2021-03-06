import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors } from '../../styles';

const OffOption = styled.div`
  position: relative; 
  text-align: left;
  color: ${colors.lighterGray};
  transition: color 250ms ease-in;

  ${props => props.active && css`
    color: ${colors.white};
    font-weight: bold;
  `}

  &:after {
    content: '';
    display: block;
    width: 28px;
    height: 2px;
    box-sizing: border-box;
    border: 1px solid ${colors.lighterGray};
    position: absolute;
    top: 4px;
    left: 39px;
    transition: border 250ms ease-in;

    ${props => props.active && css`
      border: 1px solid ${colors.primary};
    `}
  }
`;

const OnOption = styled.div`
  position: relative;
  text-align: right;
  color: ${colors.lighterGray};
  transition: color 250ms ease-in;

  ${props => props.active && css`
    color: ${colors.white};
    font-weight: bold;
  `}

  &:before {
    content: '';
    display: block;
    width: 25px;
    height: 2px;
    box-sizing: border-box;
    border: 1px solid ${colors.lighterGray};
    position: absolute;
    top: 4px;
    left: -35px;
    transition: border 250ms ease-in;

    ${props => props.active && css`
      border: 1px solid ${colors.primary};
    `}
  }
`;

const Toggle = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  min-width: 120px;
  max-width: 120px;

  &:hover {
    cursor: pointer;
  }
`;

const Label = styled.span`
  margin-right: 24px;
  position: relative;

  &:before {
    content: no-close-quote;
    display: block;
    position: absolute;
    top: -10px;
    left: -8px;
    width: 32px;
    height: 32px;
    background-color: #fff;
    opacity: 0.12;
  }
`;

const SoundControlWrapper = styled.div`
  display: flex;
  font-family: 'Space Mono';
  font-size: 12px;
  letter-spacing: 1.5px;
`;

const SoundControl = (props) => {
  const {
    muted,
    onClick,
  } = props;

  return (
    <SoundControlWrapper>
      <Label>SOUND</Label>
      <Toggle onClick={onClick}>
        <OffOption active={muted}>OFF</OffOption>
        <OnOption active={!muted}>ON</OnOption>
      </Toggle>
    </SoundControlWrapper>
  );
};

SoundControl.propTypes = {
  muted: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SoundControl;
