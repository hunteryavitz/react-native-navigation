import React, { useEffect, useState } from 'react';
import {PermissionsAndroid, Platform, View, Text} from 'react-native';
import MapView, { Circle } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const InventoryMap = () => {
    const [currentPosition, setCurrentPosition] = useState(null);
    const [inventoryPosition, setInventoryPosition] = useState(null);

    async function requestPermissions() {
        if (Platform.OS === 'ios') {
            await Geolocation.requestAuthorization('whenInUse');
        } else {
            await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
        }
    }

    useEffect(() => {
        requestPermissions().then(async () => {

            // await Geolocation.setRNConfiguration({
            //     authorizationLevel: 'whenInUse',
            //     skipPermissionRequests: false,
            //     enableBackgroundLocationUpdates: false,
            //     locationProvider: 'auto'
            // });

            // await Geolocation.requestAuthorization(
            //     success => console.log('Authorization success', success),
            //     error => console.log('Authorization error', error),
            // )

            await Geolocation.getCurrentPosition(info => console.log(info), error => console.log(error))



            //     success: (
            //     position: {
            //         coords: {
            //             latitude: number;
            //             longitude: number;
            //             altitude: number | null;
            //             accuracy: number;
            //             altitudeAccuracy: number | null;
            //             heading: number | null;
            //             speed: number | null;
            //         };
            //         timestamp: number;
            //     }
            // ) => void,
            //     error?: (
            //         error: {
            //             code: number;
            //             message: string;
            //             PERMISSION_DENIED: number;
            //             POSITION_UNAVAILABLE: number;
            //             TIMEOUT: number;
            //         }
            //     ) => void,
            //     options?: {
            //         timeout?: number;
            //         maximumAge?: number;
            //         enableHighAccuracy?: boolean;
            //     }
            // )


            // Geolocation.getCurrentPosition(
            //     (position) => {
            //         const { latitude, longitude } = position.coords;
            //         setCurrentPosition({ latitude, longitude });
            //
            //         // Generate a nearby random position for the inventory item
            //         const offset = 0.001; // Roughly 100 meters
            //         const randomLat = latitude + (Math.random() - 0.5) * offset;
            //         const randomLng = longitude + (Math.random() - 0.5) * offset;
            //         setInventoryPosition({ latitude: randomLat, longitude: randomLng });
            //     },
            //     (error) => {
            //         console.error(error);
            //     },
            //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            // )


        }).catch((error) => {
            console.error(error);
        })
    }, []);

    if (!currentPosition) return <View><Text>shiit</Text></View>;

    return (
        <MapView
            style={{ flex: 1 }}
            initialRegion={{
                ...currentPosition,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            <Circle center={currentPosition} radius={10} fillColor="blue" />
            <Circle center={inventoryPosition} radius={10} fillColor="green" />
        </MapView>
    );
};

export default InventoryMap;
