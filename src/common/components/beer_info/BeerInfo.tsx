import React, {FC} from "react";

import s from "./BeerInfo.module.scss"


interface BeerInfoI  {
    title?: string,
    country?: string,
    alcohol?: string,
    description?: string
}
export const BeerInfo: FC<BeerInfoI> = ({title, alcohol,country, description}) => {

    return (
        <div className={s.beer_info}>
            <h3 className={s.title}>{title}</h3>

            <div className={s.containerInfo}>
                <h4 className={s.alcohol}>Количество градусов: <strong>{alcohol}</strong></h4>
                <h4 className={s.alcohol}>Страна производства: <strong>{country}</strong></h4>
                <p className={s.description}>
                    {description}
                </p>
            </div>
        </div>
    )
}