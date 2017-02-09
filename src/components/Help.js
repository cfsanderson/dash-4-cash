import React from 'react'
import InnerNavbar from './InnerNavbar.js'
import InnerFooter from './InnerFooter'

export default function Help () {
  return (
    <div className='wrapper'>
      <InnerNavbar />

      <div className='inner'>
        <header className='help'>
          <h1>Help Me</h1>
        </header>
        <div className='lower'>
          <div className='content-style'>
            <div className='helpme subtitle'><h2>FAQs and How-to-dos</h2></div>
            <div className='content-style-body'>
              <h3>FAQs</h3>
              <ul>
                <li className='help-question'>What is a Dash?</li>
                <li className='help-answer'>A "dash" is the time frame that your group has chosen for the competition to take place. Dashes can be set for 1 day, 1 week, or 1 month. At the end of the dash the person with the most miles or minutes wins the dash. The sum total of all the donations made to the group goes to the winner's designated charity.</li>
              </ul>
              {/* <h3>How-to-dos</h3>
              <p>How do I start a group?</p>
              <p>What </p> */}
            </div>
          </div>
        </div>
      </div>

      <InnerFooter />
    </div>
  )
}
