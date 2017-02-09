import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

export default class ClickListener extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    onClickOutside: PropTypes.func.isRequired
  }

  componentDidMount () {
    window.__myapp_container.addEventListener('click', this.handleDocumentClick)
  }

  componentWillUnmount () {
    window.__myapp_container.removeEventListener('click', this.handleDocumentClick)
  }

  /* using fat arrow to bind to instance */
  handleDocumentClick = (evt) => {
    const area = ReactDOM.findDOMNode(this.refs.area)

    if (!area.contains(evt.target)) {
      this.props.onClickOutside(evt)
    }
  }

  render () {
    return (
      <div ref='area'>
        {this.props.children}
      </div>
    )
  }
}
