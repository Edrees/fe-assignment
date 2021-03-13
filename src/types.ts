export interface AppProps {
  typeValue: string;
  colorValue: string;
  brandValue: string;
}

export interface DataItemProps {
  id: number;
  type: string;
  brand: string;
  colors: string[];
  description: string;
  img: string;
}

// Cards/index.tsx
export interface CardsProps {
  data: Array<DataItemProps>;
}

interface Selections {
  selectedType: Function;
  selectedColor: Function;
  selectedBrand: Function;
}

// Filters/index.tsx
export interface FiltersProps extends Selections {
  allFilterData: [
    {
      type: string,
      items: [],
    }
  ]
}

// Filters/SelectDropdown.tsx
export interface SelectDropdownProps extends Selections, AppProps {
  filtersArray: Array<string>;
  selectList: string;
}
