import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Modal, ImageBackground, BackHandler } from 'react-native'
import { t } from '../locals/Index'

export default function HomeScreen({navigation}) {

    return (
        <ImageBackground style={styles.container} source={require('../image/background.jpg')}>
            <Text style={styles.welcomeText}>{t('welcome_to_app')}</Text>

            <View style={styles.aboutApp}>
                <Text style={styles.aboutText}>{t('about_app')}</Text>
            </View>

            <View style={styles.rulesView}>
                <Text style={styles.rulesText}>{t('rules_app')}</Text>
            </View>

            <View style={styles.viewButtonStart}>
                <Button title={t('button_start')} style={styles.buttonStart}
                        onPress={() => navigation.navigate('Options')}/>
            </View>

            <View style={styles.viewButtonExit}>
                <Button title={t('button_exit')} style={styles.buttonExit} onPress={() => {
                    BackHandler.exitApp()
                }} color="red"/>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    aboutApp: {},
    aboutText: {
        color: '#fdae6b',
        fontSize: 16,
        textAlign: 'center',
        padding: 5
    },
    welcomeText: {
        color: 'red',
        fontSize: 20,
        textAlign: 'center',
        padding: 5
    },
    rulesView: {},
    rulesText: {
        color: '#fdae6b',
        fontSize: 16,
        textAlign: 'center',
        padding: 5
    },
    viewButtonStart: {
        padding: 5,
        marginTop: 20
    },
    buttonStart: {

    },
    viewButtonExit: {
        marginTop: 40
    },
    buttonExit: {
        padding: 5

    }
});
