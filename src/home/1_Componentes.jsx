import React, { Component } from 'react';
import { Typography, Paper, Box } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';



export class ComponentReloj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHour: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() { 
    this.seconds = setInterval(() => this.updateHour(), 1000);
  }

  componentWillUnmount() {   
    clearInterval(this.seconds);
  }

  updateHour() {
    this.setState({
      currentHour: new Date().toLocaleTimeString()
    });
  }

  render() {
    const Class_Component_Reloj = `
    export class ComponentReloj extends Component {
        constructor(props) {
          super(props);
          this.state = {
            currentHour: new Date().toLocaleTimeString()
          };
        }
      
        componentDidMount() { 
          this.seconds = setInterval(() => this.updateHour(), 1000);
        }
      
        componentWillUnmount() {   
          clearInterval(this.seconds);
        }
      
        updateHour() {
          this.setState({
            currentHour: new Date().toLocaleTimeString()
          });
        }
    `;
    return (
        <Box>
          <Typography variant='h6' sx={{textAlign:"left"}}>
            Respuesta 01         
          </Typography>
          <Typography variant='h3'>
            Hora Actual          
          </Typography>
        <Paper elevation={3} marginTop="2px" style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h5">
            {this.state.currentHour}
          </Typography>
        </Paper>
        <hr />
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
        <SyntaxHighlighter language="javascript" style={docco}>
          {Class_Component_Reloj}
        </SyntaxHighlighter>
        </Paper>
        </Box>
      );
    }
  }

  