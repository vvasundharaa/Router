import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import backgroundImage from '../assets/performing-arts.jpg';
import cardImg1 from '../assets/arts8.png';
import cardImg2 from '../assets/culture1.jpg';
import cardImg3 from '../assets/arts innovation.png';
import './HomePage.css';

function HomePage() {
  return (
    <div className="page-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="navbar-container m-5">
        <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-transparent">
          <Container>
             <Navbar.Brand as={Link} to="/">Shakticrafts.com</Navbar.Brand> 
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="navbar-link">Shakticrafts.com</Nav.Link>
              </Nav>
              <Nav className="ms-auto">
                <Nav.Item>
                  <Nav.Link as={Link} to="/" className="navbar-link">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/about" className="navbar-link ms-5">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/arts" className="navbar-link ms-5">Arts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/crafts" className="navbar-link ms-5">Crafts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/culture" className="navbar-link ms-5">Culture</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/blogs" className="navbar-link ms-5">Blogs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/contact" className="navbar-link ms-5">Contact</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="bottom-container">
        <Container>
          <p>"Explore the vibrant world of arts and culture, where creativity knows no bounds."</p>
          <button className="bottom-button px-3 py-2">Explore</button>
        </Container>
      </div>

      <div className="cards-page">
        <h1 className="card-heading">"Unleash your creativity: Dive into a world of Endless Arts and Crafts Possibilities!"</h1>
        <div className="cards-container">
          <div>
            <img className="card-img" src={cardImg1} alt="Card Image 1" />
            <p>Card description</p>
            <button>Button</button>
          </div>
          <div>
            <img className="card-img" src={cardImg2} alt="Card Image 2" />
            <p>Card description</p>
            <button>Button</button>
          </div>
          <div>
            <img className="card-img" src={cardImg3} alt="Card Image 3" />
            <p>Card description</p>
            <button>Button</button>
          </div>
        </div>
      </div>
    </div>
  );
} 

export defoult HomePage;
