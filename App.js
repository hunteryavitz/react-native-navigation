import CategoriesScreen from "./screens/CategoriesScreen";
import {StatusBar} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
// import FavoritesContextProvider from "./store/context/favorites-context";
import {Provider} from "react-redux"
import {store} from "./store/redux/store"
import AnimalDetailScreen from "./screens/AnimalDetailScreen";
import AnimalsOverviewScreen from "./screens/AnimalsOverviewScreen";
import MapScreen from "./screens/MapScreen";
import InventoryMapScreen from "./screens/InventoryMapScreen";
import LocationHelper from "./LocationHelper";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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
                        <Ionicons name="list" size={size} color={color} />
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
        <Drawer.Screen name={'Inventory Map'}
                        component={InventoryMapScreen}
                        options={{
                            title: 'Inventory Map',
                            drawerIcon: ({ color, size }) => {
                                return (
                                    <Ionicons name="map" size={size} color={color} />
                                )
                            }
                        }} />
        <Drawer.Screen name={'Location Helper'}
                        component={LocationHelper}
                        options={{
                            title: 'Location Helper',
                            drawerIcon: ({ color, size }) => {
                                return (
                                    <Ionicons name="map" size={size} color={color} />
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
          {/*<FavoritesContextProvider>*/}
          {/*</FavoritesContextProvider>*/}
      </>
  )
}
