import {View, Text, Button} from "react-native"

const ProfileAchievementsDetailScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Profile Achievements Details</Text>
            <Button onPress={() => navigation.navigate('ProfileAchievementsScreen')} title="Return" />
        </View>
    )
}

export default ProfileAchievementsDetailScreen
