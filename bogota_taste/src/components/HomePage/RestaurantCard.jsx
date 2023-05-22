import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import '../../styles/HomePage/HomePage.css';
import { Tooltip } from '@mui/material';

export default function RecipeReviewCard() {
  
  return (
    <Card style={{ marginBottom: '2rem' }} sx={{ maxWidth: 375 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Restaurante"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="150"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <ul>
          <li>Direccion:</li>
          <li>Distancia:</li>
          <li>Rating:</li>
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
  );
}