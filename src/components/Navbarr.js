import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Container, Button, Popover, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { } from "./componentCss/Navbar.css";
import Example from "./Elements/Example";

const Navbarr = () => {

  return (
    <div>
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

          <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled" >Nes</Tooltip>}>
            <span className="d-inline-block">
            <h6 style={{ marginTop: "7px",marginLeft:"60px" }}><b>NATTHAPONG PHETKHAI</b></h6>
            </span>
          </OverlayTrigger>
          

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* <Navbar.Collapse id="basic-navbar-nav" style={{ marginRight: "130px" }}>
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

          </Navbar.Collapse> */}

          <Example />

        </Container>
      </Navbar>

    </div>
  );
}

export default Navbarr
