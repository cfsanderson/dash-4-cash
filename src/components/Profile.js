import React from 'react'
import InnerNavbar from './InnerNavbar'
import ScrollAnim from 'rc-scroll-anim'

export default function Profile () {
  return (
    <div>
      <InnerNavbar />
      <div className='inner'>
        <header>
          <h1>My Profile</h1>
        </header>
        <h3>Circle chart for YTD cumulative $ given personally</h3>
        <h3>Circle chart for YTD cumulative $ by groups that you are in.</h3>
        <button>Big Green DONATE button</button>
        <section>
          <h3>My Stats</h3>
          <table className='miles'>
            <tbody>
              <tr>
                <th colSpan='6'>Miles</th>
              </tr>
              <tr>
                <th>Today</th>
                <th>This Week</th>
                <th>Last Week</th>
                <th>This Month</th>
                <th>Last Month</th>
                <th>This Year</th>
              </tr>
              <tr>
                <td>Today bar</td>
                <td>This Week bar</td>
                <td>Last Week bar</td>
                <td>This Month bar</td>
                <td>Last Month bar</td>
                <td>This Year bar</td>
              </tr>
            </tbody>
          </table>
          <table className='minutes'>
            <tbody>
              <tr>
                <th colSpan='6'>Minutes</th>
              </tr>
              <tr>
                <th>Today</th>
                <th>This Week</th>
                <th>Last Week</th>
                <th>This Month</th>
                <th>Last Month</th>
                <th>This Year</th>
              </tr>
              <tr>
                <td>Today clock</td>
                <td>This Week clock</td>
                <td>Last Week clock</td>
                <td>This Month clock</td>
                <td>Last Month clock</td>
                <td>This Year clock</td>
              </tr>
            </tbody>
          </table>
        </section>
        <button>+ NEW GROUP button</button>

      </div>
    </div>
  )
}
