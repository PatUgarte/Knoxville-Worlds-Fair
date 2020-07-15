import React from "react";
import { Link } from "react-router-dom";

import simpleLogoImage from "../images/kwf-simple-logo.png";

import "./styles/Navbar.css";

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link
                className="Navbar__brand"
                to="/badge/all"
            >
                <img
                    className="Navbar__brand--logo"
                    src={simpleLogoImage}
                    alt="World Fair Logo"
                />
                <div className="Navbar__brand--title">
                    <span>Knoxville </span>
                    <span> World Fair</span>
                </div>
            </Link>
        </div>
    )
}

export default Navbar;