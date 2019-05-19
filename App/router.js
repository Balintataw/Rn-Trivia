import { Easing, Animated } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Quiz from './screens/Quiz';
import QuizIndex from './screens/QuizIndex';

const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 500,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        /* slide screen from right */
        screenInterpolator: sceneProps => {      
            const { layout, position, scene } = sceneProps
    
            const thisSceneIndex = scene.index
            const width = layout.initWidth
    
                // for right slide in transition
            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [width, 0],
            })
                // for left slide in transition
            // const translateX = position.interpolate({
            //     inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
            //     outputRange: [-width, 0],
            // })
    
            return { transform: [ { translateX } ] }
        },
    }
};

const AppStack = createStackNavigator(
    {
        QuizIndex: {
            screen: QuizIndex,
            navigationOptions: {
                headerTitle: "Quizzes",
                headerTitleStyle: {
                    fontFamily: 'baloo-regular'
                },
            }
        },
        Quiz: {
            screen: Quiz,
            navigationOptions: ({ navigation }) => ({
                headerTitle: navigation.getParam('title'),
                headerTitleStyle: {
                    fontFamily: 'baloo-regular'
                },
                headerTintColor: '#FFF',
                headerStyle: {
                    backgroundColor: navigation.getParam('color'),
                    borderBottomColor: navigation.getParam('color'),
                }
            })
        }
    },
    {
        initialRouteName: 'QuizIndex',
        transitionConfig: transitionConfig
    }
);

export default createAppContainer(AppStack);