import {View, Text, Button} from "react-native"

const ProfileDashboardDetailScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Profile Dashboard Details</Text>
            <Button onPress={() => navigation.navigate('ProfileAchievementsScreen')} title="Return" />
        </View>
    )
}

export default ProfileDashboardDetailScreen
