import React from 'react';

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
        <form onSubmit={handleFormSubmit}>
            <label>Date Range: </label>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormComponent;
