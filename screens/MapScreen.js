import { View, StyleSheet, Text } from "react-native"
import MapView from 'react-native-maps'

function MapScreen() {
    return (
        <View style={styles.screen}>
            <MapView style={ styles.map }
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}


            />
            <Text>Map Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    }
})

export default MapScreen