import React from 'react';
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
import Grid from '@mui/material/Grid';
import RecipeReviewCard from './RestaurantCard';
import TopBar from './TopBar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Tooltip } from '@mui/material';


const HomePage = () => {
    return (
      <div className='home-page'>
        <TopBar></TopBar>
        <div className='row'>
          <div className='column filters'>
            <FormControl className='lista-ordenar' component="fieldset">
              <FormLabel component="legend">Ordenar por:</FormLabel>
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
                  defaultValue={20} marks={[{value:0, label:'0 COP'},{value:100000, label:'100.000 COP'}]} min={0} max={100000} step={1000} aria-label="Default" valueLabelDisplay="auto"
                />

                <Typography id="distancia" gutterBottom>
                  Distancia
                </Typography>
                <Slider
                  defaultValue={20} marks={[{value:0, label:'0km'},{value:40, label:'40km'}]} min={0} max={40} aria-label="Default" valueLabelDisplay="auto"
                />
              </Box>
            </div>

            <div className='rating'>
              <Typography> Calificación</Typography>
              <Rating name="no-value" defaultValue={null} precision={0.5} size="large" />
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