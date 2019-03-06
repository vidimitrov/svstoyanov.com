/* eslint react/no-find-dom-node:0 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Bubble from './Bubble';
import Image from './Image';
import ImageContainer from './ImageContainer';
import Loading from '../common/Loading';
import TextStepContainer from './TextStepContainer';
import AnimatedText from '../../../../components/Text/AnimatedText';

const URL_REGEX = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;

function hasUrls(message) {
  return URL_REGEX.test(message);
}

class TextStep extends Component {
  /* istanbul ignore next */
  constructor(props) {
    super(props);

    const { isFirst } = props;

    this.state = {
      startRendering: false,
      loading: isFirst ? true : false,
    };

    this.renderMessage = this.renderMessage.bind(this);
  }

  componentDidMount() {
    const { step, isFirst } = this.props;
    const { component, delay, waitAction } = step;
    const isComponentWaitingUser = component && waitAction;

    if (isFirst) {
      setTimeout(() => {
        this.setState({ loading: false, startRendering: true }, () => {
          if (!isComponentWaitingUser && !step.rendered) {
            this.props.triggerNextStep();
          }
        });
      }, delay);
    } else {
      setTimeout(() => {
        this.setState({ loading: true }, () => {
          setTimeout(() => {
            this.setState({ loading: false, startRendering: true }, () => {
              if (!isComponentWaitingUser && !step.rendered) {
                this.props.triggerNextStep();
              }
            });
          }, 500);
        });
      }, delay);
    }

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

    return (<AnimatedText text={message}/>);
  }

  render() {
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

    return (
      <TextStepContainer
        className="rsc-ts"
        style={{
          ...style,
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
          {
            this.state.loading
            && <Loading />
          }
          {(this.state.startRendering) && this.renderMessage()}
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
