import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const withControlledForm = (FormComponent) => {
  const WrappedComponent = (props) => { 

    const [input, setInput] = useState('');
    const handleChange = (event) => {
      const input = event.target.value.replace(/[^0-9]/g, '');
      setInput(input);
    };

    const formProps = {handleChange, input};

    return <FormComponent {...props} formProps= {formProps}/>
  }
  return WrappedComponent;
}

export const ComponentControl = ({formProps}) => {
  const { handleChange, input } = formProps



  return (
    <TextField
      type="text"
      label="Número"
      variant="filled"
      value={input}
      onChange={handleChange}
      inputProps={{ pattern: '[0-9]*' }}
      style={{ backgroundColor: 'white' }}
    />
  );
}


export const  FormWithControlled = withControlledForm(ComponentControl)
