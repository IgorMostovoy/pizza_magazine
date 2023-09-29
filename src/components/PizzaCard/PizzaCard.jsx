import React from 'react';
import { baseTheme } from '../../styles/theme';
import Flex from '../generic/Flex';
import Card from '../generic/Card/Card';
import * as S from './PizzaCard.styled';

const PizzaCard = ({ types, sizes, price, title, describe, imageUrl }) => {
  const [activeTypes, setActiveTypes] = React.useState(0);
  const [activeSizes, setActiveSizes] = React.useState(0);

  const arrTypes = ['тонкое', 'традиционное'];

  return (
    <Card price={price} title={title} describe={describe} imageUrl={imageUrl}>
      <S.PizzaCardOptions>
        <Flex background={baseTheme.colors.bg} justify={'space-around'}>
          {types.map((type, i) => {
            const active = activeTypes === i;
            return (
              <S.PizzaCardType key={i} onClick={() => setActiveTypes(i)} active={active}>
                {arrTypes[type]}
              </S.PizzaCardType>
            );
          })}
        </Flex>
        <Flex background={baseTheme.colors.bg} justify={'space-around'}>
          {sizes.map((size, i) => {
            const active = activeSizes === i;
            return (
              <S.PizzaCardSizes key={i} onClick={() => setActiveSizes(i)} active={active}>
                {size}
              </S.PizzaCardSizes>
            );
          })}
        </Flex>
      </S.PizzaCardOptions>
    </Card>
  );
};

export default PizzaCard;
