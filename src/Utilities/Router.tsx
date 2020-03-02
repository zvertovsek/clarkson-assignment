import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TreeTraversalReadme from '../TreeTraversal/Readme';
import RangeInput from '../RangeInput/Component';
import DomStyling from '../DomStyling/Readme';
import Layout from '../ResponsiveLayout/Component';

export const Router: React.FC = () => {
    return (
        <Switch>
            <Route path="/tree-traversal">
                <TreeTraversalReadme />
            </Route>
            <Route path="/range-input">
                <RangeInput />
            </Route>
            <Route path="/dom-styling">
                <DomStyling />
            </Route>
            <Route path="/responsive-layout">
                <Layout />
            </Route>
        </Switch>
    );
}