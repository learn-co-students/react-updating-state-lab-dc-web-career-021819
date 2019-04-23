// Code DigitalClicker Component Here
import React, {Component} from 'react'

class DigitalClicker extends Component {

  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  incrementClicker = () => {
    const newTimesClicked = this.state.timesClicked + 1
    this.setState({
      timesClicked: newTimesClicked
    })
  }

  render(){
    return (
      <button onClick={this.incrementClicker}>
        {this.state.timesClicked}
      </button>
      // Anonymous function (also works)
      // <button onClick={()=>{this.setState({
      //   timesClicked: this.state.timesClicked + 1
      // })}}>
      //   {this.state.timesClicked}
      // </button>
    )
  }
}

export default DigitalClicker
