/* eslint react/no-find-dom-node:0 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Bubble from './Bubble';
import Image from './Image';
import ImageContainer from './ImageContainer';
import Loading from '../common/Loading';
import TextStepContainer from './TextStepContainer';
import { calculateOpacity } from '../common/utils/opacity';
import InolaText from '../../../../components/Text/Tsula';

const URL_REGEX = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;

function hasUrls(message) {
  return URL_REGEX.test(message);
}

class TextStep extends Component {
  /* istanbul ignore next */
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };

    this.renderMessage = this.renderMessage.bind(this);
  }

  componentDidMount() {
    const { step } = this.props;
    const { component, delay, waitAction } = step;
    const isComponentWaitingUser = component && waitAction;

    setTimeout(() => {
      this.setState({ loading: false }, () => {
        if (!isComponentWaitingUser && !step.rendered) {
          this.props.triggerNextStep();
        }
      });
    }, delay);

    const stepEl = ReactDOM.findDOMNode(this.stepContainer);
    this.setState({
      stepEl,
    });
  }

  renderMessage() {
    const {
      previousValue,
      step,
      steps,
      previousStep,
      triggerNextStep,
    } = this.props;
    const { component } = step;
    let { message } = step;

    if (component) {
      return React.cloneElement(component, {
        step,
        steps,
        previousStep,
        triggerNextStep,
        previousValue,
      });
    }

    message = message.replace(/{previousValue}/g, previousValue);

    // TODO: Create a new step for the links or find a way how to fix this security issue
    // return (<span dangerouslySetInnerHTML={{ __html: message }} />);
    return (<InolaText>{message}</InolaText>);
  }

  render() {
    const { stepEl } = this.state;
    const {
      step,
      style,
      isFirst,
      isLast,
      avatarStyle,
      bubbleStyle,
      hideBotAvatar,
      hideUserAvatar,
    } = this.props;
    const {
      avatar,
      user,
    } = step;

    const showAvatar = user ? !hideUserAvatar : !hideBotAvatar;

    let opacity = 1;
    if (stepEl) {
      opacity = calculateOpacity(stepEl);
    }

    return (
      <TextStepContainer
        className="rsc-ts"
        style={{
          ...style,
          opacity,
        }}
        ref={(element) => {
          this.stepContainer = element;
        }}
        user={user}
      >
        <ImageContainer
          className="rsc-ts-image-container"
          user={user}
        >
          {
            isFirst && showAvatar
            && (
            <Image
              className="rsc-ts-image"
              style={avatarStyle}
              showAvatar={showAvatar}
              user={user}
              src={avatar}
              alt="avatar"
            />
            )
          }
        </ImageContainer>
        <Bubble
          className="rsc-ts-bubble"
          style={bubbleStyle}
          user={user}
          showAvatar={showAvatar}
          isFirst={isFirst}
          isLast={isLast}
        >
          {/* {
            this.state.loading
            && <Loading />
          } */}
          {/* {(!this.state.loading) && this.renderMessage()} */}
          {this.renderMessage()}
        </Bubble>
      </TextStepContainer>
    );
  }
}

TextStep.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  step: PropTypes.object.isRequired,
  steps: PropTypes.object,
  style: PropTypes.object,
  triggerNextStep: PropTypes.func.isRequired,
  avatarStyle: PropTypes.object.isRequired,
  bubbleStyle: PropTypes.object.isRequired,
  hideBotAvatar: PropTypes.bool.isRequired,
  hideUserAvatar: PropTypes.bool.isRequired,
  previousStep: PropTypes.object,
  previousValue: PropTypes.any,
};

TextStep.defaultProps = {
  previousStep: {},
  steps: {},
  previousValue: '',
};

export default TextStep;
