import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import ScoopOptions from './ScoopOptions';
import { Row } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const Options = ({optionType}) => {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:3030/${optionType}`)
    .then(response =>{ 
      console.log(response.data)
      setItems(response.data)
    })
    .catch(error=>console.log(error))

  },[optionType]);

  const ItemComponent = optionType ? ScoopOptions :null
  
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