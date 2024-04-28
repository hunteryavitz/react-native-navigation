import {
    View,
    Pressable,
    Text,
    StyleSheet,
    Image,
    Platform
} from 'react-native'
import { useNavigation } from "@react-navigation/native"
import Ionicons from "react-native-vector-icons/Ionicons"
import {useSelector} from "react-redux"

function AnimalItem({ id, title, category, imageUrl, categoryImageUrl, commonality, isUnlocked, xp }) {
    const navigation = useNavigation()
    const currentXp = useSelector(state => state.xp.xp)

    function selectAnimalItemHandler() {
        if (isUnlocked) {
            navigation.navigate('AnimalDetail', {
                animalId: id,
            })
        }
    }

    isUnlocked = currentXp >= xp

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
                            <View style={styles.titlesMainContainer}>
                                <View style={styles.commonStatus}>
                                    <Ionicons name="diamond" size={24} color={
                                        commonality === 'Common' ? 'brown' : commonality === 'Uncommon' ? 'lightgrey' : 'yellow'
                                    } />
                                    <Text style={styles.commonality}>{commonality}</Text>
                                </View>
                                <View style={styles.titlesSubContainer}>
                                    <Text style={styles.title}>{title}</Text>
                                </View>
                                <View style={styles.category}>
                                    <Image style={styles.categoryImage} source={{uri: categoryImageUrl}} />
                                    <Text style={styles.categoryDescription}>{category}</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                        </View>
                        {
                            !isUnlocked &&
                            <View style={styles.lockedScreen}>
                                <Ionicons style={styles.lockedIcon} name="lock-closed" size={50} color="white" />
                                <Text style={styles.lockedTitle}>LOCKED</Text>
                            </View>
                        }
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
    lockedOverlay: {
        backgroundColor: 'rgba(0, 0, 0, .3)',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
        borderRadius: 10,
        elevation: 7,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    container: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    lockedScreen: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    lockedIcon: {
        marginTop: '35%',
        textAlign: 'center',
    },
    lockedTitle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        height: 320,
        width: '100%',
    },
    titlesMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: 12,
        paddingBottom: 6,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: 'black',
    },
    commonStatus: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
    },
    commonality: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white',
    },
    titlesSubContainer: {
        flex: 3,
    },
    title: {
        fontSize: 14,
        textAlign: 'center',
        margin: 8,
        color: 'white',
    },
    category: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryImage: {
        height: 30,
        width: 30,
        borderRadius: 15,
    },
    categoryDescription: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white',
    },
    buttonPressed: {
        opacity: 0.6,
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
