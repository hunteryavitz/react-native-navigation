import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import CategoryGridTile from "../components/CategoryGridTile";
import {ANIMAL_CATEGORIES} from "../data/animal-data";

function CategoriesScreen({ navigation }) {

    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('Animals', {
                categoryId: itemData.item.id
            });
        }

        return (
            <CategoryGridTile title={itemData.item.title} icon={itemData.item.icon} onPress={pressHandler} />
        );
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={ANIMAL_CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
                numColumns={2}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    }
});


export default CategoriesScreen;
