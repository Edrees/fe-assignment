import { combineReducers } from 'redux';

const selectTypeReducer = (selectedType = '', action: any) => {
  // console.log('selectedTypeReduces', selectedType);

  if (action.type === 'SELECTED_TYPE') {
    return action.payload;
  }

  return selectedType;
};

const selectColorReducer = (selectedColor = '', action: any) => {
  // console.log('selectColorReducer', selectedColor);
  if (action.type === 'SELECTED_COLOR') {
    return action.payload;
  }

  return selectedColor;
};

const selectBrandReducer = (selectedBrand = '', action: any) => {
  // console.log('selectBrandReducer', selectedBrand);
  if (action.type === 'SELECTED_BRAND') {
    return action.payload;
  }

  return selectedBrand;
};

export default combineReducers({
  selectedType: selectTypeReducer,
  selectedColor: selectColorReducer,
  selectedBrand: selectBrandReducer
});
