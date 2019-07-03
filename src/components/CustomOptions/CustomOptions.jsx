/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Button from '../Buttons/Button';
import ArrowAvatar from '../Avatars/ArrowAvatar';
import arrowAvatar from '../../assets/img/bot-arrow.svg';
import { breakpoints, colors } from '../../styles';

export const SelectedOption = styled.div`
  font-family: "Space Mono";
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${colors.primary};
  max-width: 100%;
  text-transform: uppercase;

  ${breakpoints.sm} {
    font-size: 16px;
  }

  ${breakpoints.md} {
    font-size: 16px;
  }
`;

const filterOnlyVisible = dynamicOption => dynamicOption.isVisible();

/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
function getNestedNotVisitedTopic(topics) {
  for (const topic of topics) {
    if (topic.isVisible()) {
      return topic;
    }

    if (topic.topics) {
      const nestedTopic = getNestedNotVisitedTopic(topic.topics);
      if (nestedTopic) {
        return nestedTopic;
      }
    }
  }
}

class CustomOptions extends React.Component {
  constructor(props) {
    super(props);

    const options = [...props.options];
    const { priorityOptions, dynamicOptions } = props;

    // Dynamic Options - support nested flows and shows only the not visited options
    if (dynamicOptions) {
      const computedOptions = dynamicOptions.map((dOption) => {
        if (dOption.isVisible()) {
          return _.omit(dOption, ['isVisible', 'topics']);
        }
        const { topics } = dOption;

        if (topics) {
          const firstNestedNotVisitedTopic = getNestedNotVisitedTopic(topics);
          if (firstNestedNotVisitedTopic) {
            return _.omit(firstNestedNotVisitedTopic, ['isVisible', 'topics']);
          }
        }

        return null;
      }).filter(dOption => dOption !== null);

      options.push(...computedOptions);
    }

    // Priority Options - get the first not visited option if any
    if (priorityOptions) {
      const pOption = _.head(priorityOptions.filter(filterOnlyVisible));

      if (pOption) {
        options.push(pOption);
      }
    }

    this.state = {
      options,
      selectedOption: null,
    };
  }

  render() {
    const {
      options,
      selectedOption,
    } = this.state;
    const {
      classes,
      triggerNextStep,
      showProjectInfo,
    } = this.props;

    const renderOption = (option, index) => (
      <Button
        key={index}
        onClick={() => {
          this.setState({
            selectedOption: option,
          });

          if (option.redirect) {
            window.open(option.redirect, '_blank');
          }

          if (option.callback) {
            option.callback();
          }

          if (option.projectDetails) {
            showProjectInfo(option);
          }

          if (option.trigger) {
            triggerNextStep({
              stepId: option.trigger,
              externalTrigger: true,
            });
          }
        }}
      >
        {option.label.toUpperCase()}
      </Button>
    );
    const renderSelectedOption = option => (
      <SelectedOption>{option.label}</SelectedOption>
    );
    const renderOptions = (optionsToRender) => {
      const groupedOptions = _.chunk(optionsToRender, 2);

      return groupedOptions.map((lineOfOptions, idx) => (
        <div className={classes.lineOfOptions} key={idx}>
          {lineOfOptions.map(renderOption)}
        </div>
      ));
    };

    return (
      <Grid container className={classes.customOptionsWrapper} justify="flex-start">
        <Grid item className={classes.avatarWrapper}>
          <ArrowAvatar src={arrowAvatar} />
        </Grid>
        <Grid item className={classes.optionsWrapper}>
          {selectedOption ? renderSelectedOption(selectedOption) : renderOptions(options)}
        </Grid>
      </Grid>
    );
  }
}

CustomOptions.propTypes = {
  classes: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  priorityOptions: PropTypes.array,
  dynamicOptions: PropTypes.array,
  triggerNextStep: PropTypes.func.isRequired,
  showProjectInfo: PropTypes.func.isRequired,
};

export default withStyles(styles)(CustomOptions);
