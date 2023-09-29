import styled, { css } from 'styled-components';
import { baseTheme } from '../../../styles/theme';

export const CardStyle = styled.div`
  max-width: 100%;
  height: auto;
  background: ${baseTheme.colors.white};
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  margin-top: 30px;
  overflow: hidden;
  padding: 15px;
 
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardTitle = styled.h4`
  font-size: ${baseTheme.fontSize.large};
  font-weight: bold;
  margin-top: 16px;
  align-self: start;

`;

export const CardDescribe = styled.p`
  font-size: ${baseTheme.fontSize.standart};
  font-weight: lighter;
  margin-top: 12px;
  width: 100%;
  
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 15px;
  height: 30px;
`;


export const CardPrice = styled.p`
  font-size: 23px;
`;

export const CardButton = styled.button`
  width: 60%;
  background-color: ${baseTheme.colors.white};
  padding: 10px 20px;
  border: 1px solid ${baseTheme.colors.primary};
  border-radius: 30px;
`;

export const CardCounter = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: ${baseTheme.colors.white};
  border: 1px solid ${baseTheme.colors.primary};
  background-color: ${baseTheme.colors.primary};
`;