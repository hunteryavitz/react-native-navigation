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
        color: '#368dff',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 4,
        padding: 6,
        borderBottomColor: '#368dff',
        borderBottomWidth: 2,
    },
    subtitleContainer: {
        marginHorizontal: 8,
        backgroundColor: 'black',
    },
})

export default Subtitle
