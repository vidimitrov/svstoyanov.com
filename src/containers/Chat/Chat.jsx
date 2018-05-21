import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import ActiveChatMessage from './ActiveChatMessage';
import ChatMessage from './ChatMessage';
import styles from './styles/chatStyles';

/**
 * Chat container
 *
 * 1. Needs to display all the contexts and their respective messages
 * 2. Needs to show every message with some small delay and chat messages interaction
 * 3. Needs to decide based on message data,
 *    how to interupt the flow and take decision how to proceed
 * 4. Every message can either ask for text input or
 *    required action providing multiple choices with buttons
 */

let messages = [
  {
    type: 'message',
    content: `Aha. I was sure that we've met before. Hello again {name}.`,
  },
  {
    type: 'message',
    content: `This is my portfolio - the projects ` +
      `that I have created during the past years`,
  },
  {
    type: 'carousel',
    items: [
      {
        id: 1,
        title: 'P1_FAKEFIGHTER',
        subTitle: 'Portfolio_Project: 01_04',
        duration: '01_YEAR',
        message: `Fakefigther is...`,
        buttons: [
          {
            linkTo: '/portfolio/1',
          },
        ],
      },
      {
        id: 2,
        title: 'P2_SNAPP_BUILDER',
        subTitle: 'Portfolio_Project: 02_04',
        duration: '02_YEARS',
        message: `Snapp Builder is...`,
        buttons: [
          {
            linkTo: '/portfolio/2',
          },
        ],
      },
      {
        id: 3,
        title: 'P3_SEEMBA',
        subTitle: 'Portfolio_Project: 03_04',
        duration: '02_YEARS',
        message: `Seemba is one of a kind platform allowing a business ` +
          `owner to manage his online presence`,
        buttons: [
          {
            linkTo: '/portfolio/3',
          },
        ],
      },
    ],
  },
];

class Chat extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <section className={classes.chat}>
        {
          messages.map((message, index) => {
            let component;

            if (index === messages.length - 1) {
              component = <ActiveChatMessage key={index} message={message} />;
            } else {
              component = <ChatMessage key={index} message={message.content} />;
            }

            return component;
          })
        }
      </section>
    );
  }
}

Chat.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chat);
