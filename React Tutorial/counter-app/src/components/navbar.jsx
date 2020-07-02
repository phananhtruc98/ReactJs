import React, { Component } from "react";
// Stateless functional components

const NavBar = ({totalCounters}) => {
    console.log('NavBar - Rendered')
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar
                <span className="badge badge-pill badge-primary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
};

export default NavBar;
