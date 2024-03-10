import {
    View,
    Pressable,
    Text,
    StyleSheet,
    Image,
    Platform
} from 'react-native'
import { useNavigation } from "@react-navigation/native"
import MealDetails from "./MealDetails";


function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation()

    function selectMealItemHandler() {

        navigation.navigate('MealDetail', {
            mealId: id,
        })

    }

    return(
        <View style={styles.mealItem}>
            <Pressable
                onPress={() => {
                    selectMealItemHandler()
                }}
                android_ripple={{color: '#CCC'}}
                style={({pressed}) => pressed && styles.buttonPressed}>
                <View style={styles.container}>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails
                        duration={duration}
                        complexity={complexity}
                        affordability={affordability}
                    />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 10,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
    },
    container: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        height: 200,
        width: '100%',
    },
    buttonPressed: {
        opacity: 0.6,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 8,
    },
    detailItem: {
        fontSize: 12,
    }
})

export default MealItem
