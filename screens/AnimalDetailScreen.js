import { useLayoutEffect } from "react"
import {Image, Text, View, StyleSheet, ScrollView, Button} from 'react-native'
import { ANIMALS } from '../data/animal-data'
import Subtitle from "../components/MealDetail/Subtitle"
import List from "../components/AnimalDetail/List"
import IconButton from "../components/IconButton"
import {useDispatch, useSelector} from "react-redux"
import { addFavorite, removeFavorite } from "../store/redux/favorites"
import AnimalDetails from "../components/AnimalDetails"
import Ionicons from "react-native-vector-icons/Ionicons";

function AnimalDetailScreen({ route, navigation }) {
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
            <View style={styles.imageContainer}>
                <Image
                    style={ styles.image }
                    source={{ uri: selectedAnimal.imageUrl }} />
                <Text style={ styles.title }>{selectedAnimal.title}</Text>
                <Text style={styles.description}>{selectedAnimal.description}</Text>
                <Text style={styles.quote}>`"{selectedAnimal.quote}"`</Text>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.commonalityContainer}>
                    <Ionicons name="diamond" size={30} color="black" />
                    <Text>{selectedAnimal.commonality}</Text>
                </View>

                {selectedAnimal.commonality &&  (
                    <View style={styles.generalContainer}>
                        <Ionicons name="barbell" size={30} color="black" />
                        <Text>Boss</Text>
                    </View>
                )}
                <AnimalDetails
                    difficulty={selectedAnimal.difficulty}
                    duration={selectedAnimal.duration}
                    textStyle={styles.detailText}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button title={'Begin'} onPress={() => console.log('begin')} />
            </View>

            {selectedAnimal.status === 'started' && <View style={ styles.outerListContainer }>
                <View style={ styles.listContainer }>
                    <Subtitle>Inventory</Subtitle>
                    <List style={styles.inventoryItem} data={selectedAnimal.inventory} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedAnimal.steps} />
                </View>
            </View>}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        marginBottom: 16,
    },
    imageContainer: {
    },
    image: {
        width: '100%',
        height: 350,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 6,
    },
    commonalityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    generalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 6,
        textAlign: 'center',
        color: 'black',
    },
    description: {
        fontSize: 16,
        margin: 6,
        color: 'black',
    },
    quote: {
        fontSize: 12,
        fontWeight: 'bold',
        margin: 6,
        color: 'black',
        textAlign: 'center',
    },
    detailText: {
        color: 'black',
    },
    buttonContainer: {
        margin: 6,
        alignItems: 'center',
    },
    listContainer: {
        // width: '90%',
        // borderWidth: 1,
    },
    inventoryItem: {
        backgroundColor: 'lightgrey',
    },
    outerListContainer: {
        alignItems: 'center',
        // margin: 6,
    },

})

export default AnimalDetailScreen
