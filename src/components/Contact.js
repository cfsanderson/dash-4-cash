import React from 'react'
import InnerNavbar from './InnerNavbar'
import InnerFooter from './InnerFooter'

export default function Contact () {
  return (
    <div className='wrapper'>
      <InnerNavbar />

      <div className='inner'>
        <header className='myGroups'>
          <h1>Contact</h1>
        </header>

        <div className='lower'>
          <div className='content-style'>
            <div className='contact subtitle'>
              <h2>Let's chat</h2>
            </div>
            <div className='content-style-body'>
              <p>I created <span className='logo'>Dash 4 Cash</span> as a capstone project for the Front-End Engineering course at <a href='www.theironyard.com' target='_blank'>The Iron Yard</a> in St. Petersburg, FL. Web development is my latest passion/creative endeavor but I've been a runner for a lot longer. <span className='logo'>Dash 4 Cash</span> has been a really fun way to combine those passions.</p>
              <p>I plan to keep improving the site in my spare time so if you have any suggestions about how to make it better, I'd love to hear from you. You can get in touch with me through my personal site <a href='www.calebsanderson.com' target='_blank'>CalebSanderson.com</a> or by clicking any of the social media links below.</p>
              <p>Thanks for checking out <span className='logo'>Dash 4 Cash</span>!</p>
              <p className='quotes'>- Caleb Sanderson</p>
            </div>
            {/* <div className='add-members-div'>
              <form className='add-members-form' onSubmit={this._addMember}>
                <div className='add-members-fields'>
                  <h3>Personal Info</h3>
                  <p>
                    <input
                      type='text'
                      className='checkout-input checkout-name'
                      placeholder='Name'
                      value=''
                      name='newMemberName'
                      onChange=''
                    />
                  </p>
                  <p>
                    <input
                      type='text'
                      className='checkout-input checkout-name'
                      placeholder='Email'
                      value=''
                      name='newMemberEmail'
                      onChange=''
                    />
                  </p>
                  <textarea
                    className='message'
                    name='message'
                    rows='10'
                    cols='30'
                    onChange={console.log('?')}
                  />
                </div>
                <a
                  className='submit-button'
                  role='button'
                  onClick=''>
                  <span>Submit</span>
                  <div className='icon'>
                    <i className='fa fa-play' />
                  </div>
                </a>
              </form>
            </div> */}
          </div>
        </div>
      </div>

      <InnerFooter />
    </div>
  )
}
