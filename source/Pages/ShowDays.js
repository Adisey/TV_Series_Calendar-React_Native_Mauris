import React, { Component } from 'react';
import { Container, Text } from 'native-base';
// Components


export default class ShowDays extends Component {
    static navigationOptions = {
        title:            'Super Film'.toUpperCase(),
        headerTitleStyle: { alignSelf: 'center' },
    };

    render () {
        const { navigation } = this.props;
        const day = navigation.getParam('previewDay', 'day');

        return (
            <Container>
                <Text>{day}</Text>
            </Container>
        );
    }
}
