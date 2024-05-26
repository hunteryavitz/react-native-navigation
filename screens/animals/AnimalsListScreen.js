import {Text, View, StyleSheet, TouchableOpacity, Image, FlatList} from "react-native"
import {useSelector} from "react-redux"
import Ionicons from "react-native-vector-icons/Ionicons"
import {ANIMAL_CATEGORIES, ANIMALS} from "../../data/animal-data"
import React, {useLayoutEffect} from "react"
import AnimalList from "../../components/AnimalsList/AnimalList"
import CategoryGridTile from "../../components/CategoryGridTile";

function AnimalsListScreen({ route, navigation }) {
    const categoryId = route.params.categoryId
    const capturedAnimals = useSelector(state => state.collectedAnimals.captured)

    const displayedAnimals = ANIMALS.filter((animalItem) => {
        return (animalItem.categoryIds.indexOf(categoryId) >= 0 && capturedAnimals.includes(animalItem.id))
    })

    useLayoutEffect(() => {
        const categoryTitle = ANIMAL_CATEGORIES.find((category) => category.id === categoryId).title
        navigation.setOptions({
            title: `${categoryTitle}`,
        })
    }, [categoryId, navigation])

    if (displayedAnimals.length === 0 || !displayedAnimals) {
        return (
            <View style={styles.screenEmpty}>
                <Text style={styles.title}></Text>
                <Text style={styles.subtitle}>nothing to list</Text>
                <Text style={styles.title}>\(^_^)/</Text>
            </View>
        )
    }

    const handleClaimAnimal = () => {
        console.log('Claimed animal')
        alert('Claimed animal')
    }

    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('Animals', {
                categoryId: itemData.item.id
            });
        }

        return (<CategoryGridTile title={itemData.item.title} icon={itemData.item.icon} onPress={pressHandler}/>);
    }

    return (
        <View style={styles.screen}>
            <View style={styles.titles}>
                <View style={styles.mainTitleRow}>
                    <Text style={styles.title}>Craft</Text>
                    <View style={styles.titleIcon}>
                        <Ionicons name="list-outline" size={32} color="#351401" />
                    </View>
                </View>
                <Text style={styles.subtitle}>Claim an animal to add to the collection.</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.screenList}>
                    <Image source={require('../../assets/geography.jpg')} style={styles.bg}/>
                    <FlatList
                        style={styles.list}
                        data={ANIMAL_CATEGORIES}
                        keyExtractor={(item) => item.id}
                        renderItem={renderCategoryItem}
                    />
                </View>)
                {/*<View style={styles.content}>*/}
                {/*    <AnimalList animals={displayedAnimals} />*/}
                {/*</View>*/}
                <TouchableOpacity style={styles.control} onPress={handleClaimAnimal}>
                    <Text style={styles.controlText}>CLAIM <Ionicons name="list-outline" size={16} color="#E4BAA1" /></Text>
                </TouchableOpacity>
            </View>
        </View>
    )}

const styles = StyleSheet.create({
    screenList: {
        flex: 1,
        width: '100%',
        justifyContent: 'center', alignItems: 'center', backgroundColor: '#E4BAA1',
    },
    bg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0.4,
    },
    list: {
        flexDirection: 'column',
        width: '100%',
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
    },
    controlText: {
        fontSize: 22,
        fontWeight: 'light',
        color: '#E4BAA1',
    },
})

export default AnimalsListScreen
