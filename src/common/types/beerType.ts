 export type BeerType = {
    title: string,
    alchool: string,
    description: string,
    country: string
};


export type BeerIsCountry = Omit<BeerType, 'country'>