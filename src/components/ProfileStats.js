import React, { Component } from 'react'

export default class ProfileStats extends Component {

  render () {
    return (
      <div className='myStats tables'>
        <h3>My Stats</h3>

        {/* MILES */}
        <table className='leaderboard'>
          <tbody>
            <tr>
              <th colSpan='3'><h4>Miles</h4></th>
            </tr>
          </tbody>
          <tbody>
            <tr className='leaderboard-member'>
              <td><h5>Today</h5></td>
              <td>3 miles</td>
            </tr>
          </tbody>
          <tbody>
            <tr className='leaderboard-member'>
              <td><h5>This Week</h5></td>
            </tr>
            <tr>
              <td className='leaderboard-bar' colSpan='3'>
                <div className='bar'>
                  <div className='meter' style={{width: '85%'}}>
                    <p>29.75 miles</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr className='leaderboard-member'>
              <td><h5>Last Week</h5></td>
            </tr>
            <tr>
              <td className='leaderboard-bar' colSpan='3'>
                <div className='bar'>
                  <div className='meter' style={{width: '60%'}}>
                    <p>21 miles</p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className='leaderboard-member'>
              <td><h5>This Month</h5></td>
            </tr>
            <tr>
              <td className='leaderboard-bar' colSpan='3'>
                <div className='bar'>
                  <div className='meter' style={{width: '85%'}}>
                    <p>29.75 miles</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr className='leaderboard-member'>
              <td><h5>Last Month</h5></td>
            </tr>
            <tr>
              <td className='leaderboard-bar' colSpan='3'>
                <div className='bar'>
                  <div className='meter' style={{width: '60%'}}>
                    <p>21 miles</p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* MINUTES */}
        <table className='leaderboard'>
          <tbody>
            <tr>
              <th colSpan='3'><h4>Minutes</h4></th>
            </tr>
          </tbody>
          <tbody>
            <tr className='leaderboard-member'>
              <td><h5>Today</h5></td>
              <td>30 minutes</td>
            </tr>
          </tbody>
          <tbody>
            <tr className='leaderboard-member'>
              <td><h5>This Week</h5></td>
            </tr>
            <tr>
              <td className='leaderboard-bar' colSpan='3'>
                <div className='bar'>
                  <div className='meter' style={{width: '85%'}}>
                    <p>200 minutes</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr className='leaderboard-member'>
              <td><h5>Last Week</h5></td>
            </tr>
            <tr>
              <td className='leaderboard-bar' colSpan='3'>
                <div className='bar'>
                  <div className='meter' style={{width: '60%'}}>
                    <p>324 minutes</p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className='leaderboard-member'>
              <td><h5>This Month</h5></td>
            </tr>
            <tr>
              <td className='leaderboard-bar' colSpan='3'>
                <div className='bar'>
                  <div className='meter' style={{width: '85%'}}>
                    <p>1678 minutes</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr className='leaderboard-member'>
              <td><h5>Last Month</h5></td>
            </tr>
            <tr>
              <td className='leaderboard-bar' colSpan='3'>
                <div className='bar'>
                  <div className='meter' style={{width: '60%'}}>
                    <p>2017 minutes</p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className='tables'>
          <div className='miles'>
            <h4>Miles</h4>
            <table className='miles-table'>
              <tbody>
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
              </tbody>
            </table>
          </div>
          <div className='minutes'>
            <h4>Minutes</h4>
            <table className='minutes-table'>
              <tbody>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
