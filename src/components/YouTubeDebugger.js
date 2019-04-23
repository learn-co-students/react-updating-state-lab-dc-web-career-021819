import React, { Component } from 'react';

class YouTubeDebugger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  bitrateClick = () => {
    console.log(this.state)
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  resolutionHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
      <button className='bitrate' onClick={this.bitrateClick}>Bitrate</button>
      <button className='resolution' onClick={this.resolutionHandler}>Resolution</button>
      </div>
    );
  }

}

export default YouTubeDebugger;
