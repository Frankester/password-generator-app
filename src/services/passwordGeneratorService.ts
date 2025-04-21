import { PasswordSettingsType } from "../models"
import { API, API_CONTENT_TYPE, API_METHOD } from "../utils/constants"


export const generatePassword = (passworsSettings: PasswordSettingsType) => {

    const API_PARAMS = `?length=${passworsSettings.length}` +
        `${passworsSettings.uppercase ? '&uppercase' : ''}` +
        `${passworsSettings.lowercase ? '&lowercase' : ''}` +
        `${passworsSettings.symbols ? '&special' : ''}` +
        `${passworsSettings.numbers ? '&numbers' : ''}`

    return fetch(API + API_PARAMS, {
        headers: {
            'Content-Type': API_CONTENT_TYPE,
        },
        method: API_METHOD,
    })
        .then(res => res.json())
        .catch(error => console.error(error))
}