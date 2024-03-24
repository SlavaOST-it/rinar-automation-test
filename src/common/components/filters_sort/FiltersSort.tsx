import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button, Input, Select} from "antd";
import {useSelector} from "react-redux";

import s from './FiltersSort.module.scss'

import {
    fetchBeers,
    fetchBeersIsCountry,
    selectSearchAlcohol, selectSearchCountry,
    setValueAlcohol, setValueCountry, setValueTitle
} from "../../../state/reducers/beersReducer/beersReducer";

import {useAppDispatch, useDebounce} from "../../../utils/hooks/hooks";
import {sortAlcohol, sortCountry} from './dataSorts';


export const FiltersSort = () => {
    const dispatch = useAppDispatch()
    const searchAlcohol = useSelector(selectSearchAlcohol)
    const searchCountry = useSelector(selectSearchCountry)

    const [isDefaultFilters, setIsDefaultFilters] = useState(true);

    const [valueText, setValueText] = useState("")
    const debouncedValue = useDebounce(valueText)

    const handleChangeValueAlcohol = (value: number) => {
        dispatch(setValueAlcohol({value}))
    };

    const handleChangeValueCountry = (value: string) => {
        dispatch(fetchBeersIsCountry(value))
    }

    const handlerChangeValueInput = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        setValueText(value.trim())
    }

    const handleResetFilters = () => {
        dispatch(setValueAlcohol({value: 100}))
        dispatch(setValueCountry({valueCountry: ''}))
        searchCountry !== sortCountry[0].value && dispatch(fetchBeers())
        setValueText("")
    }

    useEffect(() => {
        dispatch(setValueTitle({valueText: debouncedValue}))
    }, [dispatch, debouncedValue]);

    useEffect(() => {
        const alcoholDefault = sortAlcohol[0].value;
        const countryDefault = sortCountry[0].value;

        const isFiltersDefault = searchAlcohol === alcoholDefault && searchCountry === countryDefault && valueText.trim() === "";
        setIsDefaultFilters(isFiltersDefault);
    }, [searchAlcohol, searchCountry, valueText]);

    return (
        <div className={s.filters_block}>
            <div className={s.filter_item}>
                <span className={s.title_item}>Колличество алкоголя:</span>
                <Select                                                         // Данный элемент можно сделать универсальным, если кол-во Select будет увеличиваться
                    defaultValue={sortAlcohol[0].value}
                    value={searchAlcohol}
                    size={"large"}
                    style={{width: 180}}
                    onChange={handleChangeValueAlcohol}
                    options={sortAlcohol}
                />
            </div>

            <div className={s.filter_item}>
                <span className={s.title_item}>Страна производитель:</span>
                <Select
                    defaultValue={sortCountry[0].value}
                    value={searchCountry}
                    size={"large"}
                    style={{width: 180}}
                    onChange={handleChangeValueCountry}
                    options={sortCountry}
                />
            </div>

            <div className={s.filter_item}>
                <span className={s.title_item}>Название:</span>
                <Input
                    value={valueText}
                    size={"large"}
                    style={{width: 260}}
                    placeholder="Название пива"
                    onChange={handlerChangeValueInput}
                />
            </div>

            <Button
                size={"large"}
                onClick={handleResetFilters}
                disabled={isDefaultFilters}
            >
                X
            </Button>
        </div>
    );
};
