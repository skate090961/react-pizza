import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type CartStateType = {
    items: ItemType[]
    totalPrice: number
    countItems: number
}
export type ItemType = {
    id: number
    title: string
    price: number
    imageUrl: string
    type: string
    size: number
    count: number
    totalPriceItem: number
}

type AddItemActionType = {
    item: ItemType
    id: number
    size: number
    type: string
}

const cartState: CartStateType = {
    items: [],
    totalPrice: 0,
    countItems: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartState,
    reducers: {
        addItem: (state, action: PayloadAction<AddItemActionType>) => {
            const {item, id, size, type} = action.payload
            const findItem = state.items.find(
                cartItem =>
                    cartItem.id === id &&
                    cartItem.size === size &&
                    cartItem.type === type
            )
            if (findItem) {
                findItem.count += 1
                findItem.totalPriceItem = findItem.price * findItem.count
            } else {
                state.items.push({...item})
            }
            state.totalPrice += item.price
            state.countItems += 1
        },
        removeCart: (state) => {
            state.items = []
            state.totalPrice = 0
            state.countItems = 0
        },
        removeItem: (state, action: PayloadAction<{ id: number, size: number, type: string }>) => {
            const {id, size, type} = action.payload
            const findItem = state.items.find(i => i.id === id && i.size === size && i.type === type)
            if (findItem) {
                state.countItems -= findItem.count
                state.totalPrice -= findItem.totalPriceItem
            }
            const filterItems = state.items.filter(i => i.id !== id || i.size !== size || i.type !== type)
            state.items = filterItems
        },
        incItemCount: (state, action: PayloadAction<{ id: number, size: number, type: string }>) => {
            const {id, size, type} = action.payload
            state.items.map(i => {
                if (i.id === id && i.size === size && i.type === type) {
                    state.totalPrice += i.price
                    i.totalPriceItem += i.price
                    i.count += 1
                    state.countItems += 1
                }
            })
        },
        decItemCount: (state, action: PayloadAction<{ id: number, size: number, type: string }>) => {
            const {id, size, type} = action.payload
            state.items.map(i => {
                if (i.id === id && i.size === size && i.type === type && i.count > 1) {
                    state.totalPrice -= i.price
                    i.totalPriceItem -= i.price
                    i.count -= 1
                    state.countItems -= 1
                }
            })
        }
    }
})

export default cartSlice.reducer
export const {addItem, removeCart, removeItem, incItemCount, decItemCount} = cartSlice.actions