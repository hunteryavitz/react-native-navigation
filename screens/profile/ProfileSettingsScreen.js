import {View, Text, Button} from "react-native"

const ProfileSettingsScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Profile Settings Screen</Text>
            <Button onPress={() => navigation.navigate('ProfileSettingsDetailScreen')} title="Details" />
        </View>
    )
}

export default ProfileSettingsScreen
