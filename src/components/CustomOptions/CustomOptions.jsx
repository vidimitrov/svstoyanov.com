import React from 'react';
import PropTypes from 'prop-types';
import SimpleButton from '../Buttons/SimpleButton';
import withStyles from 'material-ui/styles/withStyles';
import styles from './styles';

const CustomOptions = ({classes, options}) => {
  return (
    <div className={classes.customOptionsWrapper}>
      {options.map((option, index) =>
        <SimpleButton key={index} onClick={() => {
          window.open(option.redirect, '_blank');
        }}>
          {option.label}
        </SimpleButton>
      )}
    </div>
  );
};

CustomOptions.propTypes = {
  classes: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
};

export default withStyles(styles)(CustomOptions);
