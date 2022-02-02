import React, { useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from './app/store';
import ReservationCard from "./components/ReservationCard";
import { addReservation } from './features/reservationSlice';
import CustomerCard from './components/CustomerCard';
import {v4 as uuid} from "uuid";
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectReservations } from './features/reservationSlice';
import { selectCustomers } from './features/customerSlice';


const App: React.FC = () => {

 const reservations = useAppSelector(selectReservations);
 const customers = useAppSelector(selectCustomers);
 const dispath = useAppDispatch();
 const [reservationInputName,setReservationNameInput] = useState<string>("");
 const handleAddReservation = () => {
   if(!reservationInputName) return;
   dispath(addReservation(reservationInputName));
   setReservationNameInput("");
 }
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {
                reservations.map((name,index) =>  (
                  <ReservationCard name={name} index={index} key={uuid()} />
                ))
              }
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationInputName}
            onChange={(e) => setReservationNameInput(e.target.value)} />
            <button onClick={handleAddReservation} 
            className="btn btn-dark">Add</button>
          </div>
        </div>
        <div className="customer-food-container">
        {customers.map((customer) => {
            return (
              <CustomerCard
                id={customer.id}
                name={customer.name}
                foods={customer.food}
                key={customer.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
