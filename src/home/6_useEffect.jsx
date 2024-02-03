import React, { useEffect, useState } from 'react';
import { Typography, Paper, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import dataJSON from '../assets/dataJSON.png'

export const UseEffectComponent = () => {
  const [data, setData] = useState()
  
  useEffect(() => {
    const datos = async () => {
      try {
        const response = await fetch('./data.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error Cargando los datos:', error);
      }
    };
    datos();
  }, []);
  
  const UseEffectEj = `
  useEffect(() => {
    const datos = async () => {
      try {
        const response = await fetch('./data.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error Cargando los datos:', error);
      }
    };
    datos();
  }, []);
    `;
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
       <Typography variant='h6' sx={{textAlign:"left"}}>
            Respuesta 06         
          </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          useEffect
        </Typography>
        <Typography paragraph>
          El useEffect es un hook de react que es usado en componente funcionales y se ejecuta luego de renderizar el componente.
        </Typography>
      </Paper>
      <hr />
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Datos que renderizará el useEffect
        </Typography>
      <img src={ dataJSON } alt="data" />
      </Paper>
      <hr />
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
        <SyntaxHighlighter language="javascript" style={docco}>
          {UseEffectEj}
        </SyntaxHighlighter>
      </Paper>
      {/* Renderizar datos */}
      {data && (
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellido</TableCell>
                <TableCell>Stack</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.Nombre}</TableCell>
                  <TableCell>{item.Apellido}</TableCell>
                  <TableCell>{item.Stack}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};
