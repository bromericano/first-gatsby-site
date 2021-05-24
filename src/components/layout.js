import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { StaticImage } from 'gatsby-plugin-image';
import { useState } from 'react';

const Layout = ({ pageTitle, children }) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <main>
        <div className="">
            <Navbar color="faded" className='pb-0 pt-2' light>
            <NavbarBrand href="/" className="hidden lg:block ml-2"><StaticImage src="../images/theHeadstartHerald.png" placeholder='blurred' alt='logo' className='bg-white' /></NavbarBrand>
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
                    <NavItem>
                        <NavLink href="/authors">Authors</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
                    <div className=''>
                        {children}
                    </div>
                </div>
        </main>
    )
}

export default Layout