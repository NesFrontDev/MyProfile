import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Nav, Navbar, NavDropdown, Container, Button } from 'react-bootstrap';
import {  } from "./componentCss/Navbar.css";



const Navbarr = () => {
  const [data, setData] = useState(0);
 
  return (
    <div >
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>

          <a href="#home" className="navbar-brand md-auto">
            <img
              className=""
              src={`${process.env.PUBLIC_URL}/img/n3.jpg`}
              alt="First slide"
              width="45"
              height="40"
            />
          </a>

          <h6 style={{ marginTop: "7px" }}><b>NATTHAPONG PHETKHAI</b></h6>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto pe-md-flex">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <p style={{ marginTop: "14px", marginRight: "15px", marginLeft: "32px" }}><b>viewer : {data}</b></p>
          <Button onClick={() => setData(data + 1)} variant="secondary"><b>CONTACT'ME</b></Button>{' '}

        </Container>
      </Navbar>

    </div>
  );
}

export default Navbarr
