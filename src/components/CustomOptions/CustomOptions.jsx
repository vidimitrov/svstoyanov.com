/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '../Buttons/Button';
import styles from './styles';

class CustomOptions extends React.Component {

  render() {
    const { classes, options, dynamicOptions, triggerNextStep } = this.props;
    const filterOnlyVisible = (dynamicOption) => {
      return dynamicOption.isVisible();
    }
    const renderOption = (option, index) => (
      <Button
        key={index}
        className={classes.optionsButton}
        onClick={() => {
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
        }}
      >
        {option.label.split(' ').join('_').toUpperCase()}
      </Button>
    );
    let dynamicOption;

    if (dynamicOptions) {
      dynamicOption = _.head(dynamicOptions.filter(filterOnlyVisible));
    }

    return (
      <Grid container className={classes.customOptionsWrapper} justify="flex-start">
        {options.map(renderOption)}
        {dynamicOption && renderOption(dynamicOption, 10)}
      </Grid>
    )
  };
}

CustomOptions.propTypes = {
  classes: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  dynamicOptions: PropTypes.array,
  triggerNextStep: PropTypes.func.isRequired,
};

export default withStyles(styles)(CustomOptions);
