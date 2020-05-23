import React from 'react';
import './index.css';

class Button extends React.Component {
  state = {
    hover: false,
    show: false,
  };

  onHover = () => {
    const { hover } = this.state;
    if (hover === false) {
      this.setState({ hover: true, show: true });
    }
  };

  onLeave = () => {
    const { hover } = this.state;
    if (hover === true) {
      this.setState({ hover: false, show: false });
    }
  };

  render() {
    const { hover } = this.state;
    const { position } = this.props;

    return (
      <div>
        <div className="button">
          <button onMouseEnter={this.onHover} onMouseLeave={this.onLeave}>
            Hover on me
          </button>
        </div>

        <div className={`${hover ? position.position : ''}`}>
          {`${position.position}`}
        </div>
      </div>
    );
  }
}

export default Button;
