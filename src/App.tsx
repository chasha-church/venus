import React from 'react';

import styled, { ThemeProvider } from "styled-components"
import { GlobalStyles } from './styles/Global'
import { theme } from "./styles/Theme";

import { Sidebar } from './components/Sidebar/Sidebar';
import { Content } from "./components/Content/Content";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Sidebar />
        <Content />
      </div>
    </ThemeProvider>
  )
}

export default App
