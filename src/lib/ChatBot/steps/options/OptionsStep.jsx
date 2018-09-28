/* eslint react/no-find-dom-node:0 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Option from './Option';
import OptionElement from './OptionElement';
import Options from './Options';
import OptionsStepContainer from './OptionsStepContainer';

const LIMIT = 450;

class OptionsStep extends Component {
  /* istanbul ignore next */
  constructor(props) {
    super(props);

    this.state = {
      stepEl: null,
    };

    this.renderOption = this.renderOption.bind(this);
    this.onOptionClick = this.onOptionClick.bind(this);
  }

  componentDidMount() {
    const stepEl = ReactDOM.findDOMNode(this.stepContainer);
    this.setState({
      stepEl,
    });
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
    const {stepEl} = this.state;
    const {options} = this.props.step;
    const {style} = this.props;

    return (
      <OptionsStepContainer
        className="rsc-os"
        style={{
          ...style,
          opacity: stepEl ? 1 - (0.8 - stepEl.getBoundingClientRect().y / LIMIT) : 1,
        }}
        ref={(element) => {
          this.stepContainer = element;
        }}>
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
  isLast: PropTypes.bool.isRequired,
  triggerNextStep: PropTypes.func.isRequired,
  bubbleOptionStyle: PropTypes.object.isRequired,
};

export default OptionsStep;
