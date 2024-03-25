import { View, Text, StyleSheet } from "react-native"

function AnimalDetails({ difficulty, duration, style, textStyle }) {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
            <Text style={[styles.detailItem, textStyle]}>{difficulty}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 16,
    },
})

export default AnimalDetails
