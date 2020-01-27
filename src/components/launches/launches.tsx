import React from "react";
import Moment from "react-moment";
import { Launch } from "./launch-interface";
import { Card, CardDeck, Badge } from "react-bootstrap";
import noImage from '../../no_image_available.png';
import './launches.css';
const Launches = ({ launches }: any) => {
  console.log(launches);
  return (
    <div className="missions">
      <h2>All launches</h2>
      <CardDeck>
        {launches.map((launch: Launch, index: number) =>  (
          // Key is there to ensure that the list are correctly identified in the DOM
          <Card key={index} className="launch-cards">
            <Card.Img variant="top" src={launch.links.mission_patch}/>
            <Card.Body>
              
              <Card.Title>{launch.mission_name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Launched : <Moment date={launch.launch_date_utc} /> ¦ Status :
                <Badge pill variant={BadgeVarient.secondary}>
                  UNKNOWN
                </Badge>
              </Card.Subtitle>
              <Card.Text>{launch.details}</Card.Text>
            </Card.Body>
          </Card>
        ))};
      </CardDeck>
    </div>
  );
};


 enum BadgeVarient {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  danger = "danger",
  warning = "warning",
  info = "info",
  light = "light",
  dark = "dark"
}

export default Launches;
