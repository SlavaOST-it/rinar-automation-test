import React, {useState} from 'react';
import {useSelector} from "react-redux";

import cs from '../../common/styles/CommonStyles.module.scss'

import {TableBeers} from "../../common/components/table/TableBeers";
import {BeerInfo} from "../../common/components/beer_info/BeerInfo";
import {FiltersSort} from "../../common/components/filters_sort/FiltersSort";
import {ModalInfoBeer} from "../../common/components/infoModal/ModalInfoBeer";

import {useFiltrationBeer} from "../../utils/hooks/useFiltrationBeer";
import {selectIdBeer} from "../../state/reducers/currentBeer/currentBeerReducer";
import {selectAllBeers, selectSearchAlcohol, selectSearchTitle} from "../../state/reducers/beersReducer/beersReducer";
import {CustomConfigProvider} from "../../common/styles/CustomConfigProvider";


export const MainPage = () => {
    const currentIdBeer = useSelector(selectIdBeer)
    const valueTitle = useSelector(selectSearchTitle)
    const beersData = useSelector(selectAllBeers)
    const alcoholValue = useSelector(selectSearchAlcohol)

    const [openModal, setOpenModal] = useState(false)

    const handlerOpenModal = () => {
        setOpenModal(!openModal)
    }

    const {filteredBeers} = useFiltrationBeer(beersData.beers, alcoholValue, valueTitle)

    const currentBeer = beersData.beers.find(el => (
        el.title === currentIdBeer
    ))

    return (
        <CustomConfigProvider>
            <div className={cs.container}>
                <FiltersSort/>
                <TableBeers dataBeers={filteredBeers} openModal={handlerOpenModal}/>
                <ModalInfoBeer isOpen={openModal} setIsOpenModal={handlerOpenModal}>
                    <BeerInfo
                        title={currentBeer?.title}
                        alcohol={currentBeer?.alchool}
                        country={currentBeer?.country}
                        description={currentBeer?.description}
                    />
                </ModalInfoBeer>
            </div>
        </CustomConfigProvider>
    );
};
