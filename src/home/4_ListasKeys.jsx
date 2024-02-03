import React from 'react';
import { Typography, Paper, Container } from '@mui/material';

export const ListasKeys = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant='h6' sx={{textAlign:"left"}}>
      Respuesta 04         
    </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Diferencias entre map y forEach
        </Typography>
        <Typography paragraph>
          La diferencia rádica en que el map itera un array y devuelve un nuevo array que puede estar customizado o no dependiendo de lo que queramos renderizar, mientras el forEach no devuelve nada pero ejecuta una accion determinada en cada posición iterada
        </Typography>
      </Paper>
    </Container>
  );
};
