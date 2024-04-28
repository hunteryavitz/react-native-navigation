import { useLayoutEffect } from "react"
import { ANIMALS, ANIMAL_CATEGORIES } from '../data/animal-data'
import AnimalList from "../components/AnimalsList/AnimalList"
import {useSelector} from "react-redux"

function AnimalsOverviewScreen({ route, navigation }) {
    const categoryId = route.params.categoryId
    const collectedAnimals = useSelector(state => state.collectedAnimals.ids)

    const displayedAnimals = ANIMALS.filter((animalItem) => {
        return (animalItem.categoryIds.indexOf(categoryId) >= 0 && collectedAnimals.includes(animalItem.id))
    })

    useLayoutEffect(() => {
        const categoryTitle = ANIMAL_CATEGORIES.find((category) => category.id === categoryId).title
        navigation.setOptions({
            title: `${categoryTitle}`,
        })
    }, [categoryId, navigation])
    
    return <AnimalList animals={displayedAnimals} />
}

export default AnimalsOverviewScreen
