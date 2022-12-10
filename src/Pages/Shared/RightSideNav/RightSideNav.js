import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaGithub, FaTwitch, FaTwitter, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';


const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant="outline-info" className='mb-2'><FaFacebook />Log In with Facebook</Button>
        <Button variant="outline-dark"><FaGithub /> Log In with Github</Button>
      </ButtonGroup>
      <div className='mt-4'>
        <h4> Find Us On</h4>
        <ListGroup>
          <ListGroup.Item className='mb-2'> <FaTwitter /> Twitter </ListGroup.Item>
          <ListGroup.Item className='mb-2'> <FaInstagram /> Instagram </ListGroup.Item>
          <ListGroup.Item className='mb-2'> <FaTwitch /> Twitch </ListGroup.Item>
          <ListGroup.Item className='mb-2'> <FaWhatsapp /> WhatsApp </ListGroup.Item>
          <ListGroup.Item className='mb-2'> <FaYoutube /> Youtube </ListGroup.Item>
        </ListGroup>
      </div>

      <BrandCarousel></BrandCarousel>
    </div>
  );
};

export default RightSideNav;