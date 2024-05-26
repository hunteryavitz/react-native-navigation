import {createDrawerNavigator} from "@react-navigation/drawer"
import CategoriesScreen from "../screens/CategoriesScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import FavoritesScreen from "../screens/FavoritesScreen";
import CollectedScreen from "../screens/CollectedScreen";
import MapScreen from "../screens/MapScreen";
import DevScreen from "../screens/DevScreen";

const Drawer = createDrawerNavigator()

const MainDrawerNavigator = () => {
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
          }}
      >
          <Drawer.Screen
              name="Categories"
              component={CategoriesScreen}
              options={{
                  title: 'Animal Categories', drawerIcon: ({color, size}) => {
                      return (<Ionicons name="apps" size={size} color={color}/>)
                  }
              }}
          />

          <Drawer.Screen
              name="Favorites"
              component={FavoritesScreen}
              options={{
                  title: 'Favorites', drawerIcon: ({color, size}) => {
                      return (<Ionicons name="star" size={size} color={color}/>)
                  }
              }}
          />

          <Drawer.Screen
              name="Animals"
              component={AnimalBottomTabNavigator}
              options={{
                  title: 'Animals', drawerIcon: ({color, size}) => {
                      return (<Ionicons name="paw-outline" size={size} color={color}/>)
                  }
              }}
          />

          <Drawer.Screen
              name="Inventory"
              component={InventoryBottomTabNavigator}
              options={{
                  title: 'Inventory', drawerIcon: ({color, size}) => {
                      return (<Ionicons name="grid" size={size} color={color}/>)
                  }
              }}
          />

          <Drawer.Screen
              name="Collected"
              component={CollectedScreen}
              options={{
                  title: 'Collected', drawerIcon: ({color, size}) => {
                      return (<Ionicons name="cube" size={size} color={color}/>)
                  }
              }}
          />
          <Drawer.Screen name={'Map'}
                         component={MapScreen}
                         options={{
                             title: 'Map', drawerIcon: ({color, size}) => {
                                 return (<Ionicons name="map" size={size} color={color}/>)
                             }
                         }}/>
          <Drawer.Screen name={'Dev'}
                         component={DevScreen}
                         options={{
                             title: 'Dev', drawerIcon: ({color, size}) => {
                                 return (<Ionicons name="build" size={size} color={color}/>)
                             }
                         }}/>
      </Drawer.Navigator>

    // <Drawer.Navigator
    //   drawerContent={(props) => <DrawerContent {...props} />}
    //   drawerStyle={{
    //     width: 240,
    //   }}>
    //   <Drawer.Screen name="Home" component={HomeScreen} />
    //   <Drawer.Screen name="Profile" component={ProfileScreen} />
    //   <Drawer.Screen name="Settings" component={SettingsScreen} />
    // </Drawer.Navigator>
  )}

export default MainDrawerNavigator
