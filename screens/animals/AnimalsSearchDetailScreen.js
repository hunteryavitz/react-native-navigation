import {View, Text, Button} from "react-native"

const AnimalsSearchDetailScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Animals Search Details</Text>
            <Button onPress={() => navigation.navigate('AnimalsSearchMap')} title="Return" />
        </View>
    )
}

export default AnimalsSearchDetailScreen
