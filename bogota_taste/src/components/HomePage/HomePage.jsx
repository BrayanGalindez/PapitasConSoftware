import React, { useState } from 'react';
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
import RestaurantCardList from './RestaurantCardList';
import TopBar from '../TopBar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Tooltip } from '@mui/material';
import Footer from '../Footer';
import sampleData from './data';



const HomePage = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const [data, setData] = useState([]);

  const handleDataFetched = (fetchedData) => {
    setData(fetchedData);
  }
    return (
      <div className='home-page'>
        <TopBar onSearch={handleSearch} onDataFetched={handleDataFetched}></TopBar>
        <div className='row'>
          <div className='filters'>
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
              <Typography component="legend"> Calificación</Typography>
              <Rating defaultValue={null} precision={0.5} size="large" />
            </div>
            
          </div>
          <div className='restaurantes'>
            <h1 className='search-propmt'>{searchQuery ? `Resultados de la busqueda: ${searchQuery}` : 'Restaurantes destacados'}</h1>
            <RestaurantCardList className="lista-restaurantes" searchData={sampleData}></RestaurantCardList>
            <Tooltip title="Crear restaurante">
              <Fab
                className='boton-crear-restaurante'
                sx={{
                  position:'sticky',
                  bottom: (theme) => theme.spacing(2),
                  right: (theme) => theme.spacing(2),
                  marginBottom: (theme) => theme.spacing(2)
                }}
                color="primary"
              >
                <AddIcon />
              </Fab>
            </Tooltip>
          </div>
        </div>
        <Footer></Footer>
      </div>
      
        
    );
  };
  
  export default HomePage;