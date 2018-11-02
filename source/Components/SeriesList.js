//Core
import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
// Components
import { ruCalendar } from '../../static';

const styles = {
    scrollView: {
        backgroundColor: '#FFFFFF',

    },
    seriesItem: {
        // borderWidth:   1,
        // borderColor:   '#0000FF',
        margin:        20,
        flexDirection: 'row',
    },
    seriesItemPicture: {
        // borderWidth:   1,
        margin:        5,
        flexDirection: 'column',
        elevation:     10,
        // shadowOffset:  { width: 10, height: 10 },
        // shadowColor:   '#000000',
        // shadowOpacity: 1.0,
    },
    seriesItemBody: {
        margin:         2,
        flexDirection:  'column',
        flex:           1,
        justifyContent: 'space-between',

    },
    seriesItemBodyHeader: {
    },
    seriesItemTitle: {
        margin: 5,
        // flexDirection: 'column',
    },
    seriesTextTitle: {
        fontSize:   14,
        fontWeight: 'bold',
    },
    seriesTextYear: {
        fontSize: 14,
        color:    '#444444',
    },
    seriesTextSesonNumber: {
        fontSize: 14,
        color:    '#444444',
        margin:   10,
    },
    seriesItemYear: {
        margin: 5,
        // flexDirection: 'column',
    },
    seriesItemBodyFooter: {
    },
    seriesItemSeties: {
        flexDirection:   'row',
        backgroundColor: '#f0f0f0',
        borderRadius:    5,
        alignSelf:       'flex-start',
    },
    spinningInfo: {
        fontSize:  14,
        color:     '#00FF00',
        textAlign: 'center',

    },
    notSeries: {
        fontSize:  20,
        color:     '#FF0000',
        textAlign: 'center',
    },
};

export default class SeriesList extends Component {
    render () {
        const { schedule, isSpinning }= this.props;

        const seriesList = schedule.map((i) => (
            <View
                key = { i.id }
                style = { styles.seriesItem }>

                <View style = { styles.seriesItemPicture } >
                    <Image
                        source = { { uri: i.show.image.medium } }
                        style = { { width: 85, height: 120 } }
                    />

                </View>
                <View style = { styles.seriesItemBody } >
                    <View style = { styles.seriesItemBodyHeader } >
                        <View style = { styles.seriesItemTitle } >
                            <Text style = { styles.seriesTextTitle }>{i.show.name}</Text>
                        </View>
                        <View style = { styles.seriesItemYear } >
                            <Text style = { styles.seriesTextYear }>{i.show.premiered.substring(0, 4)}</Text>
                        </View>
                    </View>
                    <View style = { styles.seriesItemBodyFooter } >
                        <View style = { styles.seriesItemSeties } >
                            <Text style = { styles.seriesTextSesonNumber }>Сезон: {i.season}</Text>
                            <Text style = { styles.seriesTextSesonNumber }>Эпизод: {i.number}</Text>
                        </View>
                    </View>
                </View>
            </View>
        ));


        return (
            <ScrollView style = { styles.scrollView }>
                {schedule.length ?
                    seriesList:
                    isSpinning? <Text style = { styles.spinningInfo }>Идёт загрузка!</Text>:
                        <Text style = { styles.notSeries }>В этот день нет сериалов!</Text>
                }
            </ScrollView>
        );
    }
}
