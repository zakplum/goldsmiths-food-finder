import styled from 'styled-components';
import { NavLink as Link } from "react-router-dom";
   
export const Box = styled.div`
  padding: 10px;
  background: white;
  position: relative;
  bottom: 0;
  @media (max-width: 1000px) {
    padding: 20px 10px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`

export const FooterBar = styled.div`
    text-align: center;
    flex-direction: column;
    justify-content: center;
    
`
export const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  padding-left: 1rem;
  

`;


