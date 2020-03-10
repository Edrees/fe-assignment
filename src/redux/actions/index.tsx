const SELECTED_TYPE = 'SELECTED_TYPE';
const SELECTED_COLOR = 'SELECTED_COLOR';
const SELECTED_BRAND = 'SELECTED_BRAND';

export const selectType = (type: string) => {
  console.log('action.type', type);

  return {
    type: SELECTED_TYPE,
    payload: type
  };
};

export const selectColor = (color: string) => {
  return {
    type: SELECTED_COLOR,
    payload: color
  };
};

export const selectBrand = (brand: string) => {
  return {
    type: SELECTED_BRAND,
    payload: brand
  };
};
