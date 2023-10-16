import React from 'react';
import {Selector} from "../PizzaItem/Selector/Selector";

type CategoriesPropsType = {
    categoryId: number
    changeCategoryId: (id: number) => void
}

const Categories: React.FC<CategoriesPropsType> = ({
                                                       categoryId,
                                                       changeCategoryId
                                                   }) => {
    const categoryValues = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">
            <Selector onChange={changeCategoryId} activeIndex={categoryId} values={categoryValues}/>
        </div>
    );
};

export default Categories