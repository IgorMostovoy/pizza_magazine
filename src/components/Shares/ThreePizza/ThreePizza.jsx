import React from 'react';
import styled from 'styled-components';


export const ThreePizzaCardStyle = styled.img`
  background-image: url(${props => props.background}); 
  background-repeat: ${props => props.repeat || 'no-repeat'};
  background-position: ${props => props.position || 'center'};
  transform: ${props => props.transform || 'translate(0,0)'};
  width: ${props => props.width || '209px'};
  height: ${props => props.height || '209px'};
  position: ${props => props.position || 'absolute'};
  z-index: ${props => props.z || '2'};
`;

const ThreePizzaCard = (props) => {
  return <ThreePizzaCardStyle{...props}/>
};

export default ThreePizzaCard;
