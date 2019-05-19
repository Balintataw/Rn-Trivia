import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { loadFonts } from './util/fonts';
import Navigator from './router';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class App extends React.Component {
    state = {
        fontsReady: false,
    };

    componentDidMount = () => {
        loadFonts().then(() => this.setState({ fontsReady: true }));
    };

    render() {
        if (!this.state.fontsReady) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#A2A2A2" />
                </View>
            )
        }

        return <Navigator />
    }
}
export default App;