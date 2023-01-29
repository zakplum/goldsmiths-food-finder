import React from "react";
import { NavLink, NavbarContainer, Heading } 
    from "./NavbarElements";
  

const Navbar = () => {
  return (
    <>
    <Heading>Goldsmiths Food Finder</Heading>
    <NavbarContainer>
      
      <NavLink to="/" activeStyle>
             Home
           </NavLink>
           <NavLink to="/about" activeStyle>
             About Us
           </NavLink>
           <NavLink to="/signin" activeStyle>
             Sign In
           </NavLink>
    </NavbarContainer>
    </>
  );
}

export default Navbar;