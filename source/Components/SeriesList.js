//Core
import React, { Component } from 'react';
import { arrayOf } from "prop-types";
import { ScrollView, View, Text, Image } from 'react-native';
// Components
import qImg from '../../static/Question_mark.png';

const styles = {
    scrollView: {
        backgroundColor: '#FFFFFF',

    },
    seriesItem: {
        margin:        20,
        flexDirection: 'row',
    },
    seriesItemPictureBox: {
        marginRight: 10,
        elevation:   20,
    },
    seriesItemPicture: {
        width:  85,
        height: 120,
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
    },
    seriesTextTitle: {
        fontSize:   14,
        fontWeight: 'bold',
    },
    seriesTextYear: {
        fontSize: 14,
        color:    '#444444',
    },
    seriesTextSeasonNumber: {
        fontSize: 14,
        color:    '#444444',
        margin:   10,
    },
    seriesItemYear: {
        margin: 5,
    },
    seriesItemBodyFooter: {
    },
    seriesItemSeries: {
        flexDirection:   'row',
        backgroundColor: '#f0f0f0',
        borderRadius:    5,
        alignSelf:       'flex-start',
    },
};

export default class SeriesList extends Component {
    static propTypes = {
        schedule: arrayOf.isRequired,
    };
    static defaultProps = {
        schedule: [],
    };

    render () {
        const { schedule }= this.props;

        console.log(` -> "schedule.length" -> `, schedule.length);
        const SeriesListJSX = schedule.map((i) => {
            const previewImage = i.show && i.show.image && i.show.image.medium?
                { uri: i.show.image.medium }:
                qImg;

            return (
                <View
                    key = { i.id }
                    style = { styles.seriesItem }>

                    <View style = { styles.seriesItemPictureBox } >
                        <Image
                            source = { previewImage }
                            style = { styles.seriesItemPicture }
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
                            <View style = { styles.seriesItemSeries } >
                                <Text style = { styles.seriesTextSeasonNumber }>Сезон: {i.season}</Text>
                                <Text style = { styles.seriesTextSeasonNumber }>Эпизод: {i.number}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            );
        }
        );


        return (
            <ScrollView style = { styles.scrollView }>
                {SeriesListJSX}
            </ScrollView>
        );
    }
}
