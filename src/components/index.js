import React from "react";
import { Nav, NavLink, NavMenu, Heading } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
      <Heading>Goldsmiths Food Finder</Heading>
        <NavMenu>
        <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About Us
          </NavLink>
          <NavLink to="/signin" activeStyle>
            Sign In
          </NavLink>
          <NavLink to="/results" activeStyle>
            Results
          </NavLink>
          <NavLink to="/sitemap" activeStyle>
            Sitemap
          </NavLink>
          <NavLink to="/privacy" activeStyle>
            Privacy Policy
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;