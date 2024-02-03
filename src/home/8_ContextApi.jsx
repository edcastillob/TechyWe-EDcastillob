import React from 'react';
import { Typography, Paper, Container } from '@mui/material';
import img01 from '../assets/1CA.png'
import img02 from '../assets/2CA.png'



export const ContextApiComponent = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
       <Typography variant='h6' sx={{textAlign:"left"}}>
            Respuesta 08         
          </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
        Context API
        </Typography>
        <Typography paragraph>
         El ContextAPI lo utilizamos para pasar información entre componentes anidados sin usar las props. Similar a la utilización de redux, ofreciendole a los componentes los datos. 
        </Typography>
        <Typography paragraph>
         Como Ejemplo usare una implementación que recientemente realice.
        </Typography>
      </Paper>
      <hr />
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography paragraph>
          ContexAPI para las notificaciones de la aplicación, esta feature busca customizar el mensaje de acuerdo a las necesidades de alerta a mostrar. actua como un almacen de las propiedades del mensaje a renderizar, y el dato llegara a partir del componente
        </Typography>
      <img src={ img01 } alt="data" />
      </Paper>
      <hr />
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography paragraph>
          NotificationProvider, envuelve la aplicación para que esté disponible en cualquier parte de ella
        </Typography>
      <img src={ img02 } alt="data" />
      </Paper>
      <hr />
    </Container>
  );
};
