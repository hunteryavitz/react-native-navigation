import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import ProfileDashboardStackScreen from "./ProfileDashboardStackScreen"
import ProfileAchievementsStackScreen from "./ProfileAchievementsStackScreen"
import ProfileSettingsStackScreen from "./ProfileSettingsStackScreen"
import Ionicons from "react-native-vector-icons/Ionicons"

const Tab = createBottomTabNavigator()

const ProfileTabScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                sceneContainerStyle: {
                    backgroundColor: '#351401',
                },
                tabBarStyle: {
                    backgroundColor: '#351401',
                },
                tabBarInactiveTintColor: '#A1E3E3',
                tabBarActiveTintColor: '#351401',
                tabBarActiveBackgroundColor: '#E4BAA1',
            }}>
            <Tab.Screen name={"ProfileDashboardTab"} component={ProfileDashboardStackScreen} options={{
                tabBarIcon: ({color, size}) => {
                    return (<Ionicons name="home-outline" size={size} color={color}/>)
                }
            }} />
            <Tab.Screen name={"ProfileAchievementsTab"} component={ProfileAchievementsStackScreen} options={{
                tabBarIcon: ({color, size}) => {
                    return (<Ionicons name="medal-outline" size={size} color={color}/>)
                }
            }} />
            <Tab.Screen name={"ProfileSettingsTab"} component={ProfileSettingsStackScreen} options={{
                tabBarIcon: ({color, size}) => {
                    return (<Ionicons name="settings-outline" size={size} color={color}/>)
                }
            }} />
        </Tab.Navigator>
    )
}

export default ProfileTabScreen
