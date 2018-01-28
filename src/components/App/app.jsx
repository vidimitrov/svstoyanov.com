import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.svg';
import Preloader from '../Preloader/preloader';
import './app.css';

const Header = () => (
  <header className="flex flex-row space-between">
    <div className="description">
      <p>Subject name: Stoyan_Stoyanov</p>
      <p>Role: Creator, Product_designer</p>
      <div className="flex flex-row">
        <p>Version: 1.0.1, created_by </p><img className="logo" src={logo} alt="logo" />
      </div>
    </div>
    <div className="menu">MENU</div>
  </header>
);

const Chat = () => (
  <section className="chat">
    <div className="chat-message">&gt; Hello there. I am Stoyan Stoyanov. Let me introduce myself.</div>
  </section>
);

class TimeCounter extends Component {
  constructor() {
    super();

    this.state = {
      elapsed: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 50);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    this.setState({
      elapsed: new Date() - this.props.start,
    });
  }

  render() {
    const elapsed = Math.round(this.state.elapsed / 100);
    const seconds = (elapsed / 10).toFixed(1);

    return <div className="time-counter">Engaged: <b>{seconds}s</b></div>;
  }
}

TimeCounter.propTypes = {
  start: PropTypes.number.isRequired,
};

const skipChat = () => {
  console.log('Skipping...');
};


const Footer = () => (
  <footer className="flex flex-row space-between">
    <TimeCounter start={Date.now()} />
    <button className="skip-chat" onClick={skipChat}>
      CLICK TO SKIP CHAT
    </button>
  </footer>
);

const App = () => (
  <div className="app flex flex-column space-between">
    <Preloader />
    <Header />
    <Chat />
    <Footer />
  </div>
);

export default App;
