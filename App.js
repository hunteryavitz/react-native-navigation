import CategoriesScreen from "./screens/CategoriesScreen"
import {StatusBar} from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import FavoritesScreen from "./screens/FavoritesScreen"
import Ionicons from "react-native-vector-icons/Ionicons"
import {Provider} from "react-redux"
import {store} from "./store/redux/store"
import AnimalDetailScreen from "./screens/AnimalDetailScreen"
import AnimalsOverviewScreen from "./screens/AnimalsOverviewScreen"
import MapScreen from "./screens/MapScreen"
import DevScreen from "./screens/DevScreen"
import CollectedScreen from "./screens/CollectedScreen"
import InventoryScreen from "./screens/InventoryScreen"
import CraftScreen from "./screens/inventory/CraftScreen";
import SearchScreen from "./screens/inventory/SearchScreen";

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const Tab = createBottomTabNavigator()

function BottomTabNavigator() {
    return <Tab.Navigator
        screenOptions={{
            headerShown: false,
            sceneContainerStyle: {
                backgroundColor: '#3F2F25',
            },
            tabBarStyle: {
                backgroundColor: '#351401',
            },
            tabBarInactiveTintColor: '#FFFFFF',
            tabBarActiveTintColor: '#351401',
            tabBarActiveBackgroundColor: '#E4BAA1',
        }}
    >
        <Tab.Screen
            name="Inventory.Tab"
            component={InventoryScreen}
            options={{
                tabBarIcon: ({ color, size }) => {
                    return (
                        <Ionicons name="grid" size={size} color={color} />
                    )
                }
            }}
        />
        <Tab.Screen
            name="Craft"
            component={CraftScreen}
            options={{
                tabBarIcon: ({ color, size }) => {
                    return (
                        <Ionicons name="hammer" size={size} color={color} />
                    )
                },
            }}
        />
        <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
                tabBarIcon: ({ color, size }) => {
                    return (
                        <Ionicons name="aperture" size={size} color={color} />
                    )
                }
            }}
        />
    </Tab.Navigator>
}

function DrawerNavigator() {
    return <Drawer.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#351401',
            },
            headerTintColor: '#FFFFFF',
            sceneContainerStyle: {
                backgroundColor: '#3F2F25',
            },
            drawerContentStyle: {
                backgroundColor: '#351401',
            },
            drawerInactiveTintColor: '#FFFFFF',
            drawerActiveTintColor: '#351401',
            drawerActiveBackgroundColor: '#E4BAA1',
        }}
    >
        <Drawer.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
                title: 'Animal Categories',
                drawerIcon: ({ color, size }) => {
                    return (
                        <Ionicons name="apps" size={size} color={color} />
                    )
                }
            }}
        />

        <Drawer.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{
                title: 'Favorites',
                drawerIcon: ({ color, size }) => {
                    return (
                        <Ionicons name="star" size={size} color={color} />
                    )
                }
            }}
        />

        <Drawer.Screen
            name="Inventory.Nav"
            component={BottomTabNavigator}
            options={{
                title: 'Inventory',
                drawerIcon: ({ color, size }) => {
                    return (
                        <Ionicons name="grid" size={size} color={color} />
                    )
                }
            }}
        />

        <Drawer.Screen
            name="Collected"
            component={CollectedScreen}
            options={{
                title: 'Collected',
                drawerIcon: ({ color, size }) => {
                    return (
                        <Ionicons name="cube" size={size} color={color} />
                    )
                }
            }}
        />
        <Drawer.Screen name={'Map'}
                        component={MapScreen}
                        options={{
                            title: 'Map',
                            drawerIcon: ({ color, size }) => {
                                return (
                                    <Ionicons name="map" size={size} color={color} />
                                )
                            }
                        }} />
        <Drawer.Screen name={'Dev'}
                        component={DevScreen}
                        options={{
                            title: 'Dev',
                            drawerIcon: ({ color, size }) => {
                                return (
                                    <Ionicons name="build" size={size} color={color} />
                                )
                            }
                        }} />
    </Drawer.Navigator>
}

export default function App() {
  return (
      <>
          <StatusBar barStyle="light-content" />
          <Provider store={store}>
              <NavigationContainer>
                  <Stack.Navigator
                      screenOptions={{
                          headerStyle: {
                              backgroundColor: '#FFFFFF',
                          },
                          headerTintColor: '#000000',
                          headerTitleStyle: {
                              fontWeight: 'bold',
                          },
                          contentStyle: {
                              backgroundColor: '#FFFFFF',
                          },
                      }}>
                      <Stack.Screen
                          name="All Categories"
                          component={DrawerNavigator}
                          options={{headerShown: false}}
                      />
                      <Stack.Screen
                          name="Animals"
                          component={AnimalsOverviewScreen}
                      />
                      <Stack.Screen
                          name="AnimalDetail"
                          component={AnimalDetailScreen}
                          options={{
                              title: 'Animal Details',
                          }}
                      />
                  </Stack.Navigator>
              </NavigationContainer>
          </Provider>
      </>
  )
}
