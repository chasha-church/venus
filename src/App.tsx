import styled, {ThemeProvider} from "styled-components"
import { GlobalStyles } from './styles/Global'
import {Home} from "./components/Home/Home"
import {theme} from "./styles/Theme";

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
