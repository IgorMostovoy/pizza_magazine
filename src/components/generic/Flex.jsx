import React from 'react';
import styled from 'styled-components';


export const StyledFlex = styled.div`
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props=> props.align || 'center'};
justify-content: ${props=> props.justify || 'space-between'};
background-color: ${props => props.background || '#FFF'};
`;

const Flex = (props) =>{
  return <StyledFlex {...props}/>
};

export default Flex;