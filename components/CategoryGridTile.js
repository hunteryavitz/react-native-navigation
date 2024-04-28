import {Dimensions, Image, Platform, Pressable, StyleSheet, Text, View} from "react-native";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

function CategoryGridTile({title, icon, onPress}) {

    return (
        <View style={styles.gridItem}>
            <Pressable
                style={({pressed}) => [
                    styles.button,
                    pressed && styles.buttonPressed,
                ]}
                android_ripple={{color: '#CCC'}}
                onPress={onPress}>
                <View style={styles.gridContent}>
                    <Image source={{uri: icon}} style={{width: 120, height: 120}} />
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    gridItem: {
        // flex: 1,
        margin: 15,
        width: SCREEN_WIDTH / 2.5,
        height: SCREEN_WIDTH / 2.5,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.6,
    },
    gridContent: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    }

});

export default CategoryGridTile;
