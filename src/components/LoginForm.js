import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false,
    }

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ loading: true, error: '' });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginSuccess() {
        this.setState({
            loading: false,
            email: '',
            password: '',
            error: ''
        })
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication Failed',
            loading: false,
        })
    }

    render() {
        return (
            <Card>

                <CardSection>
                    <Input
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        placeholder="johndoe@gmail.com"
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        placeholder="password"
                        secureTextEntry
                    />
                </CardSection>

                { this.state.error ?
                    <Text style={styles.errorTextStyle}>{this.state.error}</Text> :
                    <View></View>
                }

                <CardSection>
                    { this.state.loading ?
                        <Spinner/> :
                        <Button
                            onPress={this.onButtonPress.bind(this)}
                            title="Log In"
                        />
                    }
                </CardSection>



            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'red',
        paddingTop: 5,
        paddingBottom: 5,
    }
};

export default LoginForm;
