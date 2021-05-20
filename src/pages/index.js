// Step 1: Import React
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';



// Step 2: Define your component
const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
    <div>
    <h1 className='text-center'>The Headstart Herald</h1>
      <p className='text-center'>Hard-hitting articles of exeptional journalistic talent from the students of Headstart</p>
      <div className='text-center'>
        <StaticImage src="../images/main.jpg" placeholder='blurred' alt='main' />
      </div>

      <div className='ml-4 text-xl font-semibold'>Recent Articles: </div>
      <div className='grid grid-cols-3 auto-rows-fr gap-4'>
          {data.allMarkdownRemark.edges.map(({ node }, index) => {
            return (
              <div key={node.id}>
                  <Link className='no-underline' to={node.fields.slug}>
                    <div className='px-2'>
                      <Card className='hover:bg-blue-300' style={{ border: 'transparent' }}>
                        <GatsbyImage image={getImage(node.frontmatter.image)} alt='image' />
                        <CardBody>
                          <CardTitle tag="h6">{node.frontmatter.title}</CardTitle>
                          <CardSubtitle tag="h7" className="mb-2 text-muted">{node.frontmatter.author} {node.frontmatter.date}</CardSubtitle>
                          <CardText className="text-transparent bg-clip-text bg-gradient-to-b from-black to-transparent">{node.excerpt}</CardText>
                        </CardBody>
                      </Card>
                    </div>
                  </Link>
              </div>
            )
          })
          }
      </div>
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
            image {
              childImageSharp {
                gatsbyImageData(width: 200, placeholder: BLURRED, formats: AUTO)
              }
            }
          }
          fields {
            slug
          }
          excerpt
          id
        }
      }
      totalCount
    },
  }   
`