import {View, Text, Button} from "react-native"

const AnimalsListDetailScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Animals List Details</Text>
            <Button onPress={() => navigation.navigate('AnimalsListScreen')} title="Return" />
        </View>
    )
}

export default AnimalsListDetailScreen
