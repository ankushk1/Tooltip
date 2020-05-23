import React from 'react';
import Button from './button';
import './index.css';

class App extends React.Component {
  state = { position: 'bottom-hover' };
  handlePosition = () => {
    this.setState({ position: document.getElementById('position').value });
  };
  render() {
    return (
      <div className="tooltip">
        <h1 className="title">Tooltip</h1>
        <div>
          <select
            id="position"
            defaultValue={this.state.position}
            onChange={this.handlePosition}
          >
            <option value="top-hover">top-hover</option>
            <option value="left-hover">left-hover</option>
            <option value="bottom-hover">bottom-hover</option>
            <option value="right-hover">right-hover</option>
          </select>
        </div>
        <Button position={this.state} />
      </div>
    );
  }
}

export default App;
