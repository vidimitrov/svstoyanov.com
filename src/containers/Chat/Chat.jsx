import React from 'react';
import PropTypes from 'prop-types';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import withStyles from 'material-ui/styles/withStyles';
import {ThemeProvider} from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import styles from './styles/chatStyles';
import avatar from '../../assets/img/sto-avatar.png';

const chatTheme = {
  background: 'transparent',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: 'transparent',
  botFontColor: '#fff',
  userBubbleColor: '#02A0A7',
  userFontColor: '#fff',
};

class Chat extends React.Component {
  render() {
    const {classes, steps} = this.props;
    return (
      <div className={classes.chatContainer}>
        <div className={classes.chatWrapper}>
          <ThemeProvider theme={chatTheme}>
            <ChatBot steps={steps}
              botAvatar={avatar}
              hideHeader={true}
              hideUserAvatar={true}
              hideBotAvatar={false}
              hideSubmitButton={true}
              className='chat-bot'
              // cache={true}
              contentStyle={{
                height: 'calc(100% - 75px)',
              }}
              customStyle={{
                backgroundColor: 'transparent',
              }}
              avatarStyle={{
                borderRadius: 0,
                minWidth: '38px',
              }}
              bubbleStyle={{
                fontFamily: 'Space Mono',
                fontSize: '16px',
                maxWidth: '100%',
              }}
              bubbleOptionStyle={{
                fontFamily: 'Space Mono',
                border: '1px solid #02A0A7',
                borderRadius: '0px',
              }}
              footerStyle={{
                // position: 'absolute',
                // bottom: 0,
                // width: '100%',
              }}
              inputStyle={{
                backgroundColor: 'transparent',
                borderBottom: '1px solid #fff',
                borderRadius: 0,
                borderTop: 0,
                color: '#fff',
              }}
              placeholder='Enter your message here...'
              width='500px'
              handleEnd={({renderedSteps, steps, values}) => {
                // TODO: Handle the end of the flow
              }} />
          </ThemeProvider>
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  classes: PropTypes.object.isRequired,
  steps: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => {
  return {
    conversations: state.conversations,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Chat);
