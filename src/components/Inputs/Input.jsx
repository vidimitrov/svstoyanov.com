import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import styles from './styles';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    const {value} = this.state;
    const {
      classes,
      triggerNextStep,
      trigger,
      placeholder,
      callback,
    } = this.props;

    return (
      <div className={classes.inputWrapper}>
        <input
          type="text"
          className={classes.input}
          ref={(inputRef) => (this.input = inputRef)}
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
              this.input.blur();
              this.input.disabled = true;

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
};

export default withStyles(styles)(Input);
