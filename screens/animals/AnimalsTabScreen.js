import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import AnimalsSearchStackScreen from "./AnimalsSearchStackScreen"
import AnimalsListStackScreen from "./AnimalsListStackScreen"
import AnimalsCollectStackScreen from "./AnimalsCollectStackScreen"
import Ionicons from "react-native-vector-icons/Ionicons"

const Tab = createBottomTabNavigator()

const AnimalsTabScreen = () => {
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
            <Tab.Screen name={"AnimalsSearchTab"} component={AnimalsSearchStackScreen} options={{
                tabBarIcon: ({color, size}) => {
                    return (<Ionicons name="map-outline" size={size} color={color}/>)
                }
            }} />
            <Tab.Screen name={"AnimalsListTab"} component={AnimalsListStackScreen} options={{
                tabBarIcon: ({color, size}) => {
                    return (<Ionicons name="list-outline" size={size} color={color}/>)
                }
            }} />
            <Tab.Screen name={"AnimalsCollectTab"} component={AnimalsCollectStackScreen} options={{
                tabBarIcon: ({color, size}) => {
                    return (<Ionicons name="add-circle-outline" size={size} color={color}/>)
                }
            }} />
        </Tab.Navigator>
    )
}

export default AnimalsTabScreen
