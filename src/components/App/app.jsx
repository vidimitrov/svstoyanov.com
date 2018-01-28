import React from 'react';
import logo from '../../assets/logo.svg';
import Preloader from '../Preloader/preloader';
import './app.css';

const Header = () => (
  <header className="header">
    <div>
      <div className="description">
        <p>Subject name: Stoyan Stoyanov</p>
        <p>Role: Creator, Product Designer</p>
        <p>Version: 1.0.1</p>
      </div>
      <img className="logo" src={logo} alt="logo" />
      <div className="menu">MENU</div>
    </div>

  </header>
);

const Chat = () => (
  <section className="chat">
    <div className="chat-message">Hello there. I am Stoyan Stoyanov. Let me introduce myself.</div>
    <div className="skip-chat">
      CLICK TO SKIP CHAT
    </div>
  </section>
);

const App = () => (
  <div className="app">
    <Preloader />
    <Header />
    <Chat />
  </div>
);

export default App;
