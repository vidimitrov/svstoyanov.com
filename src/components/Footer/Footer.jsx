import React from 'react';
import TimeCounter from '../TimeCounter/TimeCounter';
import musicImg from '../../assets/music.svg';

const Footer = () => (
  <footer className="footer flex flex-row space-between">
    <div className="flex-1 flex-row flex vertical-center">
      <TimeCounter start={Date.now()} />
    </div>
    <div className="flex-5 flex flex-row center"
      onClick={() => { }}>
      <div className="skip-chat-button flex flex-row vertical-center center">
        <p>INTRO</p>
      </div>
      <div className="skip-chat-button flex flex-row vertical-center center">
        <p>MY WORK</p>
      </div>
      <div className="skip-chat-button flex flex-row vertical-center center">
        <p>CONTACT ME</p>
      </div>
    </div>
    <div className="flex-1 flex-row flex vertical-center center">
      <img src={musicImg} alt="music" />
    </div>
  </footer>
);

export default Footer;
