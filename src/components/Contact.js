import React from 'react'
import InnerNavbar from './InnerNavbar.js'
import InnerFooter from './InnerFooter'

export default function Contact () {
  return (
    <div>
      <InnerNavbar />

      <div className='inner'>
        <header className='myGroups'>
          <h1>Contact</h1>
        </header>
        <div className='lower'>
          <h2>Let's chat</h2>
          <p>Insert a form that sends me an email.</p>
        </div>
      </div>

      <InnerFooter />
    </div>
  )
}
