import I18n from 'ex-react-native-i18n'
import { Localization } from 'expo-localization'
import en from './en.json'
import ru from './ru.json'

I18n.translations = {
    en,
    ru
}

const getLanguage = async () => {
    try{
        const choice = await Localization.locale
        I18n.locale = choice.substr(0, 2)
        I18n.initAsync()
    }catch (error) {
        console.log('Unable to get locale')
    }
}

getLanguage()

export function t(name) {
    return I18n.t(name)
}