import {createNativeStackNavigator} from "@react-navigation/native-stack"
import AnimalsCollectScreen from "./AnimalsCollectScreen";
import AnimalsCollectDetailScreen from "./AnimalsCollectDetailScreen";

const Stack = createNativeStackNavigator()

const AnimalsCollectStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AnimalsCollect" component={AnimalsCollectScreen} />
            <Stack.Screen name="AnimalsCollectDetail" component={AnimalsCollectDetailScreen} />
        </Stack.Navigator>
    )
}

export default AnimalsCollectStackScreen
