import { FlatList, StyleSheet, View } from "react-native"
import AnimalItem from "./AnimalItem"

function AnimalList({ animals }) {

    function renderAnimalItem(itemData) {
        const item = itemData.item

        const animalItemProps = {
            id: item.id,
            category: item.category,
            title: item.title,
            imageUrl: item.imageUrl,
            categoryImageUrl: item.categoryImageUrl,
            commonality: item.commonality,
            isUnlocked: item.isUnlocked,
        }

        return <AnimalItem {...animalItemProps} />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={animals}
                keyExtractor={(item) => item.id}
                renderItem={renderAnimalItem}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    }
})

export default AnimalList
