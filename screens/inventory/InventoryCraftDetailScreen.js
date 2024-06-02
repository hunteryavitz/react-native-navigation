import {View, Text, Button} from "react-native"

const InventoryCraftDetailScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Inventory Craft Details</Text>
            <Button onPress={() => navigation.navigate('InventoryCraftScreen')} title="Return" />
        </View>
    )
}

export default InventoryCraftDetailScreen
