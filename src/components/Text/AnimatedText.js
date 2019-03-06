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
  }

  componentDidMount() {
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
    const { text, classes } = this.props;

    return (
      <Charming 
        className={classes.letter}
        letters={text} 
        render={(letters) => (
        <h1 
          className={classes.lettersWrapper} 
          ref={this.lettersWrapper}>
          {letters}
        </h1>
      )}/>
    );
  }
}

export default withStyles(styles)(AnimatedText);
