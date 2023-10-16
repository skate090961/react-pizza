import React, {ChangeEvent, useContext} from 'react';
import s from './Search.module.scss'
import search from '../../../../assets/img/search.svg'
import close from '../../../../assets/img/close.svg'
import {Context} from "../../../../context/ContextProvider";

export const Search = () => {
    const {searchValue, setSearchValue} = useContext(Context)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }
    const onClickHandler = () => {
        setSearchValue('')
    }

    return (
        <div className={s.search}>
            <img src={search} alt="search-icon" className={s.search_icon}/>
            <input
                onChange={onChangeHandler}
                value={searchValue}
                placeholder={'Поиск пиццы...'}
            />
            { searchValue &&
                <img
                onClick={onClickHandler}
                src={close}
                alt="close-icon"
                className={s.close_icon}
            />
            }
        </div>
    );
};