import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
display: flex-inline;
justify-content: space-between;
padding: 0rem;
text-align:right;
margin-top: 1rem;
margin-right: 1rem;
`;

export const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  padding-left: 1rem;
  

`;

export const Heading = styled.div`
    text-size: 40px;
    background: #FFFFFF;
    height: 20px;
    float: left;
    padding: 0 1rem;
    display:flex;
    @media screen and (max-width: 475px) {
    display: none;
`;