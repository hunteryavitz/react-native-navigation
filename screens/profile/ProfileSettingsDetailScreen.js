import {View, Text, Button} from "react-native"

const ProfileSettingsDetailScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Profile Settings Details</Text>
            <Button onPress={() => navigation.navigate('ProfileSettingsScreen')} title="Return" />
        </View>
    )
}

export default ProfileSettingsDetailScreen
