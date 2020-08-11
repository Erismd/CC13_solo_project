import React from "react";
import "../styles/styles.css";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Nav} from 'react-bootstrap';

export default function CreateNavbar() {
  const dispatch = useDispatch();
  return (
        <>
        <Navbar className="navbarSize"  bg="light" variant="light">
        <Navbar.Brand href="#">MY JOURNAL</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="#features"   onClick={() => {
               dispatch({ type: "SWITCH_PAGE" });
             }}>NEW POST</Nav.Link>
          <Nav.Link href="#contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
