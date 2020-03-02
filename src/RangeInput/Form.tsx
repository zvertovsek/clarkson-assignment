import React from 'react';
import { Form } from '../Elements';

interface IFormProps {
    onFormSubmit: (value: string) => void;
}

const FormComponent: React.FC<IFormProps> = (props) => {
    const [ inputValue, setInputValue ] = React.useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value);
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onFormSubmit(inputValue);
        setInputValue("");
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <label>Date Range: </label>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button type="submit">Submit</button>
        </Form>
    );
};

export default FormComponent;
