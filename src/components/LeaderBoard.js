import React, { Component } from 'react'

class LeaderBoard extends Component {

  // n percent of m (rounded and clamped to 100)
  per (n, m) {
    return Math.min(Math.round((n / m) * 100), 100)
  }

  render () {
    const members = this.props.members.map((member, i) => {
      return (
        <tbody key={i}>
          <tr className='leaderboard-member'>
            <td className='leaderboard-image'><img src={member.image} height={30} width={30} /></td>
            <td className='leaderboard-name'><h5>{member.name}</h5></td>
          </tr>
          <tr>
            <td className='leaderboard-bar' colSpan='3'>
              <div className='bar'>
                <div className='meter' style={{width: `${this.per(member.milesThisWeek, 25)}%`}}>
                  <p>{member.milesThisWeek} miles this week</p>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className='leaderboard-bar' colSpan='3'>
              <div className='bar'>
                <div className='meter' style={{width: `${this.per(member.milesThisMonth, 100)}%`}}>
                  <p>{member.milesThisMonth} miles this month</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      )
    })

    return (
      <div className='myStats'>
        <table className='leaderboard'>
          <thead>
            <tr>
              <th colSpan='3'><h3>Leaderboard</h3></th>
            </tr>
          </thead>
          {members}
        </table>
      </div>
    )
  }
}

export default LeaderBoard
