import { useLayoutEffect } from "react"
import {Image, Text, View, StyleSheet, ScrollView} from 'react-native'
import { ANIMALS } from '../data/animal-data'
import Subtitle from "../components/MealDetail/Subtitle"
import List from "../components/AnimalDetail/List";
import IconButton from "../components/IconButton";
// import { FavoritesContext } from "../store/context/favorites-context"
import {useDispatch, useSelector} from "react-redux"
import { addFavorite, removeFavorite } from "../store/redux/favorites"
import AnimalDetails from "../components/AnimalDetails";

function MealDetailScreen({ route, navigation }) {
    // const favoriteMealsContext = useContext(FavoritesContext)
    const favoriteAnimalIds = useSelector(state => state.favoriteAnimals.ids)
    const dispatch = useDispatch()

    const animalId = route.params.animalId
    const selectedAnimal = ANIMALS.find((animal) => animal.id === animalId)
    const isFavorite = favoriteAnimalIds.includes(animalId)

    function toggleFavoriteHandler(animalId) {
        if (isFavorite) {
            console.log('removing favorite')
            dispatch(removeFavorite({ id: animalId }))
        } else {
            console.log('adding favorite')
            dispatch(addFavorite({ id: animalId }))
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <>
                        <IconButton
                            icon={isFavorite ? "star" : "star-outline"}
                            color="#000000"
                            onPress={() => toggleFavoriteHandler(animalId)}
                        />
                    </>
                )
            }
        })
    }, [navigation, toggleFavoriteHandler])

    return (
        <ScrollView style={ styles.root }>
            <Image
                style={ styles.image }
                source={{ uri: selectedAnimal.imageUrl }} />
            <Text style={ styles.title }>{selectedAnimal.title}</Text>
            <View>
                <Text>{selectedAnimal.isRare}</Text>
                <Text>{selectedAnimal.isGeneral}</Text>
                <Text>{selectedAnimal.isUnlocked}</Text>
            </View>
            <AnimalDetails
                difficulty={selectedAnimal.difficulty}
                duration={selectedAnimal.duration}
                textStyle={styles.detailText}
            />
            <View style={ styles.outerListContainer }>
                <View style={ styles.listContainer }>
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedAnimal.steps} />
                    <Subtitle>Inventory</Subtitle>
                    <List data={selectedAnimal.inventory} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        marginBottom: 16,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 6,
        textAlign: 'center',
        color: '#121212'
    },
    detailText: {
        color: 'green',
    },
    listContainer: {
        width: '90%',
    },
    outerListContainer: {
        alignItems: 'center',
        margin: 6,
    },

})

export default MealDetailScreen
