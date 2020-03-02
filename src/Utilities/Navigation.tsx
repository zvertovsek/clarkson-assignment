import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from '../Elements';

export const Navigation: React.FC = () => {
    return (
        <Nav>
            <Link to="/tree-traversal">Tree Traversal</Link>
            <Link to="/range-input">Range Input</Link>
            <Link to="/dom-styling">Dom Styling</Link>
            <Link to="/responsive-layout">Responsive Layout</Link>
        </Nav>
    );
}
