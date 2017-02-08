import React, { Component } from 'react'
import moment from 'moment'
import strava from '../utils/strava'
import { graphql } from 'react-apollo'
import withAuth from '../utils/withAuth'

import {
  mutationUpdateUser
} from '../graphql'

const MM = 0.000621371 // Miles per meter

window.moment = moment

// TODO: (Base this on something less arbitrary, e.g. 10% more than fullest bar)
const GOALS = {
  MILES: {
    WEEK: 25,
    MONTH: 100
  },
  MINUTES: {
    WEEK: 250,
    MONTH: 1000
  }
}

@withAuth
@graphql(...mutationUpdateUser())
export default class ProfileStats extends Component {

  state = {
    stats: {
      miles: {
        today: 0,
        thisWeek: 0,
        lastWeek: 0,
        thisMonth: 0,
        lastMonth: 0
      },
      minutes: {
        today: 0,
        thisWeek: 0,
        lastWeek: 0,
        thisMonth: 0,
        lastMonth: 0
      }
    }
  }

  componentDidMount () {
    setTimeout(() => {
      const ranges = {
        today: [moment().subtract(1, 'day'), moment()],
        thisWeek: [moment().startOf('week'), moment()],
        lastWeek: [moment().startOf('week').subtract(1, 'week'), moment().startOf('week')],
        thisMonth: [moment().startOf('month'), moment()],
        lastMonth: [moment().startOf('month').subtract(1, 'month'), moment().startOf('month')]
      }
      strava.get('/athlete/activities?per_page=60').then(activities => {
        const stats = { minutes: {}, miles: {} }
        Object.keys(ranges).forEach(range => {
          const filtered = activities.filter(a => moment(a.start_date).isBetween(...ranges[range]))
          stats.minutes[range] = filtered.reduce((acc, act) => acc + act.moving_time / 60, 0)
          stats.miles[range] = (filtered.reduce((acc, act) => acc + act.distance, 0) * MM).toFixed(1)
        }, {})
        this.setState({ stats }, () => {
          this.props.mutationUpdateUser({
            variables: {
              id: this.props.client.userId,
              today: Number(stats.miles.today),
              thisWeek: Number(stats.miles.thisWeek),
              lastWeek: Number(stats.miles.lastWeek),
              thisMonth: Number(stats.miles.thisMonth),
              lastMonth: Number(stats.miles.lastMonth)
            }
          })
        })
      })
    }, 500) // HACK!
  }

  // n percent of m (rounded and clamped to 100)
  per (n, m) {
    return Math.min(Math.round((n / m) * 100), 100)
  }

  render () {
    const { miles, minutes } = this.state.stats
    return (
      <div className='myStats tables'>
        <h3>My Stats</h3>

        {/* MILES */}
        <table className='leaderboard'>
          <thead>
            <tr>
              <th colSpan='3'><h4>Miles</h4></th>
            </tr>
          </thead>
          <tbody className='myStats-section'>
            <tr className='leaderboard-member today'>
              <td colSpan='3' className='today-text'><span><h5>Today:</h5></span>{miles.today} miles</td>
              {/* <td className='today-miles'>{miles.today} miles</td> */}
            </tr>
          </tbody>
          <tbody className='myStats-section'>
            <tr className='leaderboard-member'>
              <td><h5>This Week</h5></td>
            </tr>
            <tr>
              <td className='leaderboard-bar' colSpan='3'>
                <div className='bar'>
                  <div className='meter' style={{width: `${this.per(miles.thisWeek, GOALS.MILES.WEEK)}%`}}>
                    <p>{miles.thisWeek} miles</p>
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
                  <div className='meter' style={{width: `${this.per(miles.lastWeek, GOALS.MILES.WEEK)}%`}}>
                    <p>{miles.lastWeek} miles</p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
          <tbody className='myStats-section'>
            <tr className='leaderboard-member'>
              <td><h5>This Month</h5></td>
            </tr>
            <tr>
              <td className='leaderboard-bar' colSpan='3'>
                <div className='bar'>
                  <div className='meter' style={{width: `${this.per(miles.thisMonth, GOALS.MILES.MONTH)}%`}}>
                    <p>{miles.thisMonth} miles</p>
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
                  <div className='meter' style={{width: `${this.per(miles.lastMonth, GOALS.MILES.MONTH)}%`}}>
                    <p>{miles.lastMonth} miles</p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* MINUTES */}
        <table className='leaderboard'>
          <thead>
            <tr>
              <th colSpan='3'><h4>Minutes</h4></th>
            </tr>
          </thead>
          <tbody>
            <tr className='leaderboard-member today'>
              <td colSpan='3' className='today-text'><span><h5>Today:</h5></span>{minutes.today} minutes</td>
            </tr>
          </tbody>
          <tbody>
            <tr className='leaderboard-member'>
              <td><h5>This Week</h5></td>
            </tr>
            <tr>
              <td className='leaderboard-bar' colSpan='3'>
                <div className='bar'>
                  <div className='meter' style={{width: `${this.per(minutes.thisWeek, GOALS.MINUTES.WEEK)}%`}}>
                    <p>{Math.round(minutes.thisWeek)} minutes</p>
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
                  <div className='meter' style={{width: `${this.per(minutes.lastWeek, GOALS.MINUTES.WEEK)}%`}}>
                    <p>{Math.round(minutes.lastWeek)} minutes</p>
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
                  <div className='meter' style={{width: `${this.per(minutes.thisMonth, GOALS.MINUTES.MONTH)}%`}}>
                    <p>{Math.round(minutes.thisMonth)} minutes</p>
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
                  <div className='meter' style={{width: `${this.per(minutes.lastMonth, GOALS.MINUTES.MONTH)}%`}}>
                    <p>{Math.round(minutes.lastMonth)} minutes</p>
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
