import { useLayoutEffect } from "react"
import { ANIMALS, ANIMAL_CATEGORIES } from '../data/animal-data'
import AnimalList from "../components/AnimalsList/AnimalList"

function AnimalsOverviewScreen({ route, navigation }) {
    const categoryId = route.params.categoryId;

    const displayedAnimals = ANIMALS.filter((animalItem) => {
        return animalItem.categoryIds.indexOf(categoryId) >= 0;
    })

    useLayoutEffect(() => {
        const categoryTitle = ANIMAL_CATEGORIES.find((category) => category.id === categoryId).title;
        navigation.setOptions({
            title: `${categoryTitle}`,
        })
    }, [categoryId, navigation])

    console.log(displayedAnimals)

    return <AnimalList animals={displayedAnimals} />
}

export default AnimalsOverviewScreen
