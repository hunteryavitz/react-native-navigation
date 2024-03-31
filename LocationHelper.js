import React, { useState, useEffect } from 'react'
import {Platform, View, StyleSheet, Button, Text, Alert, Image} from 'react-native'
import * as Device from 'expo-device'
import * as Location from 'expo-location'
import MapView, { Marker } from 'react-native-maps'
import { getDistance } from 'geolib'

export default function LocationHelper() {
    const [devicePosition, setDevicePosition] = useState(null);
    const [inventoryPosition, setInventoryPosition] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        let subscription

        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                await setErrorMsg('Permission to access location was denied: ' + status)
                return
            }

            subscription = await Location.watchPositionAsync({
                accuracy: Location.Accuracy.BestForNavigation,
                timeInterval: 500,
                distanceInterval: 1,
            }, (newLocation) => {
                setDevicePosition(newLocation)
                if (inventoryPosition) {
                    checkProximity(newLocation.coords, inventoryPosition)
                }
            })
        })()

        return () => {
            subscription.remove()
        }
    }, [inventoryPosition])

    const checkProximity = (deviceCoords, inventoryCoords) => {
        const distance = getDistance(
            { latitude: deviceCoords.latitude, longitude: deviceCoords.longitude },
            { latitude: inventoryCoords.latitude, longitude: inventoryCoords.longitude }
        )

        if (distance <= 23) {
            Alert.alert("Inventory Nearby", "You found an inventory item!", [
                {text: "OK"}
            ])
            refreshInventoryPosition()
        }
    }

    function refreshInventoryPosition() {
        if (!devicePosition) return

        const offset = 0.001
        const randomLat = devicePosition.coords.latitude + (Math.random() - 0.5) * offset
        const randomLng = devicePosition.coords.longitude + (Math.random() - 0.5) * offset
        setInventoryPosition({ latitude: randomLat, longitude: randomLng })
    }

    useEffect(() => {
        if (devicePosition && !inventoryPosition) {
            refreshInventoryPosition()
        }
    }, [devicePosition])

    if (!devicePosition) {
        return (
            <View style={styles.container}>
                <Text>Waiting for device location...</Text>
            </View>
        )
    }

    if (devicePosition && inventoryPosition) {
        return (
            <View style={styles.container}>
                <MapView style={styles.map}
                         initialRegion={{
                             latitude: devicePosition.coords.latitude,
                             longitude: devicePosition.coords.longitude,
                             latitudeDelta: 0.005,
                             longitudeDelta: 0.005,
                         }}>
                    <Marker
                        coordinate={{ latitude: inventoryPosition.latitude, longitude: inventoryPosition.longitude }}
                        title={'Inventory Item'}
                        description={'This is the item you are looking for!'}
                    >
                        <View>
                            <Image source={require('./assets/categories/bird-01.jpg')} style={{ width: 40, height: 40 }} />
                        </View>
                    </Marker>
                    <Marker
                        coordinate={{latitude: devicePosition.coords.latitude, longitude: devicePosition.coords.longitude}}
                    >
                        <Image source={require('./assets/person.png')} style={{ width: 40, height: 40 }} />

                    </Marker>
                </MapView>
                <Button title={'Refresh Inventory Position'} onPress={refreshInventoryPosition} />
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
        width: '85%',
        height: '85%',
    },
    button: {
        width: '100%',
        height: '100%',
    }
})
