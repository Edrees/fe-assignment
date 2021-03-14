import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { CardTagsProps } from '../../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    labelContainer: {
      padding: theme.spacing(2),
    },
    label: {
      height: theme.spacing(3),
      width: theme.spacing(7),
      marginRight: '2px',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&.Black': {
        backgroundColor: '#000',
        color: '#ffffff',
      },
      '&.Blue': {
        backgroundColor: '#198aea',
        color: '#ffffff',
      },
      '&.Brown': {
        backgroundColor: '#a95915',
        color: '#ffffff',
      },
      '&.Green': {
        backgroundColor: '#1a1',
        color: '#ffffff',
      },
      '&.Grey': {
        backgroundColor: '#999',
        color: '#ffffff',
      },
      '&.Red': {
        backgroundColor: '#e11',
        color: '#ffffff',
      },
      '&.White': {
        backgroundColor: '#ffffff',
      },
      '&.Yellow': {
        backgroundColor: '#ff0',
      }
    },
  })
);

const CardTags: React.FC<CardTagsProps> = ({ tags }) => {
  const classes = useStyles();

  return (
    <Box className={classes.labelContainer}>
      <Typography variant="overline" display="block" gutterBottom>
        Color tags:
      </Typography>
      {
        tags
          .sort((a, b) => {
            if (a < b) { return -1 }
            if (a > b) { return 1 }
            return 0
          })
          .map(color => (
            <Box component="span" boxShadow={1} key={color} className={`${classes.label} ${color}`}>
              {color}
            </Box>
          ))
      }
    </Box>
  );
}

export default CardTags;
