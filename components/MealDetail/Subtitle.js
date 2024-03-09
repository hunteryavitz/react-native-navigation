import { View, Text, StyleSheet } from "react-native"

function Subtitle({ children }) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 18,
        color: 'blue',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 4,
        padding: 6,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    subtitleContainer: {
        marginHorizontal: 8,
    },
})

export default Subtitle
