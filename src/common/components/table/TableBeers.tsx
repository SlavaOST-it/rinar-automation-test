import React, {FC} from 'react';
import {Table} from "antd";

import {columns} from "./dataTable";
import {BeerType} from "../../types/beerType";
import {useAppDispatch} from "../../../utils/hooks/hooks";
import {setIdBeer} from "../../../state/reducers/currentBeer/currentBeerReducer";


type TableBeersType = {
    dataBeers: BeerType[]
    openModal: (isOpen: boolean) => void
}

export const TableBeers: FC<TableBeersType> = ({dataBeers, openModal}) => {
    const dispatch = useAppDispatch()

    const mappedData = dataBeers.map((beer, index) => ({
        ...beer,
        key: String(index),
    }))

    const handlerSelectBeer = (id: string) => {
        openModal(true)
        dispatch(setIdBeer({id}))
    }

    return (
        <div>
            <Table
                columns={columns}
                dataSource={mappedData}
                bordered={true}
                pagination={{ position: ['bottomCenter'] }}
                onRow={(record) => {
                    return {
                        onClick: () => {handlerSelectBeer(record.title)},
                    }}}
            />
        </div>
    );
};
