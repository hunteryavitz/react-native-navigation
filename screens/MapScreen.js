import React, { useState, useEffect } from 'react'
import {View, StyleSheet, Button, Text, Alert, Image} from 'react-native'
import * as Location from 'expo-location'
import MapView, { Marker } from 'react-native-maps'
import { getDistance } from 'geolib'
import {useDispatch, useSelector} from "react-redux"
import {ANIMALS} from "../data/animal-data";
import {removeAnimalDrop} from "../store/redux/drops"
import {addCaptured} from "../store/redux/collected";

export default function MapScreen() {
    const animalDrops = useSelector(state => state.drops.animalDrops)
    const capturedAnimals = useSelector(state => state.collectedAnimals.captured)
    const collectedAnimals = useSelector(state => state.collectedAnimals.collected)
    const dispatch = useDispatch()

    const [devicePosition, setDevicePosition] = useState(null);
    const [inventoryPosition, setInventoryPosition] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)
    const [animal, setAnimal] = useState(null)
    const [animalImage, setAnimalImage] = useState(null)

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
                    if (inventoryPosition) {
                        checkProximity(newLocation.coords, inventoryPosition)
                    }
                })
            }

        })()

        // TODO: check this is the correct way to unsubscribe
        return () => {
            subscription.remove()
        }
    }, [inventoryPosition]) // TODO: check this is the right dependency

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
            setInventoryPosition(null)
        }
    }

    // TODO: start building out the dto
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

    function dropAnimal() {
        if (!devicePosition) return

        const offset = 0.001
        const randomLat = devicePosition.coords.latitude + (Math.random() - 0.5) * offset
        const randomLng = devicePosition.coords.longitude + (Math.random() - 0.5) * offset

        const notCollectedAnimals = ANIMALS.filter((animal) => !capturedAnimals.includes(animal.id) && !collectedAnimals.includes(animal.id))
        const randomAnimal = notCollectedAnimals[Math.floor(Math.random() * notCollectedAnimals.length)]

        setAnimal(randomAnimal)
        setAnimalImage(randomAnimal.categoryImageUrl)
        setInventoryPosition({ latitude: randomLat, longitude: randomLng })

        dispatch(removeAnimalDrop())
    }

    if (!devicePosition) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Waiting for device location...</Text>
            </View>
        )
    }

    if (devicePosition) {
        return (
            <View style={styles.container}>
                <MapView style={styles.map}
                         initialRegion={{
                             latitude: devicePosition.coords.latitude,
                             longitude: devicePosition.coords.longitude,
                             latitudeDelta: 0.005,
                             longitudeDelta: 0.005,
                         }}>
                    {inventoryPosition && <Marker
                        coordinate={{ latitude: inventoryPosition.latitude, longitude: inventoryPosition.longitude }}
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
                        <Image source={require('../assets/person.png')} style={{ width: 40, height: 40 }} />

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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: '95%',
        height: '95%',
    },
    button: {
        width: '100%',
        height: '100%',
    },
    inventoryIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    controls: {
        flexDirection: 'row',
    },
    animalDrops: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'white'
    },
    text: {
        fontSize: 20,
        color: '#fff'
    }
})
