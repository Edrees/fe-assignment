import React, { useState } from 'react';
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

const getTypes = () => {
  data.map(item => {
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
      brandOptions.push(item.brand);
      brandOptions.sort();
    }
    return false;
  });
};

const App = () => {
  getTypes();

  const sampleData = data.filter(item => {
    // console.log('0000000', item.colors);
    // return item.type === 'Car';
    return item.colors.includes('Brown') || item.type === 'Car';
  });
  // console.log('&&&&&&&&&&&&&&&&&&', sampleData);

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
        <Button
          color="primary"
          variant="contained"
          // onClick={() => setStatus(status === 'Offline' ? 'Online' : 'Offline')}
        >
          Click Me
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default App;
