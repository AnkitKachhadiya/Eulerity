import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Pets from "./Pets";

function NavBar() {
    return (
        <BrowserRouter>
            <Link to="/">Pets</Link>
            <Link to="/about">About</Link>
            <Routes>
                <Route path="/" element={<Pets />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default NavBar;
