import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Dogs App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/">Dogs App</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/finder">Dogs Finder</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/list">Dogs List</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/favourites">My Favourites</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;