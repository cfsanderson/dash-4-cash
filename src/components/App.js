import React, { PropTypes, Component } from 'react'

function App ({ children }) {
  return (
    <div>
      <header>
        {children}
      </header>
    </div>
  )
}

App.defaultProps = {
  children: []
}

App.propTypes = {
  children: PropTypes.object
}

export default App
