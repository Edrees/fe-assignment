import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { CardsProps } from '../../types';
import CardTags from './CardTags';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      backgroundSize: 'cover',
      height: 220
    }
  })
);

const Cards: React.FC<CardsProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {data.map(item => {
        return (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.brand}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.description}
                </Typography>
              </CardContent>
              <CardMedia
                className={classes.media}
                image={item.img}
                title={item.brand}
              />
              <CardTags tags={item.colors} />
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Cards;
