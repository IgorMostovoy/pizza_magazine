import React from 'react';
import styled from 'styled-components';
import { baseTheme } from './styles/theme';
import Header from './components/Header';
import Categories from './components/Categories';
import PizzaCard from './components/PizzaCard/PizzaCard';
import SushiCard from './components/SushiCard/SushiCard';

import Grid from './components/generic/Grid';
import Shares from './components/Shares/Shares';
import Search from './components/Search';
import Sort from './components/Sort/Sort';

const AppWrapper = styled.div`
  background: ${baseTheme.colors.bg};
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: ${baseTheme.sizes.container};
  padding: 0 195px;
`;




function App() {
  const [items, setItems] = React.useState([])


React.useEffect(() =>{
fetch("https://64f86f63824680fd217f9111.mockapi.io/pizzaItems")
.then((response) =>{
  return response.json()
  
})
.then((arr) =>{
  return console.log((arr[0]["pizza"]));
})
// .then((arr) =>{
//   return (arr[0]["sushi"]);
// })


},[]);

  return (
    <AppWrapper>
      <Header />
      <Container>
        <Categories />
        <Shares />
        <Search />
        <Sort/>
        <Grid>
          {items.map((pizza) => (
            <PizzaCard key={pizza.id} {...pizza}/>
          ))}
        </Grid>
        <Grid>
          {items.map((sushi) =>(
            <SushiCard key={sushi.id} {...sushi}
            />

          ))}
        </Grid>
      </Container>
    </AppWrapper>
  );
}

export default App;
