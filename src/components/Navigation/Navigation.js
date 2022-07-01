import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <Nav>
      <StyledLink to="/">Play</StyledLink>
      <StyledLink to="/history">History</StyledLink>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
`;

const StyledLink = styled(NavLink)`
  flex: 1;
  background-color: aliceblue;
  text-decoration: none;
  color: black;
  padding: 1.5rem;
  display: grid;
  place-items: center;
  border: 0.5px solid #777;
  border-radius: 0.5rem;
  margin: 0.1rem;

  &.active {
    background-color: darkblue;
    color: white;
  }
`;
