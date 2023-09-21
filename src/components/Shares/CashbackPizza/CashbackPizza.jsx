import React from 'react';
import styled from 'styled-components';
import { ThreePizzaCardStyle } from '../ThreePizza/ThreePizza';


const CashbackPizzaStyle = styled(ThreePizzaCardStyle)`
  width: 278px;
  height: 115px;

`;

const CashbackPizza = (props) =>{
return <CashbackPizzaStyle {...props}/>
};

export default CashbackPizza;