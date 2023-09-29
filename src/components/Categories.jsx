import React from 'react';
import styled, { css } from 'styled-components';
import { baseTheme } from '../styles/theme';

import Combo from '../assets/Images/Categories/Combo.png';
import Stock from '../assets/Images/Categories/Stock.png';
import Pizza from '../assets/Images/Categories/Pizza.png';
import Sushi from '../assets/Images/Categories/Sushi.png';
import Drink from '../assets/Images/Categories/Drink.png';
import Snacks from '../assets/Images/Categories/Snacks.png';
import Desserts from '../assets/Images/Categories/Dessert.png';
import Sauce from '../assets/Images/Categories/Sauce.png';

const CategoriesList = styled.ul`
  max-width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const CategoriesListItem = styled.li`
  width: 135px;
  height: 104px;
  border-radius: 12px;
  background: ${baseTheme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  cursor: pointer;
  user-select: none;

  &:first-child {
    margin-left: 0;
  }

  ${(props) =>
    props.active &&
    css`
      background: black;
      color: ${baseTheme.colors.white};
      transition-duration: 0.5s;
    `}
`;

const ImgStyle = styled.img`
  width: 32px;
  height: 32px;
  margin-bottom: 8px;
`;

const Categories = () => {
  const [categoryChange, setCategoryChange] = React.useState(0);

  const onChangeCategory = (i) => {
    setCategoryChange(i);
  };

  const categoriesArr = [
    {
      svg: <ImgStyle src={Stock} alt="Акции" />,
      value: 'Всё',
    },

    {
      svg: <ImgStyle src={Pizza} alt="Пицца" />,
      value: 'Пицца',
    },

    {
      svg: <ImgStyle src={Sushi} alt="Суши" />,
      value: 'Суши',
    },

    {
      svg: <ImgStyle src={Drink} alt="Напитки" />,
      value: 'Напитки',
    },

    {
      svg: <ImgStyle src={Snacks} alt="Закуски" />,
      value: 'Закуски',
    },

    {
      svg: <ImgStyle src={Combo} alt="Комбо" />,
      value: 'Комбо',
    },

    {
      svg: <ImgStyle src={Desserts} alt="Дессерты" />,
      value: 'Дессерты',
    },

    {
      svg: <ImgStyle src={Sauce} alt="Соусы" />,
      value: 'Соусы',
    },
  ];

  return (
    <CategoriesList>
      {categoriesArr.map((obj, i) => (
        <CategoriesListItem
          active={categoryChange === i ? true : false}
          key={i}
          onClick={() => onChangeCategory(i)}
        >
          {obj.svg} {obj.value}
        </CategoriesListItem>
      ))}
    </CategoriesList>
  );
};

export default Categories;
