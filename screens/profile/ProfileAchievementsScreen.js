import {View, Text, Button} from "react-native"

const ProfileAchievementsScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Profile Achievements Screen</Text>
            <Button onPress={() => navigation.navigate('ProfileAchievementsDetailScreen')} title="Details" />
        </View>
    )
}

export default ProfileAchievementsScreen
