import React from "react";

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    }
  }

  bitClickHandler = () => {
    this.setState({
      settings: { ...this.state.settings, bitrate: 12 }
    })
  };

  resolutionClickHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: "720p"
        }
      }
    })
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitClickHandler}>
        </button>
        <button className="resolution" onClick={this.resolutionClickHandler}>
        </button>
      </div>
    )
  }
}

export default YouTubeDebugger;
