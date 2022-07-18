import {
    GET_SERVICES,
    ADD_SERVICE,
    UPDATE_SERVICE,
    DELETE_SERVICE,
} from "../utils/types";

const initialState = {
    services: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_SERVICES:
            return { ...state, services: [...payload] };
        case ADD_SERVICE:
            return { ...state, services: [...state.services, payload] };
        case UPDATE_SERVICE:
        case DELETE_SERVICE:
        default:
            return state;
    }
}
