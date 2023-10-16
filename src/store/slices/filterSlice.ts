import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

type FilterActionType = {
    id: number
}
export type InitialStateType = {
    categoryId: number
    sortId: number
}

const initialState: InitialStateType = {
    categoryId: 0,
    sortId: 0
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory(state, action: PayloadAction<FilterActionType>) {
            const {id} = action.payload
            console.log(action.payload)
            return {...state, categoryId: id}
        },
        setSort(state, action: PayloadAction<FilterActionType>) {
            const {id} = action.payload
            return {...state, sortId: id}
        },
    },
})

export const {setCategory, setSort} = filterSlice.actions
export default filterSlice.reducer