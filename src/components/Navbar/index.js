import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavDropdown,
  Nav,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import { getTypes } from "../../helpers/fetch";
import useSearch from "../../hooks/useSearch";

function NavigationBar() {
  const [types, setTypes] = useState([]); // State Data
  const { value, changeHandler, search } = useSearch();
  useEffect(() => {
    //useEffect for component did mount
    getTypes().then((data) => setTypes(data));
  }, []);
  return (
    //  return page
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="mb-4"
    >
      <Link to="/">
        <Navbar.Brand>POKEMON TCG</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/favorites">
            Favorites
          </Nav.Link>
          <NavDropdown title="Pokemon Types" id="collasible-nav-dropdown">
            {types.map((type, index) => {
              return (
                <NavDropdown.Item as={Link} to={`/?type=${type}`} key={index}>
                  {type}
                </NavDropdown.Item>
              );
            })}
          </NavDropdown>
        </Nav>
        <Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search..."
              className="mr-sm-2"
              onChange={changeHandler}
              value={value}
            />
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavigationBar;
