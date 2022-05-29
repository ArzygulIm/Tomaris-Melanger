import {combineReducers} from "redux";
import voice from "./voice_reducer";
import record from "./record_reducer";
import weather from './weather_reducer'

const rootReducer = combineReducers({
    voice,
    record,
    weather,

})
export default rootReducer
