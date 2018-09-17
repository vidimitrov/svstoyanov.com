import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Option from './Option';
import OptionElement from './OptionElement';
import Options from './Options';
import OptionsStepContainer from './OptionsStepContainer';

class OptionsStep extends Component {
  /* istanbul ignore next */
  constructor(props) {
    super(props);

    this.renderOption = this.renderOption.bind(this);
    this.onOptionClick = this.onOptionClick.bind(this);
  }

  onOptionClick({value, redirect}) {
    this.props.triggerNextStep({value});
    if (redirect) {
      window.open(redirect, '_blank');
    }
  }

  renderOption(option) {
    const {bubbleOptionStyle} = this.props;
    const {user} = this.props.step;
    const {value, label, redirect} = option;

    return (
      <Option
        key={value}
        className="rsc-os-option"
      >
        <OptionElement
          className="rsc-os-option-element"
          style={bubbleOptionStyle}
          user={user}
          onClick={() => this.onOptionClick({value, redirect})}
        >
          {label}
        </OptionElement>
      </Option>
    );
  }

  render() {
    const {options} = this.props.step;
    const {style} = this.props;

    return (
      <OptionsStepContainer
        className="rsc-os"
        style={style}>
        <Options className="rsc-os-options">
          {_.map(options, this.renderOption)}
        </Options>
      </OptionsStepContainer>
    );
  }
}

OptionsStep.propTypes = {
  step: PropTypes.object.isRequired,
  style: PropTypes.object,
  triggerNextStep: PropTypes.func.isRequired,
  bubbleOptionStyle: PropTypes.object.isRequired,
};

export default OptionsStep;
