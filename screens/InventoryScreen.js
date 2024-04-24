import {Text, View, StyleSheet, FlatList} from "react-native"
import {INVENTORY} from "../data/inventory-data";
import InventoryList from "../components/Inventory/InventoryList";

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

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Inventory Screen</Text>
            <View style={styles.container}>
                <InventoryList inventoryItems={INVENTORY} />
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
