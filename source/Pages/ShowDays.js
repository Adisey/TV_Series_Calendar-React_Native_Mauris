//Core
import React, { Component } from 'react';
import { View, Text } from 'react-native';
// Components
import { Spinner, HeaderDate, SeriesList } from '../Components';
import { api } from "../REST";
// __mocks__
import { tempSchedule } from '../../__mocks__/scherule';

const styles = {
    notSeries: {
        fontSize:  20,
        color:     '#FF0000',
        textAlign: 'center',
    },
};

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
        this._fetchScheduleAsync();
        // this._fetchMocks();
    }
    _fetchMocks = () => {
        this.setState({
            showDay:  '2018-11-03',
            schedule: tempSchedule,
        });
    };


    _fetchScheduleAsync = async () => {
        const { navigation } = this.props;
        const { country } = this.state;

        try {
            this._setSpinning(true);
            const day = navigation.getParam('previewDay', 'day');

            if (!day) {
                throw new Error('Не выбрана дата!');
            }

            this.setState({
                showDay: day,
            });

            const schedule = await api.fetchSchedule(day, country);

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
        const { isSpinning, schedule } = this.state;
        const { navigation } = this.props;
        const day = navigation.getParam('previewDay', 'day');
        const countSchedule =  schedule.length;
        return (
            <View>
                <HeaderDate day = { day } />
                { isSpinning ? <Spinner isSpinning /> : null }
                {!isSpinning && schedule ?
                    <SeriesList
                        schedule = { schedule }
                    /> : <Text style = { styles.notSeries }>В этот день нет сериалов!</Text>
                }
                <Text>{countSchedule}</Text>

                {/*<Button*/}
                {/*title = 'Больше'*/}
                {/*/>*/}
            </View>
        );
    }
}
