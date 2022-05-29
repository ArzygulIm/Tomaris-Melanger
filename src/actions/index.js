import {VOICE,GET_WEATHER} from "./type";
import {WEATHER_API,WEATHER_KEY} from "../config";

export const getVoice = (text) =>{
    return (dispatch) =>{
        const synth = window.speechSynthesis;
        const voice = synth.speak(text);
        dispatch({
            type:VOICE,
            payload: voice
        })
    }
}

export const getWeather = (city) =>{
    return async (dispatch) =>{
        const req = await fetch(WEATHER_API+city+WEATHER_KEY)
        const res = await req.json()
            dispatch({
            type:GET_WEATHER,
            payload:res
        })
    }
}