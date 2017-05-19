// Import libraries for making a Component
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

// Make a Component
const Header = (props) => {
    const { textStyle, viewStyle, menuButtonStyle, placeholder } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        height: 70,
        paddingTop: 15,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        flexDirection: 'row'
    },
    textStyle: {
        fontSize: 20,
    },
}

// Make the component available to other parts of the app
export { Header };
