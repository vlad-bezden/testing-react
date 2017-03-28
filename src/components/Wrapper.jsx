import React from 'react'

class Wrapper extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

Wrapper.propTypes = {
  children: React.PropTypes.node.isRequired
}

export default Wrapper
