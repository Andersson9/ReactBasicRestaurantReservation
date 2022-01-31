import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFoodToCustomer } from '../features/customerSlice';

interface CustomerCardType{
    id:string;
    name:string;
    foods:string[]
}

const CustomerCard:React.FC<CustomerCardType> = ({id,name,foods}:CustomerCardType) => {
  
  const dispatch = useDispatch();
  const [customerFoodInput,setcustomerFoodInput] = useState<string>("");
 
  return (
    <div className="customer-food-card-container">
    <p>{name}</p>
    <div className="customer-foods-container">
      <div className="customer-food">
          {
              foods.map((food) => {
                 return <p>{food}</p>
              })
          }
      </div>
      <div className="customer-food-input-container">
        <input 
        value={customerFoodInput}
        onChange={(e) => setcustomerFoodInput(e.target.value)} />
        <button
            onClick={() => {
              dispatch(
                addFoodToCustomer({
                  id,
                  food: customerFoodInput,
                })
              );
            }}
          >
            Add
          </button>
      </div>
    </div>
  </div>
  );
};

export default CustomerCard;
