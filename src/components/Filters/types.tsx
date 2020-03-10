type ArrayOfString = Array<string>;

export interface FiltersProps {
  filterTypes: ArrayOfString;
  filterBrands: ArrayOfString;
  filterColors: ArrayOfString;
}

export interface SelectDropdownProps {
  filters: ArrayOfString;
  label: string;
}
