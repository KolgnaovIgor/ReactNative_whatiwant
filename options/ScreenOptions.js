import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Image, ImageBackground, BackHandler } from 'react-native'
import { t } from '../locals/Index'
/*import { SvgUri, SvgCss } from 'react-native-svg'*/
import dataOptions from './options.json'
import dataOptionsImage from './optionsimage.json'
import { OptionsImages } from "./OptionsImages"

const arr = []

const ScreenOptions = () => {

    const [guessNumber, setGuessNumber] = useState(Math.floor(Math.random() * Object.keys(dataOptions).length))

    return (
        <ImageBackground style={styles.container} source={require('../image/background.jpg')}>
            <View style={styles.mainScreen}>

                <View style={styles.imageView}>
                    <Image style={styles.image} source={OptionsImages.images[guessNumber]}/>
                </View>

                <View style={styles.textView}>
                    <Text style={styles.text}>{t(dataOptions[guessNumber])}</Text>
                </View>

                <View style={styles.buttonView}>
                    <View style={styles.buttonViewEach}><Button style={styles.button} title={t('prev')} onPress={() => {
                        if (arr.length === 0) {
                            setGuessNumber(0)
                        } else {
                            setGuessNumber(arr[arr.length - 1])
                            arr.pop()
                        }
                    }}/></View>
                    <View style={styles.buttonViewEach}><Button style={styles.button} title={t('next')} onPress={() => {
                        setGuessNumber(Math.floor(Math.random() * Object.keys(dataOptions).length))
                        arr.push(guessNumber)
                    }}/></View>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainScreen: {

    },
    imageView: {
        width: '100%',
        padding: 5,
        marginBottom: 20
    },
    image: {
        width: 100,
        height: 100,
        marginLeft: 80
    },
    textView: {

    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        padding: 5
    },
    buttonView: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between',
        padding: 5
    },
    buttonViewEach: {
        left: 20,
        width: 100,
        padding: 5,
        marginTop: 100
    },
    button: {

    }
})

export default ScreenOptions