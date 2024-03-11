import { FlatList, StyleSheet, Text, View } from "react-native"
import MealItem from "./MealItem"

function MealList({ meals }) {

    function renderMealItem(itemData) {
        const item = itemData.item

        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        }

        return <MealItem {...mealItemProps} />
    }

  return (
      <View style={styles.container}>
          <FlatList
              data={meals}
              keyExtractor={(item) => item.id}
              renderItem={renderMealItem}
          ></FlatList>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    }
})

export default MealList
