import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { CardTagsProps } from '../../types';
// MUI colors
import blue from '@material-ui/core/colors/blue';
import brown from '@material-ui/core/colors/brown';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    labelContainer: {
      padding: theme.spacing(2),
    },
    label: {
      position: 'relative',
      height: theme.spacing(2),
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
        right: '-7px',
        width: '0',
        height: '0',
        borderTop: '8px solid transparent',
        borderBottom: '8px solid transparent',
        borderLeft: '6px solid transparent',
        borderLeftColor: 'inherit',
      },
      '&.Black': {
        border: `1px solid ${grey[900]}`,
        backgroundColor: grey[900],
        color: '#fff',
      },
      '&.Blue': {
        border: `1px solid ${blue[600]}`,
        backgroundColor: blue[600],
        color: '#fff',
      },
      '&.Brown': {
        border: `1px solid ${brown[600]}`,
        backgroundColor: brown[600],
        color: '#fff',
      },
      '&.Green': {
        border: `1px solid ${green[600]}`,
        backgroundColor: green[600],
        color: '#fff',
      },
      '&.Grey': {
        border: `1px solid ${grey[300]}`,
        backgroundColor: grey[300],
        color: '#fff',
      },
      '&.Pink': {
        border: `1px solid ${pink[200]}`,
        backgroundColor: pink[200],
        color: '#fff',
      },
      '&.Red': {
        border: `1px solid ${red[700]}`,
        backgroundColor: red[700],
        color: '#fff',
      },
      '&.Yellow': {
        border: `1px solid ${yellow[600]}`,
        backgroundColor: yellow[600],
      },
    },
  })
);

const CardTags: React.FC<CardTagsProps> = ({ tags }) => {
  const classes = useStyles();

  return (
    <Box className={classes.labelContainer}>
      <Typography variant="overline" display="block">
        Color tags:
      </Typography>
      {tags
        .sort((a, b) => {
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        })
        .map((color) => (
          <Box
            component="span"
            key={color}
            className={`${classes.label} ${color}`}></Box>
        ))}
    </Box>
  );
};

export default CardTags;
