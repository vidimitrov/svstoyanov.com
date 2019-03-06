import * as React from 'react';
import Charming from 'react-charming';
import anime from 'animejs';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import { WRITING_SPEED } from '../../constants';

class AnimatedText extends React.Component {
  constructor(props) {
    super(props);

    this.lettersWrapper = React.createRef();
    this.lettersElements = null;
    this.state = {
      startRendering: props.delay ? false : true,
    }

    this.animateText = this.animateText.bind(this);
  }

  componentDidMount() {
    const {delay} = this.props;

    if (delay) {
      setTimeout(() => {
        this.setState({ startRendering: true }, () => {
          this.animateText();
        });
      }, delay);
    } else {
      this.animateText();
    }
  }

  componentDidUpdate(prevProps) {
    const {text} = this.props;
    if (text !== prevProps.text) {
      this.animateText();
    }
  }

  animateText() {
    this.lettersElements = this.lettersWrapper.current.querySelectorAll('span');
    anime.remove(this.lettersElements);
    anime({
      targets: this.lettersElements,
      duration: 40, // The bigger the duration, the smoother it renders a letter
      delay: (t,i) => (i + 1) * WRITING_SPEED,
      easing: 'linear',
      opacity: [0,1]
    });
  }

  render() {
    const { startRendering } = this.state;
    const { 
      text, 
      classes 
    } = this.props;

    return startRendering &&
      <Charming 
        className={classes.letter}
        letters={text} 
        render={(letters) => (
        <h1 
          className={classes.lettersWrapper} 
          ref={this.lettersWrapper}>
          {letters}
        </h1>
      )}/>;
  }
}

export default withStyles(styles)(AnimatedText);
