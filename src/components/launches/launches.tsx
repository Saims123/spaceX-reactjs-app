import React from "react";
import Moment from "react-moment";
import { Launch } from "./launch-interface";
import { Card, CardDeck, Badge } from "react-bootstrap";
import noImage from "../../no_image_available.png";
import "./launches.css";

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

const StatusBadge = ({ _launch }: any) => {
  let badgeText = _launch.launch_success ? "success" : "fail";
  let badgeVarient: BadgeVarient;

  if (_launch.launch_success) {
    badgeVarient = BadgeVarient.success;
  } else if (_launch.launch_success == null) {
    badgeVarient = BadgeVarient.secondary;
    badgeText = "unknown";
  } else {
    badgeVarient = BadgeVarient.danger;
  }

  return (
    <Badge pill variant={badgeVarient}>
      {badgeText.toUpperCase()}
    </Badge>
  );
};

const LaunchCards = ({ launches }: any) => {
  return (
    <div className="missions">
      <h2>All launches</h2>
      <CardDeck>
        {launches.map((launch: Launch, index: number) => (
          // Key is there to ensure that the list are correctly identified in the DOM
          <Card key={index} className="launch-cards">
            <Card.Img
              variant="top"
              src={
                launch.links.mission_patch == null
                  ? noImage
                  : launch.links.mission_patch
              }
            />
            <Card.Body>
              <Card.Title>{launch.mission_name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
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
            </Card.Body>
          </Card>
        ))}
        ;
      </CardDeck>
    </div>
  );
};

export default LaunchCards;
