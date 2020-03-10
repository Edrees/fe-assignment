import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SelectDropdown from './SelectDropdown';
import { FiltersProps } from './types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: '1px solid #ccc',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    clearButton: {
      height: '54px',
      minWidth: '80px',
      width: 'calc(100% - 16px)',
      margin: theme.spacing(1)
    }
  })
);

const Filters: React.FC<FiltersProps> = ({
  filterTypes,
  filterBrands,
  filterColors
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={4} md={3}>
          <SelectDropdown filter={filterTypes} label="Type Filter" />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <SelectDropdown filter={filterColors} label="Color Filter" />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <SelectDropdown filter={filterBrands} label="Brand Filter" />
        </Grid>
        <Grid item xs={12} md={3}>
          <Button
            color="primary"
            variant="contained"
            className={classes.clearButton}>
            Clear Filters
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Filters;