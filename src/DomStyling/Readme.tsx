import React from 'react';
import { Wrapper } from '../Elements';

const Component: React.FC = () => {
    return (
        <Wrapper>
            <h1>DOM Styling</h1>
            <p>
                I understand this assignment isn't meant to be coded as a web page, however I am leaving some thoughts here.
            </p>
            <p>
                What bothers me a bit with my solution is that if there would be <strong>":"</strong> char in a tag string 
                that would be recognized as a system pre-fix and so a className would be assigned, even if it wasn't a prefix. 
                For example if user tag string would contain an url "search for anything on https://www.google.com". <br />
                I could check if the prefix is in the list, but if the list of prefixes would change, then it would be a pain 
                to maintain. <br />
                In a real world I would suggest for the delimeter to be changed into something more unique like <strong>":::"</strong>.               
            </p>
            <p>
                All the code can be found in <strong>/src/DomStyling</strong> folder. 
                The test can be run by typing <strong>npm run test</strong> in the terminal.
            </p>
        </Wrapper>
    )
};

export default Component;
