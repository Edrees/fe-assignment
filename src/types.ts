export interface DataItemProps {
  id: number;
  type: string;
  brand: string;
  colors: string[];
  description: string;
  img: string;
}

export interface CardsProps {
  data: Array<DataItemProps>;
}

interface Selections {
  selectedType: Function;
  selectedColor: Function;
  selectedBrand: Function;
}

export interface FiltersProps extends Selections {
  filterTypes: Array<string>;
  filterBrands: Array<string>;
  filterColors: Array<string>;
}

export interface SelectDropdownProps extends Selections {
  filters: Array<string>;
  selectList?: number | string;
  // label: string;
  typeValue: string;
  colorValue: string;
  brandValue: string;
}
