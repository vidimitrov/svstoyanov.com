/* eslint react/no-find-dom-node:0 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CustomStepContainer from './CustomStepContainer';

class CustomStep extends Component {
  /* istanbul ignore next */
  constructor(props) {
    super(props);

    this.state = {
      startRendering: false,
    };

    this.renderComponent = this.renderComponent.bind(this);
  }

  componentDidMount() {
    const { step, triggerNextStep } = this.props;
    const { waitAction } = step;

    this.setState({ startRendering: true }, () => {
      const stepEl = ReactDOM.findDOMNode(this.stepContainer);
      stepEl.offsetParent.scrollTop = stepEl.offsetParent.scrollHeight;

      if (!waitAction && !step.rendered) {
        triggerNextStep();
      }
    });
  }

  renderComponent() {
    const {
      step,
      steps,
      previousStep,
      triggerNextStep,
      showProjectInfo,
    } = this.props;
    const { component } = step;
    return React.cloneElement(component, {
      step,
      steps,
      previousStep,
      triggerNextStep,
      showProjectInfo,
    });
  }

  render() {
    const { style } = this.props;

    return (
      <CustomStepContainer
        className="rsc-cs"
        style={{
          ...style,
        }}
        ref={(element) => {
          this.stepContainer = element;
        }}
      >
        { this.state.startRendering && this.renderComponent() }
      </CustomStepContainer>
    );
  }
}

CustomStep.propTypes = {
  step: PropTypes.object.isRequired,
  steps: PropTypes.object.isRequired,
  style: PropTypes.object,
  previousStep: PropTypes.object.isRequired,
  triggerNextStep: PropTypes.func.isRequired,
  showProjectInfo: PropTypes.func.isRequired,
};

export default CustomStep;
