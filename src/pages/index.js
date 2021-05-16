// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
// Step 2: Define your component
const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <img alt="kids" src='https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2Nob29sfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60' />

      <div>
        <h3>{data.allMarkdownRemark.totalCount} Posts:</h3>
          {data.allMarkdownRemark.edges.map(({ node }, index) => {
            return (
              <div key={node.id}>
              <Link to={node.fields.slug}>
                <h4>{node.frontmatter.title}</h4>
                <h5>{node.frontmatter.date}</h5>
                <p>{node.excerpt}</p>
              </Link>
              </div>
            )
          })
          }
      </div>
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage
export const query = graphql`
  query articles {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
          excerpt
          id
        }
      }
      totalCount
    }
  }   
`