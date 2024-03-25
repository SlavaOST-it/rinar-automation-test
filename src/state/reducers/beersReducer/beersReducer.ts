import {AxiosError} from "axios";
import {asyncThunkCreator, buildCreateSlice, PayloadAction} from "@reduxjs/toolkit";

import {beerApi} from "../../../api/beerApi";
import {setAppStatus} from "../appReducer/appReducer";

import {AppStatus} from "../../../common/types/commonTypes";
import {BeerIsCountry, BeerType} from "../../../common/types/beerType";

import {baseErrorHandler} from "../../../utils/error-utils/error-utils";
import {sortAlcohol, sortCountry} from "../../../common/components/filters_sort/dataSorts";


const createAsyncThunk = buildCreateSlice({
    creators: {asyncThunk: asyncThunkCreator}
})

export type AllBeersType = {
    beers: BeerType[],

    searchTitle: string,
    searchAlcohol: number,
    searchCountry: string
}

const initialState: AllBeersType = {
    beers: [],
    searchTitle: '',
    searchAlcohol: sortAlcohol[0].value,
    searchCountry: sortCountry[0].value
}

const slice = createAsyncThunk({
    name: 'all_beers',
    initialState,
    selectors: {
        selectAllBeers: state => state,
        selectSearchAlcohol: state => state.searchAlcohol,
        selectSearchCountry: state => state.searchCountry,
        selectSearchTitle: state => state.searchTitle,
    },

    reducers: (create) => ({
        setAllBeers: create.reducer((state, action: PayloadAction<{ beers: BeerType[] }>) => {
            state.beers = action.payload.beers
        }),

        setBeerIsCountry: create.reducer((state, action: PayloadAction<{ beers: BeerIsCountry[] }>) => {
            state.beers = action.payload.beers.map(beer => ({
                ...beer, country: state.searchCountry
            }))
        }),

        setValueAlcohol: create.reducer((state, action: PayloadAction<{ value: number }>) => {
            state.searchAlcohol = action.payload.value
        }),

        setValueCountry: create.reducer((state, action: PayloadAction<{ valueCountry: string }>) => {
            state.searchCountry = action.payload.valueCountry
        }),

        setValueTitle: create.reducer((state, action: PayloadAction<{ valueText: string }>) => {
            state.searchTitle = action.payload.valueText
        }),


        //========== AsyncThunks ==========//
        fetchAllBeers: create.asyncThunk(async (_, {dispatch}) => {
            dispatch(setAppStatus({status: AppStatus.LOADING}));
            try {
                const res = await beerApi.getAllBeers();
                dispatch(setAppStatus({status: AppStatus.SUCCEEDED}));
                return res.data;
            } catch (e) {
                baseErrorHandler(e as Error | AxiosError, dispatch);
                dispatch(setAppStatus({status: AppStatus.FAILED}));
                throw e;
            }
        }, {
            fulfilled: (state, action) => {
                state.beers = action.payload;
            },
        }),


        fetchBeersIsCountry: create.asyncThunk(async (valueCountry: string, {dispatch}) => {
            dispatch(setAppStatus({status: AppStatus.LOADING}));
            try {
                const res = await beerApi.getBeersIsCountry(valueCountry);
                dispatch(setAppStatus({status: AppStatus.SUCCEEDED}));
                return {beers: res.data, valueCountry};
            } catch (e) {
                baseErrorHandler(e as Error | AxiosError, dispatch);
                dispatch(setAppStatus({status: AppStatus.FAILED}));
                throw e;
            }
        }, {
            fulfilled: (state, action) => {
                state.beers = action.payload.beers.map(beer => ({
                    ...beer,
                    country: action.payload.valueCountry
                }));
                state.searchCountry = action.payload.valueCountry
            }
        })
    }),

})

export const beersReducer = slice.reducer

export const {
    setAllBeers,
    setValueTitle,
    fetchAllBeers,
    setValueAlcohol,
    setValueCountry,
    setBeerIsCountry,
    fetchBeersIsCountry,
} = slice.actions

export const {
    selectAllBeers,
    selectSearchTitle,
    selectSearchCountry,
    selectSearchAlcohol,
} = slice.selectors
