import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import { type } from "os";
import reservationsReducer from "../features/reservationSlice";
import customerReducer from "../features/customerSlice";
export const store = configureStore({
  reducer:{
    reservations:reservationsReducer,
    customer:customerReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;