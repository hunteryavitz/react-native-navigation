import InventoryItem from "./InventoryItem";
import {FlatList, View, StyleSheet, Text} from "react-native";

function InventoryList({ inventoryItems }) {
    function renderInventoryItem(itemData) {
        // function pressHandler() {
        //     navigation.navigate('Inventory', {
        //         inventoryId: itemData.item.id
        //     });
        // }

        const inventoryItem = itemData.item

        const inventoryItemProps = {
            id: inventoryItem.id,
            title: inventoryItem.title,
            description: inventoryItem.description,
            imageUrl: inventoryItem.imageUrl,
        }

        return <InventoryItem {...inventoryItemProps} />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={inventoryItems}
                keyExtractor={item => item.id}
                renderItem={renderInventoryItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    }
})

export default InventoryList