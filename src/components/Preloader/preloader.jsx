import React, { Component } from 'react';
import './preloader.css';

class Preloader extends Component {
  constructor() {
    super();
    this.state = {
      showPreloader: true,
    };
  }

  componentDidMount() {
    const inner = document.querySelector('.preloader_inner');
    let currentLoadPercent = 0;
    const togglePreloader = preloader => this.setState({ showPreloader: preloader });

    const interval = setInterval(() => {
      currentLoadPercent += 1;
      const units = currentLoadPercent % 10;
      let tens;

      if (units !== currentLoadPercent) {
        tens = Math.floor(currentLoadPercent / 10);
      }

      inner.innerHTML = `${tens === undefined ? '' : tens}${units}<sup class="percentage">%</sup>`;
      if (currentLoadPercent === 100) {
        togglePreloader(false);
        clearInterval(interval);
        currentLoadPercent = 0;
        this.forceUpdate();
      }

      return null;
    }, 10);
  }

  componentWillUnmount() {
    this.setState({
      showPreloader: false,
    });
  }

  render() {
    const { showPreloader } = this.state;
    return (
      <div className={`preloader flex flex-column center ${(showPreloader ? 'show' : '')}`}>
        <div className="preloader_inner">0<sup className="percentage">%</sup></div>
      </div>
    );
  }
}

export default Preloader;
