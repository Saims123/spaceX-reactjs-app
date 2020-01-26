import React from "react";
import { Mission } from "./mission-interface";
import { Card, CardDeck, CardGroup, CardColumns } from "react-bootstrap";
import "./mission.css";
const Missions = ({ missions }: any) => {
  return (
    <div className="missions">
      <h2>Missions</h2>
      <CardDeck>
        {missions.map((mission: Mission) => (
          <Card className = "cards">
            <Card.Body>
              <Card.Title>{mission.mission_name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {mission.manufacturers}
              </Card.Subtitle>
              <Card.Text>{mission.description}</Card.Text>
              <Card.Link href={mission.website}>Website</Card.Link>
              <Card.Link href={mission.wikipedia}>Wikipedia</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </div>
  );
};

export default Missions;
