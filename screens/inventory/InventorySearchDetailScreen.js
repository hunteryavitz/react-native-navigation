import {View, Text, Button} from "react-native"

const InventorySearchDetailScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Inventory Search Details</Text>
            <Button onPress={() => navigation.navigate('InventorySearchScreen')} title="Return" />
        </View>
    )
}

export default InventorySearchDetailScreen
