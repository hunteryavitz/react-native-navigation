import { FlatList, StyleSheet, View, Text } from "react-native"
import AnimalItem from "./AnimalItem"

function AnimalList({ animals }) {

    // if animals empty, return invoke the back button
    if (animals.length < 1) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>No animals!</Text>
            </View>
        )

    }


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
            xp: item.xp,
        }

        return <AnimalItem {...animalItemProps} />
    }

    //

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
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        margin: 4,
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
})

export default AnimalList
