import {instance} from "./apiConfig/instance";
import {BeerIsCountry, BeerType} from "../common/types/beerType";


export const beerApi = {
    getAllBeers(){
        return instance.get<BeerType[]>('')
    },

    getBeersIsCountry(country: string){
        return instance.get<BeerIsCountry[]>(`${country}`)
    }
}
