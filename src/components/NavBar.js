import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav, StyledHeader, StyledLink } from "./styles/Header.styled";
import About from "./About";
import Pets from "./Pets";

function NavBar() {
    return (
        <BrowserRouter>
            <StyledHeader>
                <Nav>
                    <StyledLink to="/">Pets</StyledLink>
                    <StyledLink to="/about" aria-label="About project">
                        About
                    </StyledLink>
                </Nav>
            </StyledHeader>
            <Routes>
                <Route exact path="/" element={<Pets />} />
                <Route path="/about" element={<About />} />
                <Route path="*">404 Not Found!</Route>
            </Routes>
        </BrowserRouter>
    );
}

export default NavBar;
