import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      backgroundColor: '#2196f3',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(1),
      minHeight: '80px'
    }
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Typography variant="h4">Frontend Assignment</Typography>
    </div>
  );
};

export default Header;
