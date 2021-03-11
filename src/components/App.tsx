import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { data } from '../service/';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import Header from './Header';
import Filters from './Filters';
import Cards from './Cards';
import Footer from './Footer';

const typeOptions: Array<string> = [];
const brandOptions: Array<string> = [];
const allColorOptions: Array<string> = [];
const colorOptions: Array<string> = [];

interface AppProps {
  typeValue: string;
  colorValue: string;
  brandValue: string;
}

const App: React.FC<AppProps> = ({ typeValue, colorValue, brandValue }) => {
  const actualData = data.filter(item => {
    if (typeValue || brandValue || colorValue) {
      return (
        item.type === typeValue ||
        item.colors.includes(colorValue) ||
        item.brand === brandValue
      );
    }

    return data;
  });

  typeOptions.length = 0;
  brandOptions.length = 0;
  allColorOptions.length = 0;
  colorOptions.length = 0;

  actualData.map(item => {
    if (item.type) {
      if (!typeOptions.includes(item.type)) {
        typeOptions.push(item.type);
        typeOptions.sort();
      }
    }

    if (item.brand) {
      if (!brandOptions.includes(item.brand)) {
        brandOptions.push(item.brand);
        brandOptions.sort();
      }
    }

    if (item.colors) {
      allColorOptions.push(...item.colors);
      allColorOptions.forEach(color => {
        if (colorOptions.indexOf(color) === -1) {
          colorOptions.push(color);
          colorOptions.sort();
        }
      });
    }

    return false;
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container>
        <Filters
          filterTypes={typeOptions}
          filterBrands={brandOptions}
          filterColors={colorOptions}
        />
        <Cards data={actualData} />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

const mapStateToProps = (state: any) => {
  return {
    typeValue: state.selectedType,
    colorValue: state.selectedColor,
    brandValue: state.selectedBrand
  };
};

export default connect(mapStateToProps)(App);
