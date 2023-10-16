import React, {useContext, useEffect, useState} from 'react';
import {PizzaItem} from "./PizzaItem/PizzaItem";
import {PizzaSkeleton} from "./PizzaItem/PizzaSkeleton";
import {Context} from "../../../context/ContextProvider";
import {IsIncludesValue} from "../../../utils/includes/IsIncludesValue";
import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";
import {Pagination} from "../../Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../../store/store";
import {setCategory, setSort} from "../../../store/slices/filterSlice";
import {PizzasStateType, setPizzas} from "../../../store/slices/pizzasSlice";

export const PizzaPage = () => {
    const {searchValue} = useContext(Context)

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [currentPage, setCurrentPage] = useState<number>(0)
    const items = useSelector<RootStoreType, PizzasStateType[]>(state => state.pizzas)
    const sortId = useSelector<RootStoreType, number>(state => state.filter.sortId)
    const categoryId = useSelector<RootStoreType, number>(state => state.filter.categoryId)
    const dispatch = useDispatch()

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
    const changedTitleSort = changeTitleSort(sortId)
    const categoryPath = categoryId > 0 ? `category=${categoryId}` : ''
    const paginationPath = `&p=${currentPage + 1}&limit=${LIMIT_ITEM}`
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://65268109917d673fd76c6aa4.mockapi.io/items?${categoryPath}&sortBy=${changedTitleSort}${paginationPath}`)
            .then(res => {
                return res.json()
            })
            .then(arr => {
                dispatch(setPizzas({pizzas: arr}))
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortId, currentPage])

    const filterSearchPizzas = (items: PizzasStateType[], value: string) => {
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

    const changeCategoryId = (id: number) => {
        dispatch(setCategory({id}))
    }
    const changeSortId = (id: number) => {
        dispatch(setSort({id}))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories categoryId={categoryId} changeCategoryId={changeCategoryId}/>
                <Sort sortId={sortId} changeSortId={changeSortId}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className={'content__items'}>
                {itemsList}
            </div>
            <Pagination totalPages={totalPages} onChangePage={changePage} currentPage={currentPage}/>
        </div>
    );
};