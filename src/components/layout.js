import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Navbar, NavbarBrand } from 'reactstrap';
import { StaticImage } from 'gatsby-plugin-image';

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
        <div className='text-center my-5'>
            <Link to='/'>
                <StaticImage  src="../images/logoSample3.svg" placeholder='blurred' alt='logo' className='bg-white' />
            </Link>
        </div>
            <div className='opacity-1'>
                <title>{pageTitle}</title>
                <div className="container p-0">
                    <div className=''>
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Layout