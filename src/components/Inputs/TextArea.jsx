import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

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
      <textarea
        className={classes.textarea}
        // eslint-disable-next-line no-return-assign
        ref={textareaRef => (this.textarea = textareaRef)}
        placeholder={placeholder}
        value={value}
        onChange={this.onValueChange}
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
