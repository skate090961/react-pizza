import React from 'react';
import s from './Pagination.module.scss'

type PaginationPropsType = {
    totalPages: number
    onChangePage: (value: number) => void
    currentPage: number
}

export const Pagination: React.FC<PaginationPropsType> = ({
                                                              totalPages,
                                                              onChangePage,
                                                              currentPage
                                                          }) => {
    const clickActiveHandler = (index: number) => {
        onChangePage(index)
    }
    const clickBackHandler = () => {
        onChangePage(currentPage - 1)
    }
    const clickNextHandler = () => {
        onChangePage(currentPage + 1)
    }
    const addActiveClass = (index: number) => {
        return index === currentPage ? s.active : ''
    }

    const isBackDisabled = currentPage <= 0
    const isNextDisabled = currentPage >= totalPages - 1

    const newArray = Array.from({length: totalPages}, (_, index) => index + 1)
    const buttonList = newArray.map((element, index) => <button
            className={addActiveClass(index)}
            key={element}
            onClick={() => clickActiveHandler(index)}
        >
            {element}</button>
    )
    return (
        <div className={s.pagination}>
            <button
                onClick={clickBackHandler}
                disabled={isBackDisabled}
                className={isBackDisabled ? s.disabled : ''}
            >
                {'<'}</button>
            {buttonList}
            <button
                onClick={clickNextHandler}
                disabled={isNextDisabled}
            >{'>'}</button>
        </div>
    )
};