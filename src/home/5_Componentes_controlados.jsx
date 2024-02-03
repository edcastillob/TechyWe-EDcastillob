import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';



export const ComponentControlled = () => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    const input = event.target.value.replace(/[^0-9]/g, '');
    setInput(input);
  };

  return (
    <>
     <Typography variant='h6' sx={{textAlign:"left"}}>
            Respuesta 05        
          </Typography>
    <TextField
      type="text"
      label="Número"
      variant="filled"
      value={input}
      onChange={handleChange}
      inputProps={{ pattern: '[0-9]*' }}
      style={{ backgroundColor: 'white' }}
    />
  </>);
}


