import {Text, View, StyleSheet, FlatList} from "react-native"
import {INVENTORY} from "../data/inventory-data";
import InventoryList from "../components/Inventory/InventoryList";
import {useSelector} from "react-redux";

const EMOJIS = [
    '👓',
    '🔬',
    '🔑',
    '💻',
    '📦',
    '📚',
    '🧸',
    '🎮',
    '🎨',
    '🎸',
    '🧩',
    '🧵',
    '🧶',
    '🎲',
    '🎳',
    '🎯',
    '🎰',
    '🎱',
    '🎤',
    '🎧',
    '🎼',
    '🎹',
    '🥁',
    '🎷',
    '🎺',
    '🎻',
    '🪕',
    '🎬',
    '🎥',
    '📽️',
    '🎞️',
    '📺',
    '📻',
    '🎙️',
    '🎚️',
    '🎛️',
    '🧯',
    '🔮',
    '📿',
    '💎',
    '🔧',
    '🔨',
    '⚒️',
    '🛠️',
    '⛏️',
    '🔩',
    '⚙️',
    '🧰',
    '🧲',
    '🔫',
    '💣',
    '🔪',
    '🗡️',
    '⚔️',
    '🛡️',
    '🚬',
    '⚰️',
    '⚱️',

]

function InventoryScreen() {
    // const categoryId = route.params.categoryId;
    //
    // const displayedInventory = INVENTORY.filter((inventoryItem) => {
    //     return inventoryItem.categoryIds.indexOf(categoryId) >= 0;
    // })

    const inventoryIds = useSelector(state => state.inventory.items)
    const inventoryItems = INVENTORY.filter(inventoryItem => inventoryIds.includes(inventoryItem.id))

    // console.log('ids', inventoryIds)
    // console.log('items', inventoryItems)

    console.log('INVENTORY')
    INVENTORY.forEach(item => console.log(item.id))
    console.log('IDS')
    inventoryIds.forEach(id => console.log(id))
    if (inventoryItems.length === 0 || !inventoryItems) {
        return (
            <View style={styles.screen}>
                <Text>No inventory items!</Text>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Inventory Screen</Text>
            <View style={styles.container}>
                <InventoryList inventoryItems={inventoryItems} />
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
        width: '90%',
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        margin: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
})

export default InventoryScreen
