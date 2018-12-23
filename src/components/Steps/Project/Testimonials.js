import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const Wrapper = styled.div`
  font-family: 'Space Mono';
  font-size: 20px;
`;
const Title = styled.span`
  display: inline-block;
  padding: 0 8px;
  background-color: #f8e71c;
  color: #000;
  font-size: 48px;
  line-height: 1.5;
  letter-spacing: 2px;
  margin-top: 32px;
  margin-left: 60px;
`;
const Content = styled(Grid)`
  margin-top: 32px;
`;
const ImageWrapper = styled(Grid)`
  display: flex;
  align-items: flex-end;
`;

const Testimonials = ({ title, content, avatarSrc }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Content container>
      <ImageWrapper item xs={1}>
        <img src={avatarSrc} width={40} alt="" />
      </ImageWrapper>
      <Grid item xs={11}>
        <div>{content}</div>
      </Grid>
    </Content>
  </Wrapper>
);

Testimonials.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  avatarSrc: PropTypes.string,
};

export default Testimonials;
