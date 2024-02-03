import React from 'react';
import { Typography, Paper, Container } from '@mui/material';
import { FormWithControlled } from './9_Componet_Controlado';
import withcontrolledform from '../assets/withcontrolledform.png'
import withcontrolledformComplete from '../assets/withcontrolledformComplete.png'
import eje5 from '../assets/eje5.png'




export const HOCComponent = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
       <Typography variant='h6' sx={{textAlign:"left"}}>
            Respuesta 09         
          </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
        HOC - Higher Order Component
        </Typography>
        <Typography paragraph>
         Hace referencia a un componente de orden superior, se puede definir como una funcion avanzada de react para reutilizar la lógica de componentes, reutiliza un componente con nueva logica si alterar el original.
        </Typography>        
      </Paper>  
      <hr />
      <Paper elevation={3} style={{ padding: '20px' }}>
        <FormWithControlled />
      </Paper>  
      <hr />
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography paragraph>
          Para este ejemplo voy a utilizar el Ejercicio 5, el Componente Controlado
        </Typography>
      <img src={ eje5 } alt="Componente_Controlado" />
      </Paper>
      <hr />
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography paragraph>
          Aqui tenemos la función withControlledForm la cual reutiliza la logica del componente controlado a traves de FormComponent, el cual carga una función que recibe las props del component, que hace referencia a la logica que tenia el componente Controlado, de esta manera reutiliza el handlechange y la lectura de input del formulario, luego retorna el FormComponent con la lógica que puede ser reutilizada a traves de las props
        </Typography>
      <img src={ withcontrolledform } alt="withcontrolledform" />
      </Paper>
      <hr />
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography paragraph>
         Asi luce el componente en este caso una copia del componente controlado donde solo recibe por props la lógica del formulario
        </Typography>
      <img src={ withcontrolledformComplete } alt="withcontrolledformComplete" />
      </Paper>

    </Container>
  );
};
