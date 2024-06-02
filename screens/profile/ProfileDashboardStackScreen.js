import {createNativeStackNavigator} from "@react-navigation/native-stack"
import ProfileDashboardScreen from "./ProfileDashboardScreen"
import ProfileDashboardDetailScreen from "./ProfileDashboardDetailScreen"

const Stack = createNativeStackNavigator()

const ProfileDashboardStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfileDashboardScreen" component={ProfileDashboardScreen} />
            <Stack.Screen name="ProfileDashboardDetailScreen" component={ProfileDashboardDetailScreen} />
        </Stack.Navigator>
    )
}

export default ProfileDashboardStackScreen
