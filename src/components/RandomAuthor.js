import * as React from 'react';
import { useState } from 'react';

export default function RandomAuthor() {
    const [authors, setAuthors] = useState([
        {
            name: 'Luke',
            birthday: 'November 11, 1991',
            bio: "Born and raised in California, USA. Currently an English Teacher with an interested in web development.",
        },
        {
            name: 'Eva',
            birthday: 'July 21, 1992',
            bio: 'Born and raised in Vancouver, Canada. Currently a Digital Marketing Specialist.',
        },
        {
            name: 'Fred',
            birthday: 'July 21, 1992',
            bio: 'Born and raised in Vancouver, Canada. Currently a Digital Marketing Specialist.',
        },
        {
            name: 'Barney',
            birthday: 'July 21, 1992',
            bio: 'Born and raised in Vancouver, Canada. Currently a Digital Marketing Specialist.',
        },
        {
            name: 'Ted',
            birthday: 'July 21, 1992',
            bio: 'Born and raised in Vancouver, Canada. Currently a Digital Marketing Specialist.',
        },
    ]);

    const [randomAuthor, setRandomAuthor] = useState(authors[Math.floor(Math.random() * authors.length)]);
    return (
        <div>
            {randomAuthor.name}
            {randomAuthor.birthday}
            {randomAuthor.bio}
        </div>
    )
}
