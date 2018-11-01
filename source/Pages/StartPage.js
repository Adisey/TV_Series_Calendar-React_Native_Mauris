import React, { Component } from 'react';
import { Container, Text } from 'native-base';
// Components


export default class StartPage extends Component {

    static navigationOptions = {
        title: 'StartPage',
    };

    render () {
        const { navigate } = this.props.navigation;
        const _showDays = () => {
            navigate('ShowDays', {
                name: 'ShowDays - 123',
            });
        };

        return (
            <Container>
                <Text
                    onPress = { _showDays }>StartPage</Text>

            </Container>
        );
    }
}
