import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type CurrentBeerType = {
    id: string,
}
const initialState: CurrentBeerType = {
    id: '',
}

const slice = createSlice({
    name: 'current_beer',
    initialState,
    selectors: {
        selectIdBeer: state => state.id
    },

    reducers: (create) => ({
        setIdBeer: create.reducer((state, action: PayloadAction<{ id: string }>) => {
            state.id = action.payload.id
        })
    })
})

export const beerReducer = slice.reducer

export const {setIdBeer} = slice.actions

export const {selectIdBeer} = slice.selectors