import styled, { css } from 'styled-components';
import { baseTheme } from '../../styles/theme';



export const PizzaCardOptions = styled.div`
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  user-select: none;
  
`;

export const PizzaCardType = styled.p`
  border-radius: 8px;
  padding: 10px 19px;
  margin: 3px;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      background: ${baseTheme.colors.white};
      width: 100%;
      text-align: center;
    `}
`;

export const PizzaCardSizes = styled.p`
  border-radius: 8px;
  padding: 3px 12px;
  white-space: nowrap;
  cursor: pointer;
  margin: 3px;

  ${(props) =>
    props.active &&
    css`
      background: ${baseTheme.colors.white};

      text-align: center;
    `}
`;


