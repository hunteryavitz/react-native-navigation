import React, { useState, useEffect } from 'react'
import {Platform, View, StyleSheet, Button, Text, Alert} from 'react-native'
import * as Device from 'expo-device'
import * as Location from 'expo-location'
import MapView, { Circle } from 'react-native-maps'
import { getDistance } from 'geolib'

export default function LocationHelper() {
    const [devicePosition, setDevicePosition] = useState(null);
    const [inventoryPosition, setInventoryPosition] = useState(null)
    const [isNear, setIsNear] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {

        let subscription
        (async () => {
            if (Platform.OS === 'android' && !Device.isDevice) {
                setErrorMsg(
                    'This will not work on Snack in an Android Emulator.'
                )
                return
            }

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
                console.log(newLocation)
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
        );

        if (distance < 10) { // Define your proximity threshold here, e.g., 10 meters
            if (!isNear) {
                setIsNear(true);
                // Trigger the snackbar or popup
                Alert.alert("Inventory Nearby", "You are close to an inventory item!", [
                    { text: "OK" }
                ]);
            }
        } else {
            setIsNear(false);
        }
    };

    async function refreshInventoryPosition() {
        if (!devicePosition) return

        const offset = 0.001
        const randomLat = devicePosition.coords.latitude + (Math.random() - 0.5) * offset
        const randomLng = devicePosition.coords.longitude + (Math.random() - 0.5) * offset
        setInventoryPosition({ latitude: randomLat, longitude: randomLng })
    }

    useEffect(() => {
        if (devicePosition && !inventoryPosition) {
            refreshInventoryPosition()
                .then(r => console.log('Inventory position set', r))
        }
    }, [devicePosition])

    if (!devicePosition) {
        return (
            <View style={styles.container}>
                <Text>Waiting for device location...</Text>
            </View>
        );
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
                    <Circle center={{ latitude: devicePosition.coords.latitude, longitude: devicePosition.coords.longitude }} radius={5} fillColor="blue" />
                    {inventoryPosition && <Circle center={{ latitude: inventoryPosition.latitude, longitude: inventoryPosition.longitude }} radius={5} fillColor="green" />}
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
