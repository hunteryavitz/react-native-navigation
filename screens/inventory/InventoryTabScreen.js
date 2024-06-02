import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import InventorySearchStackScreen from "./InventorySearchStackScreen"
import InventoryCraftStackScreen from "./InventoryCraftStackScreen"
import InventoryStoreStackScreen from "./InventoryStoreStackScreen"
import Ionicons from "react-native-vector-icons/Ionicons"

const Tab = createBottomTabNavigator()

const InventoryTabScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                sceneContainerStyle: {
                    backgroundColor: '#351401',
                },
                tabBarStyle: {
                    backgroundColor: '#351401',
                },
                tabBarInactiveTintColor: '#A1E3E3',
                tabBarActiveTintColor: '#351401',
                tabBarActiveBackgroundColor: '#E4BAA1',
            }}>
            <Tab.Screen name={"InventorySearchTab"} component={InventorySearchStackScreen} options={{
                tabBarIcon: ({color, size}) => {
                    return (<Ionicons name="search-outline" size={size} color={color}/>)
                }
            }} />
            <Tab.Screen name={"InventoryCraftTab"} component={InventoryCraftStackScreen} options={{
                tabBarIcon: ({color, size}) => {
                    return (<Ionicons name="construct-outline" size={size} color={color}/>)
                }
            }} />
            <Tab.Screen name={"InventoryStoreTab"} component={InventoryStoreStackScreen} options={{
                tabBarIcon: ({color, size}) => {
                    return (<Ionicons name="storefront-outline" size={size} color={color}/>)
                }
            }} />
        </Tab.Navigator>
    )
}

export default InventoryTabScreen
