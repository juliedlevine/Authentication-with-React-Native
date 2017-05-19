import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = {
        loggedIn: null
    };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBaIjcc1u8qdmxhoalqDfoGJWdjclbPFBo',
            authDomain: 'auth-cf2f3.firebaseapp.com',
            databaseURL: 'https://auth-cf2f3.firebaseio.com',
            projectId: 'auth-cf2f3',
            storageBucket: 'auth-cf2f3.appspot.com',
            messagingSenderId: '1015862997133'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        if (this.state.loggedIn === true) {
            return (
                <View>
                    <Header headerText="Welcome"/>
                    <CardSection>
                        <Button
                            onPress={() => firebase.auth().signOut()}
                            title="Log Out"
                        />
                    </CardSection>
                </View>
            )
        } else if (this.state.loggedIn === null){
            return (
                <View>
                    <Header headerText="Welcome"/>
                    <CardSection>
                        <Spinner />
                    </CardSection>
                </View>
            )
        } else {
            return (
                <View>
                    <Header headerText="Please Sign In"/>
                    <LoginForm />
                </View>
            )
        }
    }

    render() {
        return (
            <View>
                {this.renderContent()}
            </View>
        )
    }
}

export default App;
