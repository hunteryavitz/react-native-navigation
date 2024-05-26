import CategoriesScreen from "./screens/CategoriesScreen"
import {StatusBar} from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createDrawerNavigator} from "@react-navigation/drawer"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import FavoritesScreen from "./screens/FavoritesScreen"
import Ionicons from "react-native-vector-icons/Ionicons"
import {Provider} from "react-redux"
import {store} from "./store/redux/store"
import AnimalDetailScreen from "./screens/AnimalDetailScreen"
import AnimalsOverviewScreen from "./screens/AnimalsOverviewScreen"
import MapScreen from "./screens/MapScreen"
import DevScreen from "./screens/DevScreen"
import CollectedScreen from "./screens/CollectedScreen"
import InventorySearchScreen from "./screens/inventory/InventorySearchScreen"
import InventoryStoreScreen from "./screens/inventory/InventoryStoreScreen"
import InventoryCraftScreen from "./screens/inventory/InventoryCraftScreen";
import AnimalsSearchScreen from "./screens/animals/AnimalsSearchScreen";
import AnimalsListScreen from "./screens/animals/AnimalsListScreen";
import AnimalsCollectScreen from "./screens/animals/AnimalsCollectScreen";
import MainDrawerNavigator from "./navigation/MainDrawerNavigator";

const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function MainDrawerScreen() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Animals" component={AnimalsTabScreen} />
            <Drawer.Screen name="Inventory" component={InventoryTabScreen} />
            <Drawer.Screen name="Profile" component={ProfileTabScreen} />
        </Drawer.Navigator>
    );
}

function AnimalsTabScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"AnimalsSearch"} component={AnimalsSearchStackScreen} />
            <Tab.Screen name={"AnimalsList"} component={AnimalsListStackScreen} />
            <Tab.Screen name={"AnimalsCollect"} component={AnimalsCollectStackScreen} />
        </Tab.Navigator>
    );
}

function InventoryTabScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"InventorySearch"} component={InventorySearchStackScreen} />
            <Tab.Screen name={"InventoryCraft"} component={InventoryCraftStackScreen} />
            <Tab.Screen name={"InventoryStore"} component={InventoryStoreStackScreen} />
        </Tab.Navigator>
    );
}

function ProfileTabScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"ProfileDashboard"} component={ProfileDashboardStackScreen} />
            <Tab.Screen name={"ProfileSettings"} component={ProfileSettingsStackScreen} />
            <Tab.Screen name={"ProfileAchievements"} component={ProfileAchievementsStackScreen} />
        </Tab.Navigator>
    );
}

function AnimalsSearchStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AnimalsSearchSplash" component={AnimalsSearchDashboardScreen} />
            <Stack.Screen name="AnimalsSearchMap" component={AnimalsSearchMapScreen} />
            <Stack.Screen name="AnimalsSearchDetail" component={AnimalsSearchDetailScreen} />
        </Stack.Navigator>
    )
}

function AnimalsListStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AnimalsCategories" component={AnimalsCategoriesScreen} />
            <Stack.Screen name="AnimalsList" component={AnimalsListScreen} />
            <Stack.Screen name="AnimalsListDetail" component={AnimalsListDetailScreen} />
        </Stack.Navigator>
    )
}

function AnimalsCollectStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AnimalsCollect" component={AnimalsCollectScreen} />
            <Stack.Screen name="AnimalsCollectDetail" component={AnimalsCollectDetailScreen} />
        </Stack.Navigator>
    )
}

function AnimalsSearchDashboardScreen() {
    return null; // Your component here
}

function AnimalsSearchMapScreen() {
    return null; // Your component here
}

function AnimalsSearchDetailScreen() {
    return null; // Your component here
}

function AnimalsCategoriesScreen() {
    return null; // Your component here
}

// function AnimalsListScreen() {
//     return null; // Your component here
// }

function AnimalsListDetailScreen() {
    return null; // Your component here
}

// function AnimalsCollectScreen() {
//     return null; // Your component here
// }

function AnimalsCollectDetailScreen() {
    return null; // Your component here
}

function InventorySearchStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="InventorySearch" component={InventorySearchScreen} />
            <Stack.Screen name="InventorySearchDetail" component={InventorySearchDetailScreen} />
        </Stack.Navigator>
    )
}

// function InventorySearchScreen() {
//     return null; // Your component here
// }

function InventorySearchDetailScreen() {
    return null; // Your component here
}

function InventoryCraftStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="InventoryCraft" component={InventoryCraftScreen} />
            <Stack.Screen name="InventoryCraftDetail" component={InventoryCraftDetailScreen} />
        </Stack.Navigator>
    )
}

// function InventoryCraftScreen() {
//     return null; // Your component here
// }

function InventoryCraftDetailScreen() {
    return null; // Your component here
}

function InventoryStoreStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="InventoryStore" component={InventoryStoreScreen} />
            <Stack.Screen name="InventoryStoreDetail" component={InventoryStoreDetailScreen} />
        </Stack.Navigator>
    )
}

// function InventoryStoreScreen() {
//     return null; // Your component here
// }

function InventoryStoreDetailScreen() {
    return null; // Your component here
}

function ProfileDashboardStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfileDashboard" component={ProfileDashboardScreen} />
            <Stack.Screen name="ProfileDashboardDetail" component={ProfileDashboardDetailScreen} />
        </Stack.Navigator>
    )
}

function ProfileSettingsStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfileSettings" component={ProfileSettingsScreen} />
            <Stack.Screen name="ProfileSettingsDetail" component={ProfileSettingsDetailScreen} />
        </Stack.Navigator>
    )
}

function ProfileAchievementsStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfileAchievements" component={ProfileAchievementsScreen} />
            <Stack.Screen name="ProfileAchievementsDetail" component={ProfileAchievementsDetailScreen} />
        </Stack.Navigator>
    )
}

function ProfileDashboardScreen() {
    return null; // Your component here
}

function ProfileDashboardDetailScreen() {
    return null; // Your component here
}

function ProfileSettingsScreen() {
    return null; // Your component here
}

function ProfileSettingsDetailScreen() {
    return null; // Your component here
}

function ProfileAchievementsScreen() {
    return null; // Your component here
}

function ProfileAchievementsDetailScreen() {
    return null; // Your component here
}

// function AnimalBottomTabNavigator() {
//     return <Tab.Navigator
//         screenOptions={{
//             headerShown: false,
//             sceneContainerStyle: {
//                 backgroundColor: '#351401',
//             },
//             tabBarStyle: {
//                 backgroundColor: '#351401',
//             },
//             tabBarInactiveTintColor: '#A1E3E3',
//             tabBarActiveTintColor: '#351401',
//             tabBarActiveBackgroundColor: '#E4BAA1',
//         }}
//     >
//         <Tab.Screen
//             name="Store"
//             component={AnimalsCollectScreen}
//             options={{
//                 tabBarIcon: ({color, size}) => {
//                     return (<Ionicons name="layers-outline" size={size} color={color}/>)
//                 }
//             }}
//         />
//         <Tab.Screen
//             name="Craft"
//             component={AnimalsListScreen}
//             options={{
//                 tabBarIcon: ({color, size}) => {
//                     return (<Ionicons name="list-outline" size={size} color={color}/>)
//                 },
//             }}
//         />
//         <Tab.Screen
//             name="Search"
//             component={AnimalsSearchScreen}
//             options={{
//                 tabBarIcon: ({color, size}) => {
//                     return (<Ionicons name="map-outline" size={size} color={color}/>)
//                 }
//             }}
//         />
//     </Tab.Navigator>
// }

// function InventoryBottomTabNavigator() {
//     return <Tab.Navigator
//         screenOptions={{
//             headerShown: false,
//             sceneContainerStyle: {
//                 backgroundColor: '#351401',
//             },
//             tabBarStyle: {
//                 backgroundColor: '#351401',
//             },
//             tabBarInactiveTintColor: '#A1E3E3',
//             tabBarActiveTintColor: '#351401',
//             tabBarActiveBackgroundColor: '#E4BAA1',
//         }}
//     >
//         <Tab.Screen
//             name="Store"
//             component={CollectScreen}
//             options={{
//                 tabBarIcon: ({color, size}) => {
//                     return (<Ionicons name="grid" size={size} color={color}/>)
//                 }
//             }}
//         />
//         <Tab.Screen
//             name="Craft"
//             component={ListScreen}
//             options={{
//                 tabBarIcon: ({color, size}) => {
//                     return (<Ionicons name="hammer" size={size} color={color}/>)
//                 },
//             }}
//         />
//         <Tab.Screen
//             name="Search"
//             component={InventorySearchScreen}
//             options={{
//                 tabBarIcon: ({color, size}) => {
//                     return (<Ionicons name="aperture" size={size} color={color}/>)
//                 }
//             }}
//         />
//     </Tab.Navigator>
// }

// function DrawerNavigator() {
//     return <Drawer.Navigator
//         screenOptions={{
//             headerStyle: {
//                 backgroundColor: '#351401',
//             },
//             headerTintColor: '#E4BAA1',
//             sceneContainerStyle: {
//                 backgroundColor: '#3F2F25',
//             },
//             drawerContentStyle: {
//                 backgroundColor: '#351401',
//             },
//             drawerInactiveTintColor: '#A1E3E3',
//             drawerActiveTintColor: '#351401',
//             drawerActiveBackgroundColor: '#E4BAA1',
//         }}
//     >
//         <Drawer.Screen
//             name="Categories"
//             component={CategoriesScreen}
//             options={{
//                 title: 'Animal Categories', drawerIcon: ({color, size}) => {
//                     return (<Ionicons name="apps" size={size} color={color}/>)
//                 }
//             }}
//         />
//
//         <Drawer.Screen
//             name="Favorites"
//             component={FavoritesScreen}
//             options={{
//                 title: 'Favorites', drawerIcon: ({color, size}) => {
//                     return (<Ionicons name="star" size={size} color={color}/>)
//                 }
//             }}
//         />
//
//         <Drawer.Screen
//             name="Animals"
//             component={AnimalBottomTabNavigator}
//             options={{
//                 title: 'Animals', drawerIcon: ({color, size}) => {
//                     return (<Ionicons name="paw-outline" size={size} color={color}/>)
//                 }
//             }}
//         />
//
//         <Drawer.Screen
//             name="Inventory"
//             component={InventoryBottomTabNavigator}
//             options={{
//                 title: 'Inventory', drawerIcon: ({color, size}) => {
//                     return (<Ionicons name="grid" size={size} color={color}/>)
//                 }
//             }}
//         />
//
//         <Drawer.Screen
//             name="Collected"
//             component={CollectedScreen}
//             options={{
//                 title: 'Collected', drawerIcon: ({color, size}) => {
//                     return (<Ionicons name="cube" size={size} color={color}/>)
//                 }
//             }}
//         />
//         <Drawer.Screen name={'Map'}
//                        component={MapScreen}
//                        options={{
//                            title: 'Map', drawerIcon: ({color, size}) => {
//                                return (<Ionicons name="map" size={size} color={color}/>)
//                            }
//                        }}/>
//         <Drawer.Screen name={'Dev'}
//                        component={DevScreen}
//                        options={{
//                            title: 'Dev', drawerIcon: ({color, size}) => {
//                                return (<Ionicons name="build" size={size} color={color}/>)
//                            }
//                        }}/>
//     </Drawer.Navigator>
// }

export default function App() {
    return (<>
            <StatusBar barStyle="light-content"/>
            <Provider store={store}>
                <NavigationContainer>
                    <MainDrawerScreen />














                    {/*<MainDrawerScreen />*/}
                    {/*<Stack.Navigator*/}
                    {/*    screenOptions={{*/}
                    {/*        headerStyle: {*/}
                    {/*            backgroundColor: '#351401',*/}
                    {/*        }, headerTintColor: '#E4BAA1', headerTitleStyle: {*/}
                    {/*            fontWeight: 'bold',*/}
                    {/*        }, contentStyle: {*/}
                    {/*            backgroundColor: '#E4BAA1',*/}
                    {/*        },*/}
                    {/*    }}>*/}
                    {/*    <Stack.Screen*/}
                    {/*        name="All Categories"*/}
                    {/*        component={MainDrawerNavigator}*/}
                    {/*        options={{headerShown: false}}*/}
                    {/*    />*/}
                    {/*        <Stack.Screen*/}
                    {/*            name="Animals"*/}
                    {/*            component={AnimalsOverviewScreen}*/}
                    {/*        />*/}
                    {/*            <Stack.Screen*/}
                    {/*                name="AnimalDetail"*/}
                    {/*                component={AnimalDetailScreen}*/}
                    {/*                options={{*/}
                    {/*                    title: 'Animal Details',*/}
                    {/*                }}*/}
                    {/*            />*/}
                    {/*</Stack.Navigator>*/}

                </NavigationContainer>
            </Provider>
        </>)
}
