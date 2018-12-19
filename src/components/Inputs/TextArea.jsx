import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import ArrowAvatar from '../Avatars/ArrowAvatar';
import arrowAvatar from '../../assets/img/bot-arrow.svg';

class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      initialValueUsed: false,
    };

    this.onValueChange = this.onValueChange.bind(this);
  }

  componentWillMount() {
    const { initialValueUsed } = this.state;
    const {
      initialValue,
    } = this.props;
    if (initialValue && !initialValueUsed) {
      const newValue = localStorage.getItem('cf-message');

      this.setState({
        value: newValue || '',
        initialValueUsed: true,
      });
    }
  }

  onValueChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { value } = this.state;
    const {
      classes,
      triggerNextStep,
      trigger,
      placeholder,
      callback,
    } = this.props;

    return (
      <Grid container>
        <Grid item className={classes.avatarWrapper}>
          <ArrowAvatar src={arrowAvatar} />
        </Grid>
        <Grid item className={classes.wrapper}>
          <textarea
            className={classes.textarea}
            // eslint-disable-next-line no-return-assign
            ref={textareaRef => (this.textarea = textareaRef)}
            placeholder={placeholder}
            value={value}
            onChange={this.onValueChange}
            onKeyUp={(e) => {
              this.textarea.style.height = "1px";
              this.textarea.style.height = (25 + this.textarea.scrollHeight) + "px";
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                triggerNextStep({
                  stepId: trigger,
                  externalTrigger: true,
                  value,
                });
                this.textarea.blur();
                this.textarea.disabled = true;

                if (callback) {
                  callback(value);
                }
              }
            }}
          />
        </Grid>
      </Grid >
    );
  }
}

TextArea.propTypes = {
  classes: PropTypes.object.isRequired,
  triggerNextStep: PropTypes.func,
  callback: PropTypes.func,
  trigger: PropTypes.string,
  placeholder: PropTypes.string,
  initialValue: PropTypes.bool,
};

export default withStyles(styles)(TextArea);
