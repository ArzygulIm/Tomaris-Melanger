import {VOICE} from "../actions/type";

const initialState = []

const voice_reducer = (voice = initialState, action) => {

    const { type, payload } = action
    switch (type) {
        case VOICE:
            return payload
        default:
            return voice
    }
}

export default voice_reducer