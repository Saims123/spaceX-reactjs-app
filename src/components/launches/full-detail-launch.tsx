import React, { Component } from 'react';
import { LaunchesAPI, Launch } from './launch-interface';
import { Spinner, Card, Button } from 'react-bootstrap';
import noImage from '../../no_image_available.png';
import Moment from 'react-moment';
import StatusBadge from './custom-badge';

const LaunchFullView = ({ launch }: any) => {

  return (
    <Card>
      <Card.Img
        variant='top'
        src={
          launch.links.mission_patch == null // Shorthand to check whether if there's image link from the data stream, if not use the placeholder
            ? noImage
            : launch.links.mission_patch
        }
      />
      <Card.Body>
        <Card.Title>{launch.mission_name}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          <div>Mission ID : {launch.mission_id}</div>
          <br />
          <div>
            Launch : <Moment date={launch.launch_date_utc} />
          </div>
          <br />
          <div>Location : {launch.launch_site.site_name_long}</div>
          <br />
          <div>
            Status :<StatusBadge _launch={launch}></StatusBadge>
          </div>
        </Card.Subtitle>
        <Card.Text>{launch.details}</Card.Text>

        <div className='links'>
          <h4>Links</h4>
          {launch.links.wikipedia !== null && (
            <Button variant='primary' href={launch.links.wikipedia}>
              Wikipedia
            </Button>
          )}
          {launch.links.wikipedia !== null && (
            <Button variant='primary' href={launch.links.wikipedia}>
              Wikipedia
            </Button>
          )}

          {launch.links.video_link !== null && (
            <Button variant='primary' href={launch.links.video_link}>
              Youtube
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );

};

class FullDetailedLaunch extends Component<any> {
  state = {
    launchData: null,
    isLoaded: false
  };
  // This is needed even if it's deemed useless. It does not automatically pull props from parent component
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: any) {
    super(props);
  }

  componentWillMount() {
    let flightNumber = this.props.match.params.flight_number;
    this.fetchOneLaunchData(flightNumber)
      .then((data: Launch) => {
        this.setState({ launchData: data, isLoaded: true });
      })
      .catch(console.error);
  }
  render() {
    if (this.state.isLoaded) {
          console.log(this.state.launchData);
      return (
        <div>
          <LaunchFullView launch={this.state.launchData} />
        </div>
      );
    }
    return (
      <Spinner animation='border' role='status'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    );
  }

  async fetchOneLaunchData(flight_number: number) {
    return fetch(`${LaunchesAPI}/${flight_number}`).then(res => res.json());
  }
}

export default FullDetailedLaunch;
