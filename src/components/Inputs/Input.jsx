import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import styles from './styles';
import Button from '../Buttons/NavigationButton';
import FormControlWrapper from './components/FormControlWrapper';
import ButtonWrapper from './components/ButtonWrapper';
import Container from './components/Container';
import ValidationLabel from './components/ValidationLabel';
import InputWrapper from './components/InputWrapper';
import ArrowAvatar from '../Avatars/ArrowAvatar';
import arrowAvatar from '../../assets/img/bot-arrow.svg';
import { isValidEmail } from '../../lib/validations';
import Line from './components/Line';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      validEmail: false,
      isButtonHidden: false,
      render: false,
    };

    this.onValueChange = this.onValueChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    this.input.focus();
    this.setState({
      rendered: true,
    });
  }

  onValueChange(e) {
    const { value } = e.target;
    const { type } = this.props;
    let { validEmail } = this.state;

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
      rendered,
    } = this.state;
    const {
      classes,
      placeholder,
      type,
    } = this.props;

    let isValid = !!value;
    if (type === 'email') {
      isValid = value && validEmail;
    }

    return (
      <Container container valid={!value || isValid ? 'true' : 'false'}>
        <Grid item className={classes.avatarWrapper}>
          <ArrowAvatar src={arrowAvatar} />
        </Grid>
        <InputWrapper rendered={rendered}>
          <FormControlWrapper item>
            <input
              type={type || 'text'}
              className={classes.input}
              // eslint-disable-next-line no-return-assign
              ref={inputRef => (this.input = inputRef)}
              placeholder={placeholder}
              value={value}
              onChange={this.onValueChange}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (isValid) {
                    this.submit();
                  }
                }
              }}
            />
          </FormControlWrapper>
          <ButtonWrapper item>
            <Button
              onClick={this.submit}
              disabled={!isValid}
              hidden={isButtonHidden}
            >
              { type === 'email' ? 'SEND' : 'DONE' }
            </Button>
          </ButtonWrapper>
          <Line/>
        </InputWrapper>
        {
          type === 'email'
          && (
          <Grid item xs={12}>
            <ValidationLabel
              invalid={value && !isValid}
            >
            Hmm it seems like you’ve mispeled your email
            </ValidationLabel>
          </Grid>
          )
        }
      </Container>
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
