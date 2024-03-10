import CategoriesScreen from "./screens/CategoriesScreen";
import {StatusBar} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

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
                      name="Categories"
                      component={CategoriesScreen}
                      options={{title: 'Meal Categories'}}
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
