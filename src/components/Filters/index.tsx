import React from 'react';
import { connect } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SelectDropdown from './SelectDropdown';
import { FiltersProps } from '../../types';
import { selectType, selectColor, selectBrand } from '../../redux/actions';

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
  allFilterData,
  selectedType,
  selectedColor,
  selectedBrand
}) => {
  const classes = useStyles();

  const handleClick = () => {
    selectedType('');
    selectedColor('');
    selectedBrand('');
  };


  return (
    <Box className={classes.root}>
      <Grid container>
        {allFilterData.map(el => {
          return (
            <Grid
              key={`list_${el.type}`}
              item
              xs={12}
              sm={4}
              md={3}>
              <SelectDropdown
                filtersArray={el.items}
                selectList={el.type}
              />
            </Grid>
          );
        })}
        <Grid item xs={12} md={3}>
          <Button
            color="primary"
            variant="contained"
            onClick={handleClick}
            className={classes.clearButton}>
            Clear Filters
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state: any) => {
  return {
    typeValue: state.selectedType,
    colorValue: state.selectedColor,
    brandValue: state.selectedBrand
  };
};

export default connect(mapStateToProps, {
  selectedType: selectType,
  selectedColor: selectColor,
  selectedBrand: selectBrand
})(Filters);
