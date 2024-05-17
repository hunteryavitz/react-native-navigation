import {useLayoutEffect, useRef,} from "react"
import LottieView from "lottie-react-native"
import {Image, Text, View, StyleSheet, ScrollView, Button} from 'react-native'
import { ANIMALS } from '../data/animal-data'
import { INVENTORY } from "../data/inventory-data"
import Subtitle from "../components/MealDetail/Subtitle"
import List from "../components/AnimalDetail/List"
import IconButton from "../components/IconButton"
import {useDispatch, useSelector} from "react-redux"
import { addFavorite, removeFavorite } from "../store/redux/favorites"
import AnimalDetails from "../components/AnimalDetails"
import Ionicons from "react-native-vector-icons/Ionicons";
import {clearAdventure, setAdventure} from "../store/redux/adventure";
import {STEPS} from "../data/step-data";
import {addCollected, removeCaptured} from "../store/redux/collected";

function AnimalDetailScreen({ route, navigation }) {
    const confettiRef = useRef(null)

    // const MyComponent = () => { const confettiRef = useRef(null)}

    const dispatch = useDispatch()

    const favoriteAnimalIds = useSelector(state => state.favoriteAnimals.ids)
    const currentAdventure = useSelector(state => state.adventure)
    const currentInventory = useSelector(state => state.inventory.items)

    const stepsStarted = useSelector(state => state.steps.started) // TODO: structure store to slice by animal
    const stepsCompleted = useSelector(state => state.steps.completed)

    const collectedAnimals = useSelector(state => state.collectedAnimals.collected)

    const animalId = route.params.animalId
    const selectedAnimal = ANIMALS.find((animal) => animal.id === animalId)

    const isFavorite = favoriteAnimalIds.includes(animalId)
    const isCollected = collectedAnimals.includes(animalId)

    function toggleFavoriteHandler(animalId) {
        if (isFavorite) {
            dispatch(removeFavorite({ id: animalId }))
        } else {
            dispatch(addFavorite({ id: animalId }))
        }
    }

    function toggleAdventureHandler() {
        if (currentAdventure.adventure === animalId) {
            dispatch(clearAdventure())
        } else {
            // console.log('setting adventure: ' + animalId)
            dispatch(setAdventure(animalId))
        }
    }

    const animalInventory = INVENTORY.filter(item => selectedAnimal.inventory.includes(item.id))
    const myInventory = animalInventory.filter(item => currentInventory.includes(item.id))
    const hasAllInventory = animalInventory.length === myInventory.length

    const inventoryData = animalInventory.map(item => {
        return {
            id: item.id,
            type: 'inventory',
            title: item.title,
            description: item.description,
            status: myInventory.includes(item) ? 1 : 0
        }
    })


    const maybeSteps = selectedAnimal.steps.map(step => {

        const getStatus = () => {
            if (stepsCompleted.includes(step)) {
                return 1
            } else if (stepsStarted.includes(step)) {
                return 0
            } else {
                return -1
            }
        }

        return {
            id: step,
            type: 'step',
            title: STEPS.find(s => s.id === step).title,
            description: STEPS.find(s => s.id === step).description,
            status: getStatus()
        }
    })

    const claimAnimal = () => {
        // confettiRef.current.play()

        console.log('claiming animal', animalId)
        dispatch(clearAdventure())
        dispatch(removeCaptured({id: animalId}))
        dispatch(addCollected({id: animalId}))
        console.log('collectedAnimals', collectedAnimals)
    }

    // const assembledStartedSteps = selectedAnimal.steps
    //     .filter(step => stepsStarted.includes(step))
    //     .map(step => {
    //         return {
    //             id: step,
    //             title: STEPS.find(s => s.id === step).title,
    //             description: STEPS.find(s => s.id === step).description,
    //             progress: 0
    //         }
    //     })
    //
    // console.log('stepsStarted', stepsStarted)
    // console.log('assembledStartedSteps', assembledStartedSteps)
    //
    // const assembledCompletedSteps = selectedAnimal.steps
    //     .filter(step => stepsCompleted.includes(step))
    //     .map(step => {
    //         console.log('bing')
    //         console.log('bang')
    //         return {
    //             id: step,
    //             title: STEPS.find(s => s.id === step).title,
    //             description: STEPS.find(s => s.id === step).description,
    //             progress: 1
    //         }
    //     })
    // console.log('boom')
    //
    // console.log('assembledCompletedSteps', assembledCompletedSteps)
    //
    // const assembledRemainingSteps = selectedAnimal.steps
    //     .filter(step => !stepsStarted.includes(step) && !stepsCompleted.includes(step))
    //     .map(step => {
    //         return {
    //             id: step.id,
    //             // title: STEPS.find(s => s.id === step.id).title,
    //             // description: STEPS.find(s => s.id === step.id).description,
    //             progress: -1
    //         }
    //     })
    //
    // const assembledSteps = assembledStartedSteps.concat(assembledCompletedSteps).concat(assembledRemainingSteps)

    const hasAllSteps = selectedAnimal.steps.length === stepsCompleted.length

    // const hasAllSteps = true

    // const currentAnimalSteps = stepsInProgress.filter(step => step.animalId === animalId) // steps in progress for this animal
    // const animalSteps = STEPS.filter(step => selectedAnimal.steps.includes(step.id))
    // console.log('animalSteps', animalSteps)
    // console.log('currentSteps', currentSteps)
    // const mySteps = animalSteps.filter(step => currentSteps.includes(step.id) && step.progress === 1) // TODO: this is wrong
    // console.log('mySteps', mySteps)
    // const hasAllSteps = true //animalSteps.length === mySteps.length

    // const stepsData = animalSteps.map(step => {
    //     return {
    //         id: step.id,
    //         type: 'step',
    //         title: step.title,
    //         description: step.description,
    //         status: 1 // mySteps.includes(step) ? 1 : 0
    //     }
    // })

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


            {!isCollected && <View style={styles.buttonContainer}>


                {(currentAdventure.adventure !== animalId && hasAllInventory) && <View style={styles.buttonContainer}>
                    <Button title={'Begin'} onPress={toggleAdventureHandler} />
                </View>}

                {/*{(!isCollected && hasAllSteps) && <View style={styles.buttonContainer}>*/}
                {/*    <Button title={'Claim'} onPress={claimAnimal} />*/}
                {/*</View>}*/}

                <View style={styles.listContainer}>
                    <Subtitle>Inventory</Subtitle>
                    <List style={styles.inventoryItem} data={inventoryData} />
                </View>

                {currentAdventure.adventure === animalId && <View>
                    <View style={ styles.listContainer }>
                        <Subtitle>Steps</Subtitle>
                        <List data={maybeSteps} />
                        {/*<Button title={'Give Up'} onPress={toggleAdventureHandler} />*/}
                    </View>
                    {hasAllSteps && <Button title={'Claim'} onPress={claimAnimal} />}
                </View>}

            </View>}

            {isCollected && <LottieView
                ref={confettiRef}
                style={styles.lottie}
                source={require('../assets/confetti.json')}
                autoPlay
                loop
            />}
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
        backgroundColor: 'lightgreen',
    },
    outerListContainer: {
        alignItems: 'center',
        // margin: 6,
    },
    lottie: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        // zIndex: 1000,
        // pointerEvents: 'none',
    }

})

export default AnimalDetailScreen
