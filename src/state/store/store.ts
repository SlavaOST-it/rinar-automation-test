import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AppReducerActionTypes} from "../reducers/appReducer/appReducer-types";
import {appReducer} from "../reducers/appReducer/appReducer";
import {beersReducer} from "../reducers/beersReducer/beersReducer";
import {BeersActionTypes} from "../reducers/beersReducer/beersReducer-types";
import {beerReducer} from "../reducers/cuurentBeer/currentBeerReducer";
import {CurrentBeerActionTypes} from "../reducers/cuurentBeer/currentBeerReducer-types";


const rootReducer = combineReducers({
    app: appReducer,
    all_beers: beersReducer,
    current_beer: beerReducer,
})

type ReduxActionType = AppReducerActionTypes
    | BeersActionTypes
    | CurrentBeerActionTypes;


export const store = configureStore({
    reducer: rootReducer
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatchType = ThunkDispatch<RootState, unknown, ReduxActionType>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ReduxActionType>;

// @ts-ignore
window.store = store;