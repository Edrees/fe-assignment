const SELECTED_TYPE = 'SELECTED_TYPE';
const SELECTED_COLOR = 'SELECTED_COLOR';
const SELECTED_BRAND = 'SELECTED_BRAND';

export const selectType = (type: string) => {
  // console.log('selectedTypeActions', type);

  return {
    type: SELECTED_TYPE,
    payload: type
  };
};

export const selectColor = (color: string) => {
  // console.log('selectColoraction.color', color);
  return {
    type: SELECTED_COLOR,
    payload: color
  };
};

export const selectBrand = (brand: string) => {
  // console.log('selectBrandaction.brand', brand);
  return {
    type: SELECTED_BRAND,
    payload: brand
  };
};
