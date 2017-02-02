import React, { Component } from 'react'
import CountUp from 'react-countup'

class Counter extends Component {

  onComplete = () => {
    console.log('wat')
  }
  // <div className={`donateModal ${this.state.visible ? 'overlay' : 'hidden'}`}>

  render () {
    return (
      <CountUp
        className='custom-count'
        start={0}
        end={this.props.end}
        duration={2}
        useEasing
        separator=' '
        decimal=','
        prefix='$'
        suffix=''
        callback={this.onComplete}
      />
    )
  }
}

export default Counter
