import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashRouter, Link, NavLink, Route } from 'react-router-dom';
import navImg from '../../Images/nav-img.png'
import About from '../About/About';
import './Header.css'


const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container className='navImgDesign'>
                    <img width='100' height='100' src={navImg} alt="" />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <NavLink to='/home'>Home</NavLink>
                            <NavLink to="/resume">Resume Download</NavLink>
                            <NavLink to="/contact">Contact Me</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;