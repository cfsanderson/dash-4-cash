import React, { Component } from 'react'
import CountUp from 'react-countup'

class MyDonations extends Component {
  // const onComplete = () => {
  //   className='custom-count booya'
  // }

  render () {
    return (
      <CountUp
        className='custom-count'
        start={0}
        end={150}
        duration={2}
        // useEasing={true}
        separator=' '
        decimal=','
        prefix='$ '
        suffix=''
        // callback={onComplete}
        />
    )
  }
}

export default MyDonations
