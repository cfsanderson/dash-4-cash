import React from 'react'
import InnerNavbar from './InnerNavbar'
import InnerFooter from './InnerFooter'
// import ScrollAnim from 'rc-scroll-anim'
import MyDonations from './MyDonations'
import MyGroupsDonations from './MyGroupsDonations'

export default function Profile () {
  return (
    <div>
      <InnerNavbar />

      <div className='inner'>

        <header className='profile'>
          <h1>My Profile</h1>
        </header>

        <div className='lower'>
          <ul className='donations-ul'>
            <li className='donations' >
              <div>
                <h3>Donations by Me</h3>
                <MyDonations />
              </div>
            </li>
            <li className='donations' >
              <div>
                <h3>Donations by My Groups</h3>
                <MyGroupsDonations />
              </div>
            </li>
            <li>
              <a className='donate-button' href='#' role='button'>
                <span>Donate</span>
                <div className='icon'>
                  <i className='fa fa-money' />
                </div>
              </a>
            </li>
          </ul>

          {/* My Stats section */}
          <div className='myStats'>
            <h2>My Stats</h2>
            <section className='miles'>
              <h4>Miles</h4>
              <p>Today: 5 miles</p>
              <table className='miles-week'>
                <tr>
                  <th>This Week</th>
                  <th>Last Week</th>
                </tr>
                <tr>
                  <td>25 miles</td>
                  <td>30 miles</td>
                </tr>
                <tr />
              </table>
              <table className='miles-month'>
                <tr>
                  <th>This Month</th>
                  <th>Last Month</th>
                </tr>
                <tr>
                  <td>100 miles</td>
                  <td>130 miles</td>
                </tr>
                <tr />
              </table>
            </section>
            <section className='minutes'>
              <h4>Minutes</h4>
              <p>Today: 35 minutes</p>
              <table className='minutes-week'>
                <tr>
                  <th>This Week</th>
                  <th>Last Week</th>
                </tr>
                <tr>
                  <td>105 minutes</td>
                  <td>230 minutes</td>
                </tr>
                <tr />
              </table>
              <table className='minutes-month'>
                <tr>
                  <th>This Month</th>
                  <th>Last Month</th>
                </tr>
                <tr>
                  <td>1050 minutes</td>
                  <td>1500 minutes</td>
                </tr>
                <tr />
              </table>
            </section>
          </div>
          <button>+ NEW GROUP button</button>
        </div>
      </div>
      <InnerFooter />
    </div>
  )
}
