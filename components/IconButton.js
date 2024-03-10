import { Pressable  } from "react-native"
import { Ionicons } from "react-native-vector-icons"

function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}>
        <Ionicons name={icon} size={23} color={color} />
    </Pressable>
  )

}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5,
    },
})

export default IconButton
