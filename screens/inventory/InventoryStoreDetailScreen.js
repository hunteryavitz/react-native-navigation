import {View, Text, Button} from "react-native"

const InventoryStoreDetailScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Inventory Store Details</Text>
            <Button onPress={() => navigation.navigate('InventoryStoreScreen')} title="Return" />
        </View>
    )
}

export default InventoryStoreDetailScreen
