import React from 'react';
import Form from './Form';
import Results from './Results';
import { callApi } from './Api';

import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    display: block;
    margin: 50px auto;
    width: 600px;
`;

const Component: React.FC = () => {
    const [ dates, setdates ] = React.useState({});
    
    const handleFormSubmit = (value: string) => {
        callApi(value).then((res: any) => {
            setdates({
                startDate: res.startDate,
                endDate: res.endDate,
            });
        });
    }

    return (
        <Wrapper>
            <Form onFormSubmit={handleFormSubmit} />
            { Object.keys(dates).length === 2 ? <Results dates={dates} /> : null }
        </Wrapper>
    );
};

export default Component;
