import React from 'react'
import Modal from './Modal'

function Layout ({ children }) {
  return (
    <div className='layout'>
      {children}
      <Modal />
    </div>
  )
}

export default Layout
