import styled, {ThemeProvider} from "styled-components"
import { GlobalStyles } from './styles/Global'
import {theme} from "./styles/Theme";
import {Home} from "./components/Content/Home/Home";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="App">
                <Home />
            </div>
        </ThemeProvider>
    )
}

export default App
