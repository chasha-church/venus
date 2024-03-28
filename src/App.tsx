import React from 'react';

import styled, { ThemeProvider } from "styled-components"
import { GlobalStyles } from './styles/Global'
import { theme } from "./styles/Theme";

import { Sidebar } from './components/Sidebar/Sidebar';
import { Content } from "./components/Content/Content";
import { AppLayout } from './components/AppLayout/AppLayout';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <AppLayout>
        <Sidebar />
        <Content />
      </AppLayout>
      
    </ThemeProvider>
  )

}

export default App