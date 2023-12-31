// eslint-disable-next-line react/prop-types
/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import ScoopOptions from './ScoopOptions';
import ToppingOption from './ToppingOption';
import { Row } from 'react-bootstrap';
import AlertBanner from '../common/AlertBanner';
import { pricePerItem } from '../../constants';
import {formatCurrency} from '../../utilities/index';
import { useOrderDetails } from '../../contexts/OderDetails';

const Options = ({optionType}) => {
  const [items, setItems] = useState([]);
const [error, setError] = useState(false);
const {totals} = useOrderDetails();

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
  const title = optionType[0].toUpperCase()+ optionType.slice(1).toLowerCase();


  const optionItems = items.map((item)=>(
    <ItemComponent 
    key={item.name}
    name={item.name}
    imagePath={item.imagePath}
    />
  ))
  return (
    <>
    <h2 className="text-center mt-5">{title}</h2>
    <p>{formatCurrency(pricePerItem[optionType])} each</p>
    <p>{title} total:{formatCurrency(totals[optionType])}</p>
    <Row>{optionItems}</Row>
    </>
  )
}

export default Options