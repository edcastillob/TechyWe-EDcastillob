import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Alert, AlertTitle } from '@mui/material';

export const ManejoDeEventosComponent = () => {
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const manejarSubmit = (event) => {
    event.preventDefault();
    setMostrarAlerta(true);
    setTimeout(() => {
        setMostrarAlerta(false);
      }, 3000);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
       <Typography variant='h6' sx={{textAlign:"left"}}>
            Respuesta 03        
          </Typography>
      <form onSubmit={manejarSubmit}>
        <Typography variant="h5" gutterBottom>
          Manejo de eventos
        </Typography>
        <ul style={{ textAlign: 'left', paddingLeft:'15%'}}>
          <li>Evitar recargar página</li>
          <li>Uso el preventDefault()</li>
          <li>Este ejemplo lo hice con componente funcional()</li>
        </ul>
        <Button type="submit" variant="contained" color="primary">
          Manejar el Evento
        </Button>
      </form>

      {mostrarAlerta && (
        <Alert severity="success" style={{ marginTop: '20px' }}>
          <AlertTitle>Alerta!!!</AlertTitle>
          El evento se ha manejado correctamente sin actualizar la página.
        </Alert>
      )}
    </Container>
  );
};
