import { Text } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

const CountdownCircleDemo = () => (
    <CountdownCircleTimer
        isPlaying
        initialRemainingTime={200}
        duration={1000}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}
    >
        {({ remainingTime }) => <Text>{remainingTime}</Text>}
    </CountdownCircleTimer>
)

export default CountdownCircleDemo