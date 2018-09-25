import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import styles from './styles';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      initialValueUsed: false,
    };

    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(e) {
    this.setState({value: e.target.value});
  }

  componentWillMount() {
    let {initialValueUsed} = this.state;
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

  render() {
    let {value} = this.state;
    const {
      classes,
      triggerNextStep,
      trigger,
      placeholder,
      callback,
    } = this.props;

    return (
      <div className={classes.textareaWrapper}>
        <textarea
          className={classes.textarea}
          ref={(textareaRef) => (this.textarea = textareaRef)}
          placeholder={placeholder}
          value={value}
          onChange={this.onValueChange}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              triggerNextStep({
                stepId: trigger,
                externalTrigger: true,
                value: this.state.value,
              });
              this.textarea.blur();
              this.textarea.disabled = true;

              if (callback) {
                callback(this.state.value);
              }
            }
          }} />
      </div>
    );
  }
}

Input.propTypes = {
  classes: PropTypes.object.isRequired,
  triggerNextStep: PropTypes.func,
  callback: PropTypes.func,
  trigger: PropTypes.string,
  placeholder: PropTypes.string,
  initialValue: PropTypes.bool,
};

export default withStyles(styles)(Input);
