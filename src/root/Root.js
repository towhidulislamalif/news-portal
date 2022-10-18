import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header';
import Footer from '../pages/shared/Footer';
import LeftAside from '../pages/shared/LeftAside';
import RightAside from '../pages/shared/RightAside';
function Root() {
  return (
    <div>
      <Header />

      <Container>
        <Row>
          <Col md="2">
            <LeftAside />
          </Col>
          <Col md="6">
            <Outlet />
          </Col>
          <Col md="4">
            <RightAside />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default Root;
