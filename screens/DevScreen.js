import {View, Text, StyleSheet, Button} from 'react-native'
import {useDispatch, useSelector} from "react-redux"
import {addAnimalDrop} from "../store/redux/drops";
import {addItem} from "../store/redux/inventory";
import {INVENTORY} from "../data/inventory-data";
import {addXp} from "../store/redux/xp";

export default function DevScreen() {
    const dispatch = useDispatch()
    const xp = useSelector(state => state.xp.xp)
    const drops = useSelector(state => state.drops.animalDrops)

    function handleAddAnimalDrop() {
        dispatch(addAnimalDrop())
    }

    function handleAddInventoryDrop() {
        const randomItem = 'i' + Math.floor(Math.random() * INVENTORY.length)
        dispatch(addItem(randomItem))

    }

    function addXP() {
        dispatch(addXp(1))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dev Screen</Text>
            <View style={styles.button}>
                <Button title={'Add Animal Drop'} onPress={handleAddAnimalDrop} />

            </View>
            <View style={styles.button}>
                <Button title={'Add Inventory Drop'} onPress={handleAddInventoryDrop} />

            </View>
            <View style={styles.button}>
                <Button title={'Add XP'} onPress={addXP} />

            </View>

            <View style={styles.info}>
                <Text>XP: {xp}</Text>
                <Text>Drops: {drops}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    button: {
        margin: 10,
    },
})
