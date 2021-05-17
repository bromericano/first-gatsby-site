import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

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
        <main className="bg-gray-700">
            <div className='container px-4 mx-auto max-w-4xl bg-gray-400'>
                <title>{pageTitle}</title>
                <nav>
                    <ul className="flex flex-wrap space-x-4">
                        <li>
                            <Link to="/" className="font-semibold underline">
                                Home
                            </Link>
                        </li>
                        <li >
                            <Link to="/about" className="font-semibold underline" >
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
                <h1>{pageTitle}</h1>
                {children}
            </div>
        </main>
    )
}

export default Layout