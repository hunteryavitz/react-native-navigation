import {Text, View, StyleSheet, Button, TouchableOpacity} from "react-native"
import {useDispatch, useSelector} from "react-redux"
import {INVENTORY} from "../../data/inventory-data"
import {addItem} from "../../store/redux/inventory"
import Ionicons from "react-native-vector-icons/Ionicons";

function CraftScreen() {
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
            <View style={styles.titles}>
                <View style={styles.mainTitleRow}>
                    <Text style={styles.title}>Craft</Text>
                    <View style={styles.titleIcon}>
                        <Ionicons name="hammer" size={32} color="#351401" />
                    </View>
                </View>
                <Text style={styles.subtitle}>Combine items to craft a new item.</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.contentText}>coming soon... crafting</Text>
                </View>
                <TouchableOpacity style={styles.control} onPress={handleCraftInventory}>
                    <Text style={styles.controlText}>CRAFT <Ionicons name="hammer" size={18} color="#E4BAA1" /></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E4BAA1',
    },
    titles: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        margin: 4,
        padding: 4,
    },
    mainTitleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'space-between',
    },
    title: {
        flex: 1,
        fontSize: 32,
        fontWeight: 'light',
        color: '#351401',
    },
    titleIcon: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#351401',
        margin: 4,
        padding: 4,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#351401',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: 4,
        padding: 4,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#351401',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#000',
        width: '100%',
        margin: 4,
        padding: 4,
    },
    contentText: {
        fontSize: 28,
        fontWeight: 'light',
        color: '#FFF',
    },
    control: {
        margin: 4,
        backgroundColor: '#351401',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#000',
        padding: 8,
    },
    controlText: {
        fontSize: 22,
        fontWeight: 'light',
        color: '#E4BAA1',
    },
})

export default CraftScreen
