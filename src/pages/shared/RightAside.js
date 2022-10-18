import React from 'react';
import img from '../../image/cocacola.jpg';
import img2 from '../../image/starbucks.jpg';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Carousel from 'react-bootstrap/Carousel';

import {
  FaFacebook,
  FaGoogle,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
  FaWhatsapp,
} from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';

function RightAside() {
  return (
    <div>
      <div>
        <ButtonGroup vertical>
          <Button className="mb-2" variant="outline-primary">
            <FaGoogle /> Login With Google
          </Button>
          <Button variant="outline-dark">
            <FaGithub /> Login With Github
          </Button>
        </ButtonGroup>
      </div>

      <div className="mt-4">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaInstagram /> Instagram
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch /> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp /> Whatsapp
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div className="mt-4">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img} alt="First slide" />
            <Carousel.Caption>
              <h3>Coca Cola</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Second slide" />

            <Carousel.Caption>
              <h3>Starbucks</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default RightAside;
