import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";

import "./styles.css";
import Package from "./components/package/package";
import Home from "./components/home/home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./components/profile/profile";

function App() {
  const str = "{ }";
  return (
    <Router>
      <Container fluid className="main_container">
        <Row className="main_row">
          <Col lg={7} md={12} className="each_col left_col">
            <Tabs className="tabs" defaultActiveKey="package">
              <Tab
                eventKey="home"
                title={
                  <span>
                    <span className="title_js">JS</span> index.js
                  </span>
                }
              >
                <span className="path">
                  src > <span className="path title_js">JS</span> index.js
                </span>
                <Home />
              </Tab>
              <Tab
                eventKey="package"
                title={
                  <span>
                    <span className="title_js">{str}</span> package.json
                  </span>
                }
              >
                <span className="path">
                  src > <span className="path title_js">{str}</span>{" "}
                  package.json
                </span>
                <Package />
              </Tab>
            </Tabs>
          </Col>
          <Col lg={5} md={12} className="each_col">
            <Switch>
              {/* <Route path="/about">about</Route>
              <Route path="/users">users</Route> */}
              <Route path="/"><Profile /></Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
