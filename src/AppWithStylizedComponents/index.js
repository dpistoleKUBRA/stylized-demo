import React from 'react';
import styled, {
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components';
import {
  PrimaryButton,
  SecondaryButton,
} from './components/Button';

export const theme = {
  buttons: {
    primary: "blue",
    secondary: "red",
    disabled: "grey"
  }
};

export const lightTheme = {
  buttons: {
    primary: "lightblue",
    secondary: "lightcoral",
    disabled: "lightgrey"
  }
};

const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #4d4d4d;
  
  * {
      box-sizing: content-box;
  }
}
`;

const DemoWrapper = styled.div`
width: 400px;
margin: 0 auto;
background: white;
padding: 50px 15px;
`;

const StyledTitle = styled.h1`
color: blue;
text-align: center;
`;

const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <DemoWrapper>
          <StyledTitle>
            Styled Demo Title
          </StyledTitle>
          <ButtonWrapper>
            <PrimaryButton label="Primary Button" />
            <ThemeProvider theme={lightTheme}>
              <SecondaryButton label="Secondary Button"/>
            </ThemeProvider>
          </ButtonWrapper>
        </DemoWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
