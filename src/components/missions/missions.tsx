import React from "react";
import { Mission } from "./mission-interface";
import { Card, CardDeck } from "react-bootstrap";
import "./mission-styling.css";
const MissionCards = ({ missions }: any) => {
  return (
    <div className="missions">
      <h2>Missions</h2>
      <CardDeck>
        {missions.map((mission: Mission, index: number) => (
          // Key is there to ensure that the list are correctly identified in the DOM 
          <Card key={index} className = "cards">
            <Card.Body >
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

export default MissionCards;
