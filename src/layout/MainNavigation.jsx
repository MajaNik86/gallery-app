import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { useDispatch,useSelector } from "react-redux";
import { selectActiveUser, selectIsAuthenticated } from "../store/auth/selector";
import { logout } from "../store/auth/slice";

const MainNavigation = () => {
    const dispatch = useDispatch();
    const activeUser = useSelector(selectActiveUser); 
    const isAuthenticated = useSelector(selectIsAuthenticated);

    function handleLogout(){
        dispatch(logout());

    }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Galleries</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/galleries">All Galleries</Nav.Link>
            
            {!isAuthenticated && <Nav.Link href="/login">Login</Nav.Link>}
            {!isAuthenticated && <Nav.Link href="/register">Register</Nav.Link>}
            {isAuthenticated && (
              <Nav.Link href="/my-galleries">My Galleries</Nav.Link>
            )}
             {isAuthenticated && (
              <Nav.Link href="/create">Create New Gallery</Nav.Link>
            )}
            {isAuthenticated && (
              <Button variant="outline-light" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            )}
          </Nav>
        </Container>
      </Navbar>
    
    </div>
  );
};

export default MainNavigation;
