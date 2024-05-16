import {useDispatch} from "react-redux"
import {Button, StyleSheet, Text, View} from "react-native"
import {addItem, removeItem} from "../../store/redux/inventory";
import {updateStep} from "../../store/redux/steps";

function List({ data }) {
    const dispatch = useDispatch()

    function toggleItem(item) {
        (item.status === 1) ? dispatch(removeItem(item.id)) : dispatch(addItem(item.id))
    }

    function toggleStep(step) {
        step.status = step.status === 1 ? -1 : 1
        dispatch(updateStep(step))
    }

    return data.map((dataPoint) => (
        <View
            key={dataPoint.id}
            style={ styles.listItem }
        >
            {dataPoint.type === 'inventory' && dataPoint.status === 1 &&
                <View style={styles.listItemFound}>
                    <Text style={ [styles.itemText, styles.itemFound] }>{dataPoint.title} {dataPoint.description}</Text>
                    <Button title={'remove it'} onPress={() => toggleItem(dataPoint)}></Button>
                </View>}
            {dataPoint.type === 'inventory' && dataPoint.status === 0 &&
                <View style={styles.listItemMissing}>
                    <Text style={ [styles.itemText, styles.itemMissing] }>{dataPoint.title} {dataPoint.description}</Text>
                    <Button title={'add it'} onPress={() => toggleItem(dataPoint)}></Button>
                </View>}

            {dataPoint.type === 'step' && dataPoint.status === -1 &&
                <View style={styles.listStepNotStarted}>
                    <Text style={ [styles.stepText, styles.stepNotStarted] }>{dataPoint.title} {dataPoint.description}</Text>
                    <Button title={'start and complete it'} onPress={() => toggleStep(dataPoint)}></Button>
                </View>}
            {dataPoint.type === 'step' && dataPoint.status === 0 &&
                <View style={styles.listStepStarted}>
                    <Text style={ [styles.stepText, styles.stepStarted] }>{dataPoint.title} {dataPoint.description}</Text>
                    <Button title={'complete it'} onPress={() => toggleStep(dataPoint)}></Button>
                </View>}
            {dataPoint.type === 'step' && dataPoint.status === 1 &&
                <View style={styles.listStepCompleted}>
                    <Text style={ [styles.stepText, styles.stepCompleted] }>{dataPoint.title} {dataPoint.description}</Text>
                    <Button title={'restart it'} onPress={() => toggleStep(dataPoint)}></Button>
                </View>}
        </View>
    ))
}

const styles = StyleSheet.create({
    listItem: {
        display: 'flex',
        borderRadius: 10,
        borderWidth: 3,
        padding: 25,
        margin: 10,
        height: 75,
        width: 300,
    },
    listItemFound: {
        borderRadius: 10,
        borderWidth: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        elevation: 10,
    },
    listItemMissing: {
        borderRadius: 10,
        borderWidth: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        elevation: 10,
    },

    listStepNotStarted: {
        borderRadius: 10,
        borderWidth: 3,
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        elevation: 10,
    },
    listStepStarted: {
        borderRadius: 10,
        borderWidth: 3,
        backgroundColor: 'rgba(255, 255, 0, 0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        elevation: 10,
    },
    listStepCompleted: {
        borderRadius: 10,
        borderWidth: 3,
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        elevation: 10,
    },

    itemText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    stepText: {
        fontSize: 10,
        color: 'black',
    },
    itemFound: {
        color: 'green',
    },
    itemMissing: {
        color: 'black',
    },
    stepNotStarted: {
        color: 'black',
    },
    stepStarted: {
        color: 'black',
        fontSize: 20,
    },
    stepCompleted: {
        color: 'black',
        fontWeight: 'bold',
    },


})

export default List
