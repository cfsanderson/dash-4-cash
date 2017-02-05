import React, { Component } from 'react'

class LeaderBoard extends Component {

  render () {
    const members = this.props.members.map((member, i) => {
      return (
        <tbody>
          <tr className='leaderboard-member'>
            <td className='leaderboard-image'><img src={require('../images/bru.png')} height={30} width={30} /></td>
            <td className='leaderboard-name'><h5>{member.name}</h5></td>
          </tr>
          <tr>
            <td className='leaderboard-bar' colSpan='3'>
              <div className='bar'>
                <div className='meter' style={{width: '100%'}}>
                  <p>35 miles</p>
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
          {members}

          {/* leaderboard header */}
          <thead>
            <tr>
              <th colSpan='3'><h3>Leaderboard</h3></th>
            </tr>
          </thead>

          {/* leaderboard members */}
          <tbody>
            <tr className='leaderboard-member'>
              <td className='leaderboard-image'><img src={require('../images/bru.png')} height={30} width={30} /></td>
              <td className='leaderboard-name'><h5>Bru Wills</h5></td>
            </tr>
            <tr>
              <td className='leaderboard-bar' colSpan='3'>
                <div className='bar'>
                  <div className='meter' style={{width: '100%'}}>
                    <p>35 miles</p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>

          {/* leaderboard members */}
          <tbody>
            <tr className='leaderboard-member'>
              <td className='leaderboard-image'><img src={require('../images/Cody.jpg')} height={30} width={30} /></td>
              <td className='leaderboard-name'><h5>Cody Sanderson</h5></td>
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
          </tbody>

          {/* leaderboard members */}
          <tbody>
            <tr className='leaderboard-member'>
              <td className='leaderboard-image'><img src={require('../images/sam.jpg')} height={30} width={30} /></td>
              <td className='leaderboard-name'><h5>Sam Rainer</h5></td>
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

          {/* leaderboard members */}
          <tbody>
            <tr className='leaderboard-member'>
              <td className='leaderboard-image'><img src={require('../images/Caleb-copy.jpg')} height={30} width={30} /></td>
              <td className='leaderboard-name'><h5>Caleb Sanderson</h5></td>
            </tr>
            <tr>
              <td className='leaderboard-bar' colSpan='3'>
                <div className='bar'>
                  <div className='meter' style={{width: '10%'}}>
                    <p>3.5 miles</p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default LeaderBoard
