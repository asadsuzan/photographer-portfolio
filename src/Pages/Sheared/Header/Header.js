import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firbaseConfig";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Legend</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto fs-6 align-items-center"
            style={{ gap: "20px" }}
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            {user ? (
              <button
                onClick={() => signOut(auth)}
                className="btn btn-sm btn-danger text-uppercase"
              >
                sign out
              </button>
            ) : (
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
