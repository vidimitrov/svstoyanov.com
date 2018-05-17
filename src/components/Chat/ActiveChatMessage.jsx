import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import ChatMessage from './ChatMessage';
import styles from './styles/activeChatMessageStyles';

const ActiveChatMessage = ({classes, message}) => {
  let slide = 1;
  return (
    <div className={classes.activeMessageWrapper}>
      {message.type === 'message' &&
        <div className={classes.chatMessage} dangerouslySetInnerHTML={{
          __html: `<span>&gt;</span> ${message}`,
        }}></div>}

      {message.type === 'carousel' &&
        <div>
          {slide >= 1 &&
            <div className={classes.prevSlide} onClick={() => slide--}>
              <span className={classes.itemTitle}>&lt; {message.items[slide - 1].title}</span>
            </div>
          }
          <div className={classes.activeSlide}>
            <div className={classes.subTitle}>{message.items[slide].subTitle}</div>
            <div className={classes.title}>{message.items[slide].title}</div>
            <ChatMessage message={message.items[slide].message} />
            <div className={classes.activeMessageButtons}>
              {message.items[slide].buttons.map((button, index) => {
                return (
                  <div key={index}
                    className={classes.activeMessageButton}>
                    <div
                      className={classes.skipChatButton}>
                      <p>LEARN_MORE</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {slide < message.items.length - 1 &&
            <div className={classes.nextSlide} onClick={() => slide++}>
              <span className={classes.itemTitle}>{message.items[slide + 1].title} &gt;</span>
            </div>
          }
        </div>
      }
    </div>
  );
};

ActiveChatMessage.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.any.isRequired,
};

export default withStyles(styles)(ActiveChatMessage);
