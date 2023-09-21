import React from 'react';
import styled from 'styled-components';
import { baseTheme } from '../styles/theme';
import PizzaCard from './ThreePizza/ThreePizza';
import Flex from '../generic/Flex';
import CashbackPizza from './CashbackPizza/CashbackPizza';

import MainPizza from '../assets/Images/Shares/ThreePizza/mainpizza.png';
import RightPizza from '../assets/Images/Shares/ThreePizza/rightpizza.png';
import LeftPizza from '../assets/Images/Shares/ThreePizza/leftpizza.png';

import CashbackPizzaSvg from '../assets/Images/Shares/CashbackPizza/cashbackpizza.svg';



const SharesStyleOrange = styled.div`
  width: 280px;
  height: 343px;
  border-radius: 12px;
  background: ${baseTheme.colors.primary};
  position: relative;
  overflow: hidden;
`;

const SharesStyleRed = styled(SharesStyleOrange)`
  background: ${baseTheme.colors.red};
`;

const SharesText=styled.p`
  line-height: 28px; 
  font-size: 20px;
  font-weight: bold;
  color: black;
  position: absolute;
  left:20px;
  bottom:20px;
  color:${baseTheme.colors.white};
`;

const Shares = () => {
  return (
    <Flex background={baseTheme.colors.bg}>
  <SharesStyleOrange >
<PizzaCard background={`${MainPizza}`} transform={'translate(46px, 24px)'} />
<PizzaCard background={`${RightPizza}`} transform={'translate(92px, 0)'} position={'right top'} />
<PizzaCard background={`${LeftPizza}`} transform={'translate(0, -102%)'} position={'left top'} />
<SharesText>3 средние пиццы<br/> от 999 рублей</SharesText>
  </SharesStyleOrange>

  <SharesStyleRed>
  <CashbackPizza background={`${CashbackPizzaSvg}`} transform={'translate(0, 72px)'}  />
  <SharesText>Кэшбек 10% на самовывоз (доставка)</SharesText>
  </SharesStyleRed>

  <SharesStyleOrange >
<PizzaCard background={`${MainPizza}`} transform={'translate(46px, 24px)'} />
<PizzaCard background={`${RightPizza}`} transform={'translate(92px, 0)'} position={'right top'} />
<PizzaCard background={`${LeftPizza}`} transform={'translate(0, -102%)'} position={'left top'} />
<SharesText>3 средние пиццы<br/> от 999 рублей</SharesText>
  </SharesStyleOrange>
</Flex>






  )
};

export default Shares;
