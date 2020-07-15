import React from "react";

import simpleLogoImage from "../images/kwf-simple-logo.png";

import "./styles/Navbar.css";

const Navbar = () => {
    return (
        <div className="Navbar">
            <a
                className="Navbar__brand"
                href="/"
            >
                <img
                    className="Navbar__brand--logo"
                    src={simpleLogoImage}
                    alt="World's Fair Logo"
                />
                <div className="Navbar__brand--title">
                    <span>Knoxville </span>
                    <span> World's Fair</span>
                </div>
            </a>
        </div>
    )
}

export default Navbar;