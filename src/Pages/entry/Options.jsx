import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import ScoopOptions from './ScoopOptions';
import ToppingOption from './ToppingOption';
import { Row } from 'react-bootstrap';
import AlertBanner from '../common/AlertBanner';

// eslint-disable-next-line react/prop-types
const Options = ({optionType}) => {
  const [items, setItems] = useState([]);
const [error, setError] = useState(false);

  useEffect(()=>{
    axios.get(`http://localhost:3030/${optionType}`)
    .then(response =>{ 
      console.log(response.data)
      setItems(response.data)
    })
    .catch(error=>{
      // to do
     setError(true)
    })

  },[optionType]);

  if(error){
    return  <AlertBanner />
  }
  const ItemComponent = optionType === "toppings" ? ToppingOption:ScoopOptions;
  
  const optionItems = items.map((item)=>(
    <ItemComponent 
    key={item.name}
    name={item.name}
    imagePath={item.imagePath}
    />
  ))
  return (
    <Row>{optionItems}</Row>
  )
}

export default Options