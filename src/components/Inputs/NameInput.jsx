import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import styles from './styles';

class NameInput extends React.Component {
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
    } = this.props;

    return (
      <div className={classes.nameInputWrapper}>
        <input
          type="text"
          className={classes.input}
          ref={(inputRef) => (this.nameInput = inputRef)}
          placeholder="Type your name..."
          value={value}
          onChange={this.onValueChange}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              triggerNextStep({
                stepId: trigger,
                externalTrigger: true,
                value: this.state.value,
              });
              this.nameInput.blur();
              this.nameInput.disabled = true;
            }
          }} />
      </div>
    );
  }
}

NameInput.propTypes = {
  classes: PropTypes.object.isRequired,
  triggerNextStep: PropTypes.func,
  trigger: PropTypes.string,
};

export default withStyles(styles)(NameInput);
