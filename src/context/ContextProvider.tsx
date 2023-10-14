import React, {createContext, ReactNode} from "react";

type ContextType = {
    searchValue: string
    setSearchValue: (searchValue: string) => void
}
type SearchContextPropsType = {
    children: ReactNode
    value: ContextType
}

export const Context = createContext<ContextType>({
    searchValue: '',
    setSearchValue: () => {},
})

export const ContextProvider: React.FC<SearchContextPropsType> = ({children, value}) => {

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}
