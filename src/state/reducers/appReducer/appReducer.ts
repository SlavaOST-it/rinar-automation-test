import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppStatus} from "../../../common/types/commonTypes";


const initialState = {
    status: AppStatus.START,
    error: null as string | null,
};

const slice = createSlice({
    name: 'app',
    initialState,

    selectors: {
        selectStatusApp: state => state.status,
        selectErrorApp: state => state.error,
    },

    reducers: (create) => ({
        setAppStatus: create.reducer((state, action: PayloadAction<{ status: AppStatus }>) => {
            state.status = action.payload.status
        }),

        setAppError: create.reducer((state, action: PayloadAction<{ error: string | null }>) => {
            state.error = action.payload.error
        })
    })
})

export const appReducer = slice.reducer
export const {setAppStatus, setAppError} = slice.actions
export const {selectStatusApp, selectErrorApp} = slice.selectors
