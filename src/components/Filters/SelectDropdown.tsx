import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { SelectDropdownProps } from './types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      borderRadius: '2px',
      width: 'calc(100% - 16px)',
      margin: theme.spacing(1)
    }
  })
);

const SelectDropdown: React.FC<SelectDropdownProps> = ({ filters, label }) => {
  const classes = useStyles();
  const [selected, setFilter] = React.useState('');

  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);

  const handleChange = (event: any) => {
    setFilter(event.target.value as string);
  };

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

export default SelectDropdown;
