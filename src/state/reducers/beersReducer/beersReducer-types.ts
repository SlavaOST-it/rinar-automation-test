import {setAllBeers, setBeerIsCountry, setValueAlcohol, setValueCountry, setValueTitle} from "./beersReducer";

// ===== Action Types ==== //
export type SetAllBeersActionType = ReturnType<typeof setAllBeers>
export type SetValueTitleActionType = ReturnType<typeof setValueTitle>
export type SetValueAlcoholActionType = ReturnType<typeof setValueAlcohol>
export type SetValueCountryActionType = ReturnType<typeof setValueCountry>
export type SetBeerIsCountryActionType = ReturnType<typeof setBeerIsCountry>

export type BeersActionTypes =
    SetAllBeersActionType
    | SetValueTitleActionType
    | SetValueCountryActionType
    | SetValueAlcoholActionType
    | SetBeerIsCountryActionType
