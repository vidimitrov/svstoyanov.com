import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors } from '../../styles';

const OnOption = styled.div`
  position: relative; 
  text-align: left;
  color: ${colors.lighterGray};

  ${props => props.active && css`
    color: ${colors.white};
  `}

  &:after {
    content: '';
    display: block;
    width: 26px;
    height: 2px;
    box-sizing: border-box;
    border: 1px solid ${colors.lighterGray};
    position: absolute;
    top: 7px;
    left: 30px;

    ${props => props.active && css`
      border: 1px solid ${colors.primary};
    `}
  }
`;

const OffOption = styled.div`
  position: relative;
  text-align: right;
  color: ${colors.lighterGray};

  ${props => props.active && css`
    color: ${colors.white};
  `}

  &:before {
    content: '';
    display: block;
    width: 25px;
    height: 2px;
    box-sizing: border-box;
    border: 1px solid ${colors.lighterGray};
    position: absolute;
    top: 7px;
    left: -35px;

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
`;

const Label = styled.span`
  margin-right: 40px;
`;

const SoundControlWrapper = styled.div`
  display: flex;
  max-width: 260px;
  font-family: 'Space Mono';
  font-size: 14px;
  letter-spacing: 1.2px;
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
        <OnOption active={!muted}>ON</OnOption>
        <OffOption active={muted}>OFF</OffOption>
      </Toggle>
    </SoundControlWrapper>
  );
};

SoundControl.propTypes = {
  muted: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SoundControl;
