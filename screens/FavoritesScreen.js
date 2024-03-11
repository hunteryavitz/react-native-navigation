import { View, StyleSheet } from "react-native"
import MealList from "../components/MealsList/MealList"
import { useContext } from "react"
import { FavoritesContext } from "../store/context/favorites-context"
import { MEALS } from "../data/dummy-data"

function FavoritesScreen() {
    const favoriteMealsContext = useContext(FavoritesContext)
    const favoriteMeals = MEALS.filter(meal => favoriteMealsContext.isFavorite(meal.id))

    return (
        <View style={styles.screen}>
            <MealList meals={favoriteMeals} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default FavoritesScreen
