import {View, Text, Button} from "react-native"

const AnimalsCollectDetailScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Animals Collect Details</Text>
            <Button onPress={() => navigation.navigate('AnimalsCollectScreen')} title="Return" />
        </View>
    )
}

export default AnimalsCollectDetailScreen
