import React from 'react'
import InnerNavbar from './InnerNavbar.js'

export default function Group () {
  return (
    <div>
      <InnerNavbar />
      <div className='inner'>
        <header className='group'>
          <h1>Bradenton Runner's Club</h1>
        </header>
        <div className='lower'>
          <h2>This week's dash cash.</h2>
          <p>$55.00</p>
          <h2>This year's dash cash.</h2>
          <p>$1,550.00</p>
          <table>
            <tbody>
              <tr>
                <th>Leaderboard</th>
              </tr>
              <tr>
                <td>Caleb Sanderson</td>
                <td>progress bar here</td>
              </tr>
              <tr>
                <td>Group name B</td>
                <td><button>+ Members</button></td>
              </tr>
              <tr>
                <td>Group name C</td>
                <td><button>+ Members</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
