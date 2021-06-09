// Step 1: Import your component
import * as React from 'react';
import { graphql } from "gatsby";
import Layout from '../components/layout';
import authorList from '../information/authorList'
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';

// Step 2: Define your component
const AboutPage = ({ data }) => {
  let authors = authorList.authorList;
  return (
    <Layout pageTitle="About">
      <div className='text-center'>
        <h1>WHO WE ARE</h1>
      </div>
      {/* 2 columns when screen size is medium or larger, 1 column when smaller */}
      <div className='grid grid-cols-1 md:grid-cols-2 auto-rows-fr container md:gap-20 mt-10'>
        <div className=''>
          <img className='mx-auto' alt='img' src='https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' />
        </div>
        <div className='text-center my-auto'>
          <p>We are the journalism students of Ren'ai Headstart. We write articles about things that interest us, and, hopefully, interest you.</p>
        </div>
        <div className='md:order-last'>
          <img className='mx-auto' alt='img' src='https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' />
        </div>
        <div className='text-center my-auto md:order-3'>
          <p>We are the journalism students of Ren'ai Headstart. We write articles about things that interest us, and, hopefully, interest you.</p>
        </div>
      </div>
      <div className='text-center my-10 font-bold text-4xl'>
        Meet the Team!
      </div>
      {/* container using CSS grid with 3 columns per row, 1 column when screen size is smaller than medium */}
      <div className='container grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
      {/* map over authors array that contains objects with all authors' information */}
      {/* Creates a car for each author that takes up 1 column of the grid */}
        {authors.map((author) => {
          return (<div key={author.name}>
            <Card inverse>
              <CardImg width="100%" src={author.image} alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle tag="h5">{author.name}</CardTitle>
                <CardText>{author.bio}</CardText>
                <CardText>
                  <small className="text-muted">{author.birthday}</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </div>)
        })}
      </div>
    </Layout>
  )
}
// Step 3: Export your component
export default AboutPage
