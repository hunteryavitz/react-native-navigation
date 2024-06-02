import {createNativeStackNavigator} from "@react-navigation/native-stack"
import ProfileAchievementsScreen from "./ProfileAchievementsScreen"
import ProfileAchievementsDetailScreen from "./ProfileAchievementsDetailScreen"

const Stack = createNativeStackNavigator()

const ProfileAchievementsStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfileAchievementsScreen" component={ProfileAchievementsScreen} />
            <Stack.Screen name="ProfileAchievementsDetailScreen" component={ProfileAchievementsDetailScreen} />
        </Stack.Navigator>
    )
}

export default ProfileAchievementsStackScreen
