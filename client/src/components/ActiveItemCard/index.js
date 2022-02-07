import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function ActiveItemCard({ id, name, price, category, description, image_url, image_id }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/product-show/:${id}`)
    }

  return (
    <Card sx={{ maxWidth: 345 }} onClick={handleCardClick}>
      <CardMedia
        component="img"
        height="140"
        image="https://static.wikia.nocookie.net/ssb-tourney/images/2/2e/Oogway-white.png"
        alt="item-image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">More Details</Button>
      </CardActions>
    </Card>
  );
}

export default ActiveItemCard;

