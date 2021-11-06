import { createContext, useState } from "react"

export const UiContext = createContext()

const initialState = {
    isMobileMenuOpen: false,
    searchTerm: ''
}

const UiProvider = ({children}) => {

    const [state, setstate] = useState(initialState);

    const toggleMenu = () =>{
        setstate({
            ...state,
            isMobileMenuOpen: !state.isMobileMenuOpen
        })
    }
    const search = (term) =>{
        setstate({
            ...state,
            searchTerm: term
        })
    }

    const data = {
        isMobileMenuOpen: state.isMobileMenuOpen,
        searchTerm: state.searchTerm,
        toggleMenu,
        search
    }

    return (
        <UiContext.Provider value={data}>
            {children}
        </UiContext.Provider>
    )
}
export default UiProvider

