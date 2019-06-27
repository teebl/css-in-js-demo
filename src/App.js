import React from "react";
import logo from "./logo.svg";

import styled, { keyframes } from "styled-components";

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledApp = styled.div`
  text-align: center;
`;
const StyledLogo = styled.img`
  animation: ${appLogoSpin} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledLink = styled.a`
  color: #61dafb;
`;

function App() {
  return (
    <StyledApp>
      <StyledHeader>
        <StyledLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <StyledLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </StyledLink>
      </StyledHeader>
    </StyledApp>
  );
}

export default App;
