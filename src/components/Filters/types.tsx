type ArrayOfString = Array<string>;

export interface FiltersProps {
  filterTypes: ArrayOfString;
  filterBrands: ArrayOfString;
  filterColors: ArrayOfString;
}

export interface SelectDropdownProps {
  filter: ArrayOfString;
  label: string;
  // selectType: any;
}
