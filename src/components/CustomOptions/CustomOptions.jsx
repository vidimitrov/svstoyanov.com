/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Button from '../Buttons/Button';
import ArrowAvatar from '../Avatars/ArrowAvatar';
import arrowAvatar from '../../assets/img/bot-arrow.svg';

const filterOnlyVisible = (dynamicOption) => {
  return dynamicOption.isVisible();
}

const getNestedNotVisitedTopic = (topics) => {
  for (let topic of topics) {
    if (topic.isVisible()) {
      return topic;
    } else if (topic.topics) {
      let nestedTopic = getNestedNotVisitedTopic(topic.topics);
      if (nestedTopic) {
        return nestedTopic;
      }
    }
  }
}

class CustomOptions extends React.Component {
  constructor(props) {
    super(props);

    let options = [...props.options];
    const { priorityOptions, dynamicOptions } = props;

    if (dynamicOptions) {
      let computedOptions = dynamicOptions.map((dOption, dOptionIndex) => {
        if (dOption.isVisible()) {
          return _.omit(dOption, ['isVisible', 'topics']);
        } else {
          const topics = dOption.topics;
          let firstNestedNotVisitedTopic = getNestedNotVisitedTopic(topics);
          if (firstNestedNotVisitedTopic) {
            return _.omit(firstNestedNotVisitedTopic, ['isVisible', 'topics']);
          } else {
            return null;
          }
        }
      }).filter((dOption) => dOption !== null);

      options.push(...computedOptions);
    }

    if (priorityOptions) {
      options.push(_.head(priorityOptions.filter(filterOnlyVisible)));
    }

    this.state = {
      options,
    };
  }

  render() {
    const {
      options,
    } = this.state;
    const {
      classes,
      triggerNextStep
    } = this.props;
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

    return (
      <Grid container className={classes.customOptionsWrapper} justify="flex-start">
        <Grid item className={classes.avatarWrapper}>
          <ArrowAvatar src={arrowAvatar} />
        </Grid>
        <Grid item className={classes.optionsWrapper}>
          {options.map(renderOption)}
        </Grid>
      </Grid>
    )
  };
}

CustomOptions.propTypes = {
  classes: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  priorityOptions: PropTypes.array,
  dynamicOptions: PropTypes.array,
  triggerNextStep: PropTypes.func.isRequired,
};

export default withStyles(styles)(CustomOptions);
