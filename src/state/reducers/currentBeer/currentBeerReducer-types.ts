import { setIdBeer } from "./currentBeerReducer"

// ===== Action Types ==== //
export type SetIdBeerActionType = ReturnType<typeof setIdBeer>

export type CurrentBeerActionTypes = SetIdBeerActionType