import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from '@reduxjs/toolkit'

export type PizzasStateType = {
    id: number
    imageUrl: string
    title: string
    types: Array<number>
    sizes: Array<number>
    price: number
    category: number
    rating: number
}
type PizzasActionType = {
    pizzas: PizzasStateType[]
}

const pizzasState: PizzasStateType[] = []

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState: pizzasState,
    reducers: {
        setPizzas(state, action: PayloadAction<PizzasActionType>) {
            const {pizzas} = action.payload
            return [...pizzas]
        },
    }
})

export const {setPizzas} = pizzasSlice.actions
export default pizzasSlice.reducer