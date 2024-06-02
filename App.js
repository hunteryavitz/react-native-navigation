import {StatusBar} from "react-native"
import {Provider} from "react-redux"
import {store} from "./store/redux/store"
import {NavigationContainer} from "@react-navigation/native"
import {createDrawerNavigator} from "@react-navigation/drawer"
import AnimalsTabScreen from "./screens/animals/AnimalsTabScreen"
import InventoryTabScreen from "./screens/inventory/InventoryTabScreen"
import ProfileTabScreen from "./screens/profile/ProfileTabScreen"
import Ionicons from "react-native-vector-icons/Ionicons";
import DevScreen from "./screens/DevScreen";

const Drawer = createDrawerNavigator()

const MainDrawerScreen = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
            headerStyle: {
                backgroundColor: '#351401',
            },
            headerTintColor: '#E4BAA1',
            sceneContainerStyle: {
                backgroundColor: '#3F2F25',
            },
            drawerContentStyle: {
                backgroundColor: '#351401',
            },
            drawerInactiveTintColor: '#A1E3E3',
            drawerActiveTintColor: '#351401',
            drawerActiveBackgroundColor: '#E4BAA1',
        }}>
            <Drawer.Screen name="Animals" component={AnimalsTabScreen} options={{
                drawerIcon: ({color, size}) => {
                    return (<Ionicons name="layers-outline" size={size} color={color}/>)
                }
            }} />
            <Drawer.Screen name="Inventory" component={InventoryTabScreen} options={{
                drawerIcon: ({color, size}) => {
                    return (<Ionicons name="list-outline" size={size} color={color}/>)
                }

            }} />
            <Drawer.Screen name="Profile" component={ProfileTabScreen} options={{
                drawerIcon: ({color, size}) => {
                    return (<Ionicons name="person-outline" size={size} color={color}/>)
                }
            }} />
            <Drawer.Screen name={"Dev"} component={DevScreen} options={{
                drawerIcon: ({color, size}) => {
                    return (<Ionicons name="code-outline" size={size} color={color}/>)
                }
            }}/>
        </Drawer.Navigator>
    )
}

export default function App() {
    return (<>
            <StatusBar barStyle="light-content"/>
            <Provider store={store}>
                <NavigationContainer>
                    <MainDrawerScreen />
                </NavigationContainer>
            </Provider>
        </>)
}
