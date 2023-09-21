import React from "react";
import { baseTheme } from './styles/theme';
import styled from 'styled-components';
import Flex from "./generic/Flex";
import Button from "./generic/Button";


const SearchStyle = styled.div`
  background-color: ${baseTheme.colors.white};
  height: 80px;
  width: 100%;
border: 1px solid #F0F0F0;
border-radius: 8px;
margin-top: 30px;

`;

const SearchCheckAdress = styled.p`
  font-size: 18px;
font-style: normal;
font-weight: normal;
line-height: 24px; 
margin: 0 32px;
white-space: nowrap;
`;

const SearchInputWrapper = styled.div `
display: inline-block;
  width: 100%;
  height: 48px;
position: relative;

&::before{
  position: absolute;
  display:inline-block; 
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='20' viewBox='0 0 14 20' fill='none'%3E%3Cpath d='M7.02008 3.90632C5.5438 3.89562 4.33479 5.11238 4.32362 6.62015C4.3125 8.12785 5.50412 9.36364 6.97993 9.375C6.98678 9.37504 6.99358 9.37508 7.00043 9.37508C8.46684 9.37508 9.6653 8.16195 9.67639 6.66117C9.68751 5.15355 8.49593 3.91769 7.02008 3.90632ZM7.00035 8.59387C6.99553 8.59387 6.99048 8.59383 6.98567 8.59379C5.9315 8.58567 5.08032 7.70293 5.08828 6.62601C5.09619 5.55394 5.95219 4.68745 6.99966 4.68745C7.00448 4.68745 7.00953 4.68749 7.01434 4.68753C8.06851 4.69566 8.91969 5.57839 8.91173 6.65531C8.90378 7.72738 8.04782 8.59387 7.00035 8.59387Z' fill='%23FF7010'/%3E%3Cpath d='M9.34597 14.7048C11.8891 11.3605 13.4784 9.6165 13.4998 6.69056C13.5267 3.00919 10.6025 0 6.99941 0C3.43839 0 0.527289 2.94641 0.500219 6.59095C0.478349 9.59623 2.09716 11.3378 4.65781 14.7042C2.11043 15.0932 0.500219 16.0704 0.500219 17.2657C0.500219 18.0663 1.22461 18.7848 2.53999 19.2887C3.73723 19.7474 5.32118 20 7.00002 20C8.67886 20 10.2628 19.7474 11.46 19.2887C12.7754 18.7848 13.4998 18.0663 13.4998 17.2656C13.4998 16.071 11.8911 15.094 9.34597 14.7048ZM1.26487 6.59685C1.28873 3.38087 3.85714 0.781252 6.99948 0.781252C10.179 0.781252 12.7589 3.43704 12.7352 6.68474C12.7148 9.46342 11.0294 11.1758 8.33853 14.7595C7.85857 15.3984 7.41781 16.0025 7.00059 16.5934C6.5846 16.0021 6.15262 15.4089 5.66548 14.7593C2.86342 11.0255 1.24415 9.44256 1.26487 6.59685ZM7.00002 19.2188C3.71754 19.2188 1.26487 18.1877 1.26487 17.2657C1.26487 16.5819 2.73109 15.7182 5.19638 15.4191C5.74134 16.1496 6.21911 16.8132 6.68772 17.4911C6.75929 17.5946 6.8756 17.6562 6.99967 17.6563C6.99979 17.6563 6.9999 17.6563 7.00002 17.6563C7.12397 17.6563 7.24024 17.5949 7.31193 17.4916C7.7761 16.8226 8.26696 16.1425 8.80725 15.4195C11.2702 15.7189 12.7352 16.5824 12.7352 17.2657C12.7351 18.1877 10.2825 19.2188 7.00002 19.2188Z' fill='%23FF7010'/%3E%3C/svg%3E") ;
left: 15px;
top: 14px;
width: 13px;
height: 20px;

}

`;

const SearchInput = styled.input`
display: inline-block;
width: 100%;
height: 100%;
  border: 1px solid #F0F0F0;
  border-radius: 6px;
  padding-left: 40px;
  color: ${baseTheme.colors.grey};
  
  &:focus{
outline: 1px solid ${baseTheme.colors.primary};
}
`;

const SearchFlex = styled(Flex)`
  height: 100%;
`;

const Search = () =>{
  return (
    <SearchStyle>
<SearchFlex>
<SearchCheckAdress>Проверить адрес доставки</SearchCheckAdress>
<SearchInputWrapper>
<SearchInput placeholder="Адрес" type="text"/>
</SearchInputWrapper>
<Button>Проверить</Button>
</SearchFlex>
    </SearchStyle>
  )
};

export default Search;