/* eslint react/no-find-dom-node:0 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Loading from '../common/Loading';
import CustomStepContainer from './CustomStepContainer';

const LIMIT = 450;

class CustomStep extends Component {
  /* istanbul ignore next */
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      stepEl: null,
    };

    this.renderComponent = this.renderComponent.bind(this);
  }

  componentDidMount() {
    const {step} = this.props;
    const {delay, waitAction} = step;

    setTimeout(() => {
      this.setState({loading: false}, () => {
        if (!waitAction && !step.rendered) {
          this.props.triggerNextStep();
        }
      });
    }, delay);

    const stepEl = ReactDOM.findDOMNode(this.stepContainer);
    this.setState({
      stepEl,
    });
  }

  renderComponent() {
    const {step, steps, previousStep, triggerNextStep} = this.props;
    const {component} = step;
    return React.cloneElement(component, {
      step,
      steps,
      previousStep,
      triggerNextStep,
    });
  }

  render() {
    const {loading, stepEl} = this.state;
    const {style} = this.props;

    return (
      <CustomStepContainer
        className="rsc-cs"
        style={{
          ...style,
          opacity: stepEl ? 1 - (0.8 - stepEl.getBoundingClientRect().y / LIMIT) : 1,
        }}
        ref={(element) => {
          this.stepContainer = element;
        }}
      >
        {
          loading ? (
            <Loading />
          ) : this.renderComponent()
        }
      </CustomStepContainer>
    );
  }
}

CustomStep.propTypes = {
  step: PropTypes.object.isRequired,
  steps: PropTypes.object.isRequired,
  style: PropTypes.object,
  isLast: PropTypes.bool.isRequired,
  previousStep: PropTypes.object.isRequired,
  triggerNextStep: PropTypes.func.isRequired,
};

export default CustomStep;
