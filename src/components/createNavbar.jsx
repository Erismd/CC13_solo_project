import React from "react";
import "../styles/styles.css";
import { useDispatch } from "react-redux";
import "../styles/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

export default function CreateNavbar() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="wrap_nav">
        {/* <Navbar className="navbarSize" bg="light" variant="light"> */}
        <Navbar className="navbarSize">
          <Navbar.Brand href="/">MY JOURNAL</Navbar.Brand>
          {/* <a class="navbar-brand" href="#">
            MY JOURNAL
          </a> */}
          <Nav className="mr-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link
              href="#features"
              onClick={() => {
                dispatch({ type: "SWITCH_PAGE" });
              }}
            >
              NEW POST
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => {
                dispatch({ type: "SWITCH_CONTACT" });
              }}
            >
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </>
  );
}
