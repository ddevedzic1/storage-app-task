import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">Secure cloud storage</Link>
            </nav>
        </div>
    )
}

export default Navbar;