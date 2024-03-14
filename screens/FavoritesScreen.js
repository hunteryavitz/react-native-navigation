import { View, StyleSheet, Text } from "react-native"
import MealList from "../components/MealsList/MealList"
// import { useContext } from "react"
// import { FavoritesContext } from "../store/context/favorites-context"
import { MEALS } from "../data/dummy-data"
import {useSelector} from "react-redux"

function FavoritesScreen() {
    // const favoriteMealsContext = useContext(FavoritesContext)

    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)
    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id))

    if (favoriteMeals.length === 0 || !favoriteMeals) {
        return (
            <View style={styles.screen}>
                <Text>No favorites!</Text>
            </View>
        )
    }

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
