import React, {useContext, useEffect, useState} from 'react';
import {PizzaItem} from "./PizzaItem/PizzaItem";
import {PizzaSkeleton} from "./PizzaItem/PizzaSkeleton";
import {PizzaType} from "../Pages";
import {Context} from "../../../context/ContextProvider";
import {IsIncludesValue} from "../../../utils/includes/IsIncludesValue";
import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";
import {Pagination} from "../../Pagination/Pagination";

export const PizzaPage = () => {
    const {searchValue} = useContext(Context)

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [items, setItems] = useState<PizzaType[]>([])
    const [activeCategory, setActiveCategory] = useState<number>(0)
    const [selected, setSelected] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(0)

    const changeTitleSort = (value: number) => {
        switch (value) {
            case 0:
                return 'rating'
            case 1:
                return 'price'
            case 2:
                return 'title'
            default:
                return 'rating'
        }
    }
    const LIMIT_ITEM = 4
    const changedTitleSort = changeTitleSort(selected)
    const categoryPath = activeCategory > 0 ? `category=${activeCategory}` : ''
    const paginationPath = `&p=${currentPage + 1}&limit=${LIMIT_ITEM}`
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://65268109917d673fd76c6aa4.mockapi.io/items?${categoryPath}&sortBy=${changedTitleSort}${paginationPath}`)
            .then(res => {
                return res.json()
            })
            .then(arr => {
                setItems(arr)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [activeCategory, selected, currentPage])

    const changeCategory = (value: number) => {
        setActiveCategory(value)
    }

    const filterSearchPizzas = (items: PizzaType[], value: string) => {
        return items.filter(i => IsIncludesValue(i.title, value))
    }
    const pizzas = filterSearchPizzas(items, searchValue)

    const pizzaItems = pizzas.map(i => <PizzaItem key={i.id} pizza={i}/>)
    const skeletonItemsList = [...new Array(LIMIT_ITEM)].map((_, index) => <PizzaSkeleton key={index}/>)
    const itemsList = isLoading ? skeletonItemsList : pizzaItems

    const totalPages = Math.ceil(12 / LIMIT_ITEM)

    const changePage = (value: number) => {
        setCurrentPage(value)
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories changeCategory={changeCategory} activeCategory={activeCategory}/>
                <Sort selected={selected} setSelected={setSelected}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className={'content__items'}>
                {itemsList}
            </div>
            <Pagination totalPages={totalPages} onChangePage={changePage} currentPage={currentPage}/>
        </div>
    );
};