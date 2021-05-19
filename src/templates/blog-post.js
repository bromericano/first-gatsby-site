import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function BlogPost({ data }) {
        const post = data.markdownRemark
        const image = getImage(post.frontmatter.image)
    return (
        <Layout>
            <div>
                <h1 className="text-center text-xl font-bold">{post.frontmatter.title}</h1>
                <div className='text-center'>
                    <GatsbyImage image={image} alt='paper' />
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <p className='text-right italic'>Written by {post.frontmatter.author}</p>
                <p className='text-right text-sm opacity-50'>{post.frontmatter.date}</p>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html,
            frontmatter {
                title
                author
                image {
                    childImageSharp {
                        gatsbyImageData(width: 600, placeholder: BLURRED, formats: AUTO)
                      }
                }
                date
                }
            }
        }
`

