import { useRef } from "react"
import LottieView from "lottie-react-native"

const MyConfetti = () => {
    const animationRef = useRef(null)

    return (
        <LottieView
            ref={animationRef}
            source={require("../assets/confetti.json")}
            loop={false}
            autoPlay={false}
        />
    )
}

export default MyConfetti