import {RECORD} from "../actions/type";

const initialState = []

const record_reducer = (record = initialState, action) => {

    const { type, payload } = action
    switch (type) {
        case RECORD:
            return payload
        default:
            return record
    }
}

export default record_reducer