import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import bullet from '../../../assets/img/bullet.svg';

const Wrapper = styled.div`
  padding-left: 60px;
  font-family: 'Space Mono';
  font-size: 20px;
`;
const Title = styled.span`
  display: inline-block;
  padding: 0 8px;
  background-color: #fff;
  color: #000;
  font-size: 48px;
  line-height: 1.5;
  letter-spacing: 2px;
  margin-top: 32px;
`;
const Image = styled.img`
  width: 100%;
  margin-top: 32px;
`;
const Bullet = styled(Grid)`
  align-items: baseline;
  justify-content: center;
  display: flex;
`;
const Item = styled(Grid)`
  && {
    margin-top: 32px;
  }
`;

const renderItem = (item) => {
  let renderedItem = null;

  if (item.type) {
    if (item.type === 'text') {
      renderedItem = (
        <Item item key={item.key}>
          <div>{item.content}</div>
        </Item>
      );
    } else if (item.type === 'bullet') {
      renderedItem = (
        <Item container item key={item.key}>
          <Bullet item xs={1}>
            <img src={bullet} alt="" />
          </Bullet>
          <Grid item xs={11}>{item.content}</Grid>
        </Item>
      );
    } else if (item.type === 'image') {
      renderedItem = (
        <Item item key={item.key}>
          <Image src={item.imageSrc} alt="" />
        </Item>
      );
    }
  }

  return renderedItem;
};

const ProblemSection = ({ items }) => (
  <Wrapper>
    <Title>Problem</Title>
    <Grid container>
      {items.map(item => renderItem(item))}
    </Grid>
  </Wrapper>
);

ProblemSection.propTypes = {
  items: PropTypes.any,
};

export default ProblemSection;
