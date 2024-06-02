import {Text, View, StyleSheet, TouchableOpacity, Button} from "react-native"
import {useSelector} from "react-redux"
import Ionicons from "react-native-vector-icons/Ionicons";
import {ANIMALS} from "../../data/animal-data";
import AnimalList from "../../components/AnimalsList/AnimalList";


function AnimalsCollectScreen({ navigation }) {

    const collectedAnimalIds = useSelector(state => state.collectedAnimals.collected)
    const collectedAnimals = ANIMALS.filter(animal => collectedAnimalIds.includes(animal.id))

    function handleRecruitAnimal() {
        alert('Recruited ')
        // dispatch(addItem(randomItem.id))
    }

    if (collectedAnimals.length === 0 || !collectedAnimals) {
        return (
            <View style={styles.screen}>
                <Text style={styles.text}>None collected!</Text>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <View style={styles.titles}>
                <View style={styles.mainTitleRow}>
                    <Text style={styles.title}>Collection</Text>
                    <View style={styles.titleIcon}>
                        <Ionicons name="layers-outline" size={32} color="#351401" />
                    </View>
                </View>
                <Text style={styles.subtitle}>Browse your collection for animals to recruit.</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.screenCollected}>
                    <AnimalList animals={collectedAnimals} />
                </View>
                <TouchableOpacity style={styles.control} onPress={handleRecruitAnimal}>
                    <Text style={styles.controlText}>RECRUIT <Ionicons name="layers-outline" size={16} color="#E4BAA1" /></Text>
                </TouchableOpacity>
                <Button title={'Details'} onPress={() => navigation.navigate('AnimalsCollectDetailScreen')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screenCollected: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#fff'
    },
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

export default AnimalsCollectScreen
