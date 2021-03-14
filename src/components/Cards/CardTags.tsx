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
      position: 'relative',
      height: theme.spacing(3),
      width: theme.spacing(3),
      marginRight: theme.spacing(2),
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '2px',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '-1px',
        right: '-10px',
        width: '0',
        height: '0',
        borderTop: '12px solid transparent',
        borderBottom: '12px solid transparent',
        borderLeft: '9px solid transparent',
        borderLeftColor: 'inherit',
      },
      '&.Black': {
        border: '1px solid #000',
        backgroundColor: '#000',
        color: '#ffffff',
      },
      '&.Blue': {
        border: '1px solid #198aea',
        backgroundColor: '#198aea',
        color: '#ffffff',
      },
      '&.Brown': {
        border: '1px solid #a95915',
        backgroundColor: '#a95915',
        color: '#ffffff',
      },
      '&.Green': {
        border: '1px solid #1a1',
        backgroundColor: '#1a1',
        color: '#ffffff',
      },
      '&.Grey': {
        border: '1px solid #999',
        backgroundColor: '#999',
        color: '#ffffff',
      },
      '&.Pink': {
        border: '1px solid #f99',
        backgroundColor: '#f99',
        color: '#ffffff',
      },
      '&.Red': {
        border: '1px solid #e11',
        backgroundColor: '#e11',
        color: '#ffffff',
      },
      '&.Yellow': {
        border: '1px solid #ff0',
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
            <Box component="span" key={color} className={`${classes.label} ${color}`}>
            </Box>
          ))
      }
    </Box>
  );
}

export default CardTags;
