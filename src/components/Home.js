import React, { Component } from 'react'
import HomeNavbar from './HomeNavbar'
import HomeFooter from './HomeFooter'
import ScrollAnim from 'rc-scroll-anim'
import SessionButton from './SessionButton'

import posterURL from '../images/runners-frame1.jpg'
import videoURL from '../images/runners.mp4'
import iphoneDonate from '../images/iphone6-donate.png'
import iphoneLeaderboard from '../images/iphone6-leaderboard.png'
// import iphoneMyStats from '../images/iphone6-mystats.png'
import iphoneProfile from '../images/iphone6-profile.png'
import iphoneStrava from '../images/iphone6-strava.png'

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
            <h4><span className='logo'>Dash 4 Cash</span> helps you run with purpose.</h4>
            <div className='homePage-content'>
              <div className='content-style-body-home'>
                <p>What is your motivation to get in shape? Health? Beauty? Personal achievement? Those are great reasons but all of them have the same thing in common, YOU!</p>
                <p>What if you could achieve your fitness goals AND help others in need? What if you could also help your friends to meet their goals all while raising funds and awareness for causes that you care about? Now you can.</p>
                <p>Dash for Cash is a social fitness platform that helps people maintain a healthy lifestyle by connecting their fitness goals to a greater purpose. So how does it work?”</p>
              </div>
              <div className='iphone' ><img className='iphone' src={iphoneProfile} height='400px' /></div>
            </div>
            <div className='continue'>
              <ScrollAnimLink to='donate' className='chevron'>
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
            <h4>Choose a charity that you would like to support.</h4>
            <div className='homePage-content'>
              <div className='content-style-body-home'>
                <p>If you need help finding one, we have a list of some great charities to get you started.</p>
                <p>At the beginning of each “Dash” you will be asked to make a donation to the group. We accept donations starting at only $2 so feel free to start small. Your giving amounts are private but the group’s total donation amount will be made available for all to see.</p>
              </div>
              <div className='iphone'><img src={iphoneDonate} height='400px' /></div>
            </div>
            <div className='continue'>
              <ScrollAnimLink to='dash' className='chevron'>
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
            <h4>Now go for a run!</h4>
            <div className='homePage-content'>
              <div className='content-style-body-home'>
                <p>Use your Strava app to track and log your activity just like normal. When you finish and upload your workout, D4C will sync your data automatically.</p>
                <div><img className='iphone' src={iphoneStrava} height='400px' /></div>
              </div>
            </div>
            <div className='continue'>
              <ScrollAnimLink to='track' className='chevron'>
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
            <h4>Get competitive!</h4>
            <div className='homePage-content'>
              <div className='content-style-body-home'>
                <p>Log into <span className='logo'>D4C</span> and see personal stats as well as your group’s progress. Dashes can last for a day, a week, or a month and are based on either total distance or total moving time* during that period. The group member with the most miles for that dash wins and the group's donations go to their charity of choice.</p>
                <p>You will feel great as you watch your fitness grow along with your dollars. Every run now has a purpose and the potential to change not only your life but also the life of someone in need.</p>
                <div><img className='iphone' src={iphoneLeaderboard} height='400px' /></div>
              </div>
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
              <p>We use data from Strava to track your progress. Click the button below to log into your Strava account and get connected.</p>
            </div>
            <SessionButton />
          </section>
        </div>

        <HomeFooter />
      </div>

    )
  }
}

export default Home
