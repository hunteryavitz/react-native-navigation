import { CATEGORIES } from "../data/dummy-data";
import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {

    function renderCategoryItem(itemData) {
        function pressHandler() {
            console.log('Category pressed');
            navigation.navigate('Meals', {
                categoryId: itemData.item.id
            });
        }

        return (
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
        );
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={CATEGORIES}
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
