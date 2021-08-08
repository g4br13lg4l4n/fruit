import { View, Text } from 'react-native';
import React, { Component } from 'react';
import StoreData from '../utils/StoreData';
import resetRouter from '../hooks/resetRouter';

class LoadingScreen extends Component {
    constructor(props) {
        super(props);
    }
    UNSAFE_componentWillMount() {
        StoreData.getToken()
            .then(token => {
                if (token) {
                    resetRouter(this.props.navigation, 'Home');
                } else {
                    resetRouter(this.props.navigation, 'Inicio');
                }
            })
            .catch(err => {
                resetRouter(this.props.navigation, 'Inicio');
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
