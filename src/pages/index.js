// Step 1: Import React
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImgOverlay, CardImg } from 'reactstrap';



// Step 2: Define your component
const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
    <div>
      <div className='grid grid-cols-3 auto-rows-fr gap-1'>
          {data.allMarkdownRemark.edges.map(({ node }, index) => {
            if(index === 0) {
              return (<div key={node.id} className='order-1 col-start-1 col-end-3 row-start-1 row-end-2'>
                  <Link className='no-underline' to={node.fields.slug}>
                    <div className=''>
                      <Card className='hover:bg-blue-300' style={{ border: 'transparent' }}>
                        <CardImg className='h-full' src={node.frontmatter.image.publicURL} alt='image' />
                        <CardImgOverlay className='p-0'>
                        <div className='bg-gray-900 bg-opacity-10 pb-2 px-2 text-black' style={{ position: 'absolute', bottom: 0 }}>
                          <CardTitle tag="h5">{node.frontmatter.title}</CardTitle>
                          <CardSubtitle tag="h6" className="mb-2 text-gray-700">{node.frontmatter.author} <span className='float-right'>{node.frontmatter.date}</span></CardSubtitle>
                          <CardText>{node.excerpt}</CardText>
                        </div>
                        </CardImgOverlay>
                      </Card>
                    </div>
                  </Link>
              </div>)
            } else {
            return (
              <div key={node.id}>
                  <Link className='no-underline' to={node.fields.slug}>
                    <div className=''>
                      <Card className='hover:bg-blue-300 text-black' style={{ border: 'transparent' }}>
                        <GatsbyImage image={getImage(node.frontmatter.image)} alt='image' />
                        <CardBody>
                          <CardTitle tag="h6">{node.frontmatter.title}</CardTitle>
                          <CardSubtitle tag="h7" className="mb-2 text-gray-700">{node.frontmatter.author} <span className='float-right'>{node.frontmatter.date}</span></CardSubtitle>
                          <CardText className="text-black">{node.excerpt}</CardText>
                        </CardBody>
                      </Card>
                    </div>
                  </Link>
              </div>
            )}
          })
          }
          <div className='col-start-3 row-start-1'>
            Hey!
          </div>
      </div>
      <div className='text-center'>
        <StaticImage src="../images/main.jpg" placeholder='blurred' alt='main' />
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
              publicURL
            }
          }
          fields {
            slug
          }
          excerpt (pruneLength: 300)
          id
        }
      }
      totalCount
    },
  }   
`