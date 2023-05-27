import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import '../../styles/HomePage/HomePage.css';
import { Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function RestaurantCardList({ searchData }) {
  const numCards = searchData.length;
  const cardsPerRow = numCards >= 3 ? 3 : numCards;
  
  return (
    <Grid container spacing={2} rowGap={2} justifyContent="center">
      {searchData.map((item) => (
        <Grid item xs={12/cardsPerRow} sm={4} md={4} key={item.id}>
          <Card style={{ marginRight: '2rem' }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              title={item.nombre}
              subheader={item.creation_date}
            />
            <CardMedia
              component="img"
              height="150"
              image={item.img_url}
              alt={item.img_alt}
            />
            <CardContent>
              <ul>
                <li>Dirección:{item.direccion}</li>
                <li>Distancia:{item.distancia}</li>
                <li>Calificación:{item.rating}</li>
              </ul>
            </CardContent>
            <CardActions disableSpacing>
            <Tooltip title="Añadir a favoritos">
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />         
                </IconButton>
              </Tooltip>
              <Tooltip title="Ir a la página del restaurante">
                <Button size="small">Página del restaurante</Button>
              </Tooltip>
              
            </CardActions>
            
          </Card>
        </Grid>
      ))}
    </Grid>

    
    
  );
}