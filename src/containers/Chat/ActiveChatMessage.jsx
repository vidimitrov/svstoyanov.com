/* eslint-disable react/no-array-index-key */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from 'material-ui/TextField';
import ChatMessage from './ChatMessage';
import Button from '../../components/Buttons/Button';
import NavigationButton from '../../components/Buttons/NavigationButton';
import SliderButton from '../../components/Buttons/SliderButton';
import styles from './styles/activeChatMessageStyles';

const ActiveChatMessage = ({ classes, message }) => {
  let slide = 1;
  return (
    <div className={classes.activeMessageWrapper}>
      {message.type === 'message'
        && (
          <div
            className={classes.chatMessage}
            dangerouslySetInnerHTML={{
              __html: `<span>&gt;</span> ${message}`,
            }}
          />
        )}

      {message.type === 'carousel'
        && (
          <div>
            {slide >= 1
              && (
                <div className={classes.prevSlide} onClick={() => slide -= 1}>
                  <span className={classes.itemTitle}>
                    &lt;
                    {' '}
                    {message.items[slide - 1].title}
                  </span>
                </div>
              )
            }
            <div className={classes.activeSlide}>
              <div className={classes.subTitle}>{message.items[slide].subTitle}</div>
              <div className={classes.title}>{message.items[slide].title}</div>
              <Button>Normal Button</Button>
              <NavigationButton>Navigation Button</NavigationButton>
              <SliderButton prev>Previous Button</SliderButton>
              <SliderButton next>Next Button</SliderButton>
              <ChatMessage message={message.items[slide].message} />
              <TextField
                label="None"
                id="margin-none"
                defaultValue="Default Value"
                className={classes.textField}
                helperText="Some important text"
              />
              <div className={classes.activeMessageButtons}>
                {message.items[slide].buttons.map((button, index) => (
                  <div
                    key={index}
                    className={classes.activeMessageButton}
                  >
                    <div
                      className={classes.skipChatButton}
                    >
                      <p>LEARN_MORE</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {slide < message.items.length - 1
              && (
                <div className={classes.nextSlide} onClick={() => slide += 1}>
                  <span className={classes.itemTitle}>
                    {message.items[slide + 1].title}
                    {' '}
                    &gt;
                  </span>
                </div>
              )
            }
          </div>
        )
      }
    </div>
  );
};

ActiveChatMessage.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.any.isRequired,
};

export default withStyles(styles)(ActiveChatMessage);
