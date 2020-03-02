import React from 'react';

type DateRange = {
    startDate?: string;
    endDate?: string;
}

interface IDisplayProps {
    dates: DateRange;
}

const DisplayComponent: React.FC<IDisplayProps> = (props) => {
    return (
        <div>
            <p><strong>Start Date:</strong> {props.dates.startDate}</p>
            <p><strong>End Date:</strong> {props.dates.endDate}</p>
        </div>
    );
};

export default DisplayComponent;
