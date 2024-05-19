import {View, Text, StyleSheet} from "react-native"

function InventoryItem({ id, title, description, imageUrl }) {
    return (
        <View style={styles.inventoryItem}>
            <Text style={styles.image}>{title}</Text>
            <View style={styles.details}>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inventoryItem: {
        flexDirection: 'row',
        padding: 15,
        // backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderBottomWidth: 1,
        borderBottomColor: '#E4BAA1',
    },
    image: {
        width: 76,
        height: 76,
        borderRadius: 38,
        backgroundColor: '#000',
        borderColor: '#E4BAA1',
        borderWidth: 2,
        fontSize: 42,
    },
    details: {
        marginLeft: 25,
        justifyContent: 'center',
        width: '60%',
    },
    description: {
        color: '#A1E3E3',
        fontSize: 24,
    },
})

export default InventoryItem
