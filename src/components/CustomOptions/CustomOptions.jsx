import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Button from '../Buttons/Button';
import withStyles from 'material-ui/styles/withStyles';
import styles from './styles';

const CustomOptions = ({classes, options, triggerNextStep}) => {
  return (
    <Grid container className={classes.customOptionsWrapper} justify={'flex-start'}>
      {options.map((option, index) =>
        <Button key={index} className={classes.optionsButton} onClick={() => {
          if (option.redirect) {
            window.open(option.redirect, '_blank');
            return;
          }

          if (option.callback) {
            option.callback();
          }

          if (option.trigger) {
            triggerNextStep({
              stepId: option.trigger,
              externalTrigger: true,
            });
          }
        }}>
          {option.label.split(' ').join('_').toUpperCase()}
        </Button>
      )}
    </Grid>
  );
};

CustomOptions.propTypes = {
  classes: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  triggerNextStep: PropTypes.func.isRequired,
};

export default withStyles(styles)(CustomOptions);
