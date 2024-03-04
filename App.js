import CategoriesScreen from "./screens/CategoriesScreen";
import {StatusBar} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

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
                      headerTintColor: '#222222',
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
                      options={{title: 'Overview' }}
                  />
              </Stack.Navigator>
          </NavigationContainer>
      </>
  );
}
