import { useLayoutEffect } from "react"
import {Image, Text, View, StyleSheet, ScrollView} from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealDetails from "../components/MealDetails"
import Subtitle from "../components/MealDetail/Subtitle"
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
// import { FavoritesContext } from "../store/context/favorites-context"
import {useDispatch, useSelector} from "react-redux"
import { addFavorite, removeFavorite } from "../store/redux/favorites"

function MealDetailScreen({ route, navigation }) {
    // const favoriteMealsContext = useContext(FavoritesContext)
    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)
    const dispatch = useDispatch()

    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    const isFavorite = favoriteMealIds.includes(mealId)

    function toggleFavoriteHandler(mealId) {
        if (isFavorite) {
            console.log('removing favorite')
            dispatch(removeFavorite({ id: mealId }))
        } else {
            console.log('adding favorite')
            dispatch(addFavorite({ id: mealId }))
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <>
                        <IconButton
                            icon={isFavorite ? "star" : "star-outline"}
                            color="#000000"
                            onPress={() => toggleFavoriteHandler(mealId)}
                        />
                    </>
                )
            }
        })
    }, [navigation, toggleFavoriteHandler])

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
