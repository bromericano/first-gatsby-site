import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default function BlogPost({ data }) {
        const post = data.markdownRemark
    return (
        <Layout>
            <div>
                <h1 className="text-center text-xl font-bold">{post.frontmatter.title}</h1>
                <img className="mx-auto" alt="paper" src={post.frontmatter.image.publicURL} />
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
                    publicURL
                }
                date
                }
            }
        }
`

