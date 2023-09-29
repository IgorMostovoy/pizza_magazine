import styled, { css } from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const SortWrapper = styled.div`
display: inline;
position: relative;
`;

export const SortLabel = styled.svg`
width: 15px;
height: 10px;
transform: translateY(1px);
margin-top: 30px;
`;

export const SortText = styled.b`
font-size: ${baseTheme.fontSize.large};
`;

export const SortSpan = styled.span`
color: ${baseTheme.colors.primary};
cursor: pointer;
user-select: none;
`;

export const SortPopup = styled.div`
position: absolute;
padding: 15px;
background-color: ${baseTheme.colors.white};
right: 0;
width: auto;
height: 100px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  overflow: hidden;
`;

export const SortItems = styled.ul`

`;

export const SortItem = styled.li`
margin-bottom: 10px;
cursor: pointer;

${(props) =>
    props.active &&
    css`
      color: ${baseTheme.colors.primary};
      
    `}
`;

