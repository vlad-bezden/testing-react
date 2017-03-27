import React from 'react'

class Button extends React.Component {
  render() {
    const { text, onClick } = this.props
    return (
      <button onClick={onClick}>
        {text}
      </button>
    )
  }
}

Button.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
}

export default Button
