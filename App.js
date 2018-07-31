
import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import store from './app/store';
import AppNavigation from './app/navigation/AppNavigation'
import { Font } from 'expo';


export default class App extends Component {
    state = {
        fontLoaded: false,
    };
    
    async componentDidMount() {
        await Font.loadAsync({
          'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
          'OpenSans-Normal': require('./assets/fonts/OpenSans-Regular.ttf'),
        });
        this.setState({ fontLoaded: true });
      }
    render() {
        return (
            <Provider store={store}>
                {this.state.fontLoaded ?
                    <AppNavigation />
                :
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
                }
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
});

