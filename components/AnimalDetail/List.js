import { Text, View, StyleSheet } from "react-native"

function List({ data }) {
    return data.map((dataPoint) => (
        <View
            key={dataPoint}
            style={ styles.listItem }
        >
            <Text style={ styles.itemText }>{dataPoint}</Text>
        </View>
    ))
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 10,
        padding: 10,
        margin: 10,
        backgroundColor: 'white',
        borderWidth: 1,
    },
    itemText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
})

export default List
