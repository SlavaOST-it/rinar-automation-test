import React from 'react';
import { useNavigate } from 'react-router-dom';

import s from './PageError.module.scss'


export const PageError = () => {
    const navigate = useNavigate()

    return (
        <div className={s.page_error}>
            <h2 className={s.title}>
                404
            </h2>
            <p className={s.subtitle}> страница не найдена</p>

            <p className={s.text}>
                страница, на которую вы пытаетесь <br/>
                попасть, не существует или была удалена.<br/>
                Перейти на <span onClick={()=>{navigate(-1)}}>Главную страницу</span>
            </p>
        </div>
    );
};
