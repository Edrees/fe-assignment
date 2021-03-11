import React from 'react';
import { connect } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { SelectDropdownProps } from '../../types';
import { selectType, selectColor, selectBrand } from '../../redux/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      borderRadius: '2px',
      width: 'calc(100% - 16px)',
      margin: theme.spacing(1)
    },
  })
);

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  filters,
  selectList,
  // label,
  selectedType,
  typeValue,
  selectedColor,
  colorValue,
  selectedBrand,
  brandValue
}) => {
  const classes = useStyles();
  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);

  const handleChange = (event: any) => {
    const currentValue = event.target.value;

    if (selectList === 'type') {
      if (currentValue) {
        selectBrand('');
        selectedColor('');
      }
      selectedType(currentValue);
    }
    if (selectList === 'brand') {
      if (currentValue) {
        selectedType('');
        selectedColor('');
      }
      selectedBrand(currentValue);
    }
    if (selectList === 'color') {
      if (currentValue) {
        selectedType('');
        selectBrand('');
      }
      selectedColor(currentValue);
    }
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} htmlFor="filter-options">
        {selectList === 'type'
          ? 'Type Filter'
          : selectList === 'color'
            ? 'Color Filter'
            : selectList === 'brand'
              ? 'Brand Filter'
              : null}
      </InputLabel>
      <Select
        native
        value={
          selectList === 'type'
            ? typeValue
            : selectList === 'color'
              ? colorValue
              : selectList === 'brand'
                ? brandValue
                : null
        }
        onChange={handleChange}
        labelWidth={labelWidth}
        inputProps={{
          name: 'filters',
          id: 'filter-options'
        }}>
        <option value="" />
        {filters.map(item => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </Select>
    </FormControl>
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
})(SelectDropdown);
