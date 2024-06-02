import {createNativeStackNavigator} from "@react-navigation/native-stack"
import ProfileSettingsScreen from "./ProfileSettingsScreen"
import ProfileSettingsDetailScreen from "./ProfileSettingsDetailScreen"

const Stack = createNativeStackNavigator()

const ProfileSettingsStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfileSettingsScreen" component={ProfileSettingsScreen} />
            <Stack.Screen name="ProfileSettingsDetailScreen" component={ProfileSettingsDetailScreen} />
        </Stack.Navigator>
    )
}

export default ProfileSettingsStackScreen
