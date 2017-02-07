import React from 'react'
import InnerNavbar from './InnerNavbar.js'
import InnerFooter from './InnerFooter'
import ProfilePic from '../images/Caleb-copy.jpg'

export default function About () {
  return (
    <div className='wrapper'>
      <InnerNavbar />

      <div className='inner'>
        <header className='profile'>
          <h1>About</h1>
        </header>
        <div className='lower'>
          <div className='content-style'>
            <div className='about-subtitle'>
              <h2>Why <span className='logo'>Dash 4 Cash</span>?</h2>
            </div>

            <div className='content-style-body'>
              {/* <p>Hi, I'm Caleb <img src={ProfilePic} className='about-profile' height='100px' width='100px' /></p> */}
              <p>You need to The message is clear, you need to take care of yourself.</p>
              <p><span className='logo'>Dash 4 Cash</span> integrates
                - Most people would either like to get in shape or stay in shape.
                - Most people would rather be doing something good for others than just for themselves.
                - Many times those goals are mutually exclusive and you are forced to make a choice.
                - Finding motivation and accountability that doesn't come with a heavy time tax is difficult.
                - Let's face it, you are busy. Maybe it's not convenient to meet when your local runner's group meets.
                - leverage social media as a way to provide group accountability along with a healthy dose of competition. And what better than to be competing for a worthy cause.
                - I believe that peopleI am a runner and front-end web developer, created Dash 4 Cash as a final project for my Front-End Engineering course at <a href='https://www.theironyard.com/' target='_blank'>The Iron Yard</a>.
              </p>
            </div>
          </div>

        </div>
      </div>
      <InnerFooter />
    </div>
  )
}
