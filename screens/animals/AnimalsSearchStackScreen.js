import {createNativeStackNavigator} from "@react-navigation/native-stack"
import AnimalsSearchDashboardScreen from "./AnimalsSearchDashboardScreen"
import AnimalsSearchMapScreen from "./AnimalsSearchMapScreen"
import AnimalsSearchDetailScreen from "./AnimalsSearchDetailScreen"

const Stack = createNativeStackNavigator()

const AnimalsSearchStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AnimalsSearchDashboard" component={AnimalsSearchDashboardScreen} />
            <Stack.Screen name="AnimalsSearchMap" component={AnimalsSearchMapScreen} />
            <Stack.Screen name="AnimalsSearchDetail" component={AnimalsSearchDetailScreen} />
        </Stack.Navigator>
    )
}

export default AnimalsSearchStackScreen
