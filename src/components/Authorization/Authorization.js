import React, {useEffect,useState} from 'react';
import AuthorizationForm from "./AuthorizationForm";
import './style.css'
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'
import {getVoice} from "../../actions";


const Authorization = () => {
    const [helper,setHelper] = useState(false)

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    const text = new SpeechSynthesisUtterance('Добро пожаловать на наш сайт. Пожалуйста скажите да, ' +
        'если вам нужен голосовой помощник');
    useEffect(() => {

        getVoice(text)

    }, [])
    setTimeout(()=>SpeechRecognition.startListening({ continuous: true }), 6000);
    setTimeout(SpeechRecognition.stopListening,9000)
    console.log(transcript)
    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }


    return (
        <div>
            <AuthorizationForm/>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button>Stop</button>
            <button onClick={resetTranscript}>Reset</button>

        </div>
    );
};

export default Authorization;