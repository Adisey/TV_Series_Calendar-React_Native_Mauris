//Core
import React, { Component } from 'react';
import { Container, View } from 'native-base';
// Components
import { Spinner, HeaderDate } from '../Components';
import { api } from "../REST";


export default class ShowDays extends Component {
    static navigationOptions = {
        title:            'Super Film'.toUpperCase(),
        headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
            flex:      0.8,
        },
    };
    state = {
        isSpinning: false,
        showDay:    null,
        country:    'UA',
        schedule:   [],
    };
    componentDidMount () {
        const { navigation } = this.props;
        const day = navigation.getParam('previewDay', 'day');

        this.setState({
            showDay: day,
        }, this._fetchScheduleAsync);


    }

    _fetchScheduleAsync = async () => {
        const { showDay, country } = this.state;

        try {
            if (!showDay) {
                throw new Error('Не выбрана дата!');
            }
            this._setSpinning(true);
            const schedule = await api.fetchSchedule(showDay, country);

            this.setState({
                schedule,
            });

        } catch ({ message }) {
            console.error(message);
        } finally {
            this._setSpinning(false);
        }


    };

        _setSpinning = (isSpinning) => {
            this.setState({
                isSpinning,
            });
        };

        render () {
            const { isSpinning } = this.state;
            const { navigation } = this.props;
            const day = navigation.getParam('previewDay', 'day');

            return (
                <Container>
                    <Spinner isSpinning = { isSpinning } />
                    <HeaderDate day = { day } />
                </Container>
            );
        }
}
