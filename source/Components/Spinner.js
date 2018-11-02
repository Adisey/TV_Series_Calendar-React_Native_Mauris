//Core
import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';

const styles = {
    spinnerBox: {
        flex:           0.01,
        justifyContent: 'center',
        flexDirection:  'row',
        padding:        10,
    },
    spinner: {
        size:  "small",
        color: "#00ff00",
    },
};

export default class Spinner extends Component {
    render () {
        const { isSpinning }= this.props;

        return isSpinning ?
            <View style = { styles.spinnerBox }>
                <ActivityIndicator style = { styles.spinner } />
            </View>
            : null
        ;
    }
}
