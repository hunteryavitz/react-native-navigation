import {createNativeStackNavigator} from "@react-navigation/native-stack"
import InventoryCraftScreen from "./InventoryCraftScreen"
import InventoryCraftDetailScreen from "./InventoryCraftDetailScreen"


const Stack = createNativeStackNavigator()

const InventoryCraftStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="InventoryCraftScreen" component={InventoryCraftScreen} />
            <Stack.Screen name="InventoryCraftDetailScreen" component={InventoryCraftDetailScreen} />
        </Stack.Navigator>
    )
}

export default InventoryCraftStackScreen
