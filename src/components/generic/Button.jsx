import React from "react";
import styled from 'styled-components';
import { baseTheme } from '../styles/theme';


const ButtonStyle = styled.button`
  padding: 13px 32px;
  background-color: ${baseTheme.colors.primary};
  border-radius: 6px;
  justify-content: center;
align-items: center;
font-size: 16px;
font-weight: normal;
line-height: 22px;
border: none;
color: ${baseTheme.colors.white};
margin-right: 32px;
margin-left: 20px;

`;
const Button = (props) =>{
  return <ButtonStyle {...props}/>
};

export default Button;