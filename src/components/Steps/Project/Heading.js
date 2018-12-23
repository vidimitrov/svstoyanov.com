import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Image from '../Image';

const Wrapper = styled(Grid)`
  margin-top: 32px;
`;

const ImageWrapper = styled(Grid)`
  && {
    max-width: 60%;
    margin: 0 auto;
  }
`;

const Key = styled.div`
  font-weight: bold;
`;
const Info = styled(Grid)`
  font-family: 'Space Mono';
  padding-left: 72px;
`;

const Heading = ({ imageSrc, project }) => (
  <Wrapper container>
    <Info item xs={2}>
      <div>
        <img src={project.icon} width={36} alt="" />
      </div>
      <div>
        <Key>Project name:</Key>
        {' '}
        {project.name}
      </div>
      <div>
        <Key>Duration:</Key>
        {' '}
        {project.duration}
      </div>
      <div>
        <Key>Role:</Key>
        {' '}
        {project.role}
      </div>
    </Info>
    <ImageWrapper item xs={8}>
      <Image src={imageSrc} />
    </ImageWrapper>
    <Grid item xs={2} />
  </Wrapper>
);

Heading.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  project: PropTypes.any.isRequired,
};

export default Heading;
