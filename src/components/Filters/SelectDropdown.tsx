import React from 'react';
import { connect } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { SelectDropdownProps } from './types';
import { selectType, selectColor, selectBrand } from '../../redux/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      borderRadius: '2px',
      width: 'calc(100% - 16px)',
      margin: theme.spacing(1)
    }
  })
);

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  filters,
  selectList,
  label,
  selectedType,
  typeValue,
  selectedColor,
  colorValue,
  selectedBrand,
  brandValue
}) => {
  const classes = useStyles();
  // const [selected, setFilter] = React.useState('');
  // console.log('typeValue', typeValue);
  // console.log('colorValue', colorValue);
  // console.log('brandValue', brandValue);

  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);

  const handleChange = (event: any) => {
    if (selectList === 'type') {
      selectedType(event.target.value);
    }
    if (selectList === 'color') {
      selectedColor(event.target.value);
    }
    if (selectList === 'brand') {
      selectedBrand(event.target.value);
    }
    // setFilter(event.target.value as string);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} htmlFor="filter-options">
        {label}
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

// export default SelectDropdown;
export default connect(mapStateToProps, {
  selectedType: selectType,
  selectedColor: selectColor,
  selectedBrand: selectBrand
})(SelectDropdown);
