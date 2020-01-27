import React, { Component } from "react";
import { LaunchesAPI, Launch, LaunchSortByLatestDate } from "./launch-interface";
import LaunchCards from "./launches";
import { Spinner } from "react-bootstrap";

class LaunchPanel extends Component {
  state = {
    launches: null,
    isLoaded: false
  };

  componentDidMount() {
    this.fetchLaunchData()
      .then((data: Launch[]) => {
        this.setState({ launches: data, isLoaded: true });
      })
      .catch(console.error);
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }
    return <LaunchCards launches={this.state.launches} />;
  }

  fetchLaunchData() {
    return fetch(LaunchesAPI)
      .then(res => res.json())
      .then((data: Launch[]) => data.sort(LaunchSortByLatestDate));
  }
}

export default LaunchPanel;
