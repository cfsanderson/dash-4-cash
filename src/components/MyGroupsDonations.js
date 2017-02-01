import React, { Component } from 'react'
import CountUp from 'react-countup'

class MyGroupsDonations extends Component {
  // const onComplete = () => {
  //   className='custom-count booya'
  // }

  render () {
    return (
      <CountUp
        className='custom-count'
        start={0}
        end={1227}
        duration={2}
        // useEasing={true}
        separator=' '
        decimal=','
        prefix='$'
        suffix=''
        // callback={onComplete}
        />
    )
  }
}

export default MyGroupsDonations
