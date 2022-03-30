import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import GlobalStyles from "./components/styles/Global";

const theme = {
    colors: {
        header: "#1c49c2",
        body: "#fff",
        footer: "#003333",
    },
    mobile: "768px",
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <NavBar />
        </ThemeProvider>
    );
}

export default App;
