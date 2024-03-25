import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {ThunkDispatch} from 'redux-thunk';

import {appReducer} from "../reducers/appReducer/appReducer";
import {beersReducer} from "../reducers/beersReducer/beersReducer";
import {beerReducer} from "../reducers/currentBeer/currentBeerReducer";

import {BeersActionTypes} from "../reducers/beersReducer/beersReducer-types";
import {AppReducerActionTypes} from "../reducers/appReducer/appReducer-types";
import {CurrentBeerActionTypes} from "../reducers/currentBeer/currentBeerReducer-types";


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

// @ts-ignore
window.store = store;