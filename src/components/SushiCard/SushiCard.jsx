import React from 'react';
import Card from '../generic/Card/Card';


const SushiCard =  ({price, title, describe, imageUrl }) =>{
return <Card Card price={price} title={title} describe={describe} imageUrl={imageUrl}/>

}
export default SushiCard;