import React, { Component } from "react";
import { MissionAPI, Mission, MissionSort } from "./mission-interface";
import Missions from "./missions";

class MissionPanel extends Component {
  state = {
    missions: []
  };

  componentDidMount() {
    fetch(MissionAPI)
      .then(res => res.json())
      .then((data: Mission[]) => data.sort(MissionSort))
      .then((data: Mission[]) => {
        this.setState({ missions: data });
      })
      .catch(console.error);
  }
  render() {
    return <Missions missions={this.state.missions} />;
  }
}

export default MissionPanel;
