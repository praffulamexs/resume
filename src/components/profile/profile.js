import React from "react";
import "./profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardGroup, Card } from "react-bootstrap";

function Profile() {
  const spacing = <span>&nbsp;&nbsp;&nbsp;</span>;
  return (
    <div className="profile_container">
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="fb.jpg" />
          <Card.Body>
            <Card.Title>Prafful Jagtap</Card.Title>
            <Card.Text>
              Experienced Software Engineer with a demonstrated history of
              working in the information technology and services industry.
              Skilled in Website Development and Mobile Application Development.
              Strong IT professional with a Bachelor of Science - focused in
              Computer Science from Mumbai University Mumbai, currently pursuing
              a Master's degree in Computer Science with a specialization in
              Machine Learning and Big Data.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Software Developer</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Profile;
