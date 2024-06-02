import {createNativeStackNavigator} from "@react-navigation/native-stack"
import InventorySearchScreen from "./InventorySearchScreen"
import InventorySearchDetailScreen from "./InventorySearchDetailScreen"

const Stack = createNativeStackNavigator()

const InventorySearchStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="InventorySearchScreen" component={InventorySearchScreen} />
            <Stack.Screen name="InventorySearchDetailScreen" component={InventorySearchDetailScreen} />
        </Stack.Navigator>
    )
}

export default InventorySearchStackScreen
