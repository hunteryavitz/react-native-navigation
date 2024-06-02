import React, {useEffect, useState} from "react"
import {View, Text, Button, StyleSheet, Alert, Image} from "react-native"
import {ANIMALS} from "../../data/animal-data"
import {addCaptured} from "../../store/redux/collected"
import {useDispatch, useSelector} from "react-redux"
import animal from "../../models/animal"
import * as Location from "expo-location";
import {getDistance} from "geolib";
import MapView, {Marker} from "react-native-maps";


const AnimalsSearchMapScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const animalDrops = useSelector(state => state.drops.animalDrops)
    const capturedAnimals = useSelector(state => state.collectedAnimals.captured)
    const collectedAnimals = useSelector(state => state.collectedAnimals.collected)

    const [devicePosition, setDevicePosition] = useState(null)
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


    if (!devicePosition) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Waiting for device location...</Text>
            </View>
        )
    }

    if (notCollectedAnimals.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Waiting for next animal drop...</Text>
            </View>
        )
    }

    return (
        <View>
            <Text>Animals Search Map Screen</Text>
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
                    <Image source={require('../../assets/person.png')} style={{ width: 40, height: 40 }} />

                </Marker>
            </MapView>
            <Button onPress={() => navigation.navigate('AnimalsSearchDetail')} title="Detail" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: '95%',
        height: '85%',
    },
    // button: {
    //     width: '100%',
    //     height: '100%',
    // },
    // inventoryIcon: {
    //     width: 40,
    //     height: 40,
    //     borderRadius: 20,
    // },
    // controls: {
    //     flexDirection: 'row',
    // },
    // animalDrops: {
    //     fontSize: 24,
    //     fontWeight: 'bold',
    //     marginLeft: 10,
    //     color: 'white'
    // },
    text: {
        fontSize: 20,
        color: '#000'
    }
})


export default AnimalsSearchMapScreen
