import React, { Component } from 'react';
import Clock from './components/clocks/Clock';

class App extends Component {
  state = { showClock: false }

  toggleShowClock = () => this.setState({ showClock: !this.state.showClock })

  render() {
    const { showClock } = this.state 
    return (
      <div>
        { showClock && <Clock /> }
        <button onClick={this.toggleShowClock}>Toggle Clock</button>
      </div>
    )
  }
}

export default App;
