import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function BookCard(props) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          image={props.image}
          alt={props.title}
        />
        <CardContent>
          <Typography variant="h4" component="h2">
            Title:{props.title}
          </Typography>
          <Typography>
            By {props.authors}
            Summary: {props.summmary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Link</Button>
      </CardActions>
    </Card>
  )
}

export default BookCard;