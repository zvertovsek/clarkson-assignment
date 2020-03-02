import styled from 'styled-components';

const BREAKPOINT: string = "959px";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-gap: 1px;
    background-color: lightgrey;
    padding: 1px;

    div { 
        background-color: rgba(255, 255, 255, 0.8);
        padding: 10px;
    }

    @media only screen and (max-width: ${BREAKPOINT}){
        grid-template-columns: auto auto auto auto auto auto;

        div.date {
            grid-area: 2 / 6 / 3 / 7;    
        }

        div.subject {
            grid-area: 2 / 1 / 3 / 3;
        }

        div.from {
            grid-area: 1 / 1 / 2 / 6;
        }

        div.attachments {
            grid-area: 2 / 3 / 3 / 6;    
        }

        div.type {
            grid-area: 1 / 6 / 2 / 7;
        }
    }
`;
