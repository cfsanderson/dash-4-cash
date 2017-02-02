import React from 'react'

function Layout ({ children }) {
  return (
    <div>
      <header>
        {children}
      </header>
    </div>
  )
}

export default Layout
