import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import Button from '../Buttons/NavigationButton';
import ArrowAvatar from '../Avatars/ArrowAvatar';
import arrowAvatar from '../../assets/img/bot-arrow.svg';
import { isValidEmail } from '../../lib/validations';

const ValidationLabel = styled.p`
  display: none;

  ${props => props.invalid && css`
    display: block;
    color: #ff387b;
    text-align: left;
    margin: 0 auto 20px;
    width: 85%;
  `}
`;

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      validEmail: true,
      isButtonHidden: false,
    };

    this.onValueChange = this.onValueChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onValueChange(e) {
    let { validEmail } = this.state;
    const { value } = this.state;
    const { type } = this.props;

    if (type === 'email') {
      if (!isValidEmail(value)) {
        validEmail = false;
      } else {
        validEmail = true;
      }
    }

    this.setState({
      validEmail,
      value: e.target.value,
    });
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
    const {
      value,
      isButtonHidden,
      validEmail,
    } = this.state;
    const {
      classes,
      placeholder,
      type,
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
            hidden={isButtonHidden}
          >
            SENT
          </Button>
        </Grid>
        {
          type === 'email'
          && (
          <Grid item xs={12}>
            <ValidationLabel invalid={!validEmail}>Email is incorrect</ValidationLabel>
          </Grid>
          )
        }
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
  type: PropTypes.string,
};

export default withStyles(styles)(Input);
