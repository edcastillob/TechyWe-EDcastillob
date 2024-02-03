    import { AppBar, Avatar,  Box, Button, Container, Grid,  Stack, Toolbar, Typography } from "@mui/material";
    import React from "react";
    import { useNavigate } from "react-router-dom";
    


        export const Navbar= () => {  
            const navigate = useNavigate();                           
              
            return(
                <Box sx={{flexGrow:1}}>
                    <AppBar position="sticky">
                        <Toolbar>
                            <Container maxWidth="xl">
                                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                <Grid item>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                    <Avatar alt="Logo" src="https://raw.githubusercontent.com/edcastillob/Countries-ProyectoIndividual/main/client/src/assets/ec.png"/>
                                    <Typography>TechyWe Frontend - Edwar Castillo</Typography>
                                    </Stack>
                                </Grid>     
                                <Grid item>
                                    <Stack spacing={2} direction="row">                                        
                                    <Button variant="contained" onClick={() => navigate('pregunta01')}>01</Button>
                                    <Button variant="contained" onClick={() => navigate('pregunta02')}>02</Button>
                                    <Button variant="contained" onClick={() => navigate('pregunta03')}>03</Button>
                                    <Button variant="contained" onClick={() => navigate('pregunta04')}>04</Button>
                                    <Button variant="contained" onClick={() => navigate('pregunta05')}>05</Button>
                                    <Button variant="contained" onClick={() => navigate('pregunta06')}>06</Button>
                                    <Button variant="contained" onClick={() => navigate('pregunta07')}>07</Button>
                                    <Button variant="contained" onClick={() => navigate('pregunta08')}>08</Button>
                                    <Button variant="contained" onClick={() => navigate('pregunta09')}>09</Button>
                                    <Button variant="contained" onClick={() => navigate('pregunta10')}>10</Button>
                                    </Stack>
                                </Grid>
                                </Grid>
                            </Container>
                        </Toolbar>
                        </AppBar>
                        
                </Box>
            )
        }