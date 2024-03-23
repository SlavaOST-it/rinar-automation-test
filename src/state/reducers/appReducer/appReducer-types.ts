import {setAppError, setAppStatus} from "./appReducer";

// ===== Action Types ==== //
export type SetAppErrorAT = ReturnType<typeof setAppError>
export type SetAppStatusAT = ReturnType<typeof setAppStatus>

export type AppReducerActionTypes = SetAppErrorAT | SetAppStatusAT