import React from 'react';

import { ThemeProvider } from "styled-components"
import { GlobalStyles } from './styles/Global'
import { darkTheme, defaultTheme } from "./styles/Theme";

import { Sidebar } from './components/Sidebar/Sidebar';
import { Content } from "./components/Content/Content";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <div className="App">
                <Sidebar />
                <Content />
            </div>
        </ThemeProvider>
    );
}

export default App