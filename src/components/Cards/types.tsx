export interface CardsProps {
  data: Array<ItemProps>;
}

interface ItemProps {
  id: number;
  type: string;
  brand: string;
  colors: string[];
  img: string;
}
