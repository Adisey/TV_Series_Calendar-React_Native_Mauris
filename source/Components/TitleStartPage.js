import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
// Components
import logo from '../../static/Telik.png';
const originalImageSize ={
    width:  275,
    height: 214,
};
const styles = {
    mainView: {
        // backgroundColor: 'blue',
        flex:           0.5,
        margin:         0,
        justifyContent: "center",
        alignItems:     "center",
    },
    textView: {
        // backgroundColor: 'red',
        // flex:            0.5,
        marginTop:      20,
        // marginLeft:          50,
        // marginRight:          50,
        justifyContent: "center",
        alignItems:     "center",
    },
    textText: {
        textAlign: 'center',
    },
};

export default class Gallery extends Component {
    render () {
        const win = Dimensions.get('window');
        const winSize = { width: win.width, height: win.height };
        const imageStyles = {
            height: originalImageSize.height/originalImageSize.width*win.width/3,
            width:  win.width/3,
            margin: 5,
        };

        console.log(` -> -> `, winSize.width, winSize.height);
        console.log(` -> -> `, originalImageSize.width, originalImageSize.height);
        console.log(` -> -> `, imageStyles.width, imageStyles.height);

        return (
            <View style = { styles.mainView }>
                <Image
                    source = { logo }
                    style = { imageStyles }
                />
                <View style = { styles.textView } >
                    <Text style = { styles.textText } >
                        {`Для получения списка сериалов,\n пожалуйста, выберите \n необходимый месяц и день.`}
                    </Text>
                </View>
            </View>
        );
    }
}
