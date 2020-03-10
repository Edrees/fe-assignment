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

const SelectDropdown: React.FC<SelectDropdownProps> = ({ filter, label }) => {
  const classes = useStyles();
  const [selected, setFilter] = React.useState('');

  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  // console.log('type', selectType);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);

  const handleChange = (event: any) => {
    console.log(event.target.value);
    selectType(event.target.value);
    setFilter(event.target.value as string);
  };

  console.log('selected', selected);

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} htmlFor="filter-options">
        {label}
      </InputLabel>
      <Select
        native
        value={selected}
        onChange={handleChange}
        labelWidth={labelWidth}
        inputProps={{
          name: 'filters',
          id: 'filter-options'
        }}>
        <option value="" />
        {filter.map(item => {
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

// export default SelectDropdown;

const mapStateToProps = (state: any) => {
  return {
    selectedType: state.currentType,
    selectColor: state.currentColor,
    selectBrand: state.currentBrand
  };
};

const mapDispatchToProps = {
  // Whenever selectLanguage is called , the result should be passed
  // to all of our reducers
  selectedType: selectType
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectDropdown);

// export default connect(mapStateToProps, {
//   currentType: selectedType,
//   currentColor: selectedColor,
//   currentBrand: selectedBrand
// },)(SelectDropdown);
