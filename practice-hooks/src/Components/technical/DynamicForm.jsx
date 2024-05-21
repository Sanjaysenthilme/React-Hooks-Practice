import React, { useState } from 'react';

const DynamicForm = () => {
    const [fields, setFields] = useState([{ value: "" }]);

    const handleAddField = () => {
        setFields([...fields, { value: "" }]);
    };

    const handleChange = (index, event) => {
        const newFields = [...fields];
        newFields[index].value = event.target.value;
        setFields(newFields);
    };

    const handleRemoveFields = (index) => {
        const newFields = [...fields];
        newFields.splice(index, 1);
        setFields(newFields);
    };

    const handleSubmit = () => {
        console.log(`Form Values :`, fields);
    };

    return (
        <div className='Container'>
            <form action="">
                {
                    fields.map((field, index) => (
                        <div key={index}>
                            <input type="text" name="" id="" value={field.value} onChange={(event) => handleChange(index, event)} />
                            <button type="button" onClick={() => handleRemoveFields(index)}>Remove</button>
                        </div>
                    ))
                }
                <div className="">
                    <button type="button" onClick={handleAddField}>Add</button>
                    <button type="button" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default DynamicForm;
