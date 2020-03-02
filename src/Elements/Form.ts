import styled from 'styled-components';

export const Form = styled.form`
    label {
        display: block;
        font-size: 13px;
        margin-bottom: 5px;
    }

    input {
        display: block;
        width: 400px;
        font-size: 13px;
        line-height: 20px;
        padding: 5px 10px;
        border: 1px solid grey;
        border-radius: 3px;
        margin: 5px 0;
    }

    button {
        font-size: 13px;
        line-height: 20px;
        padding: 5px 10px;
        border: 1px solid grey;
        border-radius: 3px;
        margin: 0;
        background-color: lightgrey;
    }
`;
