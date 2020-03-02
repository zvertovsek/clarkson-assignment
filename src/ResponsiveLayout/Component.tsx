import React from 'react';

import { Grid } from '../Elements';

const Component: React.FC = () => {
    return (
        <Grid>
            <div className="date">Date</div>
            <div className="subject">Subject</div>
            <div className="from">From</div>
            <div className="attachments">Attachments</div>
            <div className="type">Type</div>
        </Grid>
    );
};

export default Component;