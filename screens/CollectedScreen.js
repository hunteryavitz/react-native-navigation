import { View, StyleSheet, Text } from "react-native"
import { ANIMALS } from "../data/animal-data"
import {useSelector} from "react-redux"
import AnimalList from "../components/AnimalsList/AnimalList"

function CollectedScreen() {
    const collectedAnimalIds = useSelector(state => state.collectedAnimals.ids)
    const collectedAnimals = ANIMALS.filter(animal => collectedAnimalIds.includes(animal.id))

    if (collectedAnimals.length === 0 || !collectedAnimals) {
        return (
            <View style={styles.screen}>
                <Text>None collected!</Text>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <AnimalList animals={collectedAnimals} />
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

export default CollectedScreen
