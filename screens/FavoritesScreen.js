import { View, StyleSheet, Text } from "react-native"
// import { useContext } from "react"
// import { FavoritesContext } from "../store/context/favorites-context"
import { ANIMALS } from "../data/animal-data"
import {useSelector} from "react-redux"
import AnimalList from "../components/AnimalsList/AnimalList";

function FavoritesScreen() {
    // const favoriteMealsContext = useContext(FavoritesContext)

    const favoriteAnimalIds = useSelector(state => state.favoriteAnimals.ids)
    const favoriteAnimals = ANIMALS.filter(animal => favoriteAnimalIds.includes(animal.id))

    console.log(favoriteAnimalIds)
    console.log(favoriteAnimals)

    console.log('ANIMALS')
    ANIMALS.forEach(animal => {
        console.log(animal.id)
    })

    console.log('FAVORITES')
    favoriteAnimalIds.forEach(id => {
        console.log(id)
    })

    if (favoriteAnimals.length === 0 || !favoriteAnimals) {
        return (
            <View style={styles.screen}>
                <Text>No favorites!</Text>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <AnimalList animals={favoriteAnimals} />
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
