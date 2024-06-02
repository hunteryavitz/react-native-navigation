import {createNativeStackNavigator} from "@react-navigation/native-stack"
import InventoryStoreScreen from "./InventoryStoreScreen"
import InventoryStoreDetailScreen from "./InventoryStoreDetailScreen"


const Stack = createNativeStackNavigator()

const InventoryStoreStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="InventoryStoreScreen" component={InventoryStoreScreen} />
            <Stack.Screen name="InventoryStoreDetailScreen" component={InventoryStoreDetailScreen} />
        </Stack.Navigator>
    )
}

export default InventoryStoreStackScreen
