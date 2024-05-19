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

function _InventoryScreen() {
    // const categoryId = route.params.categoryId;
    //
    // const displayedInventory = INVENTORY.filter((inventoryItem) => {
    //     return inventoryItem.categoryIds.indexOf(categoryId) >= 0;
    // })

    const inventoryIds = useSelector(state => state.inventory.items)
    const inventoryItems = INVENTORY.filter(inventoryItem => inventoryIds.includes(inventoryItem.id))

    if (inventoryItems.length === 0 || !inventoryItems) {
        return (
            <View style={styles.screen}>
                <Text style={styles.title}>No inventory items!</Text>
                <Text style={styles.title}></Text>
                <Text style={styles.title}>  \(^_^)/</Text>
                <Text style={styles.title}> (  )</Text>
                <Text style={styles.title}>/ \</Text>
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
})

export default _InventoryScreen
