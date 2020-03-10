import { combineReducers } from 'redux';

const selectTypeReducer = (selectType = '', action: any) => {
  if (action.type === 'SELECTED_TYPE') {
    return action.payload;
  }

  return selectType;
};

const selectColorReducer = (selectColor = '', action: any) => {
  if (action.type === 'SELECTED_COLOR') {
    return action.payload;
  }

  return selectColor;
};

const selectBrandReducer = (selectBrand = '', action: any) => {
  if (action.type === 'SELECTED_BRAND') {
    return action.payload;
  }

  return selectBrand;
};

export default combineReducers({
  selectType: selectTypeReducer,
  selectColor: selectColorReducer,
  selectBrand: selectBrandReducer
});