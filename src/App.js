import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBaIjcc1u8qdmxhoalqDfoGJWdjclbPFBo',
            authDomain: 'auth-cf2f3.firebaseapp.com',
            databaseURL: 'https://auth-cf2f3.firebaseio.com',
            projectId: 'auth-cf2f3',
            storageBucket: 'auth-cf2f3.appspot.com',
            messagingSenderId: '1015862997133'
        })
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm />
            </View>
        )
    }
}

export default App;
