import { Font } from 'expo';

export const loadFonts = () => 
    Font.loadAsync({
        'baloo-regular': require('../../assets/fonts/BalooBhai-Regular.ttf'),
    })