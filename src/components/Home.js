import React, { Component } from 'react'
import HomeNavbar from './HomeNavbar'
import HomeFooter from './HomeFooter'
import ScrollAnim from 'rc-scroll-anim'
import { Link } from 'react-router'
import SessionButton from './SessionButton'

import posterURL from '../images/runners-frame1.jpg'
import videoURL from '../images/runners.mp4'

class Home extends Component {

  render () {
    const ScrollAnimLink = ScrollAnim.Link

    return (
      <div className='homePage'>
        <header>
          <video autoPlay loop muted poster={posterURL} id='video-bg'>
            <source src={videoURL} type='video/mp4' />
          </video>

          <HomeNavbar />

          <h1>Dash 4 Cash</h1>
          <SessionButton />
          <div className='explore'>
            <p>Explore</p>
            <ScrollAnimLink to='whatisD4C' className='chevron'>
              <i className='fa fa-chevron-down faa-float animated' aria-hidden='true' />
            </ScrollAnimLink>
          </div>
        </header>

        <div className='sections'>
          <div className='big whatisD4C' id='whatisD4C'>
            <h2>What is <br />Dash 4 Cash</h2>
            <i className='fa fa-question-circle' aria-hidden='true' />
          </div>
          <section className='whatisD4C-words'>
            <div >
              <p>What is your motivation to get in shape? Health? Beauty? Personal achievement? Those are great reasons but all of them have the same thing in common, YOU!</p>
              <p>What if you could achieve your fitness goals AND help others in need? What if you could also help your friends to meet their goals all while raising funds and awareness for causes that you care about? Now you can.</p>
              <p>Dash for Cash is a social fitness platform that helps people maintain a healthy lifestyle by connecting their fitness goals to a greater purpose. So how does it work?”</p>
            </div>
            <div className='continue'>
              <ScrollAnimLink to='donate' className='chevron'>
                {/* <p>Continue</p> */}
                <i className='fa fa-chevron-down faa-float animated' aria-hidden='true' />
              </ScrollAnimLink>
            </div>
          </section>
        </div>

        <div className='sections'>
          <div className='small header1' id='donate'>
            <h3>Donate</h3>
            <i className='fa fa-money' aria-hidden='true' />
          </div>
          <section className='donate-words'>
            <div>
              <p>Choose a charity that your group would like to support. If you need help, here is a list of some great charities to get you started.”</p>
              <p>At the beginning of each “Dash” you will be asked to make a donation. We make it easy to pay using your debit card or PayPal and we accept donations starting at only $2. Your giving amounts are private but the group’s total donation amount will be made available for all to see.</p>
            </div>
            <div className='continue'>
              <ScrollAnimLink to='dash' className='chevron'>
                {/* <p>Continue</p> */}
                <i className='fa fa-chevron-down faa-float animated' aria-hidden='true' />
              </ScrollAnimLink>
            </div>
          </section>
        </div>

        <div className='sections'>
          <div className='small header2' id='dash'>
            <h3>Dash</h3>
            <i className='fa fa-fast-forward' aria-hidden='true' />
          </div>
          <section className='dash-words'>
            <div>
              <p>Now go for a run! Use your Strava app* to track and log your activity just like normal. When you finish and upload your workout, D4C will sync your Strava data automatically.</p>
              <p>* or whatever app you use to track your workouts as long as it syncs to Strava.</p>
            </div>
            <div className='continue'>
              <ScrollAnimLink to='track' className='chevron'>
                {/* <p>Continue</p> */}
                <i className='fa fa-chevron-down faa-float animated' aria-hidden='true' />
              </ScrollAnimLink>
            </div>
          </section>
        </div>

        <div className='sections'>
          <div className='small header3' id='track'>
            <h3>Track</h3>
            <i className='fa fa-line-chart' aria-hidden='true' />
          </div>
          <section className='track-words'>
            <div>
              <p>Log into D4C and see personal stats as well as your group’s progress. Dashes can last for a day, a week, or a month and are based on either total distance or total moving time* during that period. You will feel great as you watch your fitness grow along with your dollars. Every run now has a purpose and the potential to change not only your life but also the life of someone in need.</p>
            </div>
            <div className='continue'>
              <ScrollAnimLink to='ready' className='chevron'>
                {/* <p>Continue</p> */}
                <i className='fa fa-chevron-down faa-float animated' aria-hidden='true' />
              </ScrollAnimLink>
            </div>
          </section>
        </div>

        <div className='sections'>
          <div className='big header4' id='ready'>
            <h3>Ready to get started?</h3>
            <i className='fa fa-play' aria-hidden='true' />
          </div>
          <section className='ready-words'>
            <div>
              <p>We use your Strava data to keep track of your progress. Click the button below to get log into your Strava account and get connected.</p>
            </div>
            <SessionButton />
            <p>Having trouble? Click here for our <Link to='/help'>Help Section</Link></p>
          </section>
        </div>

        <HomeFooter />
      </div>

    )
  }
}

export default Home
