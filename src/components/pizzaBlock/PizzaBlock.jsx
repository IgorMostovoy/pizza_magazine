import React from 'react';
import styled from 'styled-components';
import { baseTheme } from '../styles/theme';
import Flex from '../generic/Flex';
import pizzaImg from '../assets/Images/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg';

const PizzaBlockStyle = styled.div`
  max-width: 270px;
  max-height: 480px;
  background: ${baseTheme.colors.white};
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  margin-top: 30px;
  overflow: hidden;
  padding: 15px;
`;

const PizzaBlockImg = styled.img`
  max-width: 250px;
  max-height: 250px;
  padding-left: 15px;
  padding-top: 15px;
`;

const PizzaBlockTitle = styled.h4`
  font-size: ${baseTheme.fontSize.large};
  font-weight: bold;
  margin-top: 16px;
  align-self: start;
`;

const PizzaBlockDescribe = styled.p`
  font-size: ${baseTheme.fontSize.standart};
  font-weight: lighter;
  margin-top: 12px;
  width: 100%;
`;

const PizzaBlockOptions = styled.div`
  width: 100%;

  border: 1px solid #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  user-select: none;
`;

const PizzaBlockType = styled.p`
  border-radius: 8px;
  padding: 10px 19px;
  margin: 3px;
  cursor: pointer;

  &.active {
    background-color: ${baseTheme.colors.white};
  }
`;

const PizzaBlockSizes = styled.p`
  border-radius: 8px;
  padding: 3px 12px;
  white-space: nowrap;
  cursor: pointer;
margin: 3px;
  .active {
    background-color: ${baseTheme.colors.white};
  }
`;

const PizzaBlock = ({id, ImageUrl, title, describe, types, sizes, price, category, rating }) => {
let[typesActive, setTypesActive] = React.useState(0)
  const arrTypes = ['тонкое', 'традиционное'];

  return (
    <PizzaBlockStyle>
      <Flex direction={'column'}>
        <PizzaBlockImg src={pizzaImg} />
        <PizzaBlockTitle>{title}</PizzaBlockTitle>
        <PizzaBlockDescribe>
          {describe}
        </PizzaBlockDescribe>
        <PizzaBlockOptions>
          <Flex background={baseTheme.colors.bg} justify={'space-around'}>
            {arrTypes.map((type, index) =>{
<PizzaBlockType key={id} onClick={() => setTypesActive(index)} PizzaBlockType={typesActive = index ? 'active' : ''}>typesActive[type]</PizzaBlockType>
              
})}
           
          </Flex>
          <Flex background={baseTheme.colors.bg} justify={'space-around'}>
            <PizzaBlockSizes>26 см.</PizzaBlockSizes>
            <PizzaBlockSizes>30 см.</PizzaBlockSizes>
            <PizzaBlockSizes>40 см.</PizzaBlockSizes>
          </Flex>
        </PizzaBlockOptions>
      </Flex>
    </PizzaBlockStyle>
  );
};

export default PizzaBlock;
