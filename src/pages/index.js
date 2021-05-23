// Step 1: Import React
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImgOverlay, CardImg } from 'reactstrap';
import RandomAuthor from '../components/RandomAuthor';

// Step 2: Define your component
const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
    <div className='shadow-lg'>
      <div className='grid grid-cols-1 auto-rows-min lg:grid-cols-3 divide-gray-900 divide-y-4 gap-1'>
          {data.allMarkdownRemark.edges.map(({ node }, index) => {
            if(index === 0) {
              return (<div key={node.id} className='order-first lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2 hover:animate-pulse'>
                  <Link className='no-underline' to={node.fields.slug}>
                    <div className=''>
                      <Card className='hover:bg-blue-300' style={{ border: 'transparent' }}>
                        <CardImg className='h-full' src={node.frontmatter.image.publicURL} alt='image' />
                        <CardImgOverlay className='p-0'>
                        <div className='bg-gray-300 bg-opacity-60 pb-2 px-2 text-black' style={{ position: 'absolute', bottom: 0 }}>
                          <CardTitle tag="h5">{node.frontmatter.title}</CardTitle>
                          <CardSubtitle tag="h6" className="mb-2 text-gray-700">Written by {node.frontmatter.author} <span className='float-right'>{node.frontmatter.date}</span></CardSubtitle>
                          <CardText>{node.excerpt}</CardText>
                        </div>
                        </CardImgOverlay>
                      </Card>
                    </div>
                  </Link>
              </div>)
            } else if(index === 1 || index === 2 || index === 3) {
            return (
              <div className='h-1/2 hover:animate-pulse' key={node.id}>
                  <Link className='no-underline' to={node.fields.slug}>
                    <div className=''>
                      <Card className='text-black' style={{ border: 'transparent' }}>
                        <GatsbyImage className='hidden lg:block' image={getImage(node.frontmatter.image)} alt='image' />
                        <CardBody>
                          <CardTitle tag="h5">{node.frontmatter.title}</CardTitle>
                          <CardSubtitle tag="h6" className="mb-2 text-gray-700">{node.frontmatter.author} <span className='float-right'>{node.frontmatter.date}</span></CardSubtitle>
                          <CardText className="text-black">{node.excerpt}</CardText>
                        </CardBody>
                      </Card>
                    </div>
                  </Link>
              </div>
            )} else {
              return (<div className='lg:col-start-1 lg:col-end-4 hover:animate-pulse' key={node.id}>
                  <Link className='no-underline' to={node.fields.slug}>
                    <div className=''>
                      <Card className='text-black' style={{ border: 'transparent' }}>
                        <CardBody>
                          <CardTitle tag="h5">{node.frontmatter.title}</CardTitle>
                          <CardSubtitle tag="h6" className="mb-2 text-gray-700">{node.frontmatter.author} <span className='float-right'>{node.frontmatter.date}</span></CardSubtitle>
                          <CardText className="text-black">{node.excerpt.substr(0,200)}</CardText>
                        </CardBody>
                      </Card>
                    </div>
                  </Link>
              </div>)
            }
          })
          }
          <div className='lg:col-start-3 lg:row-start-1'>
            <RandomAuthor />
          </div>
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