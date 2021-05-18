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
      <img className='max-w-2xl mx-auto py-4' alt="kids" src='https://images.unsplash.com/photo-1453873623425-04e3561289aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGpvdXJuYWxpc218ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' />

      <h2 className='text-lg font-semibold mb-2'>Recent Articles: </h2>
      <div className="grid grid-cols-3 gap-2">
          {data.allMarkdownRemark.edges.map(({ node }, index) => {
            return (
              <div key={node.id} className="border border-black rounded max-w-sm p-2 bg-blue-100 mx-auto hover:bg-blue-900">
                  <Link to={node.fields.slug}>
                      <h4 className="text-xl font-bold">{node.frontmatter.title}</h4>
                      <h5 className="text-black text-opacity-40 text-sm float-right">{node.frontmatter.date}</h5>
                      <p className="text-left">By {node.frontmatter.author}</p>
                      <p className="text-transparent bg-clip-text bg-gradient-to-b from-black to-transparent">{node.excerpt}</p>
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
            author
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