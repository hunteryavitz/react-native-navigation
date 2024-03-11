import CategoriesScreen from "./screens/CategoriesScreen";
import {StatusBar} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// function MyTabs() {
//     return (
//         <Tab.Navigator
//             initialRouteName={"Categories"}>
//             <Tab.Screen
//                 name="Categories"
//                 component={CategoriesScreen}
//             />
//             <Tab.Screen
//                 name="Meals"
//                 component={MealsOverviewScreen}
//             />
//         </Tab.Navigator>
//     )
// }

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
                title: 'Meal Categories',
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
    </Drawer.Navigator>
}

// function MyDrawer() {
//     return (
//         <Drawer.Navigator
//             initialRouteName={"Categories"}
//             screenOptions={{
//                 headerStyle: {
//                     backgroundColor: '#FFFFFF',
//                 },
//                 headerTintColor: '#000000',
//                 headerTitleStyle: {
//                     fontWeight: 'bold',
//                 },
//                 contentStyle: {
//                     backgroundColor: '#FFFFFF',
//                 },
//
//             }
//         }>
//             <Drawer.Screen
//                 name="Categories"
//                 component={CategoriesScreen}
//                 options={{
//                     title: 'Meal Categories',
//                     drawerIcon: ({ icon, color, size }) => {
//                         return (
//                             <Ionicons name={icon} size={size} color={color} />
//                         )
//                     }
//
//                 }}
//             />
//             <Drawer.Screen
//                 name="Meals"
//                 component={MealsOverviewScreen}
//                 options={{
//                     title: 'Meals',
//                     headerStyle: {
//                         backgroundColor: '#000000',
//                     },
//                     headerTintColor: '#FFFFFF',
//                     drawerLabel: 'Meals Overview',
//                     drawerActiveBackgroundColor: '#FF6F00',
//                     drawerActiveTintColor: '#FFFFFF',
//                     drawerStyle: {
//                         backgroundColor: '#333333',
//                     },
//                     drawerIcon: ({ icon, color, size }) => {
//                         return (
//                             <Ionicons name={icon} size={size} color={color} />
//                         )
//                     }
//
//
//             }}
//             />
//             <Drawer.Screen
//                 name="MealDetail"
//                 component={MealDetailScreen}
//                 options={{ title: 'Meal Details' }}
//             />
//         </Drawer.Navigator>
//     )
// }

export default function App() {
  return (
      <>
          <StatusBar barStyle="light-content" />
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
                      name="Meals"
                      component={MealsOverviewScreen}
                      // NOTE: This is an alternative method of passing the navigation prop to the screen component
                      // options={({ route, navigation }) => {
                      //     const categoryId = route.params.categoryId;
                      //     return {
                      //         title: `Meals for Category ${categoryId}`,
                      //     }
                      // }}
                  />
                  <Stack.Screen
                      name="MealDetail"
                      component={MealDetailScreen}
                        options={{
                            title: 'Meal Details',
                        }}
                  />
              </Stack.Navigator>
          </NavigationContainer>
      </>
  )
}
