import React from 'react';
import Moment from 'react-moment';
import { Launch } from './launch-interface';
import { Card, CardDeck } from 'react-bootstrap';
import noImage from '../../no_image_available.png';
import './launches-styling.css';
import StatusBadge from './custom-badge';
import { Link } from 'react-router-dom';

const LaunchCards = ({ launches }: any) => {
  return (
    <div>
      <h2>All launches</h2>
      <CardDeck>
        {launches.map((launch: Launch, index: number) => (
          // Key is there to ensure that the list are correctly identified in the DOM

          <Card key={index} className='launch-cards'>
            <Link key={index} to={`/launch/${launch.flight_number}`}>
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
              </Card.Body>
            </Link>
          </Card>
        ))}
        ;
      </CardDeck>
    </div>
  );
};

export default LaunchCards;
