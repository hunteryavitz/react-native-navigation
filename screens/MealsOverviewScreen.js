import { useLayoutEffect } from "react"
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealList from "../components/MealsList/MealList"

function MealsOverviewScreen({ route, navigation }) {
    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
        navigation.setOptions({
            title: `Meals for Category ${categoryTitle}`,
        })
    }, [categoryId, navigation])

    return <MealList meals={displayedMeals} />
}

export default MealsOverviewScreen
