import { FlatList, StyleSheet, View } from "react-native"
import AnimalItem from "./AnimalItem";

function AnimalList({ animals }) {

    function renderAnimalItem(itemData) {
        const item = itemData.item

        const animalItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            difficulty: item.difficulty,
            duration: item.duration,
            inventory: item.inventory,
            steps: item.steps,
            isRare: item.isRare,
            isGeneral: item.isGeneral,
            isUnlocked: item.isUnlocked,
        }

        return <AnimalItem {...animalItemProps} />
    }

  return (
      <View style={styles.container}>
          <FlatList
              data={animals}
              keyExtractor={(item) => item.id}
              renderItem={renderAnimalItem}
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

export default AnimalList
