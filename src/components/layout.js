import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Navbar, NavbarBrand } from 'reactstrap';

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(
        graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
        `
    )
    return (
        <main>
            <div className='bg-gradient-to-r from-green-400 to-blue-500'>
                <title>{pageTitle}</title>
                <div className="container shadow-lg p-0">
                    <Navbar color='dark' dark className=''>
                        <NavbarBrand href='/' className='mr-auto ml-4'>Headstart Herald</NavbarBrand>
                    </Navbar>
                    <div className='bg-gray-300'>
                    <h1 className='text-center'>{pageTitle}</h1>
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Layout