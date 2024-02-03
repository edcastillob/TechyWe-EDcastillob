import React from 'react';
import { Typography, Paper, Container } from '@mui/material';

export const EnrutamientoComponent = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
       <Typography variant='h6' sx={{textAlign:"left"}}>
            Respuesta 07         
          </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Enrutamiento
        </Typography>
        <Typography paragraph>
          HashRouter se usa al desarrollar una aplicacion de solo frontend es sencillo de implementar mientras que BrowserRouter es el más utilizado tanto en frontend como en backend
        </Typography>
        <Typography paragraph>
          Si la aplicacion es pequeña del lado del cliente sin backend podemos usar HashRouter, si es mas grande y necesitamos consumir peticiones al backend se recomienda BrowserRouter, en esta aplicación Usaré BrowserRouter
        </Typography>
      </Paper>
    </Container>
  );
};
