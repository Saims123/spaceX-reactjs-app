import React from "react";
import { Mission } from "./mission-interface";
import { Card } from "react-bootstrap";
const Missions = ({ missions }: any) => {
  return (
    <div>
      <h2>Missions</h2>
      {missions.map((mission: Mission) => (
        <div>
          <Card style={{ width: "18rem" }}>
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
        </div>
      ))}
    </div>
  );
};

export default Missions;
