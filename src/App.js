import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import GlobalStyles from "./components/styles/Global";

const theme = {
    colors: {
        primary: "#1c49c2",
        header: "#1c49c2",
        body: "#f9f9f9",
        footer: "#003333",
    },
    mobile: "768px",
    minMobile: "480px",
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <NavBar />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
