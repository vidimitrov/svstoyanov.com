import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import GridContainer from '../Grid/GridContainer';
import ItemGrid from '../Grid/ItemGrid';
import {colors, typography} from '../../styles';
const ButtonLeftBorder = require('../../assets/img/buttons/button-left-border.svg');
const ButtonRightBorder = require('../../assets/img/buttons/button-right-border.svg');

const styles = {
  button: {
    ...typography.buttons,
    maxWidth: '200px',
    textAlign: 'center',
    color: colors.primary,
  },
  highlight: {
    '&:hover': {
      backgroundColor: colors.primary,
      color: colors.white,
      cursor: 'pointer',
    },
  },
  center: {
    textAlign: 'center',
  },
};

const Button = ({...props}) => {
  const {
    children,
    classes,
  } = props;

  return (
    <div className={classes.button}>
      <GridContainer direction='row' justify='center' alignItems='center'>
        <ItemGrid className={classes.center} xs={1} sm={1} md={1} lg={1}>
          <img src={ButtonLeftBorder} alt='' />
        </ItemGrid>
        <ItemGrid xs={10} sm={10} md={10} lg={10}>
          <p className={classes.highlight}>{children}</p>
        </ItemGrid>
        <ItemGrid className={classes.center} xs={1} sm={1} md={1} lg={1}>
          <img src={ButtonRightBorder} alt='' />
        </ItemGrid>
      </GridContainer>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.any,
};

export default withStyles(styles)(Button);
