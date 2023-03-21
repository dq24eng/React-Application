import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ColorImage from "./images/lb-desgaste.jpg"

const CardUser = (props) => {
    return (
        <Card sx={{ maxWidth: 345 }} className="CardClass">
        <CardActionArea >
            <CardMedia
            component="img"
            height="280"
            src={ColorImage}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.description}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    );
}

export default CardUser;