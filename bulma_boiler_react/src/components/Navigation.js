import React from 'react';
import Logo from '../elements/Logo';
import Hamburger from '../elements/Hamburger';
import NavbarMenu from './navbar/NavbarMenu'

function Navigation() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <Logo />
                    <Hamburger />
                </div>
                <NavbarMenu />
            </div>
        </nav>
    )
}

export default Navigation
