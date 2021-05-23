import * as React from 'react';
import { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function RandomAuthor() {
    const [authors, setAuthors] = useState([
        {
            name: 'Luke',
            birthday: 'November 11, 1991',
            bio: "Born and raised in California, USA. Currently an English Teacher with an interested in web development.",
            image: '../images/headshot1.jpg',
        },
        {
            name: 'Eva',
            birthday: 'July 21, 1992',
            bio: 'Born and raised in Vancouver, Canada. Currently a Digital Marketing Specialist.',
            image: '../images/headshot1.jpg',
        },
        {
            name: 'Fred',
            birthday: 'July 21, 1992',
            bio: 'Born and raised in Vancouver, Canada. Currently a Digital Marketing Specialist.',
            image: '../images/headshot1.jpg',
        },
        {
            name: 'Barney',
            birthday: 'July 21, 1992',
            bio: 'Born and raised in Vancouver, Canada. Currently a Digital Marketing Specialist.',
            image: '../images/headshot1.jpg',
        },
        {
            name: 'Ted',
            birthday: 'July 21, 1992',
            bio: 'Born and raised in Vancouver, Canada. Currently a Digital Marketing Specialist.',
            image: '../images/headshot1.jpg',
        },
    ]);

    const [randomAuthor, setRandomAuthor] = useState({});
    useEffect(() => {
        setRandomAuthor(authors[Math.floor(Math.random() * authors.length)])
    }, [])
    return (
        <div className='bg-spotlight h-full bg-cover'>
            <div className='bg-gray-300 bg-opacity-40 pb-2 px-2 text-black max-w-max' >
                {randomAuthor.name}
                {randomAuthor.birthday}
                {randomAuthor.bio}
            </div>
        </div>
    )
}
