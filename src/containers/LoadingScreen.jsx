import { View, Text } from 'react-native';
import React, { Component } from 'react';
import StoreData from '../utils/StoreData';

class LoadingScreen extends Component {
    constructor(props) {
        super(props);
    }
    UNSAFE_componentWillMount() {
        StoreData.getToken()
            .then(token => {
                if (token) {
                    this.props.navigation.navigate('Home');
                } else {
                    this.props.navigation.navigate('Inicio')
                }
            })
            .catch(err => {
                this.props.navigation.navigate('Inicio')
            })
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'red' }}>Cargando ...</Text>
            </View>
        );
    }
}

export default LoadingScreen;
