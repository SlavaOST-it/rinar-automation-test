import {BeerType} from "../../common/types/beerType";


export const useFiltrationBeer = (data: BeerType[], alcoholValue: number, valueTitle: string)=>{
    const filteredBeers = data.filter(el => {
        const alcoholPercentage = parseFloat(el.alchool.replace('%', ''));

        // Применяем фильтрацию по процентам алкоголя
        if (alcoholValue < alcoholPercentage) {
            return false;
        }

        // Применяем фильтрацию по названию
        if (valueTitle.trim() !== '' && el.title.toLowerCase().includes(valueTitle.toLowerCase())) {
            return true;
        }
        return valueTitle === '';
    })

    return {
        filteredBeers
    }
}