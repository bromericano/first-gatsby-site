// Step 1: Import your component
import * as React from 'react';
import { graphql } from "gatsby";
import Layout from '../components/layout';
// Step 2: Define your component
const AboutPage = ({ data }) => {
  return (
    <Layout pageTitle="About">
    <h1>About {data.site.siteMetadata.title}</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}
// Step 3: Export your component
export default AboutPage
export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`