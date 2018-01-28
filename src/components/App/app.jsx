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
    <div className="menu flex flex-row vertical-center end"
      onClick={() => { console.log('Openning menu...') }}>
      <p>MENU</p>
    </div>
  </header>
);

const Chat = () => (
  <section className="chat">
    <div className="chat-message">&gt; Hello there. My name is <b>Stoyan Stoyanov</b>.</div>
    <div className="chat-message">&gt; Designer with a lot of experience in UX and UI.</div>
    <div className="chat-message">&gt; Checkout out my portfolio <a href="https://svstoyanov.com/portfolio">here</a> or contact me through <a href="https://linkedin.com/in/svstoyanov">LinkedIn</a>.</div>
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

const Footer = () => (
  <footer className="footer flex flex-row space-between">
    <TimeCounter start={Date.now()} />
    <div className="skip-chat-button flex flex-row vertical-center center"
      onClick={() => { console.log('Skipping...') }}>
      <p>CLICK TO SKIP CHAT</p>
    </div>
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
