import React, { Component } from 'react';
import { LaunchesAPI, Launch, LaunchSortByLatestDate } from './launch-interface';
import LaunchCards from './launches';
import { Spinner } from 'react-bootstrap';

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
    // Async data/UI handling, be default check if data has been loaded, then attempt to render LauncherCards component
    if (!this.state.isLoaded) {
      return (
        <Spinner animation='border' role='status'>
          <span className='sr-only'>Loading...</span>
        </Spinner>
      );
    }
    return (
      // For experiemental purposes, FullDetailLaunch component will not be placed here for the time being
      // However for simplicity and flow, adding Router and Switch here for the two child compoennt would be more logical
      <>
        <h2>All launches</h2>
        <LaunchCards launches={this.state.launches} />
      </>
    );
  }

  async fetchLaunchData() {
    return fetch(LaunchesAPI)
      .then(res => res.json())
      .then((data: Launch[]) => data.sort(LaunchSortByLatestDate));
  }
}

export default LaunchPanel;
