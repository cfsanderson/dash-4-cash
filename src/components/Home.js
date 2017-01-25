import React, { Component } from 'react'

class Home extends Component {

  render () {
    return (
      <div>
        {/* <h1>I am in: {this.props.location.pathname}</h1> */}
        <header>
          <nav>
            <h2>Navbar</h2>
            <ul>
              <li>What is D4C?</li>
              <li>Donate</li>
              <li>Dash</li>
              <li>Track</li>
              <li>Get Started</li>
            </ul>
          </nav>
          <h1>Dash 4 Cash</h1>
          <button>log in with Strava</button>
          <button>Explore</button>
        </header>
        <section>
          <h2>What is Dash 4 Cash?</h2>
          <p>What is your motivation to get in shape? Health? Beauty? Personal achievement? Those are great reasons but all of them have the same thing in common, YOU!</p>
          <p>What if you could achieve your fitness goals AND help others in need? What if you could also help your friends to meet their goals all while raising funds and awareness for causes that you care about? Now you can.</p>
          <p>Dash for Cash is a social fitness platform that helps people maintain a healthy lifestyle by connecting their fitness goals to a greater purpose. So how does it work?”</p>
        </section>
        <section>
          <h3>Donate</h3>
          <p>Choose a charity that your group would like to support. If you need help, here is a list of some great charities to get you started.”</p>
          <p>At the beginning of each “Dash” you will be asked to make a donation. We make it easy to pay using your debit card or PayPal and we accept donations starting at only $2. Your giving amounts are private but the group’s total donation amount will be made available for all to see.</p>
        </section>
        <section>
          <h3>Dash</h3>
          <p>Now go for a run! Use your Strava app* to track and log your activity just like normal. When you finish and upload your workout, D4C will sync your Strava data automatically.</p>
          <p>* or whatever app you use to track your workouts as long as it syncs to Strava.</p>
        </section>
        <section>
          <h3>Track</h3>
          <p>Log into D4C and see personal stats as well as your group’s progress. Dashes can last for a day, a week, or a month and are based on either total distance or total moving time* during that period. You will feel great as you watch your fitness grow along with your dollars. Every run now has a purpose and the potential to change not only your life but also the life of someone in need.</p>
        </section>
        <section>
          <h3>Ready to dash?</h3>
          <button>log in with Strava</button>
        </section>
        <footer>
          <div>
            <h4>Menu</h4>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Support</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>YouTube</li>
              <li>GitHub</li>
            </ul>
          </div>
          <div>
            <h4>Get Started</h4>
            <ul>
              <li>Sign Up</li>
              <li>Login</li>
              <li>Help</li>
              <li>Download on Apple App Store</li>
              <li>Download on Google Play</li>
            </ul>
          </div>
        </footer>
      </div>
    )
  }
}

export default Home
