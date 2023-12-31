/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import {pricePerItem} from '../constants/index';

const OrderDetails = createContext();

export function useOrderDetails() {
  const contexValue = useContext(OrderDetails);
  if (!contexValue) {
    throw new Error(
      "useOrderDetails must be called from within an orderDetailsProvider"
    );
  }
  return contexValue;
}

export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCount] = useState({
    scoops: {},
    toppings: {},
  });
  const updateItemCount = (itemName, newItemCount, optionType) => {
    // make a copy of existing state
    const newOptionCounts = { ...optionCounts };

    // update the copy with new information
    newOptionCounts[optionType][itemName] = newItemCount;

    setOptionCount(newOptionCounts);
  };

  const resetOrder =()=>{
    setOptionCount({scoops: {},
        toppings: {},})
  }

  const calculateTotal =(optionType)=>{
const countsArray = Object.values(optionCounts[optionType]);

const totalCount = countsArray.reduce((total,value)=>total+value,0);
return totalCount * pricePerItem[optionType];
}

const totals ={
    scoops : calculateTotal("scoops"),
    toppings : calculateTotal("toppings")
}

  const value = {
    optionCounts,
    updateItemCount,
    resetOrder,
    totals
  };

  return (
    <OrderDetails.Provider value={value}>
      {props.children}
    </OrderDetails.Provider>
  );
}
