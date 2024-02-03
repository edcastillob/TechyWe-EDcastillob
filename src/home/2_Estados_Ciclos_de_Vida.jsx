import React from 'react';
import { Typography, Paper, Container } from '@mui/material';

export const EstadosCiclosVida = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
       <Typography variant='h6' sx={{textAlign:"left"}}>
            Respuesta 02         
          </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          shouldComponentUpdate
        </Typography>
        <Typography paragraph>
          Pertenece al ciclo de vida de un componente de clase. Este método retorna true por defecto, a menos que la lógica sea modificada en función a lo que deseamos renderizar. Se ejecuta antes del render, logrando que el componente sea actualizado al modificar la lógica basada en propiedades o algún estado del que dependa el componente.
        </Typography>
      </Paper>
    </Container>
  );
};
