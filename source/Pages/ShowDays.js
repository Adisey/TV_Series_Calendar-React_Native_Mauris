//Core
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
// Components
import { Spinner, HeaderDate, SeriesList } from '../Components';
import { api } from "../REST";
import upImg from '../../static/up.png';
import downImg from '../../static/down.png';
import { endingWord } from '../instruments';

const styles = {
    main: {
        flexDirection:   'column',
        backgroundColor: '#FFFFFF',
        flex:            1,
    },
    notSeriesBox: {
        flex:           1,
        justifyContent: "center",
    },

    notSeriesText: {
        fontSize:  18,
        color:     '#FF0000',
        textAlign: 'center',
    },
    button: {
        flexDirection:   'row',
        justifyContent:  "center",
        backgroundColor: '#FFFFFF',
        padding:         10,
        margin:          20,
    },
    buttonImage: {
        width:  20,
        height: 20,
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
        isSpinning:    false,
        showDay:       null,
        country:       'US',
        schedule:      [],
        short:         true,
        shortCount:    2,
        shortSchedule: [],
    };
    componentDidMount () {
        this._fetchScheduleAsync();
    }

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
                shortSchedule: schedule.slice(0, 2),
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
    _setShort = () => {
        this.setState({
            short: !this.state.short,
        });
    };

    render () {
        const { isSpinning, schedule, short, shortCount, shortSchedule } = this.state;
        const { navigation } = this.props;
        const day = navigation.getParam('previewDay', 'day');
        const countSchedule =  schedule.length;
        const SmartButton = () => {
            return countSchedule>shortCount
                ? <TouchableOpacity
                    style = { styles.button }
                    onPress = { this._setShort }>
                    <Text>{short? `Ещё ${countSchedule-shortCount} сериал${endingWord(countSchedule-shortCount)}`: 'Показать основные'} </Text>
                    <Image
                        source = { short? downImg: upImg }
                        style = { styles.buttonImage }
                    />
                </TouchableOpacity>
                : null
            ;
        };
        const { navigate } = this.props.navigation;
        const showImage = (title, originalImage) => {
            navigate('ShowImage', {
                title,
                originalImage,
            });
        };


        return (
            <View style = { styles.main }>
                <HeaderDate day = { day } />
                { isSpinning ? <Spinner isSpinning /> : null }
                {!isSpinning && schedule.length ?
                    <SeriesList
                        schedule = { short? shortSchedule : schedule }
                        showImage = { showImage }
                        SmartButton = { SmartButton }
                    /> : null
                }
                {!isSpinning && !schedule.length ?
                    <View style = { styles.notSeriesBox }>
                        <Text style = { styles.notSeriesText }>В этот день сериалы не найдены!</Text>
                    </View>: null
                }
            </View>
        );
    }
}
