import React from 'react';
import {Selector} from "../PizzaItem/Selector/Selector";

type CategoriesPropsType = {
    changeCategory: (value: number) => void
    activeCategory: number
}

export const Categories: React.FC<CategoriesPropsType> = ({
                                                              activeCategory,
                                                              changeCategory
                                                          }) => {
    const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">
            <Selector onChange={changeCategory} activeIndex={activeCategory} values={categories}/>
        </div>
    );
};