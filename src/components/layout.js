import * as React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { StaticImage } from 'gatsby-plugin-image';
import { useState } from 'react';

const Layout = ({ pageTitle, children }) => {
    // State needed for the Navbar Toggler icon to function
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <main>
            <div className="bg-gray-100">
            {/* Navbar shown at the top of every page */}
                <Navbar color="white" className='pb-0 pt-2' light>
                {/* NavbarBrand 'The Headstart Herald' shown on large+ screens */}
                <NavbarBrand href="/" className="hidden lg:block ml-2"><StaticImage src="../images/theHeadstartHerald.png" placeholder='blurred' alt='logo' className='bg-white' /></NavbarBrand>
                {/* NavbarBrand 'HH' shown on screen sized smaller than large */}
                <NavbarBrand href="/" className="ml-2 lg:hidden "><StaticImage src="../images/HH.png" placeholder='blurred' alt='logo' className='bg-white' /></NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!collapsed} navbar>
                    <Nav className='text-right mr-2' navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
                {/* Where the code from the other js files goes */}
                <div className=''>
                    {children}
                </div>
                {/* Footer information that will show at the bottom of every page */}
                <footer className='bg-gray-800 text-gray-200 py-2 px-2'>
                    <p className='mb-0'><span>Site by Luke Gronert</span> <span className='float-right'>Made in 2021</span></p>
                </footer>
            </div>
        </main>
    )
}

export default Layout