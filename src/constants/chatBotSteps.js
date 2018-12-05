import React from 'react';
import ProjectsSlider from '../components/ProjectsSlider/ProjectsSlider';
import CustomOptions from '../components/CustomOptions/CustomOptions';
import Input from '../components/Inputs/Input';
import TextArea from '../components/Inputs/TextArea';

export default [{
  id: 'intro',
  message: 'Hello. My name is Stoyan. What\'s your name?',
  trigger: 'name-input',
  delay: 4000,
}, {
  id: 'name-input',
  component: (
    <Input
      trigger="has-name-what-to-do"
      placeholder="Type your name..."
      callback={(value) => {
        localStorage.setItem('username', value);
      }}
    />
  ),
}, {
  id: 'has-name-what-to-do',
  message: 'Nice to meet you {previousValue}. What can I do for you?',
  trigger: 'what-to-do-options',
}, {
  id: 'what-to-do-options',
  component: (
    <CustomOptions options={[
      {
        value: 'tell-me-about-you',
        label: 'Tell me about yourself',
        trigger: 'about-me',
      },
      {
        value: 'show-me-your-work',
        label: 'Show me your work',
        trigger: 'my-work',
      },
    ]}
    />
  ),
}, {
  id: 'about-me',
  message: `I am a product designer, researcher and product
            architect who started his career in the start-up world and
            fell in love with the hard work that you need to put in order
            to succeed in this environment. I also like to experiment with
            new technologies as you can see in my blog.
            For me every problem can be solved with the right design process.
            My favourite movie is HER and now I am working on a voice project
            that you can see in my blog infinite crave, where I am documenting it on the go.
            Sharing with you some of my social presence.`,
  trigger: 'learn-more-about-me',
}, {
  id: 'learn-more-about-me',
  component: (
    <CustomOptions options={[
      {
        value: 'http://infinitecrave.com',
        label: 'InfiniteCrave.com',
        redirect: 'http://infinitecrave.com',
      },
      {
        value: 'https://linkedin.com/in/svstoyanov',
        label: 'LinkedIn',
        redirect: 'https://linkedin.com/in/svstoyanov',
      },
      {
        value: 'https://drive.google.com/svstoyanov.cv.pdf',
        label: 'Download CV',
        redirect: 'https://drive.google.com/svstoyanov.cv.pdf',
      },
    ]}
    />
  ),
  trigger: 'my-work-after-about-me',
}, {
  id: 'my-work-after-about-me',
  message: 'Now as you know who am I, would you like me to show you my work?',
  trigger: 'my-work-options',
}, {
  id: 'my-work-options',
  component: (
    <CustomOptions options={[
      {
        value: true,
        label: 'Yes',
        trigger: 'projects-slider',
      },
      {
        value: false,
        label: 'No',
        trigger: 'here-if-needed',
      },
    ]}
    />
  ),
}, {
  id: 'my-work',
  message: 'This is my portfolio. Some projects that i have created in the past years.',
  trigger: 'projects-slider',
}, {
  id: 'projects-slider',
  component: (<ProjectsSlider />),
  style: {
    width: '100%',
    backgroundColor: 'transparent',
    padding: 0,
  },
}, {
  id: 'here-if-needed',
  message: 'Okay, if you need me I am here',
}, {
  id: 'goodbye-message',
  message: `Okay, it was pleasure talking with you. If you need me just rub the lamp. Just kidding, you can select from the menu what you would like. See you soon  ${localStorage.getItem('username')}!`,
}, {
  id: 'contact-me-request',
  message: 'It will be great if you want to discuss a project or an idea. Do you want to leave me a message?',
  trigger: 'contact-me-request-options',
}, {
  id: 'contact-me-request-options',
  component: (
    <CustomOptions options={[
      {
        value: true,
        label: 'Yes',
        trigger: 'email-address',
      },
      {
        value: false,
        label: 'No',
        trigger: 'goodbye-message',
      },
    ]}
    />
  ),
}, {
  id: 'email-address',
  message: 'Tell me your email address first',
  trigger: 'email-input',
}, {
  id: 'email-input',
  component: (
    <Input
      trigger="message-content"
      placeholder="Type your email..."
      callback={(value) => {
        localStorage.setItem('cf-email', value);
      }}
    />
  ),
}, {
  id: 'message-content',
  message: 'Now type your message',
  trigger: 'message-content-input',
}, {
  id: 'message-content-input',
  component: (
    <TextArea
      trigger="confirmation-before-send-1"
      placeholder="Type your message..."
      callback={(value) => {
        localStorage.setItem('cf-message', value);
      }}
    />
  ),
}, {
  id: 'confirmation-before-send-1',
  message: 'Here is your message: {previousValue}.',
  trigger: 'confirmation-before-send-2',
}, {
  id: 'confirmation-before-send-2',
  message: 'Do you want to edit it or its fine to be sent?',
  trigger: 'confirmation-before-send-options',
}, {
  id: 'confirmation-before-send-options',
  component: (
    <CustomOptions options={[
      {
        value: true,
        label: 'Edit',
        trigger: 'edit-message-content-input',
      },
      {
        value: false,
        label: 'Send it',
        trigger: 'message-sent',
        callback: () => {
          const sendEmail = firebase.functions().httpsCallable('sendEmail');
          sendEmail({
            email: localStorage.getItem('cf-email'),
            message: localStorage.getItem('cf-message'),
          }).then(() => {
            localStorage.removeItem('cf-email');
            localStorage.removeItem('cf-message');
          });
        },
      },
    ]}
    />
  ),
}, {
  id: 'edit-message-content-input',
  component: (
    <TextArea
      trigger="confirmation-before-send-editted-1"
      initialValue
      placeholder="Type your message..."
      callback={(value) => {
        localStorage.setItem('cf-message', value);
      }}
    />
  ),
}, {
  id: 'confirmation-before-send-editted-1',
  message: 'Here is your message: {previousValue}.',
  trigger: 'confirmation-before-send-editted-2',
}, {
  id: 'confirmation-before-send-editted-2',
  message: 'Do you want to edit it or its fine to be sent?',
  trigger: 'confirmation-before-send-options',
}, {
  id: 'message-sent',
  message: `Sending your message to: svs7oyanov@gmail.com. Its takes me 1 day to answer an email. ${localStorage.getItem('username')} I am going to grab a coffee, meanwhile you can continue to browse!`,
}];