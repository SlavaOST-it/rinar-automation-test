import React, {useEffect} from 'react';
import {Alert, Spin} from "antd";
import {useSelector} from "react-redux";
import {Route, Routes} from 'react-router-dom';

import s from './App.module.scss'

import {MainPage} from '../pages';
import {PageError} from "../pages";

import {PATH} from "../utils/routes/routes";
import {useAppDispatch} from "../utils/hooks/hooks";

import {AppStatus} from "../common/types/commonTypes";

import {fetchAllBeers} from "../state/reducers/beersReducer/beersReducer";
import {selectErrorApp, selectStatusApp} from '../state/reducers/appReducer/appReducer';


function App() {
    const dispatch = useAppDispatch()
    const appStatus = useSelector(selectStatusApp)
    const errorApp = useSelector(selectErrorApp)

    useEffect(() => {
        dispatch(fetchAllBeers(dispatch))
    }, [dispatch])

    return (
        <div className={s.app}>

            <div className={s.pages}>
                <Routes>
                    <Route path={PATH.beers} element={<MainPage/>}/>
                    <Route path={'/*'} element={<PageError/>}/>
                </Routes>
            </div>

            <Spin
                size={'large'}
                fullscreen={true}
                spinning={appStatus === AppStatus.LOADING}
            />

            <div className={s.alert}>
                {errorApp &&
                    <Alert
                        message="Error"
                        description={errorApp ? errorApp : ''}
                        type="error"
                        showIcon
                        banner={true}
                    />
                }
            </div>
        </div>)
}

export default App;
