import React from 'react';
import Link from '../../elements/Link';
import LinkActive from '../../elements/LinkActive';

function NavbarMenu() {
    return (
    <div className="navbar-menu">
        <div className="navbar-end">
            <div className="navbar-item">
                <div className="buttons">
                    <Link />
                    <Link />
                    <Link />
                    <LinkActive/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default NavbarMenu
