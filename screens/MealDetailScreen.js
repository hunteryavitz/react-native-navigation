import { useLayoutEffect } from "react"
import {Image, Text, View, StyleSheet, ScrollView, Button} from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealDetails from "../components/MealDetails"
import Subtitle from "../components/MealDetail/Subtitle"
import List from "../components/MealDetail/List";

function MealDetailScreen({ route, navigation }) {
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    function headerButtonPressHandler() {
        console.log('Header button pressed')
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Button title="TAP ME" onPress={() => headerButtonPressHandler} />
                )
            }
        })
    }, [navigation, headerButtonPressHandler])

    return (
        <ScrollView style={ styles.root }>
            <Image
                style={ styles.image }
                source={{ uri: selectedMeal.imageUrl }} />
            <Text style={ styles.title }>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={ styles.outerListContainer }>
                <View style={ styles.listContainer }>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        marginBottom: 16,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 6,
        textAlign: 'center',
        color: '#121212'
    },
    detailText: {
        color: 'green',
    },
    listContainer: {
        width: '90%',
    },
    outerListContainer: {
        alignItems: 'center',
        margin: 6,
    },

})

export default MealDetailScreen
