import React, { Component } from 'react'

export default class MyStats extends Component {

  render () {
    return (
      <div className='myStats'>
        <h3>My Stats</h3>
        <div className='tables'>
          <div className='miles'>
            <h4>Miles</h4>
            <table className='miles-table'>
              <tr>
                <td><h5>Today</h5></td>
                <td>3 miles</td>
              </tr>
              <tr>
                <th><h5>This Week</h5></th>
                <th><h5>Last Week</h5></th>
              </tr>
              <tr>
                <td>25 miles</td>
                <td>30 miles</td>
              </tr>
              <tr>
                <th><h5>This Month</h5></th>
                <th><h5>Last Month</h5></th>
              </tr>
              <tr>
                <td>100 miles</td>
                <td>130 miles</td>
              </tr>
              <tr />
            </table>
          </div>
          <div className='minutes'>
            <h4>Minutes</h4>
            <table className='minutes-table'>
              <tr>
                <td><h5>Today</h5></td>
                <td>30 minutes</td>
              </tr>
              <tr>
                <th><h5>This Week</h5></th>
                <th><h5>Last Week</h5></th>
              </tr>
              <tr>
                <td>315 minutes</td>
                <td>405 minutes</td>
              </tr>
              <tr>
                <th><h5>This Month</h5></th>
                <th><h5>Last Month</h5></th>
              </tr>
              <tr>
                <td>1563 minutes</td>
                <td>1629 minutes</td>
              </tr>
              <tr />
            </table>
          </div>
        </div>
      </div>
    )
  }
}
