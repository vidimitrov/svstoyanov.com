import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import Button from '../Buttons/NavigationButton';
import ArrowAvatar from '../Avatars/ArrowAvatar';
import arrowAvatar from '../../assets/img/bot-arrow.svg';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      isButtonHidden: false,
    };

    this.onValueChange = this.onValueChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onValueChange(e) {
    this.setState({ value: e.target.value });
  }

  submit() {
    const {
      triggerNextStep,
      trigger,
      callback,
    } = this.props;
    const { value } = this.state;

    triggerNextStep({
      stepId: trigger,
      externalTrigger: true,
      value,
    });

    if (this.input) {
      this.input.blur();
      this.input.disabled = true;
    }

    if (callback) {
      callback(value);
    }

    this.setState({
      isButtonHidden: true,
    });
  }

  render() {
    const { value, isButtonHidden } = this.state;
    const {
      classes,
      placeholder,
    } = this.props;

    return (
      <Grid container>
        <Grid item className={classes.avatarWrapper}>
          <ArrowAvatar src={arrowAvatar} />
        </Grid>
        <Grid item className={classes.wrapper}>
          <input
            type="text"
            className={classes.input}
            // eslint-disable-next-line no-return-assign
            ref={inputRef => (this.input = inputRef)}
            placeholder={placeholder}
            value={value}
            onChange={this.onValueChange}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                this.submit();
              }
            }}
          />
        </Grid>
        <Grid item className={classes.buttonWrapper}>
          <Button
            onClick={this.submit}
            disabled={!value}
            hidden={isButtonHidden}>
            SENT
          </Button>
        </Grid>
      </Grid>
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
