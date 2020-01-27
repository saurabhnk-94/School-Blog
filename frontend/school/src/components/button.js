import React from "react";
import './components.css';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="btn">
        <button>{this.props.buttonName}</button>
      </div>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string
}

export default Button;
