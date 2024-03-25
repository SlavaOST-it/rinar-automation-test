import {Dispatch} from "redux";
import axios, {AxiosError} from "axios";

import {AppStatus} from "../../common/types/commonTypes";
import {setAppError, setAppStatus} from "../../state/reducers/appReducer/appReducer";
import {SetAppErrorAT, SetAppStatusAT} from "../../state/reducers/appReducer/appReducer-types";


export const baseErrorHandler = (e: Error | AxiosError, dispatch: Dispatch<SetAppErrorAT | SetAppStatusAT>) => {
    const err = e as Error | AxiosError
    if (axios.isAxiosError(err)) {
        const error = err.response?.data
            ? (err.response.data as ({ error: string })).error
            : err.message
        dispatch(setAppStatus({status: AppStatus.FAILED}))
        dispatch(setAppError({error: error}))
    }
}