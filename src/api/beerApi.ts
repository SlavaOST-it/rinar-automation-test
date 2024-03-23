import {instance} from "./apiConfig/instance";
import {BeerType} from "../common/types/beerType";
import {setAppStatus} from "../state/reducers/appReducer/appReducer";
import {AppStatus} from "../common/types/commonTypes";


export const beerApi = {
    getAllBeers(){
        return instance.get<BeerType[]>('')
    },

    getBeersIsCountry(country: string){
        return instance.get<BeerType[]>(`${country}`)
    }
}



// fetchBeersIsCountry: create.asyncThunk (async function(_, {
//     dispatch,
//     rejectWithValue
// }) {
//     dispatch(setAppStatus({status: AppStatus.LOADING}))
//     try {
//
//     }catch (e){
//         const res = await beerApi.getCurrentBeer()
//     }
// }),