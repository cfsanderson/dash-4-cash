import React, { Component } from 'react'
import CountUp from 'react-countup'

class Counter extends Component {
  // const onComplete = () => {
  //   className='custom-count booya'
  // }

  state = {
    className: 'custom-count',
    start: 0,
    end: 0,
    duration: 2,
    // useEasing: {true}
    separator: ' ',
    decimal: ',',
    prefix: '$',
    suffix: ''
    // visible: false
  }
  // <div className={`donateModal ${this.state.visible ? 'overlay' : 'hidden'}`}>

  render () {
    return (
      <CountUp
        // className='custom-count'
        start={this.state.start}
        end={this.state.end}
        // duration={this.state.}
        // useEasing={true}
        // separator=' '
        // decimal=','
        // prefix='$'
        // suffix=''
        // callback={onComplete}
        />
    )
  }
}

export default Counter
