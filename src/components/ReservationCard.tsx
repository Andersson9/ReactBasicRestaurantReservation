import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from '../features/reservationSlice';
import "../App.css";
import { addCustomer } from "../features/customerSlice";
import {v4 as uuid} from "uuid";
import { useAppDispatch } from "../app/hooks";

interface ReservationCardType{
 name:string;
 index:number;
}

const ReservationCard:React.FC<ReservationCardType> = ({name,index}:ReservationCardType) => {
    const dispath = useAppDispatch();
    const handleDelete = () => {
        dispath(removeReservation(index)) 
        dispath(addCustomer({
            id:uuid(),
            name,
            food:[]
        }))
    }
    return(
        <div className="reservation-card-container"
         onClick={() => {
             handleDelete()
         }}>{name}</div>
    );
}

export default ReservationCard;