import React, { Component } from 'react';
import { Container, Text } from 'native-base';
// Components


export default class ShowDays extends Component {
    static navigationOptions = {
        title: 'ShowDays',
    };

    render () {
        const { navigate } = this.props.navigation;

        return (
            <Container>
                <Text>ShowDays</Text>
            </Container>
        );
    }
}
