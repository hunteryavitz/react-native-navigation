import {createNativeStackNavigator} from "@react-navigation/native-stack"
import AnimalsListScreen from "./AnimalsListScreen"
import AnimalsListDetailScreen from "./AnimalsListDetailScreen"
import AnimalsCategoryScreen from "./AnimalsCategoryScreen";

const Stack = createNativeStackNavigator()

const AnimalsListStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AniamlsCategory" component={AnimalsCategoryScreen} />
            <Stack.Screen name="AnimalsList" component={AnimalsListScreen} />
            <Stack.Screen name="AnimalsListDetail" component={AnimalsListDetailScreen} />
        </Stack.Navigator>
    )
}

export default AnimalsListStackScreen
