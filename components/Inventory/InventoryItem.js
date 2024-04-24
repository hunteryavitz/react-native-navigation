import {View, Text, StyleSheet} from "react-native"

function InventoryItem({ id, title, description, imageUrl }) {
    return (
        <View style={styles.inventoryItem}>
            <Text style={styles.image}>{title}</Text>
            <View style={styles.details}>
                <Text style={styles.title}>{id}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inventoryItem: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'black',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    image: {
        width: 76,
        height: 76,
        borderRadius: 38,
        backgroundColor: '#222222',
        borderColor: 'blue',
        borderWidth: 2,
        fontSize: 42,
    },
    details: {
        marginLeft: 25,
        justifyContent: 'center',
        width: '60%',
    },
    title: {
        color: 'black',
        fontSize: 18,
    },
    description: {
        color: '#888',
        fontSize: 24,
    },
})

export default InventoryItem
