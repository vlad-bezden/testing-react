import React from 'react'

const Button = ({ text, onClick }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

Button.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
}

export default Button
