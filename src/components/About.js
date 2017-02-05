import React from 'react'
import InnerNavbar from './InnerNavbar.js'
import InnerFooter from './InnerFooter'

export default function About () {
  return (
    <div className='wrapper'>
      <InnerNavbar />

      <div className='inner'>
        <header className='profile'>
          <h1>About</h1>
        </header>
        <div className='lower'>
          <h2>Why Dash 4 Cash?</h2>
          <p>Hi, I'm Caleb <img src='../images/Caleb-copy.jpg' height='50px' width='50px' /></p>
          <p>AmonI am a runner and front-end web developer, created Dash 4 Cash as a final project for my Front-End Engineering course at <a href='https://www.theironyard.com/' target='_blank'>The Iron Yard</a>.</p>
        </div>
      </div>

      <InnerFooter />
    </div>
  )
}
