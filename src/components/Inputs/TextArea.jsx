import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import Button from '../Buttons/NavigationButton';
import FormControlWrapper from './components/FormControlWrapper';
import ButtonWrapper from './components/ButtonWrapper';
import Container from './components/Container';
import InputWrapper from './components/InputWrapper';
import ArrowAvatar from '../Avatars/ArrowAvatar';
import arrowAvatar from '../../assets/img/bot-arrow.svg';
import Line from './components/Line';

class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      initialValueUsed: false,
      isButtonHidden: false,
      rendered: false,
    };

    this.onValueChange = this.onValueChange.bind(this);
    this.submit = this.submit.bind(this);
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

  componentDidMount() {
    this.textarea.focus();
    this.setState({
      rendered: true,
    });
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

    if (this.textarea) {
      this.textarea.blur();
      this.textarea.disabled = true;
    }

    if (callback) {
      callback(value);
    }

    this.setState({
      isButtonHidden: true,
    });
  }

  render() {
    const { value, isButtonHidden, rendered } = this.state;
    const {
      classes,
      placeholder,
    } = this.props;

    // TODO: Implement some validation if needed
    const isValid = 'true';

    return (
      <Container container valid={isValid}>
        <Grid item className={classes.avatarWrapper}>
          <ArrowAvatar src={arrowAvatar} />
        </Grid>
        <InputWrapper rendered={rendered}>
          <FormControlWrapper item>
            <textarea
              className={classes.textarea}
              data-gramm="false"
              spellCheck="false"
              // eslint-disable-next-line no-return-assign
              ref={textareaRef => (this.textarea = textareaRef)}
              placeholder={placeholder}
              value={value}
              onChange={this.onValueChange}
              onKeyUp={() => {
                this.textarea.style.height = '1px';
                this.textarea.style.height = `${10 + this.textarea.scrollHeight}px`;
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  this.submit();
                }
              }}
            />
          </FormControlWrapper>
          <ButtonWrapper item>
            <Button
              onClick={this.submit}
              disabled={!value}
              hidden={isButtonHidden}
            >
              DONE
            </Button>
          </ButtonWrapper>
          <Line />
        </InputWrapper>
      </Container>
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
