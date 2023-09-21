import React from 'react';
import styled from 'styled-components';
import { baseTheme } from './components/styles/theme';
import Header from './components/Header';
import Categories from './components/Categories';
import PizzaBlock from './components/pizzaBlock/PizzaBlock';
import pizzas from './components/assets/pizzas.json';

import Shares from './components/Shares/Shares';
import Search from './components/Search';
const AppWrapper = styled.div`
  background: ${baseTheme.colors.bg};
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: ${baseTheme.sizes.container};
  padding: 0 195px;
`;
function App() {
  return (
    <AppWrapper>
      <Header />
      <Container>
        <Categories />
        <Shares />
        <Search/>
        <PizzaBlock/>
        {pizzas.map((obj) =>(
          <PizzaBlock title={obj.title}/>

         ))}
      </Container>
    </AppWrapper>
  );
}

export default App;
