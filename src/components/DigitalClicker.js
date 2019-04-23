import React from 'react'

class DigitalClicker extends React.Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  clickHandler = () => {
    // const clickCount = this.state.timesClicked + 1
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return (
      <button onClick={this.clickHandler}>
        <label>{this.state.timesClicked}</label>
      </button>
    );
  }

}
export default DigitalClicker
