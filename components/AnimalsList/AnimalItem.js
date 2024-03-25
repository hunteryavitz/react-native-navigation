import {
    View,
    Pressable,
    Text,
    StyleSheet,
    Image,
    Platform
} from 'react-native'
import { useNavigation } from "@react-navigation/native"
import AnimalDetails from "../AnimalDetails";

function AnimalItem({ id, title, imageUrl, difficulty, duration, isRare, isGeneral, isUnlocked }) {
    const navigation = useNavigation()

    function selectAnimalItemHandler() {

        navigation.navigate('AnimalDetail', {
            animalId: id,
        })
    }

    return(
        <View style={styles.animalItem}>
            <Pressable
                onPress={() => {
                    selectAnimalItemHandler()
                }}
                android_ripple={{color: '#CCC'}}
                style={({pressed}) => pressed && styles.buttonPressed}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={{uri: imageUrl}} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View>
                        <Text style={styles.detailItem}>{isRare ? 'Rare' : 'Common'}</Text>
                        <Text style={styles.detailItem}>{isGeneral ? 'General' : 'Specific'}</Text>
                        <Text style={styles.detailItem}>{isUnlocked ? 'Unlocked' : 'Locked'}</Text>
                    </View>
                    <AnimalDetails
                        difficulty={difficulty}
                        duration={duration}
                    />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    animalItem: {
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
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        // resizeMode: 'center',
        height: 240,
        width: '80%',
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

export default AnimalItem
