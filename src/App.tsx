import styled, {ThemeProvider} from "styled-components"
import { GlobalStyles } from './styles/Global'
import {theme} from "./styles/Theme";
import { Content } from "./components/Content/Content";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="App">
                <Content />
            </div>
        </ThemeProvider>
    )
}

export default App
