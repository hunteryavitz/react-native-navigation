import {createContext, useState} from 'react'

export const FavoritesContext = createContext({
    favorites: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
    isFavorite: (id) => {},
})

function FavoritesContextProvider({ children }) {
    const [favoriteMealIds, setFavoriteMealIds] = useState([])

    function addFavorite(id) {
        setFavoriteMealIds((currentIds) => [...currentIds, id])
    }

    function removeFavorite(id) {
        setFavoriteMealIds((currentIds) => {
            return currentIds.filter((mealId) => mealId !== id)
        })
    }

    function isFavorite(id) {
        return favoriteMealIds.some((mealId) => mealId === id)
    }

    const value = {
        favorites: favoriteMealIds,
        addFavorite,
        removeFavorite,
        isFavorite,
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider
