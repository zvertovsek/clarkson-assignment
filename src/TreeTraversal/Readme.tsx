import React from 'react';
import { Wrapper } from '../Elements';

const Component: React.FC = () => {
    return (
        <Wrapper>
            <h1>Tree Traversal</h1>
            <p>
                I understand this assignment isn't meant to be coded as a web page, however I am leaving some thoughts here.
            </p>
            <p>
                I have created a collection as a Singleton in the same class!
                I've chosen to go with the option, because in my opinion is much leaner to have it available within the class, 
                than passing it via params. I believe there are other ways to access the collection, in a real world, 
                I would probably keep it a state and have it sinchronized with the database, but that would surely be an overkill for this assignment.
                <br />
                Also, there was no mention in instructions, that a collection should be passed as a parameter. 
            </p>
            <p>
                All the code can be found in <strong>/src/TreeTraversal</strong> folder. 
                The test can be run by typing <strong>npm run test</strong> in the terminal.
            </p>
        </Wrapper>
    )
}

export default Component;
