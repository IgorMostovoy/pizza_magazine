import React from 'react';
// import { baseTheme } from '../../../styles/theme';
import Flex from '../Flex';
import * as S from '../Card/Card.styled';

const Card = ({ imageUrl, title, describe, price, category, rating, children }) => {

  return (

    <S.CardStyle>
      <Flex direction={'column'}>
        <S.CardImg src={imageUrl} alt="food" />
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardDescribe>{describe}</S.CardDescribe>
        {children}
        <Flex top={'20px'} justify={'space-between'}>
            <S.CardPrice>от {price} ₽</S.CardPrice>
            <S.CardButton>+Добавить <S.CardCounter> 0 </S.CardCounter></S.CardButton>
          </Flex>
      </Flex>
    </S.CardStyle>
  );
};

export default Card;
