import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { data } from '../service/';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import Header from './Header';
import Filters from './Filters';
import Cards from './Cards';

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
  const [status, setStatus] = React.useState('Click Me');
  const handleClick = () => {
    setStatus(status === 'Click Me' ? 'Online' : 'Offline');
  };

  const sampleData = data.filter(item => {
    if (typeValue) {
      return (
        item.type === typeValue
        // item.colors.includes(colorValue) ||
        // item.brand === brandValue
      );
    }
    if (colorValue) {
      return (
        // item.type === typeValue ||
        item.colors.includes(colorValue)
        // item.brand === brandValue
      );
    }
    if (brandValue) {
      return (
        // item.type === typeValue ||
        // item.colors.includes(colorValue) ||
        item.brand === brandValue
      );
    }
    return data;
  });

  console.log('sampleData', sampleData);

  sampleData.map(item => {
    // console.log('TRIGGERD', item);

    if (item.type) {
      if (!typeOptions.includes(item.type)) {
        typeOptions.push(item.type);
        typeOptions.sort();
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
    if (item.brand) {
      if (!brandOptions.includes(item.brand)) {
        brandOptions.push(item.brand);
        brandOptions.sort();
      }
    }

    console.log('brandOptions', brandOptions);

    return false;
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container>
        <Filters
          filterTypes={typeOptions}
          filterColors={colorOptions}
          filterBrands={brandOptions}
        />
        <Cards data={sampleData} />
        <Button color="primary" variant="contained" onClick={handleClick}>
          {status}
        </Button>
      </Container>
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
