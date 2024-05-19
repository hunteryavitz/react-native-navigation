import React from 'react'
import {FlatList, View, StyleSheet, Image} from 'react-native'
import CategoryGridTile from "../components/CategoryGridTile"
import {ANIMAL_CATEGORIES} from "../data/animal-data"

function CategoriesScreen({navigation}) {

    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('Animals', {
                categoryId: itemData.item.id
            });
        }

        return (<CategoryGridTile title={itemData.item.title} icon={itemData.item.icon} onPress={pressHandler}/>);
    }

    return (<View style={styles.screen}>
        <Image source={require('../assets/geography.jpg')} style={styles.bg}/>
            <FlatList
                style={styles.list}
                data={ANIMAL_CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
            />
        </View>);
}

const styles = StyleSheet.create({
    screen: {
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
});


export default CategoriesScreen;
