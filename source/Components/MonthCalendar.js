//Core
import React, { Component } from 'react';
import { func } from "prop-types";
import { Text, View, Dimensions } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
// Components
import { ruCalendar } from '../../static';
const styles = {
    mainCalendar: {
        backgroundColor: 'blue',
        flex:            0.5,
        justifyContent:  "center",
        alignItems:      "center",
    },
    textText: {
        marginTop: 20,
        textAlign: 'center',
    },
    calendar: {
        borderTopWidth: 0,
        paddingTop:     5,
        borderColor:    'gray',
    },
    calendarTheme: {
        textSectionTitleColor:      '#000000',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor:       '#ffffff',
        todayTextColor:             '#000000',
        textDisabledColor:          '#d9e1e8',
        textDayFontFamily:          'monospace',
        textMonthFontFamily:        'monospace',
        textDayHeaderFontFamily:    'monospace',
        textMonthFontWeight:        'bold',
        textMonthFontSize:          20,
    },
    arrow: {
        fontSize:   20,
        fontWeight: 'bold',
    },
};

LocaleConfig.locales.ru = ruCalendar;
LocaleConfig.defaultLocale = 'ru';
const win = Dimensions.get('window');

styles.calendar.width = win.width;
styles.calendar.height = win.height/2;


export default class MonthCalendar extends Component {
    static propTypes = {
        showDay: func.isRequired,
    };

    render () {
        const _renderArrow = (direction) => {
            if (direction === 'left') {
                return <Text style = { styles.arrow }>{'<'}</Text>;
            }

            return <Text style = { styles.arrow }>{'>'}</Text>;
        };
        const toDayStr = new Date().toISOString().substring(0, 10);
        const markedDates ={
            [toDayStr]: {
                customStyles: {
                    container: {
                        backgroundColor: 'white',
                        elevation:       2,
                        borderWidth:     1,
                        borderRadius:    0,
                        borderColor:     'red',
                    },
                    text: {
                        color:      'black',
                        fontWeight: 'bold',
                    },
                },
            },
        };
        const _onDayPress = (day) => {
            const { showDay } = this.props;

            showDay(day.dateString);
        };

        return (
            <View style = { styles.mainCalendar }>
                <Calendar
                    firstDay = { 1 }
                    hideArrows = { false }
                    horizontal
                    hideDayNames // так было в ТЗ, я бы лтображал имена дней недели
                    monthFormat = { 'MMMM' } //ToDo: Если не текущий год, его нужно показать.
                    onDayPress = { _onDayPress }
                    pagingEnabled
                    renderArrow = { _renderArrow }
                    showScrollIndicator
                    style = { styles.calendar }
                    theme = { styles.calendarTheme }

                    markingType = { 'custom' }
                    markedDates = { markedDates }
                />
            </View>
        );
    }
}
