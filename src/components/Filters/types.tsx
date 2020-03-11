type ArrayOfString = Array<string>;

export interface FiltersProps {
  filterTypes: ArrayOfString;
  filterBrands: ArrayOfString;
  filterColors: ArrayOfString;
}

export interface SelectDropdownProps {
  filters: ArrayOfString;
  selectList: string;
  label: string;
  selectedType: Function;
  typeValue: string;
  selectedColor: Function;
  colorValue: string;
  selectedBrand: Function;
  brandValue: string;
}
