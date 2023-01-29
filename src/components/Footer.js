import React from "react";
import {
  Box,
  Container,
  FooterBar,
  NavLink
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
      <FooterBar>
            <p>Goldsmiths Food Finder: Made by Mark & Zak<br/></p>
            <NavLink to="/privacy" activeStyle>
             Privacy Policy
           </NavLink>
           <NavLink to="/sitemap" activeStyle>
             Sitemap
           </NavLink>
        </FooterBar>
      </Container>
    </Box>
  );
};
export default Footer;