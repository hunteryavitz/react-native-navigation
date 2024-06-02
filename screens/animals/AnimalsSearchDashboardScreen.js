import {View, Text, Button} from "react-native"

const AnimalsSearchDashboardScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Animals Search Dashboard Screen</Text>
            <Button onPress={() => navigation.navigate('AnimalsSearchMap')} title="Search" />
        </View>
    )
}

export default AnimalsSearchDashboardScreen
