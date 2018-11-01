import React, { Component } from 'react';
import { Container, Text } from 'native-base';
// Components
import { TitleStartPage } from '../Components';


export default class StartPage extends Component {
    static navigationOptions = {
        title:            'Super Film'.toUpperCase(),
        headerTitleStyle: { alignSelf: 'center' },
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
                <TitleStartPage
                    onPress = { _showDays }
                />

            </Container>
        );
    }
}
