import {View, StyleSheet, Button, TouchableOpacity, Text, Alert, Image} from 'react-native'
import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import MapView, {Marker} from "react-native-maps"
import { getDistance } from 'geolib'
import * as Location from 'expo-location'
import {ANIMALS} from "../../data/animal-data"
import {addCaptured} from "../../store/redux/collected"
import Ionicons from "react-native-vector-icons/Ionicons"
import {removeAnimalDrop} from "../../store/redux/drops"

function AnimalsSearchScreen() {
    const animalDrops = useSelector(state => state.drops.animalDrops)
    const capturedAnimals = useSelector(state => state.collectedAnimals.captured)
    const collectedAnimals = useSelector(state => state.collectedAnimals.collected)
    const dispatch = useDispatch()

    const [devicePosition, setDevicePosition] = useState(null);
    const [animalPosition, setAnimalPosition] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)
    const [animal, setAnimal] = useState(null)
    const [animalImage, setAnimalImage] = useState(null)

    const captureAnimal = () => {
        Alert.alert("Creature Captured", `You SIMULATED captured ${animal.title}!`, [
            {text: "OK"}
        ])
        dispatch(addCaptured({ id: animal.id }))
        setAnimal(null)
        setAnimalImage(null)
        setInventoryPosition(null)
        console.log('Captured animal')
        console.log(capturedAnimals)
    }



    const notCollectedAnimals = ANIMALS.filter((animal) => !capturedAnimals.includes(animal.id) && !collectedAnimals.includes(animal.id))


    useEffect(() => {
        let subscription

        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                await setErrorMsg('Permission to access location was denied: ' + status)
                alert(errorMsg)
            } else {
                subscription = await Location.watchPositionAsync({
                    accuracy: Location.Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 1,
                }, (newLocation) => {
                    setDevicePosition(newLocation)
                    if (animalPosition) {
                        checkProximity(newLocation.coords, animalPosition)
                    }
                })
            }

        })()

        // TODO: check this is the correct way to unsubscribe
        return () => {
            subscription.remove()
        }
    }, [animalPosition]) // TODO: check this is the right dependency

    const checkProximity = (deviceCoords, inventoryCoords) => {
        const distance = getDistance(
            { latitude: deviceCoords.latitude, longitude: deviceCoords.longitude },
            { latitude: inventoryCoords.latitude, longitude: inventoryCoords.longitude }
        )

        if (distance <= 3) {
            Alert.alert("Creature Captured", `You ACTUALLY captured ${animal.title}!`, [
                {text: "OK"}
            ])
            dispatch(addCaptured({ id: animal.id }))
            setAnimal(null)
            setAnimalImage(null)
            setAnimalPosition(null)
        }
    }

    const dropAnimal = () => {
        if (!devicePosition) return

        const offset = 0.001
        const randomLat = devicePosition.coords.latitude + (Math.random() - 0.5) * offset
        const randomLng = devicePosition.coords.longitude + (Math.random() - 0.5) * offset

        const randomAnimal = notCollectedAnimals[Math.floor(Math.random() * notCollectedAnimals.length)]

        setAnimal(randomAnimal)
        setAnimalImage(randomAnimal.categoryImageUrl)
        setAnimalPosition({ latitude: randomLat, longitude: randomLng })

        dispatch(removeAnimalDrop())
    }



    if (!devicePosition) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Waiting for device location...</Text>
            </View>
        )
    }


    if (notCollectedAnimals.length === 0 || !notCollectedAnimals) {
        return (
            <View style={styles.screenEmpty}>
                <Text style={styles.title}></Text>
                <Text style={styles.subtitle}>nothing to search</Text>
                <Text style={styles.title}>\(^_^)/</Text>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <View style={styles.titles}>
                <View style={styles.mainTitleRow}>
                    <Text style={styles.title}>Search</Text>
                    <View style={styles.titleIcon}>
                        <Ionicons name="aperture" size={32} color="#351401" />
                    </View>
                </View>
                <Text style={styles.subtitle}>Search for new animals to unlock and collect.</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.content}>

                    {(devicePosition) &&
                    <View style={styles.container}>
                    <MapView style={styles.map}
                             initialRegion={{
                                 latitude: devicePosition.coords.latitude,
                                 longitude: devicePosition.coords.longitude,
                                 latitudeDelta: 0.005,
                                 longitudeDelta: 0.005,
                             }}>
                        {animalPosition && <Marker
                            coordinate={{ latitude: animalPosition.latitude, longitude: animalPosition.longitude }}
                            title={'Inventory Item'}
                            description={'This is the item you are looking for!'}
                        >
                            <View>
                                <Image source={{uri: animalImage}} style={styles.inventoryIcon} />
                            </View>
                        </Marker>}
                        <Marker
                            coordinate={{latitude: devicePosition.coords.latitude, longitude: devicePosition.coords.longitude}}
                        >
                            <Image source={require('../../assets/person.png')} style={{ width: 40, height: 40 }} />

                        </Marker>
                    </MapView>
                    <View>
                        {animalDrops > 0 &&
                            <View style={styles.controls}>
                                <Button title={'Drop Animal'} onPress={dropAnimal} />
                                <Text style={styles.animalDrops}>{animalDrops}</Text>
                                <Button title={'Capture'} onPress={captureAnimal} />
                            </View>}
                    </View>
                </View>}
\

            </View>
                <TouchableOpacity style={styles.control} onPress={handleSearchInventory}>
                    <Text style={styles.controlText}>SEARCH <Ionicons name="aperture" size={16} color="#E4BAA1" /></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E4BAA1',
    },
    screenEmpty: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#E4BAA1',
        padding: 24,
    },
    titles: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        margin: 4,
        padding: 4,
    },
    mainTitleRow: {
        flexDirection: 'row',
    },
    title: {
        flex: 1,
        fontSize: 32,
        fontWeight: 'light',
        color: '#351401',
    },
    titleIcon: {
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#351401',
        margin: 4,
        padding: 4,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#351401',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: 4,
        padding: 4,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#351401',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#000',
        width: '100%',
        margin: 4,
        padding: 4,
    },
    contentText: {
        fontSize: 24,
        fontWeight: 'light',
        color: '#A1E3E3',
    },
    control: {
        margin: 4,
        backgroundColor: '#351401',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#000',
        padding: 8,
    },
    controlText: {
        fontSize: 22,
        fontWeight: 'light',
        color: '#E4BAA1',
    },
})

export default AnimalsSearchScreen
