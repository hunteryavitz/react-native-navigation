import {Text, View, StyleSheet, Button} from "react-native"
import {useDispatch, useSelector} from "react-redux"
import {INVENTORY} from "../../data/inventory-data"
import {addItem} from "../../store/redux/inventory"

function SearchScreen() {
    const currentInventoryIds = useSelector(state => state.inventory.items)
    const dispatch = useDispatch()

    const availableItems = INVENTORY.filter(inventoryItem => !currentInventoryIds.includes(inventoryItem.id))

    function handleCraftInventory() {
        const randomItem = availableItems[Math.floor(Math.random() * availableItems.length)]
        dispatch(addItem(randomItem.id))
    }

    if (availableItems.length === 0 || !availableItems) {
        return (
            <View style={styles.screen}>
                <Text style={styles.title}>Nothing to craft</Text>
                <Text style={styles.title}></Text>
                <Text style={styles.title}>  \(^_^)/</Text>
                <Text style={styles.title}> (  )</Text>
                <Text style={styles.title}>/ \</Text>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Craft</Text>
            <Text style={styles.subtitle}>Combine two items to craft a new item.</Text>
            <View style={styles.container}>
                <Button title={'Craft'} onPress={handleCraftInventory} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        margin: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#351401',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#351401',
    }
})

export default SearchScreen
