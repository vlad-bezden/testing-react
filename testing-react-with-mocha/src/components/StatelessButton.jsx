import React from 'react'

const StatelessButton = ({ text, onClick }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

StatelessButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
}

export default StatelessButton
