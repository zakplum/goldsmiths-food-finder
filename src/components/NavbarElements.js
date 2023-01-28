import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Heading = styled.div`
    text-size: 40px;
    background: #FFFFFF;
    height: 20px;
    float: left;
    padding: 0 1rem;
    display:flex;
    @media screen and (max-width: 768px) {
    display: none;

`;
  
export const Nav = styled.nav`
  background: #FFFFFF;
  height: 20px;
  display: flex;
  float: right;
  justify-content: space-between;
  
`;
  
export const NavLink = styled(Link)`
  color: #000000;
  display: flex;
  align-items: right;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #4d4dff;
  }
`;
  
  
export const NavMenu = styled.div`
  display: flex;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;