import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/HomePage/HomePage.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import RecipeReviewCard from './RestaurantCard';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Tooltip } from '@mui/material';

const HomePage = () => {
    return (
      <div className='home-page'>
        <nav className='topbar'>

          <div className='logo'>
            <img className='logo-img'
            alt='Logo'
            //src=''
            />
            <span className='logo-text'>
              <span>BOGO</span>
              <br></br>
              <span>TASTE</span>
              <br></br>
            </span> 
          </div>

          <div className='searchbar'>
              <input type='search' placeholder='Busca restaurante o plato'/>
          </div>
          
          <div className='botones'>
            < Stack spacing={2} direction="row">
              <Link to="/iniciar"><Tooltip title="Iniciar sesión"><Button variant="outlined">Iniciar sesión</Button></Tooltip></Link>
              <Link to="/registrar"><Tooltip title="Registrarse"><Button variant="contained">Registrarse</Button></Tooltip></Link>
            </Stack>
            </div>
        </nav>
        <div className='row'>
          <div className='column filters'>
            <FormControl className='lista-ordenar' component="fieldset">
              <FormLabel component="legend">Ordenar por</FormLabel>
              <FormGroup aria-label="position" column>
                
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="Sabor"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="Popularidad"
                  labelPlacement="end"
                />
              </FormGroup>
            </FormControl>

            <div className='sliders'>
              <Box sx={{ width: 250 }}>
                <Typography id="precio" gutterBottom>
                  Precio
                </Typography>
                <Slider
                  defaultValue={50} aria-label="Default" valueLabelDisplay="auto"
                />

                <Typography id="distancia" gutterBottom>
                  Distancia
                </Typography>
                <Slider
                  defaultValue={50} aria-label="Default" valueLabelDisplay="auto"
                />
              </Box>
            </div>

            <div className='rating'>
              <Typography> Calificación</Typography>
              <Rating name="size-medium" defaultValue={2} />
            </div>
            
          </div>
          <div className='column restaurantes'>
            <h1 className='search-propmt'>Restaurantes destacados</h1>
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={ {xs:-2, md:-3}}>
                <Grid RecipeReviewCard xs={2} sm={4} md={4}>
                  <RecipeReviewCard style={{ marginBottom: '2rem' }}></RecipeReviewCard>
                </Grid>
                <Grid RecipeReviewCard xs={2} sm={4} md={4}>
                  <RecipeReviewCard></RecipeReviewCard>
                </Grid>
                <Grid RecipeReviewCard xs={2} sm={4} md={4}>
                  <RecipeReviewCard></RecipeReviewCard>
                </Grid>
                <Grid RecipeReviewCard xs={2} sm={4} md={4}>
                  <RecipeReviewCard></RecipeReviewCard>
                </Grid>
                <Grid RecipeReviewCard xs={2} sm={4} md={4}>
                  <RecipeReviewCard></RecipeReviewCard>
                </Grid>
                <Grid RecipeReviewCard xs={2} sm={4} md={4}>
                  <RecipeReviewCard></RecipeReviewCard>
                </Grid>
            </Grid>
            <Tooltip title="Crear restaurante">
              <Fab
                sx={{
                  position: "fixed",
                  bottom: (theme) => theme.spacing(2),
                  right: (theme) => theme.spacing(2)
                }}
                color="primary"
              >
                <AddIcon />
                

                
              </Fab>
            </Tooltip>
          </div>

        </div>
      </div>
        
    );
  };
  
  export default HomePage;