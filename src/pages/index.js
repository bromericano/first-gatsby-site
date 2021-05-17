// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
// Step 2: Define your component
const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout pageTitle="THE HEADSTART HERALD">
      <p className='text-center text-lg'>Hard-hitting articles of exeptional journalistic talent from the students of Headstart</p>
      <img className='max-w-2xl mx-auto py-4' alt="kids" src='https://images.unsplash.com/photo-1453873623425-04e3561289aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1966&q=80' />

      <div>
        <h3>{data.allMarkdownRemark.totalCount} Posts:</h3>
          {data.allMarkdownRemark.edges.map(({ node }, index) => {
            return (
              <div key={node.id}>
              <Link to={node.fields.slug}>
                <h4 className="text-xl font-bold">{node.frontmatter.title}</h4>
                <h5 className="text-black text-opacity-40 text-sm">{node.frontmatter.date}</h5>
                <p className="text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-400">{node.excerpt}</p>
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