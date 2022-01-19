import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #2e2e2e;
  z-index: 3;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    position: relative;
    & + li {
      padding-left: 5rem;
    }
  }
  #logo {
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
    font-weight: lighter;
    letter-spacing: 1px;
  }

  @media screen and (max-width: 700px) {
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0;
    ul {
      padding: 1rem 0;
      justify-content: center;
      width: 100vw;
      li {
        background: #555;
        border-radius: 15px;
        padding: 1rem;
        text-align: center;
        & + li {
          margin-left: 1rem;
        }
      }
    }
  }
`;
