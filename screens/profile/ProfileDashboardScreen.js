import {View, Text, Button} from "react-native"

const ProfileDashboardScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Profile Dashboard Screen</Text>
            <Button onPress={() => navigation.navigate('ProfileDashboardDetailScreen')} title="Details" />
        </View>
    )
}

export default ProfileDashboardScreen
