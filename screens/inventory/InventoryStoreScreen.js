import {Text, View, StyleSheet, TouchableOpacity, Button} from "react-native"
import {useSelector} from "react-redux"
import {INVENTORY} from "../../data/inventory-data"
// import {addItem} from "../../store/redux/inventory"
import Ionicons from "react-native-vector-icons/Ionicons";
import InventoryList from "../../components/Inventory/InventoryList";

function InventoryStoreScreen({ navigation }) {
    const currentInventoryIds = useSelector(state => state.inventory.items)
    // const dispatch = useDispatch()

    const availableItems = INVENTORY.filter(inventoryItem => currentInventoryIds.includes(inventoryItem.id))

    function handleStoreInventory() {
        const randomItem = availableItems[Math.floor(Math.random() * availableItems.length)]
        alert('Stored ' + randomItem.description + randomItem.title)
        // dispatch(addItem(randomItem.id))
    }

    if (availableItems.length === 0 || !availableItems) {
        return (
            <View style={styles.screenEmpty}>
                <Text style={styles.title}></Text>
                <Text style={styles.subtitle}>nothing to store</Text>
                <Text style={styles.title}>\(^_^)/</Text>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <View style={styles.titles}>
                <View style={styles.mainTitleRow}>
                    <Text style={styles.title}>Store</Text>
                    <View style={styles.titleIcon}>
                        <Ionicons name="grid" size={32} color="#351401" />
                    </View>
                </View>
                <Text style={styles.subtitle}>Browse your inventory for items to store.</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.content}>
                    <InventoryList inventoryItems={availableItems} />
                </View>
                <TouchableOpacity style={styles.control} onPress={handleStoreInventory}>
                    <Text style={styles.controlText}>STORE <Ionicons name="grid" size={16} color="#E4BAA1" /></Text>
                </TouchableOpacity>
                <Button onPress={() => navigation.navigate('InventoryStoreDetailScreen')} title="Details" />

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
    screenEmpty: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#E4BAA1',
        padding: 24,
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
    },
    title: {
        flex: 1,
        fontSize: 32,
        fontWeight: 'light',
        color: '#351401',
    },
    titleIcon: {
        justifyContent: 'center',
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
        alignItems: 'stretch',
        backgroundColor: '#351401',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#000',
        width: '100%',
        margin: 4,
        padding: 4,
    },
    contentText: {
        fontSize: 24,
        fontWeight: 'light',
        color: '#A1E3E3',
    },
    control: {
        margin: 4,
        backgroundColor: '#351401',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#000',
        padding: 8,
        // width: '100%',
        // alignItems: 'center',
    },
    controlText: {
        fontSize: 22,
        fontWeight: 'light',
        color: '#E4BAA1',
    },
})

export default InventoryStoreScreen
