import React from 'react';
import { Typography, Paper, Container } from '@mui/material';
import testing from '../assets/testing.png'


export const TestingReactComponent = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant='h6' sx={{textAlign:"left"}}>
            Respuesta 10         
          </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Testing en React
        </Typography>
        <Typography paragraph>
          Para realizar testing en react dos bibliotecas que actualmente son populares son Jest y React Testing Library
        </Typography>
      </Paper>
      <hr />
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography paragraph>Testing en React 
        </Typography>
      <img src={ testing } alt="Testing" />
      </Paper>
    </Container>
  );
};
