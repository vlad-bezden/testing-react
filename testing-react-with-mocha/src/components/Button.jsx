import React from 'react'

class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
          {this.props.text}
      </button>
    )
  }
}

Button.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
}

export default Button
